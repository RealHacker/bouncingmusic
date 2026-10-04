/**
 * Scene assembly: renderer, camera, lights, bloom, and the one function that
 * matters — renderFrame(t). The preview loop and the MP4 exporter both call it;
 * only the source of `t` differs.
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { Ribbon } from './ribbon';
import { Comet, Effects, LANE_COLORS, type LookOptions } from './orbs';
import { DEFAULT_STYLE, type EngraveOptions } from './engrave';
import type { ScoreLayout } from '../core/layout';
import { makeBeatToSec } from '../core/parse';
import { dynamicCurve } from '../core/dynamics';
import type { ScoreModel } from '../core/types';

const CAM = { az: -0.62, el: 0.135, dist: 1, targetY: 0 };
/** Fog opacity at the playhead: 1 - exp(-FOG_AT_TARGET^2) ≈ 12%. */
const FOG_AT_TARGET = 0.36;

export class World {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly sheet = new THREE.Group();
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private ribbon: Ribbon;
  private effects = new Effects();
  private comets: Comet[] = [];
  private layout: ScoreLayout | null = null;
  private engrave: EngraveOptions;
  private look: LookOptions = { orbScale: 1, trailLength: 7, bloom: 1 };
  private lastT = 0;
  private width = 1280;
  private height = 720;
  private target = new THREE.Vector3();

  /** User orbit offsets, frozen during export. */
  orbit = { az: 0, el: 0, zoom: 1 };

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    this.camera = new THREE.PerspectiveCamera(42, 16 / 9, 0.1, 1200);
    this.scene.background = new THREE.Color(0x05060a);
    this.scene.fog = new THREE.FogExp2(0x05060a, 0.0115); // density is set per frame in updateCamera

    this.sheet.rotation.x = -0.3;
    this.scene.add(this.sheet);
    this.scene.add(this.effects.group);

