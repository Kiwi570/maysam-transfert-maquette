/* Blocs communs aux pages de Maysam Transfert : tableau des départs, estimateur, carte des trajets,
   silhouettes des véhicules, FAQ, appel final. Mêmes composants sur tout le site (un seul système). */
import { html, brut } from '../../outils/gabarit.mjs';

export const euros = (n) => `${n} €`;

/* Silhouettes dessinées (traits dorés) : aucun faux véhicule photographié. Elles regardent vers la droite,
   arrivent en roulant (roues qui tournent, effet silhouettes) et allument leurs phares. */
const CORPS = {
  berline: {
    corps: 'M18 112 C16 104 18 96 26 93 L66 88 C80 86 96 84 112 80 C130 66 150 56 172 52 C196 48 228 47 254 49 C276 51 296 62 316 76 C332 78 352 80 366 84 C376 87 382 94 382 104 L382 110 L334 112 A27 27 0 0 0 280 112 L122 112 A27 27 0 0 0 68 112 Z',
    vitres: 'M176 58 C196 54 226 53 250 55 C266 57 282 66 296 76 L226 76 L226 58 Z M168 60 L220 57 L220 76 L144 76 C150 70 158 64 168 60 Z',
    lignes: 'M222 80 L222 108 M148 80 C149 92 148 100 146 108 M70 93 L372 90 M300 84 L312 84',
    phare: 'M20 96 C26 93 36 92 44 94', feu: 'M372 86 L380 88 L380 96', yPhare: 96,
    roues: [[95, 112, 21], [307, 112, 21]],
  },
  suv: {
    corps: 'M18 110 C16 98 20 90 30 86 L64 82 C82 80 100 76 116 70 C136 56 158 44 182 40 C208 36 240 36 266 40 C300 46 330 60 356 74 C372 78 382 88 382 100 L382 108 L336 110 A29 29 0 0 0 278 110 L124 110 A29 29 0 0 0 66 110 Z',
    vitres: 'M186 47 C210 43 238 43 262 46 C284 50 304 58 324 70 L230 70 L230 46 Z M178 49 L224 46 L224 70 L148 70 C156 60 166 53 178 49 Z',
    lignes: 'M227 74 L227 106 M150 74 C151 88 150 98 148 106 M70 89 L372 86 M300 78 L312 78',
    phare: 'M20 92 C28 89 38 88 46 90', feu: 'M372 82 L380 85 L381 94', yPhare: 92,
    roues: [[95, 110, 23], [307, 110, 23]],
  },
  van: {
    corps: 'M16 108 C14 96 16 86 26 82 L56 76 C66 58 78 40 96 32 C110 28 130 27 150 27 L344 26 C362 26 372 34 374 48 L380 98 L380 106 L334 108 A26 26 0 0 0 282 108 L120 108 A26 26 0 0 0 68 108 Z',
    vitres: 'M100 38 C112 34 130 33 150 33 L178 33 L178 64 L72 64 C80 52 88 44 100 38 Z M188 33 L262 33 L262 64 L188 64 Z M272 33 L348 33 C358 33 364 40 365 50 L366 64 L272 64 Z',
    lignes: 'M184 70 L184 104 M268 70 L268 104 M28 79 L376 77 M200 74 L214 74',
    phare: 'M18 90 C24 87 32 86 40 88', feu: 'M372 54 L378 56 L379 70', yPhare: 90,
    roues: [[94, 108, 21], [308, 108, 21]],
  },
};
const rayons = (x, y, r) => [0, 72, 144, 216, 288].map((a) => { const t = (a * Math.PI) / 180; return `M${x} ${y} L${(x + Math.cos(t) * r * 0.62).toFixed(1)} ${(y + Math.sin(t) * r * 0.62).toFixed(1)}`; }).join(' ');
export function silhouette(forme, { classe = '', label = '', cache = false } = {}) {
  const f = CORPS[forme] || CORPS.berline;
  return html`<svg class="silhouette ${classe}" viewBox="0 0 400 150" data-forme="${forme}" ${brut(label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"')}${brut(cache ? ' hidden' : '')} data-visuel>
  <ellipse class="silhouette-ombre" cx="200" cy="126" rx="178" ry="7"/>
  <g transform="translate(400 0) scale(-1 1)">
    <path class="silhouette-sol" d="M-20 128 L420 128" data-trait/>
    <path class="silhouette-corps" d="${f.corps}" data-trait/>
    <path class="silhouette-vitres" d="${f.vitres}" data-trait/>
    <path class="silhouette-lignes" d="${f.lignes}" data-trait/>
    <path class="silhouette-feu" d="${f.feu}" data-trait/>
    <g class="silhouette-halo"><circle cx="30" cy="${f.yPhare}" r="30"/><circle cx="30" cy="${f.yPhare}" r="18"/><circle cx="30" cy="${f.yPhare}" r="9"/></g>
    <path class="silhouette-phare" d="${f.phare}" data-trait/>
    ${f.roues.map(([x, y, r]) => html`<g class="silhouette-roue-g"><circle class="silhouette-roue" cx="${x}" cy="${y}" r="${r}" data-trait/><circle class="silhouette-jante" cx="${x}" cy="${y}" r="${Math.round(r * 0.62)}" data-trait/><path class="silhouette-rayons" d="${rayons(x, y, r)}" data-trait/></g>`)}
  </g>
</svg>`;
}

