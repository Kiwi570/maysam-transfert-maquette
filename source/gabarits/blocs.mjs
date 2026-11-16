/* Blocs communs aux pages de Maysam Transfert : tableau des départs, estimateur, carte des trajets,
   silhouettes des véhicules, FAQ, appel final. Mêmes composants sur tout le site (un seul système). */
import { html, brut } from '../../outils/gabarit.mjs';

export const euros = (n) => `${n} €`;

/* Silhouettes dessinées (traits dorés) : aucun faux véhicule photographié. */
const CORPS = {
  berline: {
    corps: 'M22 106 C20 98 22 92 30 89 L110 79 C130 66 150 54 168 50 L252 47 C272 49 290 62 312 76 L368 82 C376 84 380 92 378 104 L331 106 A26 26 0 0 0 279 106 L121 106 A26 26 0 0 0 69 106 Z',
    vitres: 'M170 56 L250 53 C266 56 280 64 296 75 L150 75 C158 66 164 60 170 56 Z M222 54 L222 75',
    ligne: 'M40 92 L360 92', roues: [[95, 106, 20], [305, 106, 20]],
  },
  suv: {
    corps: 'M22 104 C20 92 24 84 34 80 L112 72 C134 56 156 42 178 38 L262 37 C300 42 330 58 360 72 C374 76 380 86 378 102 L333 104 A28 28 0 0 0 277 104 L123 104 A28 28 0 0 0 67 104 Z',
    vitres: 'M180 45 L260 44 C288 48 310 58 332 70 L150 70 C160 58 170 50 180 45 Z M228 44 L228 70',
    ligne: 'M38 88 L362 88', roues: [[95, 104, 22], [305, 104, 22]],
  },
  van: {
    corps: 'M20 104 C18 90 20 80 30 76 L70 70 C80 52 90 36 104 30 L350 28 C366 28 374 36 376 50 L380 100 L335 104 A26 26 0 0 0 283 104 L121 104 A26 26 0 0 0 69 104 Z',
    vitres: 'M108 38 L175 36 L175 66 L84 66 C92 52 100 44 108 38 Z M185 36 L268 35 L268 66 L185 66 Z M278 35 L352 34 C360 34 364 40 365 48 L366 66 L278 66 Z',
    ligne: 'M30 84 L376 84', roues: [[95, 104, 20], [309, 104, 20]],
  },
};
export function silhouette(forme, { classe = '', trace = true, label = '', cache = false } = {}) {
  const f = CORPS[forme] || CORPS.berline;
  return html`<svg class="silhouette ${classe}" viewBox="0 0 400 140" data-forme="${forme}" ${brut(label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"')}${brut(trace ? ' data-fx="trace"' : '')}${brut(cache ? ' hidden' : '')} data-visuel>
  <path class="silhouette-sol" d="M10 128 L390 128" data-fx-trait/>
  <path class="silhouette-corps" d="${f.corps}" data-fx-trait/>
  <path class="silhouette-vitres" d="${f.vitres}" data-fx-trait/>
  <path class="silhouette-ligne" d="${f.ligne}" data-fx-trait/>
  ${f.roues.map(([x, y, r]) => html`<circle class="silhouette-roue" cx="${x}" cy="${y}" r="${r}" data-fx-trait/><circle class="silhouette-jante" cx="${x}" cy="${y}" r="${Math.round(r * 0.45)}" data-fx-trait/>`)}
</svg>`;
}

/* Tableau des départs : palettes qui tournent (effet tableau-departs). Sans JavaScript : le texte final. */
const cases = (texte, n, classe = '') => {
  const t = texte.toUpperCase().padEnd(n, ' ').slice(0, n);
  return html`<span class="flaps ${classe}" aria-hidden="true" data-flaps="${t}">${[...t].map((ch) => html`<span class="flap">${ch === ' ' ? brut('&nbsp;') : ch}</span>`)}</span>`;
};
export function tableau(c, { titreId = 'tableau-titre' } = {}) {
  const T = c.donnees.trajets;
  return html`<div class="tableau" data-effet="tableau-departs" role="table" aria-labelledby="${titreId}">
  <div class="tableau-entete" role="row"><span role="columnheader">Destination</span><span role="columnheader">Durée</span><span role="columnheader">Prix</span><span role="columnheader"><span class="visuellement-cache">Réserver</span></span></div>
  ${T.map((t) => html`<div class="tableau-ligne" role="row">
    <span role="cell" class="tableau-dest">${cases(t.court, 10)}<span class="visuellement-cache">${t.nom}</span></span>
    <span role="cell" class="tableau-duree">${cases(t.duree.replace('–', '-').replace(' min', ''), 5, 'flaps--petit')}<span class="tableau-unite" aria-hidden="true">min</span><span class="visuellement-cache">${t.duree}</span></span>
    <span role="cell" class="tableau-prix" data-prix>${cases((String(t.prix) + '€').padStart(4, ' '), 4, 'flaps--or')}<span class="visuellement-cache">${euros(t.prix)}</span></span>
    <span role="cell" class="tableau-action">${c.lien('reserver', { params: `trajet=${t.cle}`, classe: 'bouton bouton--petit', texte: html`Réserver<span class="visuellement-cache"> ${t.nom}</span>` })}</span>
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
      <div class="estim-vehicule">${silhouette('berline', { classe: 'estim-silhouette', trace: false })}${silhouette('van', { classe: 'estim-silhouette', trace: false, cache: true })}<p class="estim-vehicule-nom" data-estim-vehicule>${c.t('estim.petit')}</p></div>
      <p class="estim-prix" data-prix><span class="estim-montant" data-estim-montant>${t0.prix}</span><span class="estim-devise"> €</span></p>
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
  <svg class="carte-svg" viewBox="0 0 640 430" role="img" aria-label="${c.s('trajets.carte.schema')}" data-fx="trace" data-visuel>
    <defs><radialGradient id="${id}-halo"><stop offset="0" stop-color="#C9A45C" stop-opacity=".45"/><stop offset="1" stop-color="#C9A45C" stop-opacity="0"/></radialGradient></defs>
    <path class="carte-idf" data-superpose d="M120 70 C190 22 330 18 430 52 C520 80 600 150 606 240 C612 320 548 392 440 410 C330 428 200 414 128 360 C60 310 40 220 64 150 C76 112 96 88 120 70 Z" data-fx-trait/>
    <path class="carte-seine" data-superpose d="M40 300 C110 330 170 250 236 254 C270 256 286 236 300 240 C318 246 330 232 352 236 C410 248 452 310 520 318 C560 322 590 300 620 306" data-fx-trait/>
    <circle cx="${PARIS[0]}" cy="${PARIS[1]}" r="90" fill="url(#${id}-halo)" data-superpose/>
    <circle class="carte-peripherique" data-superpose cx="${PARIS[0]}" cy="${PARIS[1]}" r="30" data-fx-trait/>
    ${T.map((t) => html`<path class="carte-route" id="${id}-r-${t.cle}" d="${route(t)}" data-route="${t.cle}" data-superpose data-fx-trait/>`)}
    ${T.map((t, i) => html`<circle class="carte-voiture" r="5" data-superpose><animateMotion dur="${(3 + i * 0.4).toFixed(1)}s" begin="${i * 0.7}s" repeatCount="indefinite" rotate="auto"><mpath href="#${id}-r-${t.cle}"/></animateMotion></circle>`)}
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