    this.scene.add(new THREE.AmbientLight(0x323a4e, 1.15));
    const key = new THREE.DirectionalLight(0xa8bcdf, 1.0);
    key.position.set(-14, 26, 30);
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0x556377, 0.45);
    fill.position.set(22, 8, -18);
    this.scene.add(fill);

    this.engrave = {
      style: { ...DEFAULT_STYLE },
      showText: true,
      showBeams: true,
      padding: 14,
    };
    this.ribbon = new Ribbon(this.engrave);
    this.sheet.add(this.ribbon.group);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1280, 720), 0.5, 0.5, 0.62);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.resize(canvas.clientWidth || 1280, canvas.clientHeight || 720);
  }

  resize(w: number, h: number) {
    this.width = Math.max(2, Math.floor(w));
    this.height = Math.max(2, Math.floor(h));
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height, false);
    this.composer.setSize(this.width, this.height);
  }

  /** Fixed-size render target used by the exporter (pixel ratio 1). */
  resizeForExport(w: number, h: number) {
    this.renderer.setPixelRatio(1);
    this.resize(w, h);
  }

  restoreAfterExport(w: number, h: number) {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.resize(w, h);
  }

  setScore(model: ScoreModel, layout: ScoreLayout) {
    this.layout = layout;
    this.ribbon.setLayout(layout);

    for (const c of this.comets) {
      this.sheet.remove(c.group);
      c.dispose();
    }
    this.comets = [];

    const beatToSec = makeBeatToSec(model.tempoMap);
    layout.lanes.forEach((lane, i) => {
      const color = new THREE.Color(LANE_COLORS[i % LANE_COLORS.length]);
      const comet = new Comet(lane, color, this.look, dynamicCurve(model, lane.track.id, beatToSec));
      this.comets.push(comet);
      this.sheet.add(comet.group);
    });
  }

  setLook(look: Partial<LookOptions>) {
    this.look = { ...this.look, ...look };
    this.bloom.strength = 0.5 * this.look.bloom;
    for (const c of this.comets) c.setLook(this.look);
  }

  setEngrave(engrave: Partial<EngraveOptions>) {
    this.engrave = { ...this.engrave, ...engrave };
    this.ribbon.setOptions(this.engrave);
  }

  private updateCamera(t: number) {
    const layout = this.layout;
    const spanY = layout ? Math.max(4, layout.height) : 12;
    const aspect = Math.max(0.2, this.camera.aspect);
    const vFov = (this.camera.fov * Math.PI) / 180;
    // Frame automatically: a little headroom above and below the lanes, and
    // enough music to the right to read a couple of upcoming measures. On a tall
    // (portrait) stage we can never fill the height, so show *less* width
    // rather than shrink the score into the fog.
    const fitH = spanY * 1.28 + 2.5;
    const fitW = 32 * THREE.MathUtils.clamp(aspect / 1.55, 0.5, 1);
    const tanHalf = Math.tan(vFov / 2);
    const dist = Math.max(fitH / 2 / tanHalf, fitW / 2 / (tanHalf * aspect)) * CAM.dist * this.orbit.zoom;

    // Fog is distance-from-camera based, so a fixed density would haze the
    // playhead hard on one aspect ratio and not at all on another. Tying the
    // density to the camera distance keeps the haze at the playhead constant
    // and lets the score fade out ahead of it at the same rate every time.
    const fog = this.scene.fog as THREE.FogExp2;
    fog.density = FOG_AT_TARGET / Math.max(1, dist);

    const driftAz = 0.055 * Math.sin(t * 0.13) + 0.022 * Math.sin(t * 0.31 + 1.7);
    const driftEl = 0.018 * Math.sin(t * 0.09 + 0.6);
    const az = CAM.az + this.orbit.az + driftAz;
    const el = THREE.MathUtils.clamp(CAM.el + this.orbit.el + driftEl, -0.5, 0.9);

    // Aim at the middle of the engraved range. The lanes are stacked downward
    // from the top staff, so a score with four voices sits far below y=0 —
    // a fixed target would frame the right *size* of sheet and still point
    // off into empty space above it.
    const centreY = layout ? layout.topY - layout.height / 2 : CAM.targetY;

    this.target.set(0, centreY, 0);
    const ce = Math.cos(el);
    this.camera.position.set(
      this.target.x + Math.sin(az) * ce * dist,
      this.target.y + Math.sin(el) * dist,
      this.target.z + Math.cos(az) * ce * dist,
    );
    this.camera.lookAt(this.target);
  }

  /** The core function. t is a score time in seconds. */
  renderFrame(t: number) {
    const layout = this.layout;
    let dt = t - this.lastT;
    if (!Number.isFinite(dt) || dt < 0 || dt > 0.4) {
      dt = 0;
      for (const c of this.comets) c.reset();
    }
    this.lastT = t;

    if (layout) {
      const scroll = layout.secToX(t);
      this.ribbon.update(scroll);
      for (const c of this.comets) c.update(t, scroll, this.effects);
    }
    this.effects.update(dt);
    this.updateCamera(t);
    this.composer.render();
  }

  get canvas(): HTMLCanvasElement {
    return this.renderer.domElement;
  }

  get size(): { w: number; h: number } {
    return { w: this.width, h: this.height };
  }

  /** Accepts drag to orbit and wheel to zoom. Disabled while exporting. */
  attachControls(el: HTMLElement, enabled: () => boolean) {
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    el.addEventListener('pointerdown', (e) => {
      if (!enabled()) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', (e) => {
      if (!dragging || !enabled()) return;
      this.orbit.az -= (e.clientX - lastX) * 0.004;
      this.orbit.el = THREE.MathUtils.clamp(
        this.orbit.el + (e.clientY - lastY) * 0.003,
        -0.5,
        0.7,
      );
      lastX = e.clientX;
      lastY = e.clientY;
    });
    const stop = () => {
      dragging = false;
    };
    el.addEventListener('pointerup', stop);
    el.addEventListener('pointercancel', stop);
    el.addEventListener(
      'wheel',
      (e) => {
        if (!enabled()) return;
        e.preventDefault();
        this.orbit.zoom = THREE.MathUtils.clamp(
          this.orbit.zoom * (1 + Math.sign(e.deltaY) * 0.08),
          0.35,
          3.2,
        );
      },
      { passive: false },
    );
  }

  dispose() {
    this.ribbon.dispose();
    this.effects.dispose();
    for (const c of this.comets) c.dispose();
    this.composer.dispose();
    this.renderer.dispose();
  }
}
