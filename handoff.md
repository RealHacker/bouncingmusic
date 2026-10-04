# Handoff — Bouncing Music

Working notes for picking this project up cold. Written at the end of a long
debugging session (2026-10-05). Read this before touching anything.

---

## 1. What this is

`E:\Explainit\bouncingmusic` — a browser app that turns MusicXML into an endless
dark "music sheet" with one glowing-orb comet per musical voice. The orbs hop
note to note in sync with synthesized audio. Loads from a URL or a dropped
`.mxl` / `.xml` file. Exports to MP4 via WebCodecs.

Design constraints the user set, and that still hold:

- Keep it simple and dark. The orbs are the visual appeal; don't over-invest in
  paper texture.
- Ground bass gets its own ribbon.
- Music-agnostic — no hardcoded assumptions about any piece.
- ≤4 tracks auto-keep all; ≥5 prompts a selection.
- Excerpt defaults to full length under 5 minutes, else ~60 s.
- `README.md` is required and is kept up to date.

---

## 2. Run it

```bash
cd E:\Explainit\bouncingmusic
npm install
npm run dev          # http://127.0.0.1:5173
npm run build        # tsc --noEmit && vite build  — must exit 0
npx tsc --noEmit     # typecheck only
```

Stack: Vite 5.4.21 + TypeScript 5.9.3, `"type": "module"`. Deps: `fflate`,
`mediabunny`, `three@0.169`. No git repo — there is no history to consult, which
is why this file exists.

**Dev server note:** background bash tasks cap at ~290 s, so a `vite` dev server
started that way dies. At the end of the last session the server was running as
an *orphaned* node process (pid 27932) on port 5173. Check before assuming it is
down:

```bash
Get-NetTCPConnection -State Listen -LocalPort 5173
```

If you restart vite while an orphan still holds 5173, the new instance silently
falls back to 5174. Always verify which port actually answers.

---

## 3. Source map

| File | Role |
|---|---|
| `src/core/ingest.ts` | URL/file load, `.mxl` unzip, container.xml resolution. `staffNumberOf()` lives here. |
| `src/core/parse.ts` | MusicXML DOM → `ScoreModel`. Per (part, staff, voice) cursors, backup/forward, ties, tuplets, tempo map. Also `mergeUnflaggedChords()`. |
| `src/core/layout.ts` | Time→x map, system breaking, lane stacking, clef resolution. `stepY()` is the single source of truth for staff-step→y. |
| `src/core/types.ts` | `ScoreModel`, `Track`, `NoteEvent`, `LaneLayout`, `ClefChange`. Clef diatonic table `STEP_DIA`. |
| `src/core/dynamics.ts` | Dynamic level curves per lane. |
| `src/scene/engrave.ts` | Canvas-2D engraver. `computeMetrics()`, `drawSystem()`. One canvas per visible system. |
| `src/scene/ribbon.ts` | Pool of 8 textured planes recycled across the score. `POOL=8`, `VIEW_BACK=22`. |
| `src/scene/orbs.ts` | Per-lane comet: hop parabola, trail, note flash, sparks. |
| `src/scene/world.ts` | Renderer, unlit sheet, auto-framing camera, fog, bloom. |
| `src/audio/render.ts` | Chunked `OfflineAudioContext` → AudioBuffer. `sliceWindow()`, `buildMaster()`. |
| `src/audio/player.ts` | Live transport and clock. **Read this one before debugging anything about position.** |
| `src/audio/instruments.ts` | `PeriodicWave` + ADSR synths, no SoundFont. |
| `src/export/video.ts` | Mediabunny `CanvasSource` + `AudioBufferSource` → MP4/WebM. |
| `src/ui/app.ts` | All wiring, ingest, track picker, transport loop, export. |
| `tools/cdp-check.mjs` | Headless verification harness. ~48 kB, heavily extended. |

