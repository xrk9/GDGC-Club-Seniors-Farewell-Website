/**
 * Generate a short subtle beep on slide transitions, using WebAudio.
 * No assets required.
 */
let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor =
      (window.AudioContext as typeof AudioContext | undefined) ||
      ((window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext);
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  return ctx;
}

export function beep(freq = 880, durationMs = 70, gain = 0.04) {
  const ac = getCtx();
  if (!ac) return;
  if (ac.state === "suspended") void ac.resume();
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = "square";
  osc.frequency.value = freq;
  g.gain.value = 0;
  osc.connect(g).connect(ac.destination);
  const now = ac.currentTime;
  g.gain.linearRampToValueAtTime(gain, now + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);
  osc.start(now);
  osc.stop(now + durationMs / 1000 + 0.02);
}
