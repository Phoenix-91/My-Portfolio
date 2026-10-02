// Mechanical switch sound: noise impacts ringing through resonant "case" modes.
type Mode = [number, number, number, number];
let ac: AudioContext | null = null;
let noise: AudioBuffer;
let out: GainNode;

function hit(t: number, g: number, v: number, modes: Mode[], tick: number) {
  const a = ac!;
  const n = a.createBufferSource();
  n.buffer = noise;
  n.playbackRate.value = v;
  const imp = a.createGain();
  imp.gain.setValueAtTime(g, t);
  imp.gain.exponentialRampToValueAtTime(0.0001, t + 0.006);
  n.connect(imp);
  for (const m of modes) {
    const f = a.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = m[0] * v;
    f.Q.value = m[1];
    const mg = a.createGain();
    mg.gain.setValueAtTime(m[2], t);
    mg.gain.exponentialRampToValueAtTime(0.0001, t + m[3]);
    imp.connect(f);
    f.connect(mg);
    mg.connect(out);
  }
  const hp = a.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 3200 * v;
  const tg = a.createGain();
  tg.gain.setValueAtTime(tick, t);
  tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.012);
  imp.connect(hp);
  hp.connect(tg);
  tg.connect(out);
  n.start(t);
  n.stop(t + 0.03);
}

export function playClick() {
  try {
    if (!ac) {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ac = new Ctor();
      noise = ac.createBuffer(1, ac.sampleRate * 0.03, ac.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const c = ac.createDynamicsCompressor();
      c.threshold.value = -14; c.ratio.value = 10; c.attack.value = 0.001; c.release.value = 0.08;
      out = ac.createGain();
      out.gain.value = 0.8;
      out.connect(c);
      c.connect(ac.destination);
    }
    if (ac.state === 'suspended') void ac.resume();
    const t = ac.currentTime, v = 0.95 + Math.random() * 0.1, r = 0.85 + Math.random() * 0.3;
    hit(t, 0.8 * r, v, [[2800, 12, 2, 0.03], [5200, 12, 1.4, 0.02]], 0.55);
    hit(t + 0.03, 1.1 * r, v, [[150, 3, 4, 0.11], [330, 5, 3.5, 0.09], [760, 7, 2.5, 0.06], [1800, 9, 1.6, 0.04], [4200, 10, 1, 0.02]], 0.25);
    hit(t + 0.13, 0.55 * r, v * 1.08, [[320, 5, 2.2, 0.06], [900, 8, 1.6, 0.04], [3000, 12, 1.4, 0.025]], 0.3);
  } catch {
    /* audio is optional */
  }
}