Key constants: `lineGap 0.42`, `laneGap 0.95`, `minGap 0.85`, `durScale 0.62`,
`systemWidth 46`, `pxPerUnit 30`, engrave `padding 14`, `EDGE_HEADROOM 1.2`,
`CAM {az:-0.62, el:0.135, dist:1}`, `FOG_AT_TARGET 0.36`, audio `CHUNK 8`.

---

## 4. Verification tooling

Everything is verified through `tools/cdp-check.mjs`, which launches its own
headless Edge and drives the real app over CDP. **The in-app Browser panel is
unusable for this app** — it drops clicks under the WebGL loop and `fill`
appends instead of replacing. Don't waste time on it.

```bash
node tools/cdp-check.mjs                                  # default score
node tools/cdp-check.mjs --url <other.mxl>
node tools/cdp-check.mjs --export-seconds 10
node tools/cdp-check.mjs --switch <other-url>            # load a 2nd score on top
node tools/cdp-check.mjs --diag                           # deep diagnostics dump
node tools/cdp-check.mjs --at 20,77,142 --flat            # park at times, square camera
node tools/cdp-check.mjs --jitter                         # scroll jitter during playback
```

Flags: `--app` (app URL, default `http://127.0.0.1:5173/`), `--out` (artifact
dir), `--port` (CDP port), `--export-seconds`.

`src/main.ts` exports `window.__drawSystem` purely so the harness can time a
re-engrave. Harmless, but don't remove it without updating the harness.

Permanent assertions (a failure aborts the run): panel cards visible, export
button on screen, audio non-silent, sheet actually scrolls, every note inside
its sheet, no lane overlaps, orb y == engraved head y, sheet inside the
viewport, pitch direction correct, no lane reads worse than its best single
clef. Warnings only (printed, non-fatal): too many events sharing an onset.

---

## 5. Bugs found and fixed

Each of these was invisible to a self-consistency check. That pattern is the
single most important lesson from this project: **when two code paths share a
helper, a check that only compares them to each other cannot catch a wrong
answer. Assert the invariant against the world instead.**

### Round 1 — basic wiring
1. `[hidden]` overridden by `display:flex` → `[hidden] { display:none !important }`.
2. `renderReport()` null-guard crash in the `App` constructor.
3. Single-shot `OfflineAudioContext` too slow → chunked render (8 s chunks).
4. `start(-0.45)` `InvalidStateError` → clamp to ≥0.
5. Canvas rendered under the 356 px sidebar → `#stage { right: 356px }`.
6. Camera at fixed distance → auto-framing.
7. Blown-out glow → retuned radii/colors/bloom.
8. Parser: `durBeat` wrongly ×4 (divisions are per-quarter).
9. Parser: bare `<backup>` with no `<staff>` rewound every lane → per-part `lastStaff`.
10. Audio: notes straddling chunk boundaries scheduled at negative times; also a
    never-advancing scan pointer, and `Math.random()` detune replaced with a
    per-note seed for determinism.
11. Sheet invisible (`MeshStandardMaterial`) → unlit `MeshBasicMaterial`,
    `toneMapped:false`, fog density tied to camera distance.
12. Export encoded at preview size → `world.resizeForExport()` must run *before*
    `new CanvasSource(...)`.
13. Audio/video length mismatch → `sliceWindow()` in render.ts.
14. **Audio was completely silent** — `buildMaster()` discarded the master gain
    and `makeBus()` returned a panner connected to nothing. Added a tanh
    `softClipCurve()` limiter.
15. **Sheet never scrolled** — `Ribbon.update()` set `mesh.position` only inside
    the re-engrave branch. Now repositioned every frame.
16. Export/excerpt/look cards never unhidden; panel cards converted to
    collapsible `<details>` so all six sections fit one screen.

### Round 2 — clef and lane layout
17. **Two different staff-step mappings.** Note heads used `lane.y + step*lineGap/2`
    while stems/orbs used layout's `e.y`. Unified via exported
    `stepY(laneY, step, lineGap)`.
