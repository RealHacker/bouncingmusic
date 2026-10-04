/**
 * The orbs.
 *
 * One comet per lane. The head sphere sits exactly on the notehead at the note's
 * onset (both come from the same event list), and in between it travels in a
 * parabolic arc whose height grows with the interval. A trail of shrinking spheres
 * is sampled from the same path a few frames back, and each strike spawns a flash
 * on the note plus a burst of sparks.
 */

import * as THREE from 'three';
import type { LaneLayout } from '../core/layout';
import { defaultDynamic, type DynamicCurve } from '../core/dynamics';

export const LANE_COLORS = [
  0xff4f7d, 0x36d7ff, 0xfdfdff, 0x8dff5e, 0xffb03a, 0xc58cff, 0xffe45e, 0x5f8dff,
];

export interface LookOptions {
  orbScale: number;
  trailLength: number;
  bloom: number;
}

function radialTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  grad.addColorStop(0.6, 'rgba(255,255,255,0.13)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

let glowTex: THREE.Texture | null = null;
function getGlowTex(): THREE.Texture {
  if (!glowTex) glowTex = radialTexture();
  return glowTex;
}

function emissiveMaterial(color: THREE.Color, boost: number): THREE.MeshBasicMaterial {
  const m = new THREE.MeshBasicMaterial({
    toneMapped: false,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  m.color.copy(color).multiplyScalar(boost);
  return m;
}

// ---------------------------------------------------------------- effects

interface Flash {
  mesh: THREE.Mesh;
  life: number;
  maxLife: number;
  peak: number;
}

interface Spark {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  peak: number;
}

export class Effects {
  readonly group = new THREE.Group();
  private flashes: Flash[] = [];
  private sparks: Spark[] = [];
  private flashIdx = 0;
  private sparkIdx = 0;
  private geometry = new THREE.PlaneGeometry(1, 1);

  constructor(count = 64, sparks = 140) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: getGlowTex(),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      });
      const mesh = new THREE.Mesh(this.geometry, mat);
      mesh.visible = false;
      this.flashes.push({ mesh, life: 0, maxLife: 0.7, peak: 1 });
      this.group.add(mesh);
    }
    for (let i = 0; i < sparks; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      });
      const mesh = new THREE.Mesh(this.geometry, mat);
      mesh.visible = false;
      this.sparks.push({ mesh, vx: 0, vy: 0, life: 0, maxLife: 0.8, peak: 1 });
      this.group.add(mesh);
    }
  }

  flash(x: number, y: number, color: THREE.Color, size: number, peak: number, z = 0.04) {
    const f = this.flashes[this.flashIdx++ % this.flashes.length];
    f.mesh.visible = true;
    f.mesh.position.set(x, y, z);
    f.mesh.scale.set(size, size, 1);
    (f.mesh.material as THREE.MeshBasicMaterial).color.copy(color).multiplyScalar(peak);
    f.life = f.maxLife;
    f.peak = peak;
  }

  burst(x: number, y: number, color: THREE.Color, count: number, speed: number, peak: number) {
    for (let i = 0; i < count; i++) {
      const s = this.sparks[this.sparkIdx++ % this.sparks.length];
      const a = Math.random() * Math.PI * 2;
      const v = speed * (0.35 + Math.random() * 0.9);
      s.mesh.visible = true;
      s.mesh.position.set(x, y, 0.05);
      s.mesh.scale.setScalar(0.055 + Math.random() * 0.05);
      (s.mesh.material as THREE.MeshBasicMaterial).color.copy(color).multiplyScalar(peak);
      s.vx = Math.cos(a) * v;
      s.vy = Math.abs(Math.sin(a)) * v * 0.9 + 0.4;
      s.life = s.maxLife = 0.5 + Math.random() * 0.5;
      s.peak = peak;
    }
  }

  update(dt: number) {
    const step = Math.min(0.05, Math.max(0, dt));
    for (const f of this.flashes) {
      if (f.life <= 0) continue;
      f.life -= step;
      if (f.life <= 0) {
        f.mesh.visible = false;
        continue;
      }
      const u = f.life / f.maxLife;
      f.mesh.scale.multiplyScalar(1 + step * 1.5);
      const m = f.mesh.material as THREE.MeshBasicMaterial;
      m.opacity = u * u;
    }
    for (const s of this.sparks) {
      if (s.life <= 0) continue;
      s.life -= step;
      if (s.life <= 0) {
        s.mesh.visible = false;
        continue;
      }
      s.vy -= 3.4 * step;
      s.mesh.position.x += s.vx * step;
      s.mesh.position.y += s.vy * step;
      const u = s.life / s.maxLife;
      (s.mesh.material as THREE.MeshBasicMaterial).opacity = u * u;
    }
  }

  dispose() {
    for (const f of this.flashes) (f.mesh.material as THREE.Material).dispose();
    for (const s of this.sparks) (s.mesh.material as THREE.Material).dispose();
    this.geometry.dispose();
    this.group.clear();
  }
}

