/* Pont entre les modules de la bibliothèque et le socle du projet : les modules appellent pret([...])
   et reçoivent le GSAP, le ScrollTrigger et les mesures du socle de la skill (rien n'est rechargé ni réinstancié). */
import { rafraichir, boucle } from '../socle/index.js?v=1';

const html = document.documentElement;
const socle = {
  get gsap() { return window.gsap || null; },
  get ScrollTrigger() { return window.ScrollTrigger || null; },
  get SplitText() { return window.SplitText || null; },
  Flip: null, OGL: null, lenis: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { return false; },
  rafraichir,
  boucle(el, fn) { return boucle(el, (dt, t) => fn(t * 1000, dt * 1000)); },
  mesurer() {},
};
export async function pret() { return socle; }
export { html };