18. Ledger lines started at step 10 → now 6 above, −2 below.
19. System box too small → `computeMetrics` uses `layout.topY` / `layout.height`.
20. Fixed lane stride → content-aware stacking (`LaneLayout.minY`/`maxY`,
    `laneGap`).
21. **Clefs swapped** — `numOf(cl,'number',1)` read `<clef number="2">` as a
    child element. Added `staffNumberOf()`.
22. Added `ClefChange` / `Track.clefTimeline` / `NoteEvent.clefBottomDia` so a
    clef can change mid-piece, plus `resolveTrackClef()` which honours the
    declared timeline only when it reads acceptably (≥0.75 fit) or beats the best
    single clef by ≥0.05.
23. Clef quality check made **relative** (does the resolved clef beat the best
    alternative?) rather than absolute %-near-staff. The Turkish March plays
    E4–E6 in the right hand; that is correct engraving, not a bug.

### Round 3 — camera and framing
24. **Camera aimed at `y = 0` while the score is engraved at negative y.** Lanes
    stack downward, so Canon's sheet spans y −30.6…−8.9 and Clair de Lune
    −106.9…−34.3. Distance was computed correctly from the sheet height, but the
    camera pointed at empty space above it: right *size* of framing, wrong place.
    Fixed to target `layout.topY - layout.height / 2`. Bach Air went from 2
    visible staves to 3, Clair de Lune from 2 to 4.
    Added a harness check that projects the sheet's top/bottom edges into NDC.

### Round 4 — the pitch axis, chords, orbs
25. **The pitch axis was inverted.** `stepY()` returned `laneY + (2-step)*lineGap`
    *and* `engrave.ts` flips y again for the canvas; the two cancelled, so higher
    notes rendered **lower** on screen. Stems pointed the wrong way, ledger lines
    went below instead of above, melodies played descending.
    **This survived three rounds of verification** because the orb used the same
    inverted `stepY()`, so "orb sits on its note head" passed while the music
    played backwards. Now `laneY + (step - 2) * lineGap`; `layout.ts:271-272`
    (lane ink extents) had its min/max swapped to match. Added a harness check
    asserting a higher pitch gives a higher `y`. Measured 88/164 rising pairs
    wrong on Greensleeves → 0/164.
26. **Chords split into separate events.** The parser merged notes marked
    `<chord/>`, but many library files just write two notes at the same cursor.
    That produced two events at an identical x — note heads drawn on top of each
    other, two stems, two note sounds, and an orb whose search only reached the
    last of the pair. Moonlight had **472** such extra events. Added
    `mergeUnflaggedChords()`: folds events agreeing on onset *and* duration,
    and drops a rest sharing an onset with a sounding note in the same voice
    (a rest cannot sound). Conservative on purpose — genuine duration conflicts
    are left visible. Moonlight 472 → 278; Clair de Lune 787 → 576 events.
27. **Orb z-lift.** The orb head sat at `z = 0.16`, lifted toward the camera.
    The camera is oblique by design, so that parallaxes the orb sideways off its
    note — and zooming in can't reveal it as an error because the offset scales
    too. Now `z = 0.02`; halo and trail likewise. The halo sells the glow, not a
    depth offset.
28. **Chord orb anchor.** The orb anchored at the *mean* of a chord's outer
    steps — empty space in the middle of a wide chord. Now anchors on
    `minStep`, which is always a real note head.
29. Report panel now shows "Notes on the sheet" (real note heads) rather than
    raw `<note>` elements, so it can't disagree with what's drawn.
30. Play button is disabled the moment an audio render starts rather than only
    when it finishes.

