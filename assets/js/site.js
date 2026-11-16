/* Maysam Transfert · effets propres au client (les effets génériques viennent de la bibliothèque du socle).
   Effets du plan : phares (intro et traînées de lumière), tableau-departs, estimateur, pancarte, carte-trajets,
   prix-geant, silhouettes, silhouettes-ouverture, choix-vehicule, numero, garanties, rideau-ouverture. */
import { demarrer, boucle, etat, versObjet, quand, rafraichir } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => matchMedia('(max-width: 760px)').matches;

/* ---------- Vitesse de défilement (lue sans mesure de mise en page) ---------- */
const vitesse = { v: 0, y: scrollY, t: performance.now() };
addEventListener('scroll', () => {
  const t = performance.now(), dt = Math.max(16, t - vitesse.t);
  vitesse.v = Math.min(4, Math.abs(scrollY - vitesse.y) / dt); vitesse.y = scrollY; vitesse.t = t;
}, { passive: true });

/* ---------- phares : traînées de lumière dans l'ouverture de l'accueil ---------- */
function trainees() {
  const cv = $('[data-trainees]');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, telephone() ? 1 : 1.25);
  let L = 0, H = 0;
  const lutins = ['rgba(255,226,170,', 'rgba(255,80,60,'].map((c) => {
    const o = document.createElement('canvas'); o.width = 256; o.height = 8;
    const g = o.getContext('2d'), d = g.createLinearGradient(0, 0, 256, 0);
    d.addColorStop(0, c + '0)'); d.addColorStop(.7, c + '.55)'); d.addColorStop(1, c + '1)');
    g.fillStyle = d; g.beginPath(); g.roundRect ? g.roundRect(0, 2, 256, 4, 2) : g.rect(0, 2, 256, 4); g.fill();
    return o;
  });
  /* Halo de phares : deux grandes lueurs qui passent lentement sur la chaussée. */
  const halo = document.createElement('canvas'); halo.width = halo.height = 256;
  { const g = halo.getContext('2d'), r = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    r.addColorStop(0, 'rgba(255,238,200,.9)'); r.addColorStop(.25, 'rgba(246,214,150,.45)'); r.addColorStop(1, 'rgba(201,164,92,0)');
    g.fillStyle = r; g.fillRect(0, 0, 256, 256); }
  const n = telephone() ? 14 : 30;
  const traits = Array.from({ length: n }, (_, i) => ({ y: Math.random(), x: Math.random(), l: .08 + Math.random() * .18, v: .05 + Math.random() * .09, rouge: i % 3 === 0, sens: i % 3 === 0 ? -1 : 1 }));
  const taille = () => { L = cv.clientWidth; H = cv.clientHeight; cv.width = Math.round(L * dpr); cv.height = Math.round(H * dpr); };
  taille();
  new ResizeObserver(taille).observe(cv);
  let acc = 1;
  /* L'avenue respire : un zoom très lent sur la photo, piloté par le temps (même vitesse partout). */
  const photo = $('.hero-media img');
  boucle(cv, (dt, temps) => {
    if (photo && etat.pret) photo.style.transform = `scale(${(1.05 + Math.sin(temps * 0.22) * 0.025).toFixed(4)}) translate3d(${(Math.sin(temps * 0.13) * -1).toFixed(3)}%, 0, 0)`;
    acc += ((1 + vitesse.v * 2.2) - acc) * Math.min(1, dt * 4);
    vitesse.v *= Math.pow(.2, dt);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, L, H);
    ctx.globalCompositeOperation = 'lighter';
    for (const t of traits) {
      t.x += t.v * dt * acc * t.sens;
      if (t.x > 1.3) t.x = -.3; if (t.x < -.3) t.x = 1.3;
      const p = .25 + t.y * .75;                       /* plus bas = plus proche : plus épais, plus lumineux */
      const y = H * (.35 + t.y * .62), w = L * t.l * (.7 + p * 1.2), h = 1.6 + p * 4.2;
      const bord = telephone() ? 1 : Math.max(0, Math.min(1, (t.x - .4) / .22));   /* rien sous le titre */
      ctx.globalAlpha = Math.min(1, (.35 + p * .75)) * bord;
      ctx.save();
      ctx.translate(L * t.x, y);
      if (t.sens < 0) ctx.scale(-1, 1);
      const lu = lutins[t.rouge ? 1 : 0];
      ctx.drawImage(lu, -w, -h * 2, w, h * 4);           /* lueur large */
      ctx.drawImage(lu, -w, -h / 2, w, h);               /* cœur lumineux */
      ctx.restore();
    }
    const ph = (temps % 7.5) / 7.5, xh = 1.25 - ph * 1.05, ah = Math.sin(ph * Math.PI);
    const bordH = telephone() ? 1 : Math.max(0, Math.min(1, (xh - .42) / .2));
    ctx.globalAlpha = .55 * ah * bordH;
    const rh = Math.max(L, H) * (telephone() ? .5 : .28);
    for (const dx of [0, rh * .55]) ctx.drawImage(halo, L * xh + dx - rh / 2, H * .72 - rh * .32, rh, rh * .64);
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  });
}

