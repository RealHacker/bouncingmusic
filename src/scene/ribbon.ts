/**
 * The endless paper.
 *
 * The whole score is engraved into a handful of system textures that are recycled:
 * as a system scrolls past the camera it is re-assigned to whatever system is now
 * needed at the far end, so the sheet never runs out no matter how long the piece is.
 */

import * as THREE from 'three';
import { drawSystem, type EngraveOptions, type EngraveMetrics } from './engrave';
import type { ScoreLayout } from '../core/layout';

const POOL = 8;
/** How far behind the playhead the paper should still be drawn. */
const VIEW_BACK = 22;

export class Ribbon {
  readonly group = new THREE.Group();
  private slots: {
    mesh: THREE.Mesh;
    canvas: HTMLCanvasElement;
    texture: THREE.CanvasTexture;
    assigned: number;
    /** Score generation this slot's texture was engraved for. */
    gen: number;
    metrics: EngraveMetrics | null;
    /** Score-space x of this system's centre; the mesh is placed at `centreX - scroll`. */
    centreX: number;
  }[] = [];
  private layout: ScoreLayout | null = null;
  private opts: EngraveOptions;
  /** Bumped whenever the layout changes; a slot from an older one is stale. */
  private generation = 0;

  constructor(opts: EngraveOptions) {
    this.opts = opts;
    const geo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < POOL; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = 8;
      canvas.height = 8;
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = true;
      texture.anisotropy = 8;
      // Unlit on purpose. The engraving texture *is* the look; letting a
      // Standard material's light angle decide how bright the staff lines are
      // made the whole sheet depend on the camera azimuth. Any sheen or
      // falloff is baked into the canvas instead, which also keeps the exported
      // frame identical to the preview.
      const material = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
      const mesh = new THREE.Mesh(geo, material);
      mesh.visible = false;
      mesh.frustumCulled = false;
      this.slots.push({ mesh, canvas, texture, assigned: -1, gen: -1, metrics: null, centreX: 0 });
      this.group.add(mesh);
    }
  }

  setOptions(opts: EngraveOptions) {
    this.opts = opts;
    this.generation++;
  }

  setLayout(layout: ScoreLayout) {
    this.layout = layout;
    // A slot's texture is a snapshot of one system of one score. Keying the
    // cache on the system index alone is not enough: loading a different piece
    // starts again at system 0, so an index that matches an old assignment would
    // otherwise keep the previous score's engraving on screen.
    this.generation++;
  }

  update(scroll: number) {
    const layout = this.layout;
    if (!layout || !layout.systems.length) return;
    const systems = layout.systems;

    let lo = 0;
    let hi = systems.length - 1;
    let first = systems.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (systems[mid].x1 - scroll > -VIEW_BACK) {
        first = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    for (let k = 0; k < this.slots.length; k++) {
      const slot = this.slots[k];
      const idx = first + k;
      if (idx < 0 || idx >= systems.length) {
        slot.mesh.visible = false;
        slot.assigned = -1;
        continue;
      }
      if (slot.assigned !== idx || slot.gen !== this.generation) {
        const sys = systems[idx];
        const m = drawSystem(slot.canvas, layout, sys, this.opts);
        slot.texture.needsUpdate = true;
        slot.metrics = m;
        slot.mesh.scale.set(m.widthUnits, m.heightUnits, 1);
        slot.centreX = sys.x0 + (sys.x1 - sys.x0) / 2;
        slot.mesh.position.set(slot.centreX, m.topY - m.heightUnits / 2, 0);
        slot.assigned = idx;
        slot.gen = this.generation;
      }
      // Reposition *every* frame, not just on (re)assignment: the whole point of
      // the sheet is that it slides past a fixed playhead. Setting the position
      // only when a plane was re-engraved leaves every system frozen where it
      // was first drawn, and the score appears to never move.
      slot.mesh.position.x = slot.centreX - scroll;
      slot.mesh.visible = true;
    }
  }

  dispose() {
    for (const s of this.slots) {
      s.texture.dispose();
      (s.mesh.material as THREE.Material).dispose();
    }
    this.slots[0]?.mesh.geometry.dispose();
    this.group.clear();
  }
}