/* Tableau des départs : palettes qui tournent (effet tableau-departs). Sans JavaScript : le texte final. */
const cases = (texte, n, classe = '') => {
  const t = texte.toUpperCase().padEnd(n, ' ').slice(0, n);
  return html`<span class="flaps ${classe}" aria-hidden="true" data-flaps="${t}">${[...t].map((ch) => html`<span class="flap">${ch === ' ' ? brut('&nbsp;') : ch}</span>`)}</span>`;
};
export function tableau(c, { titreId = 'tableau-titre' } = {}) {
  const T = c.donnees.trajets;
  return html`<div class="tableau" data-effet="tableau-departs" role="table" aria-labelledby="${titreId}" data-visuel>
  <div class="tableau-entete" role="row"><span role="columnheader">Destination</span><span role="columnheader">Durée</span><span role="columnheader">Prix</span><span role="columnheader"><span class="visuellement-cache">Réserver</span></span></div>
  ${T.map((t) => html`<div class="tableau-ligne" role="row">
    <span role="cell" class="tableau-dest">${cases(t.court, 10)}<span class="visuellement-cache">${t.nom}</span></span>
    <span role="cell" class="tableau-duree">${cases(t.duree.replace('–', '-').replace(' min', ''), 5, 'flaps--petit')}<span class="tableau-unite" aria-hidden="true">min</span><span class="visuellement-cache">${t.duree}</span></span>
    <span role="cell" class="tableau-prix" data-prix>${cases((String(t.prix) + '€').padStart(4, ' '), 4, 'flaps--or')}<span class="visuellement-cache">${euros(t.prix)}</span></span>
    <span role="cell" class="tableau-action">${c.lien('reserver', { params: `trajet=${t.cle}`, classe: 'bouton bouton--petit', texte: html`Réserver<span class="visuellement-cache"> ${t.nom}</span><span class="fleche" aria-hidden="true">→</span>` })}</span>
  </div>`)}
</div>`;
}