/* ---------- tableau-departs : les palettes tournent jusqu'au bon texte ---------- */
const SIGNES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-€';
function tableau() {
  const t = $('[data-effet="tableau-departs"]');
  if (!t) return;
  const cases = $$('.flap', t);
  const cibles = cases.map((c) => c.textContent);
  let fait = false;
  const jouer = () => {
    if (fait) return; fait = true;
    cases.forEach((c, i) => {
      const cible = cibles[i];
      if (cible.trim() === '' || cible === ' ') return;
      const tours = 4 + ((i * 7) % 9);
      let k = 0;
      const tic = () => {
        k++;
        c.classList.remove('tourne'); void c.offsetWidth; c.classList.add('tourne');
        c.textContent = k >= tours ? cible : SIGNES[(Math.random() * SIGNES.length) | 0];
        if (k < tours) setTimeout(tic, 55 + (i % 5) * 9);
      };
      setTimeout(tic, (i % 10) * 30 + Math.floor(i / 10) * 60);
    });
  };
  if (etat.intro === 'retour') return;
  new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { jouer(); o.disconnect(); } }, { threshold: .35 }).observe(t);
}

/* ---------- compteurs − / + (estimateur et choix du véhicule) ---------- */
function compteurs(racine, quandChange) {
  $$('[data-compte]', racine).forEach((f) => {
    const min = +f.dataset.min, max = +f.dataset.max, out = $('output', f), cache = $('input[type="hidden"]', f);
    const moins = $('[data-moins]', f), plus = $('[data-plus]', f);
    const regler = (v) => {
      v = Math.max(min, Math.min(max, v)); out.textContent = v; if (cache) cache.value = v;
      moins.disabled = v <= min; plus.disabled = v >= max; quandChange();
    };
    moins.addEventListener('click', () => regler(+out.textContent - 1));
    plus.addEventListener('click', () => regler(+out.textContent + 1));
    regler(+out.textContent);
  });
}
const valeur = (racine, nom) => +($(`[data-compte="${nom}"] output`, racine)?.textContent || 0);