### Round 5 — transport
31. **Switching songs left the old song's engraving / a broken scroll.** Root
    cause: `Player.offsetInBuffer` survived `setBuffer()`. Play 128 s into
    Moonlight, load a 48 s piece, and the transport stayed at 128 s — far past
    the new score's end — so the sheet scrolled into empty space. Only 1 of 8
    planes was even visible. A page refresh "fixed" it because it rebuilt the
    player.
    Fixed: `setBuffer` resets `offsetInBuffer` and re-anchors `startedAtCtx`.
    Also `ingest()` now stops the player, clears `buffer`/`bufferWindow`, and
    parks `idleTime` on the new excerpt start — otherwise the outgoing song's
    clock drove the incoming layout while its audio kept playing.
    Measured before/after: `t 128.28 → 126.31, 1 visible plane` →
    `t 128.3 → 0, 4 visible planes, 0 stale`.
32. **Ribbon hardening.** A plane's texture is now keyed on
    `(score generation, system index)` rather than the index alone. Loading a new
    piece restarts numbering at system 0, so an index matching an old assignment
    could keep the previous score's engraving. `setLayout`/`setOptions` bump
    `generation`. This wasn't firing in practice, but it shouldn't be possible.

---

## 6. Open problems

### 6.1 Notes/orbs desync at system breaks — NOT REPRODUCED (highest priority)

User report (verbatim timings): Canon in D — after the orb passes the vertical
bar at **1:17** the orbs diverge from the notes; they **converge** at **2:22**;
wrong again at **2:50**. Für Elise — notes wrong from **0:20**, with "a clear
flicker, like the sheet is quickly shifted". Greensleeves — flicker at exactly
**0:20**, then notes wrong. User is clear the **orbs** are moving correctly and
the **notes** are wrong.

Everything measurable is clean at exactly those timestamps:

| Check | Result |
|---|---|
| Canvas contents vs a fresh re-engrave | pixel-identical, 0 stale planes |
| Gaps between systems / overlaps | 0 / 0 (Moonlight: 69 systems) |
| Worst note→orb position shift | 1.3e-2 units ≈ half a pixel |
| Notes clipped by their canvas edge | 0 |
| Orb vs engraved head | 0 / 2965 mismatches |
| Time→x monotonic | 0 / 4001 samples backwards |
| Time→x **smooth** (jumps, not just direction) | worst step 2× median (Für Elise 1×) |
| Audio clock jitter during live playback | median 0.136 u/sample, worst 0.322 u |
| Re-engrave cost | 1–3 ms per system |
| `--flat` dead-on camera at Greensleeves 0:20 | orb sits exactly on its note head |

**Why static analysis cannot settle it:** every check renders *one deterministic
frame* at a given `t`. A flicker is a temporal artifact. By construction each
captured frame comes out correct. This is why three rounds of measurement have
not found it.

**The one real cost found, which does match "flicker at a break":** when the
visible window advances by one system, *all 8* planes are re-engraved in a
single frame — 9–25 ms on Moonlight, over one 60 fps budget, so exactly one
dropped frame, exactly at the break. Not shipped as a fix because swapping
textures in the hot path risks introducing exactly the glitch being chased.
Offered to the user; not yet approved.

**Blocked on the user for:**
1. A **screen recording** of ~5 s around the problem. This is the one artifact
   that captures a flicker.
2. Whether it reproduces **scrubbing with playback stopped** — pause and drag to
   0:20 on Greensleeves. Correct while scrubbed but wrong while playing isolates
   it to runtime timing rather than engraving, and is a strong signal.

### 6.2 Bach Prelude in C — real parser bug, documented not fixed

Not user-reported; found by the new "shared onsets" check. In this library file
one voice ends up with **126 notes across only 29 distinct moments, all inside
the first 8 beats** of a 34-measure piece. 218 of 257 events share an onset.

The file interleaves counterpoint voices on a single staff in a way the
`<backup>` cursor handling does not fully separate. Every note is present; they
stack instead of lining up. Fixing it properly means implementing nested-voice
MusicXML cursor semantics, not loosening a check. Meanwhile `layoutScore()` pushes
a warning into `model.warnings`, shown in the Parsed score panel, so it is never
rendered silently. The harness reports this as a warning, not a failure.

