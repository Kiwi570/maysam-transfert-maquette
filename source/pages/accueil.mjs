/* Accueil · direction « Les phares dans la nuit ».
   Ouverture (phares, avenue de nuit, traînées) → tableau des départs → estimateur (ivoire) → services (galerie)
   → flotte (ivoire) → pancarte → témoignages → FAQ (ivoire) → appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { tableau, estimateur, silhouette, faq, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

export default (c) => html`
<section class="hero" id="debut" aria-labelledby="hero-titre">
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero.alt'), cadrage: '62% 50%', cadrageMobile: '50% 60%', priorite: true, classe: 'hero-media', sizes: '100vw' })}
  <canvas class="hero-trainees" data-trainees data-effet="phares" aria-hidden="true"></canvas>
  <div class="hero-voile" aria-hidden="true"></div>
  <div class="conteneur hero-contenu">
    <p class="surtitre hero-anim">${c.t('commun.surtitre')}</p>
    <h1 class="hero-titre" id="hero-titre" data-iris-centre>${c.tb('accueil.hero.titre')}</h1>
    <p class="hero-texte hero-anim masque-ecran-tres-bas">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions hero-anim">
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
    </p>
    <p class="hero-info hero-anim" data-info-cle><span class="point-vert" aria-hidden="true"></span>${c.t('accueil.hero.info')}</p>
    <ul class="hero-points hero-anim masque-ecran-bas" role="list">${c.donnees.contenus.accueil.hero.points.map((p) => html`<li>${p}</li>`)}</ul>
  </div>
</section>

<section class="departs" id="tarifs" aria-labelledby="tableau-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.tableau.surtitre')}</p>
      <h2 id="tableau-titre" data-anime="lignes">${c.tb('accueil.tableau.titre')}</h2>
      <p data-anime>${c.t('accueil.tableau.texte')}</p>
    </div>
    ${tableau(c)}
    <p class="lien-suite" data-anime>${c.lien('trajets', { classe: 'lien-fleche', texte: c.t('accueil.tableau.tous') })}</p>
  </div>
</section>

${estimateur(c)}

<section class="services-galerie ecran epingle" id="services" data-entete-cache data-fx="galerie" aria-labelledby="services-titre">
  <div class="conteneur services-tete">
    <div>
      <p class="surtitre">${c.t('accueil.services.surtitre')}</p>
      <h2 id="services-titre" data-anime="lignes">${c.tb('accueil.services.titre')}</h2>
    </div>
    <p class="masque-ecran-bas">${c.t('accueil.services.texte')} ${c.lien('services', { classe: 'lien-fleche', texte: c.t('accueil.services.tous') })}</p>
  </div>
  <div class="piste services-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.services.region')}" data-anime="cascade">
    ${c.donnees.services.map((s, i) => html`<article class="service-carte" id="service-${s.cle}" data-survol="incline" data-survol-force="4">
      ${c.media({ nom: s.image, alt: s.alt, classe: 'service-media', sizes: '(max-width: 760px) 80vw, 30vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
      <div class="service-texte">
        <p class="service-num">${String(i + 1).padStart(2, '0')} · ${s.court}</p>
        <h3>${s.titre}</h3>
        <p class="service-desc">${s.texte}</p>
        <p class="service-liens">${s.liens.map(([t, l]) => c.lien('reserver', { params: `trajet=${t}`, classe: 'lien-fleche', texte: s.liens.length > 1 ? l : html`${l}<span class="visuellement-cache"> : ${s.titre}</span>` }))}</p>
      </div>
    </article>`)}
  </div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
  <p class="glisser conteneur" aria-hidden="true">Faites glisser</p>
</section>

<section class="flotte-accueil fond-ivoire" id="vehicules" aria-labelledby="flotte-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.flotte.surtitre')}</p>
      <h2 id="flotte-titre" data-anime="lignes">${c.tb('accueil.flotte.titre')}</h2>
      <p data-anime>${c.t('accueil.flotte.texte')}</p>
    </div>
    <div class="vehicules-grille">${c.donnees.vehicules.map((v) => html`<article class="vehicule" data-vehicule="${v.cle}" data-survol="incline" data-survol-force="5">
      <div class="vehicule-dessin">${silhouette(v.forme, { label: v.nom })}</div>
      <h3>${v.nom}</h3>
      <p class="vehicule-categorie">${v.categorie}</p>
      <dl class="vehicule-chiffres"><div><dt>Passagers</dt><dd>${v.passagers}</dd></div><div><dt>Valises</dt><dd>${v.valises}</dd></div></dl>
    </article>`)}</div>
    <p class="lien-suite" data-anime>${c.lien('flotte', { classe: 'lien-fleche', texte: c.t('accueil.flotte.voir') })}</p>
  </div>
</section>

<section class="pancarte-section" id="pancarte" aria-labelledby="pancarte-titre">
  ${c.media({ nom: 'grok/accueil-hall', alt: c.s('accueil.pancarte.alt'), classe: 'pancarte-fond', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="conteneur pancarte-grille">
    <div class="pancarte-texte">
      <p class="surtitre" data-anime>${c.t('accueil.pancarte.surtitre')}</p>
      <h2 id="pancarte-titre" data-anime="lignes">${c.tb('accueil.pancarte.titre')}</h2>
      <p data-anime>${c.t('accueil.pancarte.texte')}</p>
      <ul class="liste-or" data-anime="cascade" role="list">${c.donnees.contenus.accueil.pancarte.points.map((p) => html`<li>${p}</li>`)}</ul>
      <div class="pancarte-essai" data-anime>
        <label for="pancarte-nom">${c.t('accueil.pancarte.essai')}</label>
        <input id="pancarte-nom" type="text" maxlength="28" autocomplete="name" placeholder="${c.s('accueil.pancarte.defaut')}" data-pancarte-saisie>
      </div>
    </div>
    <figure class="pancarte" data-effet="pancarte" data-pancarte aria-label="${c.s('accueil.pancarte.exemple')}" data-visuel>
      <div class="pancarte-carton">
        <img class="pancarte-logo" src="/assets/images/logo-entete.webp" alt="" width="71" height="72" loading="lazy">
        <p class="pancarte-marque">Maysam Transfert</p>
        <p class="pancarte-nom" data-pancarte-nom data-defaut="${c.s('accueil.pancarte.defaut')}">${c.t('accueil.pancarte.defaut')}</p>
      </div>
    </figure>
  </div>
</section>

<section class="temoignages" id="temoignages" aria-labelledby="temoignages-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.temoignages.surtitre')}</p>
      <h2 id="temoignages-titre" data-anime="lignes">${c.tb('accueil.temoignages.titre')}</h2>
      <p data-anime>${c.t('accueil.temoignages.texte')}</p>
    </div>
    <div class="billets" data-visuel tabindex="0" role="region" aria-label="Témoignages, faites défiler">${c.donnees.temoignages.map((t, i) => html`<figure class="billet" style="--i:${i}" data-effet="billets">
      <div class="billet-talon">
        <p class="billet-label">Trajet</p>
        <p class="billet-route">${t.trajet}</p>
        <p class="billet-label">Passager</p>
        <p class="billet-nom"><strong>${t.nom}</strong><span>${t.lieu}</span></p>
      </div>
      <blockquote class="billet-avis"><p>« ${t.citation} »</p></blockquote>
    </figure>`)}</div>
    <p class="glisser" aria-hidden="true">Faites glisser</p>
  </div>
</section>

<section class="faq-section fond-ivoire" id="faq" aria-labelledby="faq-titre">
  <div class="conteneur faq-grille">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('accueil.faq.surtitre')}</p>
      <h2 id="faq-titre" data-anime="lignes">${c.tb('accueil.faq.titre')}</h2>
      <p data-anime>${c.lien('contact', { ancre: 'faq', classe: 'lien-fleche', texte: c.t('accueil.faq.toutes') })}</p>
      <div class="faq-logo" data-anime="rideau"><img src="/assets/images/logo-grand.webp" alt="" width="157" height="160" loading="lazy"></div>
    </div>
    ${faq(c)}
  </div>
</section>

${appel(c)}
`;