/* ---------- estimateur : trajet, passagers, valises → véhicule et prix qui roule ---------- */
function rouler(el, texte) {
  if (!el || el.textContent === texte) return;
  if (!gsap) { el.textContent = texte; return; }
  gsap.timeline()
    .to(el, { yPercent: -60, opacity: 0, duration: .18, ease: 'power2.in' })
    .add(() => { el.textContent = texte; })
    .fromTo(el, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .32, ease: 'power3.out' });
}
const valeurBagages = (n) => (n <= 0 ? '0' : n >= 3 ? '3' : String(n));
function estimateurs() {
  $$('[data-estimateur]').forEach((form) => {
    const sec = form.closest('.estim'), res = $('[data-estim-resultat]', sec);
    const note = $('[data-estim-note]', res), lien = $('[data-estim-lien]', res), prix = $('.estim-prix', res);
    const majour = () => {
      const r = $('input[name="trajet"]:checked', form) || $('input[name="trajet"]', form);
      const p = valeur(form, 'passagers'), v = valeur(form, 'valises');
      const van = p > 3 || v > 3;
      $$('.estim-silhouette', res).forEach((s) => { s.hidden = s.dataset.forme !== (van ? 'van' : 'berline'); });
      $('[data-estim-vehicule]', res).textContent = van ? note.dataset.grand : note.dataset.petit;
      $('[data-estim-duree]', res).textContent = `Paris ↔ ${r.closest('label').querySelector('.estim-choix-nom').textContent} · ${r.dataset.duree}`;
      if (van) {
        prix.classList.add('sur-demande');
        $('[data-estim-montant]', res).textContent = note.dataset.surdemande; $('.estim-devise', res).hidden = true;
        note.textContent = p >= 7 ? note.dataset.van + ' ' + note.dataset.max : note.dataset.van;
      } else {
        const etaitDemande = prix.classList.contains('sur-demande');
        prix.classList.remove('sur-demande'); $('.estim-devise', res).hidden = false;
        if (etaitDemande) $('[data-estim-montant]', res).textContent = r.dataset.prix; else rouler($('[data-estim-montant]', res), r.dataset.prix);
        note.textContent = note.dataset.fixe;
      }
      const base = lien.getAttribute('href').split('?')[0];
      lien.setAttribute('href', `${base}?trajet=${r.value}&passagers=${p}&bagages=${valeurBagages(v)}`);
    };
    form.addEventListener('change', majour);
    compteurs(form, majour);
    res.dataset.effet = 'estimateur';
    if (gsap && ST) gsap.fromTo(res, { y: 40 }, { y: -10, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: .5 } });
  });
}

/* ---------- pancarte : le nom s'écrit sur la pancarte ---------- */
function pancartes() {
  const noms = $$('[data-pancarte-nom]');
  if (!noms.length) return;
  const ecrire = (txt) => noms.forEach((n) => { n.textContent = txt || n.dataset.defaut; });
  $$('[data-pancarte-saisie]').forEach((i) => i.addEventListener('input', () => ecrire(i.value.trim())));
  /* Au défilement, la pancarte se balance doucement (suspendue). */
  if (gsap && ST) $$('.pancarte').forEach((p) => {
    const petite = p.classList.contains('pancarte--petite');
    gsap.fromTo(p, { rotate: petite ? 2 : 3, y: petite ? 16 : 40 }, { rotate: petite ? -1.5 : -2, y: petite ? -8 : -20, ease: 'none', scrollTrigger: { trigger: petite ? p.closest('section') : p, start: 'top bottom', end: 'bottom top', scrub: .6 } });
  });
  /* Premier passage : le nom d'exemple s'écrit lettre à lettre. */
  const n = $('.pancarte:not(.pancarte--petite) [data-pancarte-nom]');
  if (n && etat.intro !== 'retour') {
    const texte = n.dataset.defaut;
    new IntersectionObserver((e, o) => {
      if (!e[0].isIntersecting) return; o.disconnect();
      const saisie = $('[data-pancarte-saisie]'); if (saisie && saisie.value) return;
      let k = 0; n.textContent = '';
      const t = setInterval(() => { k++; n.textContent = texte.slice(0, k) || ' '; if (k >= texte.length) clearInterval(t); }, 85);
    }, { threshold: .5 }).observe(n);
  }
}