/* Estimateur : trajet, passagers, valises → véhicule et prix (effet estimateur). */
export function estimateur(c, { id = 'estimation' } = {}) {
  const T = c.donnees.trajets, t0 = T[0];
  return html`<section class="estim fond-ivoire" id="${id}" aria-labelledby="${id}-titre">
  <div class="conteneur estim-grille">
    <div class="estim-tete">
      <p class="surtitre" data-anime>${c.t('estim.surtitre')}</p>
      <h2 id="${id}-titre" data-anime="lignes">${c.tb('estim.titre')}</h2>
      <p data-anime>${c.t('estim.texte')}</p>
    </div>
    <form class="estim-form" data-estimateur action="${c.url('reserver')}" method="get">
      <fieldset class="estim-trajets">
        <legend>${c.t('estim.trajet')}</legend>
        <div class="estim-choix-liste" data-anime="cascade">${T.map((t, i) => html`<label class="estim-choix">
          <input type="radio" name="trajet" value="${t.cle}" data-prix="${t.prix}" data-duree="${t.duree}"${i === 0 ? brut(' checked') : ''}>
          <span class="estim-choix-nom">${t.nom}</span><span class="estim-choix-prix">${euros(t.prix)}</span>
        </label>`)}</div>
      </fieldset>
      <div class="estim-compteurs">
        ${[['passagers', 1, 1, 7], ['valises', 1, 0, 7]].map(([n, v, min, max]) => html`<fieldset class="estim-compteur" data-compte="${n}" data-min="${min}" data-max="${max}">
          <legend>${c.t('estim.' + n)}</legend>
          <div class="compteur-ligne">
            <button type="button" class="compteur-bouton" data-moins aria-label="${c.s('estim.moins')} (${c.s('estim.' + n).toLowerCase()})">−</button>
            <output class="compteur-valeur" aria-live="polite">${v}</output>
            <button type="button" class="compteur-bouton" data-plus aria-label="${c.s('estim.plus')} (${c.s('estim.' + n).toLowerCase()})">+</button>
            <input type="hidden" name="${n === 'valises' ? 'bagages-n' : 'passagers'}" value="${v}">
          </div>
        </fieldset>`)}
      </div>
    </form>
    <div class="estim-resultat" aria-live="polite" data-estim-resultat>
      <p class="estim-label">${c.t('estim.vehicule')}</p>
      <div class="estim-vehicule">${silhouette('berline', { classe: 'estim-silhouette' })}${silhouette('van', { classe: 'estim-silhouette', cache: true })}<p class="estim-vehicule-nom" data-estim-vehicule>${c.t('estim.petit')}</p></div>
      <p class="estim-prix" data-prix><span class="estim-montant" data-estim-montant>${t0.prix}</span><span class="estim-devise"> €</span></p>
      <div class="estim-route" aria-hidden="true"><span class="estim-route-point">Paris</span><span class="estim-route-ligne"><span class="estim-route-trace"></span><svg class="estim-route-voiture" viewBox="0 0 40 18"><path d="M3 13 C3 10 4 9 7 8.5 L12 8 C15 5 18 3.5 22 3.5 L28 3.5 C31 4 34 6 36 8.5 C38 9 38.5 11 38 13 Z"/><circle cx="11" cy="13.5" r="3"/><circle cx="30" cy="13.5" r="3"/></svg></span><span class="estim-route-point" data-estim-arrivee>${t0.nom}</span></div>
      <p class="estim-duree" data-estim-duree>Paris ↔ ${t0.nom} · ${t0.duree}</p>
      <p class="estim-note" data-estim-note data-fixe="${c.s('estim.noteFixe')}" data-van="${c.s('estim.noteVan')}" data-max="${c.s('estim.max')}" data-surdemande="${c.s('estim.surDemande')}" data-petit="${c.s('estim.petit')}" data-grand="${c.s('estim.grand')}">${c.t('estim.noteFixe')}</p>
      ${c.lien('reserver', { params: `trajet=${t0.cle}&passagers=1`, classe: 'bouton', texte: c.t('estim.reserver'), attrs: 'data-estim-lien data-survol="magnetique"' })}
    </div>
  </div>
</section>`;
}

