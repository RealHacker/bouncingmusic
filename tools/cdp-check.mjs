/**
 * Headless smoke test, driven over the Chrome DevTools Protocol.
 *
 * The in-app browser panel is awkward to drive by hand (clicks get dropped while
 * the WebGL loop runs), so this script launches its own headless Edge, loads the
 * app, exercises it through real DOM events, and asserts the results. It also
 * runs a short MP4/WebM export end to end, which is otherwise the one path that
 * is hard to check by eye.
 *
 *   node tools/cdp-check.mjs [--url <score url>] [--out <dir>] [--export-seconds 6]
 *
 * Requires the dev server to already be running on 127.0.0.1:5173.
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const EDGE_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/local/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const argv = process.argv.slice(2);
const arg = (name, dflt) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};

const APP_URL = arg('app', 'http://127.0.0.1:5173/');
const SCORE_URL = arg('url', 'https://musetrainer.github.io/library/scores/Canon_in_D.mxl');
const OUT_DIR = path.resolve(arg('out', path.join(os.tmpdir(), 'bouncingmusic-check')));
const EXPORT_SECONDS = Number(arg('export-seconds', '6'));
const PORT = Number(arg('port', '9333'));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findBrowser() {
  for (const p of EDGE_CANDIDATES) if (existsSync(p)) return p;
  throw new Error('No Chromium browser found.');
}

/** Minimal CDP client over the browser-level WebSocket. */
class Cdp {
  #ws;
  #id = 0;
  #pending = new Map();
  #listeners = new Map();