/* ---------- carte-trajets : choisir une route, pastilles qui roulent (arrêtées hors écran) ---------- */
function cartes() {
  $$('[data-carte]').forEach((carte) => {
    const svg = $('svg', carte);
    const choisir = (cle) => {
      $$('.carte-route', carte).forEach((r) => r.classList.toggle('actif', r.dataset.route === cle));
      $$('.carte-point', carte).forEach((r) => r.classList.toggle('actif', r.dataset.route === cle));
      $$('.carte-bouton', carte).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.route === cle)));
      $$('.carte-fiche', carte).forEach((f) => { f.hidden = f.dataset.route !== cle; });
      rafraichir();
    };
    $$('.carte-bouton', carte).forEach((b) => b.addEventListener('click', () => choisir(b.dataset.route)));
    $$('.carte-point', carte).forEach((g) => g.addEventListener('click', () => choisir(g.dataset.route)));
    if ($('.carte-bouton', carte)) choisir($('.carte-bouton', carte).dataset.route);
    if (svg && svg.pauseAnimations) {
      svg.pauseAnimations();
      new IntersectionObserver((e) => { e[0].isIntersecting && !document.hidden ? svg.unpauseAnimations() : svg.pauseAnimations(); }).observe(svg);
    }
    /* La carte se pose au défilement. */
    if (gsap && ST) gsap.fromTo(carte, { y: 50, scale: .96 }, { y: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: carte, start: 'top bottom', end: 'top 40%', scrub: .5 } });
  });
}

/* ---------- prix-geant : le prix d'ouverture passe d'un trajet à l'autre ---------- */
function prixGeant() {
  const pg = $('[data-effet="prix-geant"]');
  if (!pg) return;
  const points = $$('[data-pg]', pg), montant = $('[data-pg-montant]', pg), dest = $('[data-pg-dest]', pg), duree = $('[data-pg-duree]', pg);
  let i = 0, minuterie = 0;
  const montrer = (k) => {
    i = (k + points.length) % points.length;
    const p = points[i];
    points.forEach((x, j) => x.classList.toggle('actif', j === i));
    rouler(montant, p.dataset.prixV); rouler(dest, `Paris ↔ ${p.dataset.nom}`); rouler(duree, p.dataset.duree);
  };
  const lancer = () => { clearInterval(minuterie); minuterie = setInterval(() => { if (!document.hidden) montrer(i + 1); }, 2600); };
  quand('pret', () => {
    new IntersectionObserver((e) => { if (e[0].isIntersecting) lancer(); else clearInterval(minuterie); }).observe(pg);
  });
  /* Au défilement, le bloc remonte un peu sur l'image. */
  if (gsap && ST) gsap.to(pg, { y: -40, ease: 'none', scrollTrigger: { trigger: pg.closest('section'), start: 'top top', end: 'bottom top', scrub: .5 } });
}

/* ---------- silhouettes : les véhicules roulent jusqu'à leur place ---------- */
function silhouettes() {
  if (!gsap || !ST) return;
  $$('.vehicule-dessin, .flotte-rang-dessin').forEach((d, i) => {
    d.dataset.effet = 'silhouettes';
    gsap.fromTo(d, { x: -70 - (i % 3) * 20 }, { x: 12, ease: 'none', scrollTrigger: { trigger: d, start: 'top bottom', end: 'bottom top', scrub: .6 } });
  });
  /* Ouverture de la flotte : le trio doré glisse au défilement. */
  const trio = $('.ouv-bandeau-trio');
  if (trio) gsap.to(trio, { x: 60, ease: 'none', scrollTrigger: { trigger: trio.closest('section'), start: 'top top', end: 'bottom top', scrub: .5 } });
}
function trioOuverture(tl, t0 = 0) {
  const trio = $('.ouv-bandeau-trio');
  if (!trio || !gsap) return;
  const traits = $$('path, circle', trio);
  traits.forEach((p) => { const l = p.getTotalLength ? p.getTotalLength() : 400; p.style.strokeDasharray = l; p.style.strokeDashoffset = l; });
  const f = () => gsap.to(traits, { strokeDashoffset: 0, duration: 1.4, stagger: .015, ease: 'power2.out' });
  if (tl) tl.call(f, null, t0); else f();
}

