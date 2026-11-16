/* Services · ouverture plein cadre (image de l'hôtel, titre en bas à gauche, rideau qui s'ouvre : effet rideau-ouverture),
   puis les 6 services en planches empilées (module planches-empilees), l'accueil à l'aéroport en 3 étapes, l'appel. */
import { html, brut } from '../../outils/gabarit.mjs';
import { appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'services', fichier: 'services', imagePartage: 'grok/services-ouverture-1280.webp' };

export default (c) => html`
<section class="ouv-plein" id="debut" aria-labelledby="services-titre">
  ${c.media({ nom: 'grok/services-ouverture', alt: c.s('services.alt'), cadrage: '68% 50%', cadrageMobile: '50% 70%', priorite: true, classe: 'ouv-plein-media', sizes: '100vw', attrs: 'data-effet="rideau-ouverture"' })}
  <div class="ouv-plein-voile" aria-hidden="true"></div>
  <div class="conteneur ouv-plein-contenu">
    <p class="surtitre">${c.t('commun.surtitre')}</p>
    <h1 id="services-titre" data-anime="lignes" data-iris-centre>${c.tb('services.titre')}</h1>
    <p class="masque-ecran-tres-bas">${c.t('services.texte')}</p>
    <p class="hero-actions">${c.lien('reserver', { classe: 'bouton', texte: c.t('services.action'), attrs: 'data-action-principale data-survol="magnetique"' })}<a class="bouton bouton--contour" href="#liste">Voir les 6 services</a></p>
    <p class="hero-info" data-info-cle><span class="point-vert" aria-hidden="true"></span>${c.t('services.info')}</p>
  </div>
</section>

<section class="ple" id="liste" data-module="planches-empilees" aria-labelledby="liste-titre">
  <div class="ple__tete conteneur">
    <p class="surtitre" data-anime>${c.t('services.liste.surtitre')}</p>
    <h2 class="ple__titre" id="liste-titre" data-anime="lignes">${c.tb('services.liste.titre')}</h2>
  </div>
  <div class="ple__pile conteneur" data-effet="planches">
    ${c.donnees.services.map((s, i, tous) => html`<article class="ple__planche" id="${s.cle}" data-tient aria-labelledby="ple-t-${s.cle}">
      <div class="ple__contenu">
        <p class="ple__cartouche"><span>${String(i + 1).padStart(2, '0')} / ${String(tous.length).padStart(2, '0')}</span><span>${s.court}</span></p>
        <h3 class="ple__nom" id="ple-t-${s.cle}">${s.titre}</h3>
        <p class="ple__texte">${s.texte}</p>
        <ul class="ple__liste">${s.inclus.map((x) => html`<li>${x}</li>`)}</ul>
        <p class="ple__liens">${s.liens.map(([t, l]) => c.lien('reserver', { params: `trajet=${t}`, classe: 'ple__lien bouton bouton--contour', texte: s.liens.length > 1 ? html`${l}<span class="visuellement-cache"> : réserver</span>` : html`${l}<span class="visuellement-cache"> : ${s.titre}</span>` }))}</p>
      </div>
      ${c.media({ nom: s.image, alt: s.alt, classe: 'ple__visuel', sizes: '(max-width: 760px) 100vw, 45vw' })}
    </article>`)}
  </div>
</section>

<section class="etapes-aeroport fond-ivoire" id="accueil-aeroport" aria-labelledby="aeroport-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('services.aeroport.surtitre')}</p>
      <h2 id="aeroport-titre" data-anime="lignes">${c.tb('services.aeroport.titre')}</h2>
    </div>
    <div class="etapes-grille">
      <svg class="etapes-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 20 C 200 4, 300 36, 500 20 S 800 4, 990 20" data-fx-trait/></svg>
      <ol class="etapes-liste" role="list" data-anime="cascade" data-visuel>${c.donnees.contenus.services.aeroport.etapes.map(([t, d], i) => html`<li class="etape"><span class="etape-num">${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`)}</ol>
    </div>
    <p class="lien-suite" data-anime>${c.lien('reserver', { params: 'trajet=cdg', classe: 'bouton bouton--sombre', texte: 'Réserver un transfert Roissy CDG' })} ${c.lien('reserver', { params: 'trajet=orly', classe: 'bouton bouton--contour', texte: 'Réserver un transfert Orly' })}</p>
  </div>
</section>

${appel(c, { image: 'grok/accueil-appel' })}
`;
