/** Live playback transport. Owns the clock that the animation follows. */

export class Player {
  private ctx: AudioContext;
  private buffer: AudioBuffer | null = null;
  private source: AudioBufferSourceNode | null = null;
  private startedAtCtx = 0;
  private offsetInBuffer = 0;
  /** Score-time (seconds) that corresponds to buffer time 0. */
  readonly windowStart: number;
  playing = false;
  loop = true;
  onEnded: (() => void) | null = null;

  constructor(windowStart: number) {
    this.windowStart = windowStart;
    this.ctx = new AudioContext();
  }

  get audioContext(): AudioContext {
    return this.ctx;
  }

  get duration(): number {
    return this.buffer?.duration ?? 0;
  }

  /** Current position in score time. */
  get time(): number {
    if (!this.buffer) return this.windowStart;
    if (!this.playing) return this.windowStart + this.offsetInBuffer;
    return this.windowStart + this.offsetInBuffer + (this.ctx.currentTime - this.startedAtCtx);
  }

  setBuffer(buf: AudioBuffer) {
    this.stop();
    this.buffer = buf;
    // A new piece starts at its beginning. Carrying `offsetInBuffer` over meant
    // that loading a 48-second score after playing 128 seconds into another one
    // left the transport parked at 128s — far past the end of the new score, so
    // the sheet scrolled to empty space and nothing lined up with the orbs.
    this.offsetInBuffer = 0;
    this.startedAtCtx = this.ctx.currentTime;
  }

  async play(at?: number) {
    if (!this.buffer) return;
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    this.stop();
    let off = at === undefined ? this.offsetInBuffer : at - this.windowStart;
    off = Math.max(0, Math.min(Math.max(0, this.buffer.duration - 0.02), off));
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffer;
    src.connect(this.ctx.destination);
    src.onended = () => {
      if (this.source !== src) return;
      this.source = null;
      if (this.playing) {
        if (this.loop) this.play(this.windowStart);
        else {
          this.playing = false;
          this.offsetInBuffer = this.buffer ? this.buffer.duration - 0.02 : 0;
          this.onEnded?.();
        }
      }
    };
    src.start(0, off);
    this.source = src;
    this.startedAtCtx = this.ctx.currentTime;
    this.offsetInBuffer = off;
    this.playing = true;
  }

  pause() {
    if (!this.playing) return;
    this.offsetInBuffer = this.time - this.windowStart;
    this.stop();
  }

  stop() {
    if (this.source) {
      const s = this.source;
      this.source = null;
      s.onended = null;
      try {
        s.stop();
      } catch {
        /* already stopped */
      }
      s.disconnect();
    }
    this.playing = false;
  }

  seek(t: number) {
    const wasPlaying = this.playing;
    if (wasPlaying) this.pause();
    this.offsetInBuffer = Math.max(0, t - this.windowStart);
    if (wasPlaying) void this.play(t);
  }

  dispose() {
    this.stop();
    void this.ctx.close();
  }
}