/* ---------- choix-vehicule : combien êtes-vous ? ---------- */
function choix() {
  const form = $('[data-choix]');
  if (!form) return;
  const liste = $$('.choix-vehicule');
  const majour = () => {
    const p = valeur(form, 'passagers'), v = valeur(form, 'valises'), van = p > 3 || v > 3;
    liste.forEach((li) => li.classList.toggle('conseille', van ? li.dataset.vehicule === 'classe-v' : li.dataset.vehicule !== 'classe-v'));
  };
  compteurs(form, majour);
  if (gsap && ST && matchMedia('(min-width: 1000px)').matches) liste.forEach((li, i) => gsap.fromTo(li, { x: 24 + i * 12 }, { x: 0, ease: 'none', scrollTrigger: { trigger: li, start: 'top bottom', end: 'top 60%', scrub: .5 } }));
}

/* ---------- FAQ : ouverture et fermeture en douceur ---------- */
function faq() {
  $$('.faq-item').forEach((d) => {
    const s = $('summary', d), r = $('.faq-reponse', d);
    s.addEventListener('click', (e) => {
      if (!gsap) return;
      e.preventDefault();
      if (d.open) {
        gsap.fromTo(r, { height: r.offsetHeight }, { height: 0, duration: .35, ease: 'power2.inOut', onComplete: () => { d.open = false; gsap.set(r, { clearProps: 'height' }); rafraichir(); } });
      } else {
        d.open = true;
        gsap.fromTo(r, { height: 0 }, { height: r.scrollHeight, duration: .45, ease: 'power3.out', onComplete: () => { gsap.set(r, { clearProps: 'height' }); rafraichir(); } });
      }
    });
  });
}

/* ---------- Réservation : préremplissage, date minimale, récapitulatif ---------- */
async function reservation() {
  const sec = $('[data-module="formulaire-par-etapes"]');
  if (!sec) return;
  const form = $('form', sec), params = new URLSearchParams(location.search);
  params.forEach((v, k) => $$(`[name="${CSS.escape(k)}"]`, form).forEach((c) => { if (c.type === 'radio') c.checked = c.value === v; else c.value = v; }));
  const d = $('[data-date-min]', form);
  if (d) { const j = new Date(); d.min = new Date(j.getTime() - j.getTimezoneOffset() * 60000).toISOString().slice(0, 10); }
  const trajets = { orly: 60, cdg: 70, gares: 45, disneyland: 85, beauvais: 140 };
  const majour = () => {
    const r = $('input[name="trajet"]:checked', form);
    const p = $('[name="passagers"]', form).value, b = $('[name="bagages"]', form).value, veh = $('[name="vehicule"]', form);
    const van = p === 'plus' || +p > 3 || b === 'volumineux' || veh.value === 'classe-v';
    $('[data-recap-dest]').textContent = r ? r.closest('label').querySelector('.fpe__carte-titre').textContent : 'Choisissez un trajet';
    $('[data-recap-prix]').textContent = r && trajets[r.value] && !van ? `${trajets[r.value]} €` : r ? 'Tarif confirmé à la réservation' : '—';
    $('[data-recap-prix]').classList.toggle('recap-demande', !(r && trajets[r.value] && !van));
    $('[data-recap-vehicule]').textContent = veh.value ? veh.selectedOptions[0].textContent : van ? 'Mercedes Classe V' : 'Tesla Model Y ou Classe E';
  };
  form.addEventListener('change', majour); form.addEventListener('input', majour); majour();
  try {
    const { init } = await import('./modules/formulaire-par-etapes/module.js?v=1');
    await init(sec, { messages: { etape: 'Étape {n} sur {total}' } });
    sec.addEventListener('formulaire:envoye', () => { const fin = $('.fpe__fin', sec); fin && fin.scrollIntoView({ block: 'center' }); });
  } catch (err) { console.error('[réservation]', err); }
}

