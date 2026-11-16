/* Réserver · ouverture compacte sur fond de vitre mouillée (titre + trois garanties qui s'allument : effet garanties),
   puis le formulaire en étapes (module formulaire-par-etapes) avec le récapitulatif collant et la pancarte au nom tapé. */
import { html, brut } from '../../outils/gabarit.mjs';
import { faq, euros } from '../gabarits/blocs.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'grok/reserver-fond-1280.webp' };

const ICONE = {
  avion: 'M4 18 L28 10 L30 13 L18 19 L20 27 L17 28 L13 21 L6 23 L5 21 Z',
  train: 'M9 4h14a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z M6 15h20 M11 25l-3 4 M21 25l3 4',
  chateau: 'M5 28V14l4-3 4 3v-4l3-5 3 5v4l4-3 4 3v14z M14 28v-6h4v6',
  horloge: 'M16 4a12 12 0 1 0 0 24a12 12 0 1 0 0-24z M16 9v7l5 3',
  anneaux: 'M12 10a8 8 0 1 0 0 16a8 8 0 1 0 0-16z M20 10a8 8 0 1 0 0 16a8 8 0 1 0 0-16z',
  route: 'M10 28 L14 4 M22 28 L18 4 M16 8v3 M16 15v3 M16 22v3',
  point: 'M16 4a8 8 0 0 0-8 8c0 6 8 16 8 16s8-10 8-16a8 8 0 0 0-8-8z M16 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z',
};
const carteChoix = (valeur, icone, titre, texte, requis = false) => html`<label class="fpe__carte"><input type="radio" name="trajet" value="${valeur}"${requis ? brut(' required') : ''}>
  <svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="${ICONE[icone]}"/></svg>
  <span class="fpe__carte-titre">${titre}</span><span class="fpe__carte-texte">${texte}</span></label>`;

