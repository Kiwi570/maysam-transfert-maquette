/* Page 404 : valise seule sous le réverbère, titre du métier. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="ouv-plein ouv-plein--404" id="debut" aria-labelledby="titre-404">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), cadrage: '60% 60%', priorite: true, classe: 'ouv-plein-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="8"' })}
  <div class="ouv-plein-voile" aria-hidden="true"></div>
  <div class="conteneur ouv-plein-contenu">
    <p class="surtitre">Erreur 404</p>
    <h1 id="titre-404" data-anime="lignes" data-iris-centre>${c.tb('introuvable.titre')}</h1>
    <p>${c.t('introuvable.texte')}</p>
    <p class="hero-actions">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('reserver', { classe: 'bouton bouton--contour', texte: 'Réserver un trajet' })}</p>
    <p class="hero-info" data-info-cle>${c.site.contact.telephone} · 24 h/24</p>
  </div>
</section>
`;