// ---------------------------------------------------------------- comet

interface Sample {
  x: number;
  y: number;
  rest: boolean;
  index: number;
  sinceOnset: number;
}

export class Comet {
  readonly group = new THREE.Group();
  private lane: LaneLayout;
  private color: THREE.Color;
  private look: LookOptions;
  private notes: LaneLayout['notes'];
  private ts: Float64Array;
  private xs: Float64Array;
  private ys: Float64Array;
  private restFlags: Uint8Array;
  private head: THREE.Mesh;
  private halo: THREE.Mesh;
  private pool: THREE.Mesh;
  private trail: THREE.Mesh[] = [];
  private trailMats: THREE.MeshBasicMaterial[] = [];
  private lastIndex = -1;
  private sphere = new THREE.SphereGeometry(1, 20, 14);
  private dyn: DynamicCurve = () => defaultDynamic;

  constructor(lane: LaneLayout, color: THREE.Color, look: LookOptions, dyn: DynamicCurve) {
    this.lane = lane;
    this.color = color;
    this.look = look;
    this.dyn = dyn;
    this.notes = lane.notes.filter((n) => !n.grace);
    const n = Math.max(1, this.notes.length);
    this.ts = new Float64Array(n);
    this.xs = new Float64Array(n);
    this.ys = new Float64Array(n);
    this.restFlags = new Uint8Array(n);
    let carry = lane.y;
    for (let i = 0; i < this.notes.length; i++) {
      const ev = this.notes[i];
      this.ts[i] = ev.onsetSec;
      this.xs[i] = ev.x;
      this.restFlags[i] = ev.rest ? 1 : 0;
      if (!ev.rest) carry = ev.y;
      this.ys[i] = ev.rest ? carry : ev.y;
    }

    this.head = new THREE.Mesh(this.sphere, emissiveMaterial(color, 2.6));
    this.halo = new THREE.Mesh(this.sphere, emissiveMaterial(color, 0.5));
    this.pool = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: getGlowTex(),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        opacity: 0.5,
      }),
    );
    (this.pool.material as THREE.MeshBasicMaterial).color.copy(color);

    this.group.add(this.halo, this.head, this.pool);
    for (let i = 0; i < look.trailLength; i++) {
      const mat = emissiveMaterial(color, 1.4);
      const m = new THREE.Mesh(this.sphere, mat);
      this.group.add(m);
      this.trail.push(m);
      this.trailMats.push(mat);
    }
  }

  setLook(look: LookOptions) {
    this.look = look;
    while (this.trail.length < look.trailLength) {
      const mat = emissiveMaterial(this.color, 1.4);
      const m = new THREE.Mesh(this.sphere, mat);
      this.group.add(m);
      this.trail.push(m);
      this.trailMats.push(mat);
    }
    while (this.trail.length > look.trailLength) {
      const m = this.trail.pop()!;
      this.trailMats.pop()!;
      this.group.remove(m);
    }
  }

  setDynamic(fn: DynamicCurve) {
    this.dyn = fn;
  }

  private sample(t: number): Sample | null {
    const n = this.notes.length;
    if (!n) return null;

    if (t <= this.ts[0]) {
      const pre = 2.6;
      const u = Math.max(0, Math.min(1, (t - (this.ts[0] - pre)) / pre));
      return {
        x: this.xs[0] - (1 - u) * 4.2,
        y: this.ys[0],
        rest: false,
        index: -1,
        sinceOnset: 0,
      };
    }
    if (t >= this.ts[n - 1]) {
      return {
        x: this.xs[n - 1],
        y: this.ys[n - 1],
        rest: !!this.restFlags[n - 1],
        index: n - 1,
        sinceOnset: t - this.ts[n - 1],
      };
    }

    let lo = 0;
    let hi = n - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (this.ts[mid] <= t) lo = mid;
      else hi = mid - 1;
    }
    const i = lo;
    const t0 = this.ts[i];
    const t1 = this.ts[i + 1];
    const span = Math.max(1e-4, t1 - t0);
    const u = Math.max(0, Math.min(1, (t - t0) / span));
    const x0 = this.xs[i];
    const x1 = this.xs[i + 1];
    const y0 = this.ys[i];
    const y1 = this.ys[i + 1];
    const dy = y1 - y0;
    const hop = (0.22 + Math.min(0.85, Math.abs(dy) * 0.42)) * Math.min(1, span / 0.55);
    const y = y0 + dy * u + hop * 4 * u * (1 - u);
    return { x: x0 + (x1 - x0) * u, y, rest: false, index: i, sinceOnset: t - t0 };
  }

  update(t: number, scroll: number, effects: Effects) {
    const s = this.sample(t);
    if (!s) return;

    const dyn = this.dyn(t);
    const attack = Math.exp(-s.sinceOnset * 11) * 2.1;
    const level = (0.34 + dyn * 0.66) * (1 + attack) * (s.rest ? 0.45 : 1);
    const R = 0.16 * this.look.orbScale;

    // Keep the orb in the sheet plane. Lifting it toward the camera looks
    // reasonable head-on, but the camera is oblique by design, so a z offset
    // parallaxes the orb sideways off the note it is supposed to be sitting on.
    // The halo is what sells the glow, not a depth offset.
    this.head.position.set(s.x - scroll, s.y, 0.02);
    this.head.scale.setScalar(R * (1 + Math.min(0.45, attack * 0.18)));
    (this.head.material as THREE.MeshBasicMaterial).color
      .copy(this.color)
      .multiplyScalar(1.05 + level * 0.85);

    this.halo.position.copy(this.head.position);
    this.halo.scale.setScalar(R * (2.0 + level * 0.8));
    (this.halo.material as THREE.MeshBasicMaterial).color
      .copy(this.color)
      .multiplyScalar(0.16 + level * 0.2);

    this.pool.position.set(s.x - scroll, s.y, 0.012);
    const ps = (0.85 + level * 0.55) * this.look.orbScale;
    this.pool.scale.set(ps, ps, 1);
    (this.pool.material as THREE.MeshBasicMaterial).opacity = Math.min(0.5, 0.08 + level * 0.16);

    // Trail
    const step = 0.05;
    for (let k = 0; k < this.trail.length; k++) {
      const m = this.trail[k];
      const sp = this.sample(t - (k + 1) * step);
      if (!sp) {
        m.visible = false;
        continue;
      }
      m.visible = true;
      m.position.set(sp.x - scroll, sp.y, 0.018);
      const f = 1 - (k + 1) / (this.trail.length + 1);
      m.scale.setScalar(R * 0.95 * Math.pow(f, 1.25));
      this.trailMats[k].color.copy(this.color).multiplyScalar(0.2 + level * 0.6 * f);
      this.trailMats[k].opacity = Math.max(0, f * 1.1);
    }

    // Strike
    if (s.index >= 0 && s.index !== this.lastIndex) {
      if (this.lastIndex >= 0 || s.index === 0) {
        const i = s.index;
        effects.flash(
          this.xs[i] - scroll,
          this.ys[i],
          this.color,
          (0.5 + level * 0.7) * this.look.orbScale,
          0.45 + level * 0.55,
        );
        if (!this.restFlags[i] && dyn > 0.3) {
          effects.burst(
            this.xs[i] - scroll,
            this.ys[i],
            this.color,
            2 + Math.round(dyn * 3),
            0.8 + dyn * 0.7,
            0.45 + level * 0.5,
          );
        }
      }
      this.lastIndex = s.index;
    }
  }

  reset() {
    this.lastIndex = -1;
  }

  dispose() {
    this.sphere.dispose();
    for (const m of this.trail) (m.material as THREE.Material).dispose();
    (this.head.material as THREE.Material).dispose();
    (this.halo.material as THREE.Material).dispose();
    (this.pool.material as THREE.Material).dispose();
    (this.pool.geometry as THREE.BufferGeometry).dispose();
    this.group.clear();
    void this.lane;
  }
}
