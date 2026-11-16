/* Trajets & tarifs · ouverture « prix en très grand » : le prix géant change de trajet tout seul (effet prix-geant),
   l'image de la voie rapide à droite. Puis la carte, les tarifs, l'estimateur, ce qui est compris, sur demande. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte, estimateur, appel, euros } from '../gabarits/blocs.mjs';

export const page = { cle: 'trajets', fichier: 'trajets', imagePartage: 'grok/trajets-ouverture-1280.webp' };

const ICONES = {
  0: 'M8 10h32v20H8z M14 30v8 M34 30v8 M14 18h20',
  1: 'M6 30 L24 22 L42 30 M24 8 v14 M18 34 h12',
  2: 'M12 14h24v26H12z M18 14V8h12v6 M12 24h24',
  3: 'M14 40V20a10 10 0 0 1 20 0v20 M10 40h28 M18 28h12',
  4: 'M6 14h36v22H6z M6 22h36 M12 30h8',
  5: 'M24 6a18 18 0 1 0 0 36a18 18 0 1 0 0-36 M24 14v10l7 5',
};

export default (c) => {
  const T = c.donnees.trajets;
  return html`
<section class="ouv-prix" id="debut" aria-labelledby="trajets-titre">
  <div class="conteneur ouv-prix-grille">
    <div class="ouv-prix-texte">
      <p class="surtitre" data-anime>${c.t('commun.surtitre')}</p>
      <h1 id="trajets-titre" data-anime="lignes">${c.tb('trajets.titre')}</h1>
      <p class="masque-ecran-tres-bas" data-anime>${c.t('trajets.texte')}</p>
      <p class="hero-actions" data-anime>${c.lien('reserver', { classe: 'bouton', texte: c.t('trajets.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="hero-info" data-info-cle data-anime><span class="point-vert" aria-hidden="true"></span>${c.t('trajets.info')}</p>
    </div>
    <div class="prix-geant" data-effet="prix-geant" data-iris-centre aria-live="off">
      <p class="prix-geant-legende">${c.t('trajets.prixLegende')}</p>
      <p class="prix-geant-dest" data-pg-dest>Paris ↔ ${T[0].nom}</p>
      <p class="prix-geant-montant" data-prix><span data-pg-montant>${T[0].prix}</span><span class="prix-geant-devise">€</span></p>
      <p class="prix-geant-duree" data-pg-duree>${T[0].duree}</p>
      <ol class="prix-geant-points" aria-hidden="true">${T.map((t, i) => html`<li${i === 0 ? brut(' class="actif"') : ''} data-pg="${t.cle}" data-nom="${t.nom}" data-prix-v="${t.prix}" data-duree="${t.duree}"></li>`)}</ol>
    </div>
  </div>
  ${c.media({ nom: 'grok/trajets-ouverture', alt: c.s('trajets.alt'), cadrage: '70% 50%', priorite: true, classe: 'ouv-prix-media', sizes: '(max-width: 760px) 100vw, 60vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
</section>

<section class="carte-section" id="carte" aria-labelledby="carte-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('trajets.carte.surtitre')}</p>
      <h2 id="carte-titre" data-anime="lignes">${c.tb('trajets.carte.titre')}</h2>
      <p data-anime>${c.t('trajets.carte.texte')} <span class="texte-doux">${c.t('trajets.carte.aide')}</span></p>
    </div>
    ${carte(c, { id: 'carte-trajets' })}
  </div>
</section>

<section class="tarifs fond-ivoire" id="tarifs" aria-labelledby="tarifs-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('trajets.liste.surtitre')}</p>
      <h2 id="tarifs-titre" data-anime="lignes">${c.tb('trajets.liste.titre')}</h2>
    </div>
    <div class="tarifs-grille" data-anime="cascade">${T.map((t) => html`<article class="tarif" id="tarif-${t.cle}">
      <p class="tarif-dest">Paris ↔ ${t.nom}</p>
      <p class="tarif-lieu">${t.lieu}</p>
      <p class="tarif-prix" data-prix>${euros(t.prix)}</p>
      <p class="tarif-sens">${c.t('trajets.liste.sens')} · ${t.duree}</p>
      ${c.lien('reserver', { params: `trajet=${t.cle}`, classe: 'bouton bouton--sombre', texte: html`Réserver<span class="visuellement-cache"> Paris ↔ ${t.nom}</span>` })}
    </article>`)}</div>
  </div>
</section>

${estimateur(c, { id: 'estimation' })}

<section class="inclus" id="inclus" aria-labelledby="inclus-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('trajets.inclus.surtitre')}</p>
      <h2 id="inclus-titre" data-anime="lignes">${c.tb('trajets.inclus.titre')}</h2>
    </div>
    <ul class="inclus-grille" role="list" data-visuel>${c.donnees.contenus.trajets.inclus.points.map(([t, d], i) => html`<li class="inclus-item">
      <svg class="icone" viewBox="0 0 48 48" aria-hidden="true" data-fx="trace"><path d="${ICONES[i]}" data-fx-trait/></svg>
      <h3>${t}</h3><p>${d}</p>
    </li>`)}</ul>
  </div>
</section>

<section class="demande fond-ivoire" id="sur-demande" aria-labelledby="demande-titre">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('trajets.demande.surtitre')}</p>
      <h2 id="demande-titre" data-anime="lignes">${c.tb('trajets.demande.titre')}</h2>
    </div>
    <div class="demande-grille">
      ${[['disposition', 'service-disposition', 'Mise à disposition', 'Banquette arrière en cuir noir, eau et plaid'], ['longs', 'service-longs-trajets', 'Longs trajets', 'Autoroute à la tombée du jour, traînées de lumière']].map(([k, img, titre, alt]) => html`<article class="demande-carte">
        ${c.media({ nom: 'grok/' + img, alt, classe: 'demande-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
        <h3>${titre}</h3>
        <p>${c.t('trajets.demande.' + k)}</p>
        <p class="demande-tarif">${c.t('trajets.demande.tarif')}</p>
        ${c.lien('reserver', { params: `trajet=${k}`, classe: 'lien-fleche', texte: html`Demander un tarif<span class="visuellement-cache"> : ${titre}</span>` })}
      </article>`)}
    </div>
  </div>
</section>

${appel(c, { image: 'grok/accueil-appel' })}
`;
};