export default (c) => {
  const F = (k) => c.t('reserver.form.' + k);
  const T = c.donnees.trajets;
  const icone = { orly: 'avion', cdg: 'avion', beauvais: 'avion', gares: 'train', disneyland: 'chateau' };
  return html`
<section class="ouv-vitre" id="debut" aria-labelledby="reserver-titre">
  ${c.media({ nom: 'grok/reserver-fond', alt: c.s('reserver.alt'), cadrage: '60% 50%', priorite: true, classe: 'ouv-vitre-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="8"' })}
  <div class="ouv-vitre-voile" aria-hidden="true"></div>
  <div class="conteneur ouv-vitre-contenu">
    <p class="surtitre" data-anime>${c.t('commun.surtitre')}</p>
    <h1 id="reserver-titre" data-anime="lignes" data-iris-centre>${c.tb('reserver.titre')}</h1>
    <p class="masque-ecran-tres-bas" data-anime>${c.t('reserver.texte')}</p>
    <p class="hero-actions" data-anime><a class="bouton" href="#formulaire" data-action-principale data-sans-transition>Commencer</a><a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('reserver.appeler')} ${c.site.contact.telephone}</a></p>
    <ul class="garanties" role="list" data-effet="garanties">${c.donnees.contenus.reserver.points.map((p, i) => html`<li style="--i:${i}"><span class="garantie-coche" aria-hidden="true"></span>${p}</li>`)}</ul>
    <p class="hero-info" data-info-cle><span class="point-vert" aria-hidden="true"></span>${c.t('reserver.info')} · réservation 24 h/24</p>
  </div>
</section>

<section class="fpe fond-ivoire" id="formulaire" data-module="formulaire-par-etapes" aria-labelledby="fpe-titre">
  <div class="fpe__cadre conteneur">
    <aside class="fpe__tete recap" aria-labelledby="recap-titre" data-recap-trajet>
      <p class="surtitre">${c.t('reserver.recap.titre')}</p>
      <h2 class="fpe__h2" id="fpe-titre"><span id="recap-titre" data-recap-dest>${c.t('reserver.recap.vide')}</span></h2>
      <dl class="recap-chiffres">
        <div><dt>${c.t('reserver.recap.prix')}</dt><dd data-recap-prix data-prix>—</dd></div>
        <div><dt>${c.t('reserver.recap.vehicule')}</dt><dd data-recap-vehicule>—</dd></div>
      </dl>
      <figure class="pancarte pancarte--petite" data-effet="pancarte" data-pancarte aria-label="${c.s('reserver.recap.pancarte')}" data-visuel>
        <div class="pancarte-carton">
          <p class="pancarte-marque">Maysam Transfert</p>
          <p class="pancarte-nom" data-pancarte-nom data-defaut="Votre nom">Votre nom</p>
        </div>
        <figcaption>${c.t('reserver.recap.pancarte')}</figcaption>
      </figure>
    </aside>
    <div class="fpe__carton">
      <form class="fpe__form" action="#" method="post" novalidate data-reservation>
        <div class="fpe__progression"><ol class="fpe__reperes" aria-label="Progression"></ol><div class="fpe__barre" aria-hidden="true"><span></span></div><p class="fpe__etat" aria-live="polite"></p></div>
        <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.etapeTrajet')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('qTrajet')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="Trajet">
            ${T.map((t, i) => carteChoix(t.cle, icone[t.cle], `Paris ↔ ${t.nom}`, `${euros(t.prix)} · ${t.duree}`, i === 0))}
            ${carteChoix('disposition', 'horloge', c.s('reserver.form.disposition'), c.s('reserver.form.dispositionTexte'))}
            ${carteChoix('evenement', 'anneaux', c.s('reserver.form.evenement'), c.s('reserver.form.evenementTexte'))}
            ${carteChoix('longs', 'route', c.s('reserver.form.longs'), c.s('reserver.form.longsTexte'))}
            ${carteChoix('autre', 'point', c.s('reserver.form.autre'), c.s('reserver.form.autreTexte'))}
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="Date">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('qQuand')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="r-date">${F('date')} <i aria-hidden="true">*</i></label><input id="r-date" name="date" type="date" required data-date-min></div>
            <div class="fpe__champ"><label for="r-heure">${F('heure')} <i aria-hidden="true">*</i></label><input id="r-heure" name="heure" type="time" required></div>
            <div class="fpe__champ"><label for="r-depart">${F('depart')} <i aria-hidden="true">*</i></label><input id="r-depart" name="depart" required autocomplete="street-address" placeholder="Adresse, aéroport, gare…"></div>
            <div class="fpe__champ"><label for="r-arrivee">${F('arrivee')} <i aria-hidden="true">*</i></label><input id="r-arrivee" name="arrivee" required placeholder="Adresse, hôtel, terminal…"></div>
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.etapePassagers')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('qPassagers')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="r-passagers">${F('passagers')}</label><select id="r-passagers" name="passagers">${['1', '2', '3', '4', '5', '6', '7'].map((n) => html`<option value="${n}">${n}</option>`)}<option value="plus">Plus de 7</option></select></div>
            <div class="fpe__champ"><label for="r-bagages">${F('bagages')}</label><select id="r-bagages" name="bagages">${c.donnees.contenus.reserver.form.bagagesOptions.map((b, i) => html`<option value="${['0', '1', '2', '3', 'volumineux'][i]}"${i === 1 ? brut(' selected') : ''}>${b}</option>`)}</select></div>
            <div class="fpe__champ"><label for="r-vehicule">Véhicule souhaité</label><select id="r-vehicule" name="vehicule"><option value="">Selon le nombre de passagers</option>${c.donnees.vehicules.map((v) => html`<option value="${v.cle}">${v.nom}</option>`)}</select></div>
          </div>
          <div class="fpe__champ"><label for="r-precisions">${F('precisions')}</label><textarea id="r-precisions" name="precisions" rows="4"></textarea></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="Contact">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('qCoord')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="r-nom">${F('nom')} <i aria-hidden="true">*</i></label><input id="r-nom" name="nom" required autocomplete="name" data-pancarte-saisie></div>
            <div class="fpe__champ"><label for="r-tel">${F('tel')} <i aria-hidden="true">*</i></label><input id="r-tel" name="tel" type="tel" required autocomplete="tel" inputmode="tel"></div>
            <div class="fpe__champ"><label for="r-email">${F('email')} <i aria-hidden="true">*</i></label><input id="r-email" name="email" type="email" required autocomplete="email"></div>
          </div>
          <p class="mention-donnees">${F('donnees')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="Vérifier" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('qRecap')}</h3></legend>
          <div class="fpe__recap"></div>
        </fieldset>
        <div class="fpe__nav"><button type="button" class="fpe__bouton fpe__bouton--ligne" data-precedent>${F('retour')}</button><button type="button" class="fpe__bouton" data-suivant>${F('continuer')}</button><button type="submit" class="fpe__bouton">${F('envoyer')}</button></div>
      </form>
      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${F('fin')}</h3>
        <p>${F('finTexte')}</p>
        <p data-resume></p>
        <div class="fpe__fin-actions"><button type="button" class="fpe__bouton fpe__bouton--ligne" data-recommencer>${F('recommencer')}</button><a class="fpe__bouton" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="bon-a-savoir" id="bon-a-savoir" aria-labelledby="bon-titre">
  <div class="conteneur faq-grille">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('reserver.bon.surtitre')}</p>
      <h2 id="bon-titre" data-anime="lignes">${c.tb('reserver.bon.titre')}</h2>
      <p data-anime>Une question avant de réserver ? <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>, 24 h/24.</p>
      <div class="faq-logo" data-anime="rideau"><img src="/assets/images/logo-grand.webp" alt="" width="157" height="160" loading="lazy"></div>
    </div>
    ${faq(c)}
  </div>
</section>
`;
};