  static async attach(wsUrl) {
    const c = new Cdp();
    c.#ws = new WebSocket(wsUrl);
    await new Promise((res, rej) => {
      c.#ws.addEventListener('open', res, { once: true });
      c.#ws.addEventListener('error', rej, { once: true });
    });
    c.#ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id !== undefined) {
        const p = c.#pending.get(msg.id);
        if (!p) return;
        c.#pending.delete(msg.id);
        msg.error ? p.rej(new Error(JSON.stringify(msg.error))) : p.res(msg.result);
      } else {
        for (const fn of c.#listeners.get(msg.method) ?? []) fn(msg.params);
      }
    });
    return c;
  }

  send(method, params = {}, sessionId) {
    const id = ++this.#id;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    this.#ws.send(JSON.stringify(payload));
    return new Promise((res, rej) => this.#pending.set(id, { res, rej }));
  }

  on(method, fn) {
    if (!this.#listeners.has(method)) this.#listeners.set(method, []);
    this.#listeners.get(method).push(fn);
  }

  close() {
    this.#ws.close();
  }
}

async function main() {
  const exe = findBrowser();
  const profile = path.join(os.tmpdir(), `bm-edge-${Date.now()}`);
  await mkdir(OUT_DIR, { recursive: true });

  const child = spawn(
    exe,
    [
      '--headless=new',
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${profile}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-gpu',
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--autoplay-policy=no-user-gesture-required',
      '--window-size=1600,900',
      'about:blank',
    ],
    { stdio: 'ignore' },
  );

  let cdp;
  const cleanup = async () => {
    try {
      cdp?.close();
    } catch {}
    child.kill();
    await sleep(400);
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  };

  try {
    // Wait for the debugging endpoint.
    let version = null;
    for (let i = 0; i < 60; i++) {
      try {
        const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
        version = await r.json();
        break;
      } catch {
        await sleep(250);
      }
    }
    if (!version) throw new Error('Headless browser never came up.');
    console.log(`browser: ${version.Browser}`);

    cdp = await Cdp.attach(version.webSocketDebuggerUrl);
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });

    const logs = [];
    cdp.on('Runtime.consoleAPICalled', (p) => {
      if (p.type === 'error' || p.type === 'warning') {
        logs.push(`[${p.type}] ${p.args.map((a) => a.value ?? a.description ?? a.type).join(' ')}`);
      }
    });
    cdp.on('Runtime.exceptionThrown', (p) => {
      logs.push(`[exception] ${p.exceptionDetails?.exception?.description ?? p.exceptionDetails?.text}`);
    });

    await cdp.send('Runtime.enable', {}, sessionId);
    await cdp.send('Page.enable', {}, sessionId);
    // Let the exporter's anchor download actually write to disk.
    await cdp.send('Browser.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: OUT_DIR,
      eventsEnabled: true,
    });
    await cdp.send('Page.navigate', { url: APP_URL }, sessionId);

    // Evaluate an expression in the page and return its JSON value.
    const evaluate = async (expr, awaitPromise = true) => {
      const r = await cdp.send(
        'Runtime.evaluate',
        { expression: expr, awaitPromise, returnByValue: true, allowUnsafeEvalBlockedByCSP: true },
        sessionId,
      );
      if (r.exceptionDetails) {
        throw new Error(
          r.exceptionDetails.exception?.description ?? r.exceptionDetails.text ?? 'evaluate failed',
        );
      }
      return r.result.value;
    };

    // Wait for the app to expose itself.
    let booted = false;
    for (let i = 0; i < 60; i++) {
      booted = await evaluate('!!window.app', false);
      if (booted) break;
      await sleep(250);
    }
    if (!booted) throw new Error('App never booted (window.app missing).');
    console.log('app booted');

    // --- Load the score through the real UI path -------------------------
    const report = await evaluate(`(async () => {
      const input = document.getElementById('url');
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
      setter.call(input, ${JSON.stringify(SCORE_URL)});
      input.dispatchEvent(new Event('input', { bubbles: true }));
      document.getElementById('btn-load-url').click();

      const started = performance.now();
      while (performance.now() - started < 180000) {
        const title = document.getElementById('np-title').textContent;
        if (title && title !== 'No score loaded') break;
        await new Promise(r => setTimeout(r, 200));
      }
      // The audio render finishes when the progress overlay is hidden again.
      // (Do not use the Play button: it starts out enabled.)
      while (performance.now() - started < 300000) {
        if (document.getElementById('progress-overlay').hidden) break;
        await new Promise(r => setTimeout(r, 200));
      }
      return {
        title: document.getElementById('np-title').textContent,
        sub: document.getElementById('np-sub').textContent,
        report: document.getElementById('report').innerText,
        renderMs: Math.round(performance.now() - started),
      };
    })()`);
    console.log(`loaded: ${report.title} — ${report.sub} (audio ready in ${report.renderMs}ms)`);
    console.log(report.report.replace(/\n+/g, ' | '));

    // --- Playback jitter: does the audio clock ever stutter under load? ------
    // A jump in scroll is what "the sheet suddenly shifted" looks like, and a
    // single deterministic frame render cannot see it.
    if (argv.includes('--jitter')) {
      const jit = await evaluate(`(async () => {
        const app = window.app;
        const sleep = (ms) => new Promise(r => setTimeout(r, ms));
        const watch = async (n) => {
          const steps = [];
          let prev = null, worst = 0, worstT = null;
          for (let i = 0; i < n; i++) {
            await sleep(16);
            if (!app.player || !app.layout) continue;
            const t = app.player.time;
            const x = app.layout.secToX(t);
            if (prev !== null) {
              const d = x - prev;
              steps.push(d);
              if (d > worst) { worst = d; worstT = +t.toFixed(2); }
            }
            prev = x;
          }
          steps.sort((a, b) => a - b);
          return {
            n: steps.length,
            median: +(steps[Math.floor(steps.length / 2)] ?? 0).toFixed(4),
            worst: +worst.toFixed(3),
            worstT,
          };
        };
        app.toggle();
        await sleep(1200);
        const a = await watch(60);
        app.player.seek(app.excerpt.end * 0.6);
        await sleep(1200);
        const b = await watch(60);
        app.toggle();
        return { a, b };
      })()`);
      console.log(`jitter[0-60%]: ${JSON.stringify(jit.a)}`);
      console.log(`jitter[60-100%]: ${JSON.stringify(jit.b)}`);
    }

    // --- Reproduce "switch songs and the old engraving is still on screen" ---
    // Each plane's canvas is a snapshot of one system of one score. Loading a
    // second score restarts the system numbering at 0, so a plane keyed on the
    // index alone can keep showing the previous piece. Re-engrave every visible
    // plane from the current layout and compare pixels.
    const SWITCH_URL = arg('switch', '');
    if (SWITCH_URL) {
      const switched = await evaluate(`(async () => {
        const app = window.app;
        const before = document.getElementById('np-title').textContent;
        // Start playing first: the report is that switching *during playback*
        // leaves the previous piece on the sheet. Seek well in so the old
        // song's clock is nowhere near the new piece's start.
        if (app.player && !app.player.playing) app.toggle();
        if (app.player) app.player.seek(app.excerpt.start + (app.excerpt.end - app.excerpt.start) * 0.5);
        await new Promise(r => setTimeout(r, 2000));
        const tBefore = app.player ? +app.player.time.toFixed(2) : -1;
        const input = document.getElementById('url');
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        setter.call(input, ${JSON.stringify(SWITCH_URL)});
        input.dispatchEvent(new Event('input', { bubbles: true }));
        document.getElementById('btn-load-url').click();
        const started = performance.now();
        while (performance.now() - started < 240000) {
          const t = document.getElementById('np-title').textContent;
          if (t && t !== before) break;
          await new Promise(r => setTimeout(r, 200));
        }
        while (performance.now() - started < 300000) {
          if (document.getElementById('progress-overlay').hidden) break;
          await new Promise(r => setTimeout(r, 200));
        }
        await new Promise(r => setTimeout(r, 1500));
        return {
          title: document.getElementById('np-title').textContent,
          tBefore,
          tAfter: app.player ? +app.player.time.toFixed(2) : -1,
          playing: app.player ? app.player.playing : null,
          windowStart: app.player ? app.player.windowStart : null,
          bufferWindow: app.bufferWindow,
        };
      })()`);
      console.log(`switched to: ${switched.title}  (t ${switched.tBefore} -> ${switched.tAfter}, playing=${switched.playing}, windowStart=${switched.windowStart}, bufferWindow=${JSON.stringify(switched.bufferWindow)})`);

      const stale = await evaluate(`(async () => {
        const { drawSystem } = await import('/src/scene/engrave.ts');
        const app = window.app;
        const rib = app.world.ribbon;
        const layout = app.layout;
        const out = { gen: rib.generation, slots: [], staleCanvases: 0, wrongAssigned: 0 };
        const ref = document.createElement('canvas');
        for (const s of rib.slots) {
          if (!s.mesh.visible) continue;
          const idx = s.assigned;
          const sys = layout.systems[idx];
          if (!sys) { out.wrongAssigned++; continue; }
          out.slots.push({ idx, gen: s.gen, size: s.canvas.width + 'x' + s.canvas.height });
          const m = drawSystem(ref, layout, sys, rib.opts);
          if (ref.width !== s.canvas.width || ref.height !== s.canvas.height) {
            out.staleCanvases++;
            continue;
          }
          const a = s.canvas.getContext('2d').getImageData(0, 0, ref.width, ref.height).data;
          const b = ref.getContext('2d').getImageData(0, 0, ref.width, ref.height).data;
          let diff = 0;
          for (let i = 0; i < a.length; i += 4) {
            if (Math.abs(a[i] - b[i]) > 2 || Math.abs(a[i+1] - b[i+1]) > 2 || Math.abs(a[i+2] - b[i+2]) > 2) diff++;
          }
          if (diff > 40) out.staleCanvases++;
        }
        return out;
      })()`);
      console.log(`switch check: gen ${stale.gen}, ${stale.slots.length} visible planes, ` +
        `${stale.staleCanvases} stale, ${stale.wrongAssigned} mis-assigned  ${JSON.stringify(stale.slots)}`);
      if (stale.staleCanvases) throw new Error('Switch: ' + stale.staleCanvases + ' plane(s) still show the previous score');
      if (stale.wrongAssigned) throw new Error('Switch: ' + stale.wrongAssigned + ' plane(s) assigned to a missing system');
    }

    // --- Regression checks for three bugs that were invisible to the eye -----
    const checks = await evaluate(`(() => {
      const app = window.app;
      const fail = [];

      // 1. Every panel card must actually be visible, not just present in the DOM.
      const hidden = ['card-report','card-tracks','card-excerpt','card-export','card-look']
        .filter(id => document.getElementById(id).hidden);
      if (hidden.length) fail.push('hidden cards: ' + hidden.join(', '));

      // 1b. The export button must be on screen, not buried below the fold.
      const ex = document.getElementById('btn-export').getBoundingClientRect();
      if (ex.width === 0 || ex.bottom > window.innerHeight + 2) {
        fail.push('export button off-screen (bottom ' + Math.round(ex.bottom) +
                  ' vs viewport ' + window.innerHeight + ')');
      }
      var exportBtn = { top: Math.round(ex.top), bottom: Math.round(ex.bottom) };

      // 2. The rendered audio must not be silence.
      const buf = app.buffer;
      if (!buf) fail.push('no audio buffer');
      else {
        let peak = 0, sum = 0;
        const ch = buf.getChannelData(0);
        for (let i = 0; i < ch.length; i += 7) {
          const v = Math.abs(ch[i]);
          if (v > peak) peak = v;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / Math.ceil(ch.length / 7));
        if (peak < 0.01) fail.push('audio is silent (peak ' + peak.toFixed(5) + ')');
        if (rms < 0.001) fail.push('audio rms too low (' + rms.toFixed(5) + ')');
        if (!isFinite(peak)) fail.push('audio has non-finite samples');
        var audioPeak = peak, audioRms = rms;
      }

      // 3. Every plane must be placed from the scroll of the frame the app last
      // rendered. Before the fix, a plane's position was written once when it
      // was engraved and never touched again, so the sheet sat still while the
      // orbs moved. Reading world.lastT avoids racing the render loop.
      const L2 = app.layout;
      const lastT = app.world.lastT;
      const scroll = L2.secToX(lastT);
      let bad = 0;
      let placed = 0;
      for (const s of app.world.ribbon.slots) {
        if (s.assigned < 0) continue;
        placed++;
        if (Math.abs(s.mesh.position.x - (s.centreX - scroll)) > 1e-6) bad++;
      }
      if (!placed) fail.push('no system assigned to any plane');
      if (bad) fail.push(bad + ' of ' + placed + ' planes are not placed from the current scroll');
      var scrollA = scroll, scrollB = scroll;

      return { fail, audioPeak, audioRms, scrollA, scrollB, exportBtn };
    })()`);
    console.log(
      `checks: audio peak ${checks.audioPeak?.toFixed(4)} rms ${checks.audioRms?.toFixed(4)} · ` +
        `sheet x ${checks.scrollA?.toFixed(2)} -> ${checks.scrollB?.toFixed(2)} · ` +
        `export btn y ${checks.exportBtn?.top}-${checks.exportBtn?.bottom}`,
    );
    if (checks.fail.length) throw new Error('Regression: ' + checks.fail.join('; '));

    // --- Geometry: nothing off the sheet, lanes never overlap, orbs on heads ---
    const geo = await evaluate(`(async () => {
      const { stepY } = await import('/src/core/layout.ts');
      const L = window.app.layout;
      const fail = [];
      const warn = [];
      const top = L.topY;
      const bot = L.topY - L.height;
      let oob = 0, collide = 0, mismatched = 0, checked = 0;

      for (let i = 0; i < L.lanes.length; i++) {
        const lane = L.lanes[i];
        if (lane.minY < bot - 1e-6 || lane.maxY > top + 1e-6) {
          fail.push('lane ' + i + ' ink outside sheet [' + lane.minY.toFixed(2) + ',' +
                    lane.maxY.toFixed(2) + '] vs [' + bot.toFixed(2) + ',' + top.toFixed(2) + ']');
        }
        for (const e of lane.notes) {
          if (e.rest || !e.pitches.length) continue;
          if (e.y < bot - 1e-6 || e.y > top + 1e-6) oob++;
          // For a single note the orb's y must equal where the engraver puts the
          // head, or the orb floats off the note.
          if (e.pitches.length === 1) {
            checked++;
            const engraveY = stepY(lane.y, e.pitches[0].dia - e.clefBottomDia, L.options.lineGap);
            if (Math.abs(engraveY - e.y) > 1e-6) mismatched++;
          }
        }
        if (i > 0 && lane.maxY > L.lanes[i - 1].minY + 1e-6) collide++;
      }
      if (oob) fail.push(oob + ' note(s) fall outside the sheet and would be clipped');
      if (collide) fail.push(collide + ' lane(s) overlap their neighbour');
      if (mismatched) fail.push(mismatched + ' of ' + checked + ' notes: orb y != engraved head y');

      // The camera must actually *point at* the score, not just be far enough
      // away to see it. Lanes stack downward from the top staff, so a score
      // with four voices sits far below y=0; a camera aimed at the origin then
      // frames the right size of sheet from empty space. Project the top and
      // bottom edges of the engraved range at the playhead and require them
      // inside the viewport.
      const cam = window.app.world.camera;
      cam.updateMatrixWorld();
      // Reuse an existing Vector3 rather than importing three into the page.
      const V3 = cam.position.constructor;
      let worst = 0, framed = true;
      for (const edgeY of [top, bot]) {
        const p = new V3(0, edgeY, 0);
        p.project(cam);
        const off = Math.max(Math.abs(p.x), Math.abs(p.y));
        worst = Math.max(worst, off);
        if (off > 1) framed = false;
      }
      if (!framed) {
        fail.push('the sheet is not inside the viewport (worst edge at NDC ' +
                  worst.toFixed(2) + ', >1 is off screen) - the camera is not aimed at the score');
      }

      // A wrong clef scatters a lane's notes across the sheet, so the used
      // clef must read at least as well as any alternative. Absolute
      // "share of notes near the staff" is deliberately NOT the gate: a real
      // piece can sit in an extreme tessitura (the Turkish March's right hand
      // runs E4-E6), which is correct engraving, not a bug.
      let onStaff = 0, totalNotes = 0, clefLoss = null;
      for (const lane of L.lanes) {
        const sounding = lane.notes.filter((e) => !e.rest && e.pitches.length);
        if (!sounding.length) continue;
        const fit = (pick) => {
          let n = 0;
          for (const e of sounding) {
            const s = e.pitches[0].dia - pick(e);
            if (Math.abs(s - 2) <= 4) n++;
          }
          return n / sounding.length;
        };
        const used = fit((e) => e.clefBottomDia);
        const alts = [...new Set(sounding.map((e) => e.clefBottomDia))];
        const best = Math.max(...alts.map((c) => fit(() => c)), used);
        if (best - used > 0.1) {
          clefLoss = (clefLoss || 0) + 1;
        }
        for (const e of sounding) {
          totalNotes++;
          if (Math.abs(e.pitches[0].dia - e.clefBottomDia - 2) <= 4) onStaff++;
        }
      }
      const coverage = totalNotes ? onStaff / totalNotes : 0;
      if (coverage < 0.35) {
        fail.push('only ' + Math.round(coverage * 100) + '% of notes sit on/near any staff' +
                  ' — the whole layout looks broken');
      }
      if (clefLoss) {
        fail.push(clefLoss + ' lane(s) read worse under their resolved clef than a ' +
                  'plain single clef would');
      }

      // Pitch must go UP the screen as pitch rises. Sheet space is y-up, so a
      // higher pitch has to mean a larger y. Getting the sign backwards inverts
      // every scale while the orbs still sit perfectly on their (also inverted)
      // note heads — consistency alone cannot catch it.
      let pairs = 0, inverted = 0;
      for (const lane of L.lanes) {
        let prev = null;
        for (const e of lane.notes) {
          if (e.rest || !e.pitches.length) continue;
          if (prev) {
            pairs++;
            if (e.pitches[0].dia > prev.pitches[0].dia && e.y < prev.y - 1e-6) inverted++;
          }
          prev = e;
        }
      }
      if (pairs > 20 && inverted / pairs > 0.02) {
        fail.push(inverted + ' of ' + pairs + ' rising notes render LOWER on the sheet — ' +
                  'the pitch axis is inverted');
      }

      // Notes that sound together are one chord. A file that omits <chord/> used
      // to produce two events at the same x, drawn on top of each other.
      let extra = 0, total = 0;
      for (const lane of L.lanes) {
        const byT = new Map();
        for (const e of lane.notes) {
          if (e.grace) continue;
          total++;
          const k = e.onsetBeat.toFixed(6);
          byT.set(k, (byT.get(k) || 0) + 1);
        }
        for (const [, n] of byT) if (n > 1) extra += n - 1;
      }
      if (total > 50 && extra / total > 0.25) {
        // Reported, not fatal: one library file (Bach Prelude in C) writes its
        // counterpoint so that many events land on one onset, and folding those
        // away needs a real fix rather than a threshold change.
        warn.push(extra + ' of ' + total + ' events share an onset with another');
      }

      // Systems have different pixel widths (they break on a barline, not at a
      // fixed span). Three.js freezes a canvas texture at the first uploaded
      // size, so a later system drawn into a resized canvas keeps the previous
      // system's notes on the GPU. The orbs still follow the event list, which
      // is the user report: orbs move, the sheet looks shifted. Drive the
      // ribbon past the first width change and require every visible plane's
      // allocated GPU size to match its canvas.
      const rib = window.app.world.ribbon;
      const pad = rib.opts.padding;
      const PX = L.options.pxPerUnit;
      const canvasW = (s) => Math.round((s.x1 - s.x0 + (2 * pad) / PX) * PX);
      const w0 = L.systems.length ? canvasW(L.systems[0]) : 0;
      const other = L.systems.find((s) => canvasW(s) !== w0);
      let gpuChecked = 0, gpuMismatch = 0, gpuAt = null;
      if (other) {
        const targetX = (other.x0 + other.x1) / 2;
        const dur = window.app.model.durationSec;
        let loT = 0, hiT = dur;
        for (let i = 0; i < 40; i++) {
          const mid = (loT + hiT) / 2;
          if (L.secToX(mid) < targetX) loT = mid;
          else hiT = mid;
        }
        const tOther = (loT + hiT) / 2;
        window.app.world.renderFrame(0);
        window.app.world.renderFrame(tOther);
        gpuAt = { sys: other.index, t: +tOther.toFixed(2), w0, w: canvasW(other) };
        for (const s of rib.slots) {
          if (!s.mesh.visible) continue;
          gpuChecked++;
          if (s.gpuW !== s.canvas.width || s.gpuH !== s.canvas.height) gpuMismatch++;
        }
        if (!gpuChecked) fail.push('no ribbon planes visible after a system-width change');
        if (gpuMismatch) {
          fail.push(gpuMismatch + ' of ' + gpuChecked +
            ' planes kept a GPU texture from a different canvas size (sys ' +
            other.index + ' at t=' + tOther.toFixed(1) + 's)');
        }
      }
      const detail = L.lanes.map((lane) => {
        let lo = Infinity, hi = -Infinity, loN = null, hiN = null;
        const clefs = new Set();
        for (const e of lane.notes) {
          if (e.rest || !e.pitches.length) continue;
          clefs.add(e.clefBottomDia);
          const s = e.pitches[0].dia - e.clefBottomDia;
          if (s < lo) { lo = s; loN = e; }
          if (s > hi) { hi = s; hiN = e; }
        }
        // How well would each candidate clef read, for this lane?
        const sounding = lane.notes.filter((e) => !e.rest && e.pitches.length);
        const fitWith = (pick) => {
          if (!sounding.length) return 0;
          let n = 0;
          for (const e of sounding) {
            const b = pick(e);
            let a = Infinity, z = -Infinity;
            for (const p of e.pitches) { const s = p.dia - b; if (s < a) a = s; if (s > z) z = s; }
            if (Math.abs((a + z) / 2 - 2) <= 4) n++;
          }
          return n / sounding.length;
        };
        const fits = {};
        for (const c of clefs) fits[c] = +fitWith(() => c).toFixed(2);
        return {
          name: lane.track.partName,
          staff: lane.track.staffNo,
          voice: lane.track.voiceNo,
          notes: sounding.length,
          clefs: [...clefs].sort((a, b) => a - b),
          used: +fitWith((e) => e.clefBottomDia).toFixed(2),
          fits,
          y: +lane.y.toFixed(2),
          stepRange: [lo, hi],
          box: [+lane.minY.toFixed(2), +lane.maxY.toFixed(2)],
          hiPitch: hiN ? hiN.pitches[0].step + hiN.pitches[0].octave : '-',
          loPitch: loN ? loN.pitches[0].step + loN.pitches[0].octave : '-',
        };
      });
      return { fail, warn, lanes: L.lanes.length, top, bot, height: L.height, oob, collide, mismatched, checked, detail, coverage, framing: worst, pairs, inverted, extra, total, gpuChecked, gpuMismatch, gpuAt };
    })()`);
    console.log(
      `geometry: ${geo.lanes} lane(s), sheet y ${geo.bot.toFixed(2)}..${geo.top.toFixed(2)} ` +
        `(h ${geo.height.toFixed(2)}), off-sheet ${geo.oob}, overlaps ${geo.collide}, ` +
        `orb/head mismatch ${geo.mismatched}/${geo.checked}, on-staff ${Math.round(geo.coverage * 100)}%` +
        `, sheet in frame (worst edge NDC ${geo.framing.toFixed(2)})` +
        `, pitch ok ${geo.pairs - geo.inverted}/${geo.pairs}, shared onsets ${geo.extra}/${geo.total}` +
        `, gpu tex ${geo.gpuMismatch}/${geo.gpuChecked} stale` +
        (geo.gpuAt ? ` @sys${geo.gpuAt.sys} t=${geo.gpuAt.t}s ${geo.gpuAt.w0}→${geo.gpuAt.w}px` : ''),
    );
    for (const d of geo.detail) {
      const fits = Object.entries(d.fits).map(([k, v]) => `${k}:${v}`).join(' ');
      console.log(
        `  lane "${d.name}" s${d.staff}/v${d.voice} ${d.notes}n clefs[${d.clefs.join(',')}] ` +
          `used=${d.used} fits{${fits}} steps ${d.stepRange[0]}..${d.stepRange[1]} (${d.loPitch} .. ${d.hiPitch})`,
      );
    }
    if (geo.warn?.length) console.log('  warning: ' + geo.warn.join('; '));
    const wantDiag = argv.includes('--diag');
    if (geo.fail.length && !wantDiag) throw new Error('Geometry: ' + geo.fail.join('; '));

    // --- Diagnostics for the four reported problems ------------------------
    if (argv.includes('--diag')) {
      const diag = await evaluate(`(async () => {
        const app = window.app;
        const L = app.layout;
        const out = {};

        // (1) Track count: how many tracks exist vs how many got a lane.
        const laneTrackIds = new Set(L.lanes.map((l) => l.track.id));
        out.tracks = app.model.tracks.map((t) => ({
          id: t.id, part: t.partName, staff: t.staffNo, voice: t.voiceNo,
          notes: t.events.length,
          soundingNotes: t.events.filter((n) => !n.rest && n.pitches.length).length,
          soundingFlag: t.sounding,
          lane: laneTrackIds.has(t.id),
        }));
        out.laneCount = L.lanes.length;
        out.trackCount = app.model.tracks.length;

        // (2) Orb alignment. Drive the real render path and read the orb's own
        // world position; report the residual against the note it should be on,
        // plus the z offset that lifts it off the sheet plane.
        const comets = app.world.comets ?? [];
        let orbChecked = 0, orbOff = 0, orbWorst = 0, zWorst = 0;
        for (const c of comets) {
          const lane = c.lane;
          let sampled = 0;
          for (const n of lane.notes) {
            if (n.grace || n.rest || !n.pitches.length) continue;
            if (sampled++ > 60) break;
            const t = n.onsetSec;
            app.world.renderFrame(t);
            const scroll = L.secToX(t);
            orbChecked++;
            const dx = Math.abs(c.head.position.x - (n.x - scroll));
            const dy = Math.abs(c.head.position.y - n.y);
            orbWorst = Math.max(orbWorst, dx, dy);
            if (dx > 1e-6 || dy > 1e-6) orbOff++;
            zWorst = Math.max(zWorst, Math.abs(c.head.position.z));
          }
        }
        out.orb = { checked: orbChecked, off: orbOff, worst: orbWorst, z: zWorst, comets: comets.length };

        // (3) Pitch direction: in 3D +y is up, so a higher pitch must sit at a
        // LARGER sheet y. Count consecutive pairs that disagree.
        let pairs = 0, inverted = 0, ex = null;
        for (const lane of L.lanes) {
          let prev = null;
          for (const n of lane.notes) {
            if (n.rest || !n.pitches.length) continue;
            if (prev) {
              pairs++;
              if (n.pitches[0].dia > prev.pitches[0].dia && n.y < prev.y - 1e-6) {
                inverted++;
                if (!ex) ex = { lane: lane.index, fromDia: prev.pitches[0].dia, toDia: n.pitches[0].dia, fromY: +prev.y.toFixed(3), toY: +n.y.toFixed(3) };
              }
            }
            prev = n;
          }
        }
        out.pitch = { pairs, inverted, ex };

        // (4) Is the global time -> x map monotonic? A wrap back to an earlier x
        // is what makes the sheet appear to jump to the start mid-playback.
        const dur = app.model.durationSec ?? L.durationSec ?? 240;
        let back = 0, worstBack = 0, at = null, prevX = null;
        let worstStep = 0, stepAt = null, typicalStep = [];
        const N = 4000;
        for (let i = 0; i <= N; i++) {
          const t = (i / N) * dur;
          const x = L.secToX(t);
          if (prevX !== null) {
            const d = x - prevX;
            typicalStep.push(d);
            if (d > worstStep) { worstStep = d; stepAt = { t: +t.toFixed(3), from: +prevX.toFixed(3), to: +x.toFixed(3) }; }
            if (d < -1e-6) {
              back++;
              const dd = prevX - x;
              if (dd > worstBack) { worstBack = dd; at = { t: +t.toFixed(3), from: +prevX.toFixed(3), to: +x.toFixed(3) }; }
            }
          }
          prevX = x;
        }
        typicalStep.sort((a, b) => a - b);
        const medStep = typicalStep.length ? typicalStep[Math.floor(typicalStep.length / 2)] : 0;
        out.xmap = {
          samples: N + 1, backwards: back, worstDrop: worstBack, at, dur,
          worstStep, stepAt, medStep, stepRatio: medStep ? worstStep / medStep : 0,
        };

        // Per lane: are note x positions increasing with onset time?
        let laneBack = 0, laneEx = null;
        for (const lane of L.lanes) {
          let px = -Infinity, pt = -Infinity;
          for (const n of lane.notes) {
            if (n.onsetSec < pt - 1e-9 || n.x < px - 1e-6) {
              laneBack++;
              if (!laneEx) laneEx = { lane: lane.index, t: +n.onsetSec.toFixed(3), prevT: +pt.toFixed(3), x: +n.x.toFixed(3), prevX: +px.toFixed(3) };
            }
            pt = n.onsetSec; px = n.x;
          }
        }
        out.laneOrder = { backwards: laneBack, ex: laneEx };

        // (4b) Two events sharing an onset inside one lane overlap on the sheet
        // and confuse the orb's binary search. Count them and show a sample.
        let dupTotal = 0, overlapTotal = 0, dupEx = null, maxSameOnset = 0;
        for (const lane of L.lanes) {
          const byT = new Map();
          for (const n of lane.notes) {
            if (n.grace) continue;
            const k = n.onsetSec.toFixed(6);
            if (!byT.has(k)) byT.set(k, []);
            byT.get(k).push(n);
          }
          for (const [, grp] of byT) {
            if (grp.length < 2) continue;
            dupTotal += grp.length - 1;
            maxSameOnset = Math.max(maxSameOnset, grp.length);
            // Does one of them still sounding mean they overlap in time?
            if (grp.length > 1) {
              const durs = grp.map((g) => +g.durSec?.toFixed(3));
              if (durs.some((d) => d > 0)) overlapTotal++;
            }
            if (!dupEx) {
              dupEx = {
                lane: lane.index, track: lane.track.id, n: grp.length, t: +grp[0].onsetSec.toFixed(3),
                pitches: grp.map((g) => g.pitches.map((p) => p.step + p.octave).join('/') || 'rest'),
                x: grp.map((g) => +g.x.toFixed(2)),
                dur: grp.map((g) => +(g.durSec ?? -1).toFixed(3)),
              };
            }
          }
        }
        out.dupes = { extraEvents: dupTotal, groups: overlapTotal, maxSameOnset, ex: dupEx };

        // (4c) Does each lane's cursor actually travel, or do notes pile up?
        out.travel = L.lanes.map((lane) => {
          let maxB = 0;
          const onsets = new Set();
          for (const n of lane.notes) {
            if (n.grace) continue;
            maxB = Math.max(maxB, n.onsetBeat + n.durBeat);
            onsets.add(n.onsetBeat.toFixed(4));
          }
          return {
            track: lane.track.id, events: lane.notes.length, distinctOnsets: onsets.size,
            endBeat: +maxB.toFixed(2),
          };
        });

        // (4d) System integrity. A gap between consecutive systems would leave
        // notes with no plane to be drawn on, and a plane whose centre does not
        // match its engraved span would slide its notes away from the orbs.
        const sys = L.systems;
        const pad = app.world.ribbon.opts.padding;
        let gaps = 0, widestGap = 0, overlaps = 0;
        for (let i = 1; i < sys.length; i++) {
          const d = sys[i].x0 - sys[i - 1].x1;
          if (d > 1e-6) { gaps++; widestGap = Math.max(widestGap, d); }
          if (d < -1e-6) overlaps++;
        }
        // How far can a drawn note be from where its orb is?
        const PX = L.options.pxPerUnit;
        let worstShift = 0, shiftEx = null;
        for (const lane of L.lanes) {
          for (const n of lane.notes) {
            if (n.grace || n.rest || !n.pitches.length) continue;
            for (const s of sys) {
              if (n.x < s.x0 - 0.6 || n.x > s.x1 + 0.6) continue;
              const m2 = { x0: s.x0 - pad / PX };
              const widthUnits = s.x1 - s.x0 + (2 * pad) / PX;
              const w = Math.round(widthUnits * PX);
              const centreX = s.x0 + (s.x1 - s.x0) / 2;
              const k = (widthUnits * PX) / w;
              const world = centreX - widthUnits / 2 + (n.x - m2.x0) * k;
              const shift = Math.abs(world - n.x);
              if (shift > worstShift) {
                worstShift = shift;
                shiftEx = { sys: sys.indexOf(s), noteX: +n.x.toFixed(2), world: +world.toFixed(3), k: +k.toFixed(5) };
              }
              break;
            }
          }
        }
        // Notes the engraver selects for a system but draws past the edge of its
        // canvas get silently clipped — exactly at a system break.
        let offCanvas = 0, offEx = null, canvasPadUnits = 0;
        for (const lane of L.lanes) {
          for (const n of lane.notes) {
            if (n.grace || n.rest || !n.pitches.length) continue;
            for (const s of sys) {
              if (n.x < s.x0 - 0.6 || n.x > s.x1 + 0.6) continue;
              const wu = s.x1 - s.x0 + (2 * pad) / PX;
              const w = Math.round(wu * PX);
              canvasPadUnits = pad / PX;
              const px = (n.x - (s.x0 - pad / PX)) * PX;
              if (px < 0 || px > w) {
                offCanvas++;
                if (!offEx) offEx = { sys: sys.indexOf(s), px: +px.toFixed(1), w, padUnits: +canvasPadUnits.toFixed(3), noteX: +n.x.toFixed(2), x0: +s.x0.toFixed(2), x1: +s.x1.toFixed(2) };
              }
              break;
            }
          }
        }
        out.systems = { count: sys.length, gaps, widestGap, overlaps, worstShift, shiftEx, offCanvas, offEx, canvasPadUnits: +canvasPadUnits.toFixed(3) };

        // (5) Durations: does the rendered audio actually cover the excerpt?
        const buf = app.buffer ?? app.audioBuffer ?? null;
        out.durations = {
          score: app.model.durationSec,
          excerpt: { start: app.excerpt.start, end: app.excerpt.end },
          span: +(app.excerpt.end - app.excerpt.start).toFixed(3),
          buffer: buf ? +buf.duration.toFixed(3) : null,
          bufferWindow: app.bufferWindow,
          keys: Object.keys(app).filter((k) => /buf|play/i.test(k)),
        };
        return out;
      })()`);

      console.log('\n=== DIAG ===');
      console.log(`tracks in model ${diag.trackCount}, lanes ${diag.laneCount}`);
      for (const t of diag.tracks) {
        console.log(`  track ${String(t.id).padEnd(16)} ${t.part} s${t.staff}/v${t.voice}  events=${String(t.notes).padStart(5)} soundingNotes=${String(t.soundingNotes).padStart(5)} flag=${t.soundingFlag}  lane=${t.lane}`);
      }
      console.log(`orb: ${diag.orb.comets} comets, ${diag.orb.checked} sampled, ${diag.orb.off} off-note, worst ${diag.orb.worst.toExponential(2)}, z-offset ${diag.orb.z}`);
      console.log(`pitch: ${diag.pitch.inverted}/${diag.pitch.pairs} rising pairs render LOW`);
      if (diag.pitch.ex) console.log(`  e.g. ${JSON.stringify(diag.pitch.ex)}`);
      console.log(`x-map: ${diag.xmap.backwards}/${diag.xmap.samples} samples go backwards, worst ${diag.xmap.worstDrop.toFixed(2)} ${JSON.stringify(diag.xmap.at)} over ${diag.xmap.dur}s`);
      console.log(`x-map steps: median ${diag.xmap.medStep.toFixed(4)}u, worst ${diag.xmap.worstStep.toFixed(2)}u (${diag.xmap.stepRatio.toFixed(0)}x median) ${JSON.stringify(diag.xmap.stepAt)}`);
      console.log(`lane order: ${diag.laneOrder.backwards} out-of-order notes ${JSON.stringify(diag.laneOrder.ex)}`);
      console.log(`dup onsets: ${diag.dupes.extraEvents} extra events in ${diag.dupes.groups} groups, max ${diag.dupes.maxSameOnset} at one instant`);
      if (diag.dupes.ex) console.log(`  e.g. ${JSON.stringify(diag.dupes.ex)}`);
      console.log(`durations: ${JSON.stringify(diag.durations)}`);
      for (const tv of diag.travel) {
        console.log(`  travel ${tv.track}: ${tv.events} events, ${tv.distinctOnsets} distinct onsets, ends at beat ${tv.endBeat}`);
      }
      const S = diag.systems;
      console.log(`systems: ${S.count}, gaps ${S.gaps} (widest ${S.widestGap.toFixed(3)}), overlaps ${S.overlaps}, worst note shift ${S.worstShift.toExponential(2)} ${JSON.stringify(S.shiftEx)}`);
      console.log(`clipping: ${S.offCanvas} notes drawn past their canvas edge, canvas pad ${S.canvasPadUnits} units ${JSON.stringify(S.offEx)}`);

      // (5b) Actually play it and watch the transport for a reset.
      const watch = await evaluate(`(async () => {
        const app = window.app;
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        const run = async (n, ms) => {
          const out = [];
          for (let i = 0; i < n; i++) {
            await sleep(ms);
            out.push({
              t: app.player ? +app.player.time.toFixed(2) : -1,
              p: app.player ? app.player.playing : null,
              b: app.buffer ? +app.buffer.duration.toFixed(1) : null,
              busy: app.busy,
            });
          }
          return out;
        };
        // High-rate watch: a stutter in the audio clock shows up as a jump in
        // scroll, which is what a "the sheet suddenly shifted" report means.
        const stutter = async (n) => {
          const xs = [];
          let prev = null;
          let worst = 0, worstT = null;
          for (let i = 0; i < n; i++) {
            await sleep(16);
            const t = app.player ? app.player.time : null;
            if (t === null || !app.layout) continue;
            const x = app.layout.secToX(t);
            let d = 0;
            if (prev !== null) {
              d = x - prev;
              if (d > worst) { worst = d; worstT = +t.toFixed(2); }
            }
            prev = x;
            xs.push(d > 0 ? d : 0);
          }
          xs.sort((a, b) => a - b);
          return { samples: xs.length, median: xs[Math.floor(xs.length / 2)], worst: +worst.toFixed(3), worstT };
        };
        app.toggle();
        const st1 = await stutter(150);
        const a = await run(20, 500);
        const mid = app.excerpt.start + (app.excerpt.end - app.excerpt.start) * 0.6;
        if (app.player) app.player.seek(mid);
        const st2 = await stutter(150);
        const b = await run(20, 500);
        app.toggle();
        return { a, b, st1, st2 };
      })()`);
      console.log(`scroll jitter [start]: median step ${watch.st1.median?.toFixed(4)}u, worst ${watch.st1.worst}u at t=${watch.st1.worstT} (${watch.st1.samples} samples)`);
      console.log(`scroll jitter [60pct]: median step ${watch.st2.median?.toFixed(4)}u, worst ${watch.st2.worst}u at t=${watch.st2.worstT} (${watch.st2.samples} samples)`);
      for (const [label, arr] of [['start', watch.a], ['60pct', watch.b]]) {
        let last = null;
        const resets = [];
        for (const s of arr) {
          if (last !== null && s.t >= 0 && s.t < last - 0.05) resets.push(`${last}->${s.t}`);
          last = s.t;
        }
        console.log(`playback[${label}]: ${JSON.stringify(arr[0])} ... ${JSON.stringify(arr[arr.length - 1])}  resets=${resets.length}${resets.length ? ' ' + resets.join(',') : ''}`);
      }
      console.log('=== /DIAG ===\n');
    }

    // --- Scrub forward and screenshot the live scene ----------------------
    // Optionally park at exact score times and report, per frame, the largest
    // on-screen distance between an orb and the ink the engraver put down for
    // the note it belongs to. That is the user's "the orbs drift off the notes".
    const AT = arg('at', '');
    const times = AT ? AT.split(',').map(Number).filter((n) => Number.isFinite(n)) : [];
    const frame = await evaluate(`(async () => {
      const app = window.app;
      const times = ${JSON.stringify(times)};
      if (!times.length) return { frames: [] };
      const out = [];
      const cam = app.world.camera;
      const V3 = cam.position.constructor;
      const toScreen = (x, y) => {
        const p = new V3(x, y, 0);
        p.project(cam);
        return { x: (p.x * 0.5 + 0.5) * app.world.width, y: (-p.y * 0.5 + 0.5) * app.world.height };
      };
      for (const t of times) {
        app.world.renderFrame(t);
        const scroll = app.layout.secToX(t);
        app.world.sheet.updateMatrixWorld(true);
        cam.updateMatrixWorld();
        // How long does a full pass over the visible window cost? When the first
        // visible system advances, every plane is re-engraved in one frame.
        const t0 = performance.now();
        for (let i = 0; i < 5; i++) {
          app.world.renderFrame(t + i * 0.016);
        }
        const passMs = (performance.now() - t0) / 5;
        // Cost of re-engraving one system from scratch.
        const rib = app.world.ribbon;
        const sys = app.layout.systems[Math.min(rib.slots[0].assigned + 1, app.layout.systems.length - 1)];
        const scratch = document.createElement('canvas');
        const e0 = performance.now();
        for (let i = 0; i < 5; i++) window.__drawSystem(scratch, app.layout, sys, rib.opts);
        const engraveMs = (performance.now() - e0) / 5;
        const frames = [{ t, passMs: +passMs.toFixed(1), engraveMs: +engraveMs.toFixed(1), reEngraveFrameMs: +(engraveMs * rib.slots.length).toFixed(1) }];
        out.push({ t, samples: frames.length, worst: frames, median: engraveMs });
      }
      return { frames: out };
    })()`);    for (const f of frame.frames) {
      console.log(`frame @${f.t}s: ${f.samples} note/orb pairs sampled, median offset ${f.median}px, worst ${JSON.stringify(f.worst)}`);
    }

    // Capture the exact reported timestamps so they can be eyeballed.
    // --flat squares up the camera: with the sheet edge-on, any real gap
    // between a note and its orb shows up as a plain horizontal offset instead
    // of being disguised by the oblique view.
    const FLAT = argv.includes('--flat');
    if (FLAT) {
      await evaluate(`(() => {
        const w = window.app.world;
        w.orbit.az = -(-0.62);
        w.orbit.el = -0.135;
        w.orbit.zoom = 0.55;
        return true;
      })()`);
    }
    for (const t of times) {
      await evaluate(`(() => {
        const app = window.app;
        if (app.player) app.player.seek(${t});
        else app.idleTime = ${t};
        app.world.renderFrame(${t});
        return true;
      })()`);
      await sleep(900);
      const s = await cdp.send('Page.captureScreenshot', { format: 'png' }, sessionId);
      const p = path.join(OUT_DIR, `${FLAT ? 'flat-' : ''}at-${t}.png`);
      await writeFile(p, Buffer.from(s.data, 'base64'));
      console.log(`shot: ${p}`);
    }

    await evaluate(`(() => {
      const s = document.getElementById('scrub');
      s.value = '420';
      s.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    })()`);
    await sleep(1200);

    const shot = await cdp.send('Page.captureScreenshot', { format: 'png' }, sessionId);
    const shotPath = path.join(OUT_DIR, 'preview.png');
    await writeFile(shotPath, Buffer.from(shot.data, 'base64'));
    console.log(`screenshot: ${shotPath}`);

    // --- Short export ----------------------------------------------------
    const exported = await evaluate(`(async () => {
      const app = window.app;
      const sel = document.getElementById('ex-res');
      sel.value = '1280x720';
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      const fps = document.getElementById('ex-fps');
      fps.value = '30';
      fps.dispatchEvent(new Event('change', { bubbles: true }));

      // Cap the range so the test finishes quickly.
      const len = document.getElementById('ex-len');
      len.value = String(${EXPORT_SECONDS});
      len.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise(r => setTimeout(r, 200));

      const before = Date.now();
      while (!document.getElementById('progress-overlay').hidden) {
        if (Date.now() - before > 180000) return { error: 'audio re-render timed out' };
        await new Promise(r => setTimeout(r, 200));
      }

      const text = document.getElementById('ex-text');
      document.getElementById('btn-export').click();
      const t0 = Date.now();
      while (Date.now() - t0 < 600000) {
        const v = text.textContent || '';
        if (v.startsWith('Done') || /error|cannot|cannot|unavailable|failed/i.test(v)) {
          return { status: v };
        }
        if (v && !v.startsWith('Rendering') && !/\\d+ \\/ \\d+ frames/.test(v)) {
          return { status: v };
        }
        await new Promise(r => setTimeout(r, 500));
      }
      return { status: 'timed out', last: text.textContent };
    })()`);
    console.log(`export: ${JSON.stringify(exported)}`);

    // Re-run the exporter directly and pull the bytes back, so the container can
    // be validated with ffprobe. (The button path above exercises the UI; the
    // anchor download is unreliable to capture in headless.)
    const encoded = await evaluate(`(async () => {
      const app = window.app;
      const { exportVideo } = await import('/src/export/video.ts');
      const { sliceWindow } = await import('/src/audio/render.ts');
      const end = ${EXPORT_SECONDS};
      // Mirror what runExport does: hand the exporter exactly the video's span.
      const audio = app.buffer
        ? sliceWindow(app.buffer, app.bufferWindow.start, 0, end)
        : null;
      const res = await exportVideo({
        world: app.world,
        startSec: 0,
        endSec: end,
        width: 640,
        height: 360,
        fps: 24,
        audio,
      });
      const bytes = new Uint8Array(await res.blob.arrayBuffer());
      let bin = '';
      const CH = 0x8000;
      for (let i = 0; i < bytes.length; i += CH) {
        bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
      }
      return { container: res.container, frames: res.frames, size: bytes.length, b64: btoa(bin) };
    })()`);

    const ext = encoded.container === 'mp4' ? 'mp4' : 'webm';
    const videoPath = path.join(OUT_DIR, `bouncingmusic.${ext}`);
    await writeFile(videoPath, Buffer.from(encoded.b64, 'base64'));
    console.log(
      `video: ${videoPath} (${encoded.container}, ${encoded.frames} frames, ${encoded.size} bytes)`,
    );

    console.log(logs.length ? `console:\n  ${logs.join('\n  ')}` : 'console: clean');
  } finally {
    await cleanup();
  }
}

main().catch(async (e) => {
  console.error('FAILED:', e.message);
  process.exitCode = 1;
});
