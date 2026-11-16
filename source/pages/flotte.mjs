/* Flotte · ouverture « grand titre puis bandeau » : le titre en très grand, puis un bandeau d'image sous lequel
   la silhouette dorée de la berline se dessine et roule (effet silhouettes). Puis les 3 véhicules, le choix, le confort. */
import { html, brut } from '../../outils/gabarit.mjs';
import { silhouette, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'flotte', fichier: 'flotte', imagePartage: 'grok/flotte-ouverture-1280.webp' };

export default (c) => html`
<section class="ouv-bandeau" id="debut" aria-labelledby="flotte-titre">
  <div class="conteneur ouv-bandeau-tete">
    <p class="surtitre" data-anime>${c.t('commun.surtitre')}</p>
    <h1 id="flotte-titre" data-anime="lignes">${c.tb('flotte.titre')}</h1>
    <div class="ouv-bandeau-ligne">
      <p class="masque-ecran-tres-bas" data-anime>${c.t('flotte.texte')}</p>
      <p class="hero-actions" data-anime>${c.lien('reserver', { classe: 'bouton', texte: c.t('flotte.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="hero-info" data-info-cle data-anime><span class="point-vert" aria-hidden="true"></span>${c.t('flotte.info')}</p>
    </div>
  </div>
  <div class="ouv-bandeau-image" data-iris-centre>
    ${c.media({ nom: 'grok/flotte-ouverture', alt: c.s('flotte.alt'), cadrage: '60% 55%', priorite: true, classe: 'ouv-bandeau-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
    <div class="ouv-bandeau-trio" data-effet="silhouettes-ouverture" aria-hidden="true">${['suv', 'berline', 'van'].map((f) => silhouette(f, { trace: false }))}</div>
  </div>
</section>

<section class="flotte-liste fond-ivoire" id="vehicules" aria-labelledby="liste-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('flotte.liste.surtitre')}</p>
      <h2 id="liste-titre" data-anime="lignes">${c.tb('flotte.liste.titre')}</h2>
    </div>
    <div class="flotte-rangs" data-effet="silhouettes">${c.donnees.vehicules.map((v, i) => html`<article class="flotte-rang" id="${v.cle}" data-vehicule="${v.cle}">
      <div class="flotte-rang-dessin">${silhouette(v.forme, { label: v.nom })}</div>
      <div class="flotte-rang-texte">
        <p class="surtitre">${String(i + 1).padStart(2, '0')} · ${v.categorie}</p>
        <h3>${v.nom}</h3>
        <dl class="vehicule-chiffres vehicule-chiffres--grand"><div><dt>${c.t('flotte.liste.passagers')}</dt><dd>${v.passagers}</dd></div><div><dt>${c.t('flotte.liste.valises')}</dt><dd>${v.valises}</dd></div></dl>
        ${v.badge ? html`<p class="badge">${v.badge}</p>` : ''}
        ${c.lien('reserver', { params: `vehicule=${v.cle}`, classe: 'lien-fleche', texte: html`Réserver ce véhicule<span class="visuellement-cache"> : ${v.nom}</span>` })}
      </div>
      ${v.photo ? c.media({ nom: v.photo, alt: v.photoAlt, classe: 'flotte-rang-photo', sizes: '(max-width: 760px) 50vw, 240px', legende: c.s('flotte.liste.photo'), attrs: 'data-anime="rideau"' }) : ''}
    </article>`)}</div>
  </div>
</section>

<section class="choix" id="choix" aria-labelledby="choix-titre">
  <div class="conteneur choix-grille">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('flotte.choix.surtitre')}</p>
      <h2 id="choix-titre" data-anime="lignes">${c.tb('flotte.choix.titre')}</h2>
      <p data-anime>${c.t('flotte.choix.texte')}</p>
      <form class="choix-form" data-choix data-anime>
        ${[['passagers', 2, 1, 7], ['valises', 2, 0, 7]].map(([n, v, min, max]) => html`<fieldset class="estim-compteur" data-compte="${n}" data-min="${min}" data-max="${max}">
          <legend>${c.t('estim.' + n)}</legend>
          <div class="compteur-ligne"><button type="button" class="compteur-bouton" data-moins aria-label="${c.s('estim.moins')} (${n})">−</button><output class="compteur-valeur" aria-live="polite">${v}</output><button type="button" class="compteur-bouton" data-plus aria-label="${c.s('estim.plus')} (${n})">+</button></div>
        </fieldset>`)}
      </form>
    </div>
    <ul class="choix-vehicules" role="list" data-effet="choix-vehicule" data-visuel>${c.donnees.vehicules.map((v) => html`<li class="choix-vehicule" data-vehicule="${v.cle}" data-pmax="${v.pmax}" data-vmax="${v.valises}">
      ${silhouette(v.forme, { trace: false })}
      <div class="choix-texte"><p><strong>${v.nom}</strong> · ${v.passagers} passagers · ${v.valises} valises</p><span class="choix-conseil">${c.t('flotte.choix.conseil')}</span></div>
    </li>`)}</ul>
  </div>
</section>

<section class="confort fond-ivoire" id="confort" aria-labelledby="confort-titre">
  <div class="conteneur confort-grille">
    ${c.media({ nom: 'grok/flotte-cuir', alt: c.s('flotte.confort.alt'), classe: 'confort-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="surtitre" data-anime>${c.t('flotte.confort.surtitre')}</p>
      <h2 id="confort-titre" data-anime="lignes">${c.tb('flotte.confort.titre')}</h2>
      <ul class="confort-liste" role="list" data-anime="cascade">${c.donnees.contenus.flotte.confort.points.map(([t, d]) => html`<li><h3>${t}</h3><p>${d}</p></li>`)}</ul>
    </div>
  </div>
</section>

${appel(c, { image: 'grok/accueil-appel' })}
`;