/* Carte des trajets : schéma de l'Île-de-France, routes tracées au défilement, pastille qui roule (effet carte-trajets). */
const PARIS = [300, 240];
const route = (t) => {
  const [x0, y0] = PARIS, dx = t.x - x0, dy = t.y - y0;
  const c1 = [x0 + dx * 0.35 - dy * 0.18, y0 + dy * 0.35 + dx * 0.18], c2 = [x0 + dx * 0.75 + dy * 0.08, y0 + dy * 0.75 - dx * 0.08];
  return `M${x0} ${y0} C${c1.map(Math.round).join(' ')} ${c2.map(Math.round).join(' ')} ${t.x} ${t.y}`;
};
export function carte(c, { id = 'carte', mode = 'trajets' } = {}) {
  const T = c.donnees.trajets;
  return html`<div class="carte carte--${mode}" data-effet="carte-trajets" data-carte>
  <svg class="carte-svg" viewBox="0 0 640 430" role="img" aria-label="${c.s('trajets.carte.schema')}" data-visuel>
    <defs><radialGradient id="${id}-halo"><stop offset="0" stop-color="#C9A45C" stop-opacity=".45"/><stop offset="1" stop-color="#C9A45C" stop-opacity="0"/></radialGradient></defs>
    <path class="carte-idf" data-superpose d="M120 70 C190 22 330 18 430 52 C520 80 600 150 606 240 C612 320 548 392 440 410 C330 428 200 414 128 360 C60 310 40 220 64 150 C76 112 96 88 120 70 Z" data-trait/>
    <path class="carte-seine" data-superpose d="M40 300 C110 330 170 250 236 254 C270 256 286 236 300 240 C318 246 330 232 352 236 C410 248 452 310 520 318 C560 322 590 300 620 306" data-trait/>
    <circle cx="${PARIS[0]}" cy="${PARIS[1]}" r="90" fill="url(#${id}-halo)" data-superpose/>
    <circle class="carte-peripherique" data-superpose cx="${PARIS[0]}" cy="${PARIS[1]}" r="30" data-trait/>
    ${T.map((t) => html`<path class="carte-route" id="${id}-r-${t.cle}" d="${route(t)}" data-route="${t.cle}" data-superpose data-trait/>`)}
    ${T.map((t, i) => html`<circle class="carte-voiture" r="5" data-superpose><animateMotion dur="${(3 + i * 0.4).toFixed(1)}s" begin="-${(i * 0.7).toFixed(1)}s" repeatCount="indefinite" rotate="auto"><mpath href="#${id}-r-${t.cle}"/></animateMotion></circle>`)}
    <circle class="carte-paris" cx="${PARIS[0]}" cy="${PARIS[1]}" r="9"/>
    <text class="carte-nom-paris" x="${PARIS[0] - 16}" y="${PARIS[1] + 54}">${c.t('trajets.carte.paris')}</text>
    ${T.map((t) => html`<g class="carte-point" data-route="${t.cle}" data-repere>
      <circle class="carte-point-rond" cx="${t.x}" cy="${t.y}" r="7"/>
      <text class="carte-etiquette" x="${t.lx}" y="${t.ly}" text-anchor="${t.ancre}"><tspan class="carte-etiquette-nom">${t.nom}</tspan><tspan class="carte-etiquette-prix" x="${t.lx}" dy="20">${euros(t.prix)} · ${t.duree}</tspan></text>
    </g>`)}
  </svg>
  ${mode === 'trajets' ? html`<ul class="carte-liste" role="list">${T.map((t, i) => html`<li><button type="button" class="carte-bouton" data-route="${t.cle}" aria-pressed="${i === 0 ? 'true' : 'false'}"><span class="carte-bouton-nom">${t.nom}</span><span class="carte-bouton-prix" data-prix>${euros(t.prix)}</span><span class="carte-bouton-duree">${t.duree}</span></button></li>`)}</ul>
  <div class="carte-detail" aria-live="polite" data-carte-detail>
    ${T.map((t, i) => html`<div class="carte-fiche" data-route="${t.cle}"${i ? brut(' hidden') : ''}>
      <p class="carte-fiche-lieu">${t.lieu}</p>
      <p class="carte-fiche-prix" data-prix>${euros(t.prix)}</p>
      <p class="carte-fiche-duree">Paris ↔ ${t.nom} · ${t.duree}</p>
      ${c.lien('reserver', { params: `trajet=${t.cle}`, classe: 'bouton', texte: html`Réserver<span class="visuellement-cache"> Paris ↔ ${t.nom}</span>` })}
    </div>`)}
  </div>` : ''}
</div>`;
}

/* FAQ : questions qui s'ouvrent en douceur. */
export function faq(c, { limite } = {}) {
  const F = limite ? c.donnees.faq.slice(0, limite) : c.donnees.faq;
  return html`<div class="faq-liste" data-anime="cascade">${F.map((f) => html`<details class="faq-item"><summary><span>${f.q}</span><span class="faq-signe" aria-hidden="true"></span></summary><div class="faq-reponse"><p>${f.r}</p></div></details>`)}</div>`;
}

/* Appel final, commun à toutes les pages. */
export function appel(c, { image = 'grok/accueil-appel', alt = 'Portière ouverte d\'une berline noire sur des pavés mouillés la nuit', id = 'appel' } = {}) {
  return html`<section class="appel" id="${id}" aria-labelledby="${id}-titre">
  ${c.media({ nom: image, alt, classe: 'appel-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="conteneur appel-contenu">
    <h2 id="${id}-titre" data-anime="lignes">${c.tb('appel.titre')}</h2>
    <p data-anime>${c.t('appel.texte')}</p>
    <p class="appel-actions" data-anime>
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('appel.reserver'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      <a class="bouton bouton--contour" href="${c.site.contact.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
    </p>
  </div>
</section>`;
}

/* Ouverture d'une page intérieure, composition au choix (chaque page a la sienne, voir les pages). */
export const surtitre = (c, cle = 'commun.surtitre') => html`<p class="surtitre">${c.t(cle)}</p>`;
