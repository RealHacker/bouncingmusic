/**
 * MP4 export (Route B).
 *
 * Deterministic frame loop: for frame n we set the score time to exactly
 * start + n/fps, render, and hand the canvas to a WebCodecs-backed encoder. Nothing
 * is tied to wall-clock time, so the result is frame-exact and identical to what
 * the preview shows, just at a fixed frame rate. The audio comes from the same
 * OfflineAudioContext render used for playback, muxed into the same file.
 */

import {
  AudioBufferSource,
  BufferTarget,
  CanvasSource,
  Mp4OutputFormat,
  Output,
  QUALITY_HIGH,
  WebMOutputFormat,
  canEncodeAudio,
  canEncodeVideo,
  type Quality,
} from 'mediabunny';
import type { World } from '../scene/world';

export interface ExportOptions {
  world: World;
  startSec: number;
  endSec: number;
  width: number;
  height: number;
  fps: number;
  audio: AudioBuffer | null;
  quality?: Quality;
  onProgress?: (done: number, total: number) => void;
  shouldCancel?: () => boolean;
}

export interface ExportResult {
  blob: Blob;
  filename: string;
  container: 'mp4' | 'webm';
  frames: number;
  elapsedMs: number;
}

export class ExportError extends Error {}

export async function exportVideo(opts: ExportOptions): Promise<ExportResult> {
  const { world, startSec, endSec, width, height, fps } = opts;
  const quality = opts.quality ?? QUALITY_HIGH;

  const wantMp4 =
    (await canEncodeVideo('avc', { width, height })) && (await canEncodeAudio('aac'));
  const wantWebM =
    (await canEncodeVideo('vp9', { width, height })) && (await canEncodeAudio('opus'));

  if (!wantMp4 && !wantWebM) {
    throw new ExportError(
      'This browser cannot encode video (WebCodecs with H.264/VP9 is unavailable). ' +
        'Try the latest Chrome or Edge.',
    );
  }

  const useMp4 = wantMp4;
  const videoCodec = useMp4 ? 'avc' : 'vp9';
  const audioCodec = useMp4 ? 'aac' : 'opus';

  const prev = world.size;
  const prevOrbit = { ...world.orbit };

  const total = Math.max(1, Math.round((endSec - startSec) * fps));
  const t0 = performance.now();

  try {
    // Resize *before* building the sources: CanvasSource captures the canvas
    // dimensions when it is constructed, so doing this afterwards would encode
    // at the preview size and letterbox the result.
    world.orbit.az = 0;
    world.orbit.el = 0;
    world.resizeForExport(width, height);

    const target = new BufferTarget();
    const output = new Output({
      format: useMp4 ? new Mp4OutputFormat({ fastStart: 'in-memory' }) : new WebMOutputFormat(),
      target,
    });

    const videoSource = new CanvasSource(world.canvas, {
      codec: videoCodec,
      quality,
      keyFrameInterval: 2,
    });
    output.addVideoTrack(videoSource, { frameRate: fps });

    let audioSource: AudioBufferSource | null = null;
    if (opts.audio) {
      audioSource = new AudioBufferSource({ codec: audioCodec, quality });
      output.addAudioTrack(audioSource);
    }

    await output.start();

    if (audioSource && opts.audio) {
      await audioSource.add(opts.audio);
    }

    for (let n = 0; n < total; n++) {
      if (opts.shouldCancel?.()) throw new ExportError('Export cancelled.');
      const t = startSec + n / fps;
      world.renderFrame(t);
      await videoSource.add(n / fps, 1 / fps);
      opts.onProgress?.(n + 1, total);
      if ((n & 7) === 0) await new Promise((r) => setTimeout(r, 0));
    }

    await output.finalize();

    if (!target.buffer) throw new ExportError('The encoder produced no output.');
    const blob = new Blob([target.buffer], {
      type: useMp4 ? 'video/mp4' : 'video/webm',
    });
    return {
      blob,
      filename: `bouncingmusic.${useMp4 ? 'mp4' : 'webm'}`,
      container: useMp4 ? 'mp4' : 'webm',
      frames: total,
      elapsedMs: performance.now() - t0,
    };
  } finally {
    world.restoreAfterExport(prev.w, prev.h);
    world.orbit.az = prevOrbit.az;
    world.orbit.el = prevOrbit.el;
  }
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