### 6.3 Sample-file data quality (not app bugs)

- **Clair de Lune**: staff 2 alternates G/F every 1–3 measures; voices span
  E1–A5, so even the best-fitting clef places only ~57% of notes near the staff.
  Surfaced as a warning.
- **Turkish March**: on-staff 42% — correct, the fingered arrangement runs E4–E6.

### 6.4 Audio render time

Moonlight takes **~50 s** to render audio; Für Elise ~3 s; Canon ~20 s. The scene
sits parked at the excerpt start with Play disabled during this. Plausibly what
the user saw as "the animation resets to the start". Not yet changed; background
rendering with immediate playback would be the fix if they want it.

---

## 7. Last known-good verification

Suite run 2026-10-05, 9/10 clean (Moonlight verified separately before the
round-5 player/ribbon changes — **re-run it first**):

```
Canon_in_D.mxl         OK  2 lanes, orb/head 0/1411, pitch 1489/1489, onsets 0/1495, NDC 0.74
Bach_Air              OK  3 lanes, orb/head 0/329,  pitch 394/394,   onsets 1/396,  NDC 0.76
Clair_de_Lune         OK  4 lanes, orb/head 0/576,  pitch 904/906,   onsets 167/929,NDC 0.78
Fur_Elise             OK  2 lanes, orb/head 0/148,  pitch 147/147,   onsets 0/205,  NDC 0.75
Greensleeves          OK  2 lanes, orb/head 0/158,  pitch 164/164,   onsets 0/169,  NDC 0.73
Prelude_in_C          OK  3 lanes, orb/head 0/137,  pitch 219/219,   onsets 218/257,NDC 0.76  (warning)
Arabesque_No_1         OK  4 lanes, orb/head 0/1124, pitch 1272/1275, onsets 74/1341,NDC 0.78
Bach_Minuet_in_G      OK  4 lanes, orb/head 0/193,  pitch 193/193,   onsets 2/200,  NDC 0.76
Turkish_March         OK  3 lanes, orb/head 0/1004, pitch 1290/1290, onsets 0/1140, NDC 0.76
Moonlight (separate)  OK  4 lanes, orb/head 0/2965, pitch 3806/3807, onsets 278/3823,NDC 0.78
```

`npx tsc --noEmit` clean. `npm run build` exit 0 (810 kB JS / 211 kB gzip).
Export validated with ffprobe: h264 640×360 @24 fps + AAC 44.1 kHz stereo,
mean −16.2 dB / max −5.4 dB. Console clean on every run.

Suite runs exceed the 290 s background-task cap — run it in batches of 4–5
scores and append to a file, as was done here.

---

## 8. Environment

- Windows / PowerShell 7. Project root `E:\`.
- Edge at `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
  (Chromium 151.0.4129.72). No Chrome installed.
- Node v24.19.0, ffmpeg 7.1.1.
- `Remove-Item` is blocked by the bash tool — use `mavis-trash <path>`.
- Orphaned `msedge` processes accumulate between harness runs; kill them before
  a batch or CDP ports collide.
- `fflate` only resolves from inside the project directory — run node one-liners
  from `E:\Explainit\bouncingmusic`, not from `%TEMP%`.

---

## 9. Suggested first actions next session

1. Confirm the dev server on 5173; restart if the orphan is gone.
2. Re-run the full suite including Moonlight, to re-baseline after the round-5
   transport changes.
3. Ask the user for the screen recording and the scrub-vs-play answer. **Do not
   spend more effort on 6.1 until one of those arrives** — static measurement
   has been exhausted and further guessing is not productive.
4. If approved, implement the amortised system-break re-engrave (rotate engraved
   textures between planes so only the entering system is redrawn), keeping the
   regression suite as the gate.
5. Optionally: background audio rendering so long pieces are playable
   immediately.
6. Keep `README.md` in step — it documents each non-obvious decision and is part
   of the deliverable.
