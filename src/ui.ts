// Transcription of the readable src/ui.ts fragment shown in the video.
// This helper animates a rounded navigation pill between two target elements.
// The original project uses GSAP; this reference fragment is kept separately.

const W = box.scrollWidth, H = box.offsetHeight;
const L = target.offsetLeft;
const R = W - (target.offsetLeft + target.offsetWidth);
const T = target.offsetTop;
const B = H - (target.offsetTop + target.offsetHeight);

const clip = (l: number, r: number) =>
  `inset(${T}px ${r}px ${B}px ${l}px round 999px)`;

const o = { l: prev[0], r: prev[1] };
const right = L > prev[0];

// the leading edge goes first and faster; the trailing edge catches up
gsap.to(o, { l: L, duration: right ? 0.55 : 0.36,
  ease: right ? 'power3.inOut' : 'power3.out',
  onUpdate: () => gsap.set(pill, { clipPath: clip(o.l, o.r) }) });

gsap.to(o, { r: R, duration: right ? 0.36 : 0.55,
  ease: right ? 'power3.out' : 'power3.inOut',
  onUpdate: () => gsap.set(pill, { clipPath: clip(o.l, o.r) }) });
