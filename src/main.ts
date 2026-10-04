import './style.css';
import { App } from './ui/app';
import { drawSystem } from './scene/engrave';

declare global {
  interface Window {
    app?: App;
    /** Exposed for tools/cdp-check.mjs; harmless in normal use. */
    __drawSystem?: typeof drawSystem;
  }
}

const start = async () => {
  window.__drawSystem = drawSystem;
  window.app = new App();
  // Handy for poking at the model from the console.
  await Promise.resolve();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => void start());
} else {
  void start();
}