async function planches() {
  const sec = $('[data-module="planches-empilees"]');
  if (!sec) return;
  try { const { init } = await import('./modules/planches-empilees/module.js?v=1'); await init(sec, { voile: .5 }); } catch (err) { console.error('[planches]', err); }
}

/* ---------- Intro : deux phares s'allument, glissent jusqu'au titre de la page, et l'ouvrent ---------- */
function introPhares(tl) {
  tl.fromTo('.phare', { opacity: 0, scale: .4 }, { opacity: 1, scale: 1, duration: .55, stagger: .12, ease: 'power3.out' }, .05)
    .fromTo('.ouverture-nom', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .4 }, .2)
    .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: .3 }, .3)
    .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, duration: .25 }, .78);
  versObjet(tl, { a: .85, duree: .5, ouverture: .8, echelleMax: 1.1 });
}
/* Accueil : le titre se révèle de gauche à droite, comme éclairé, puis le reste monte. */
function arriveeAccueil(tl, t0) {
  if (!$('.hero')) return;
  tl.fromTo('.hero-media picture', { scale: 1.12 }, { scale: 1, duration: 1.6, ease: 'power2.out' }, t0 - .3)
    .fromTo('.hero-titre', { opacity: 1, clipPath: 'inset(-10% 100% -20% 0)' }, { opacity: 1, clipPath: 'inset(-10% 0% -20% 0)', duration: .9, ease: 'power3.inOut' }, t0)
    .fromTo('.hero-anim', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .55, stagger: .07, ease: 'power3.out' }, t0 + .25);
}
/* Pages intérieures : un geste d'ouverture propre à chacune. */
function arriveePages(tl, t0) {
  if ($('[data-effet="rideau-ouverture"]')) tl.fromTo('[data-effet="rideau-ouverture"]', { clipPath: 'inset(8% 8% 8% 8% round 24px)' }, { clipPath: 'inset(0% 0% 0% 0% round 24px)', duration: 1.1, ease: 'power3.inOut' }, t0 - .2);
  if ($('.numero-geant')) tl.fromTo('.numero-geant .chiffre', { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .5, stagger: .04, ease: 'power3.out' }, t0 + .1);
  if ($('.garanties')) tl.fromTo('.garanties li', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .1 }, t0 + .2);
  trioOuverture(tl, t0);
}

demarrer({
  preparer() {
    trainees(); tableau(); estimateurs(); pancartes(); cartes(); prixGeant(); silhouettes(); choix(); faq();
    reservation(); planches();
    /* Les images de section qui défilent sous les textes (services) se déplacent un peu au défilement. */
    if (gsap && ST && $('[data-effet="rideau-ouverture"]')) gsap.to('[data-effet="rideau-ouverture"] img', { yPercent: 6, scale: 1.04, ease: 'none', scrollTrigger: { trigger: '.ouv-plein', start: 'top top', end: 'bottom top', scrub: .5 } });
    if (gsap && ST && $('.numero-geant')) gsap.to('.numero-geant', { x: -30, ease: 'none', scrollTrigger: { trigger: '.ouv-scindee', start: 'top top', end: 'bottom top', scrub: .5 } });
    if (gsap && ST && $('.garanties')) gsap.to('.garanties', { y: -24, ease: 'none', scrollTrigger: { trigger: '.ouv-vitre', start: 'top top', end: 'bottom top', scrub: .5 } });
    if (gsap && ST && $('.hero-titre')) gsap.to('.hero-contenu', { y: -60, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .4 } });
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    introPhares(tl);
    arriveeAccueil(tl, 1.45);
    arriveePages(tl, 1.5);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-titre, .hero-anim, .numero-geant .chiffre, .garanties li', { clearProps: 'opacity,transform,clipPath' });
    gsap.set('[data-effet="rideau-ouverture"]', { clearProps: 'clipPath' });
    $$('.ouv-bandeau-trio path, .ouv-bandeau-trio circle').forEach((p) => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; });
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: .1 });
    arriveeAccueil(tl, 0);
    arriveePages(tl, .05);
  },
});
