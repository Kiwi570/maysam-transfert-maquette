/* Contact · ouverture scindée : le numéro en très grand qui s'allume (effet numero), la rue au réverbère à droite.
   Puis les 4 façons de joindre, la zone desservie sur la carte, la FAQ complète. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte, faq, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

export default (c) => {
  const k = c.site.contact;
  const liens = [`tel:${k.telephoneLien}`, k.whatsapp, `mailto:${k.email}`, c.url('reserver')];
  return html`
<section class="ouv-scindee" id="debut" aria-labelledby="contact-titre">
  <div class="ouv-scindee-texte">
    <p class="surtitre" data-anime>${c.t('commun.surtitre')}</p>
    <h1 id="contact-titre" data-anime="lignes">${c.tb('contact.titre')}</h1>
    <p class="masque-ecran-tres-bas" data-anime>${c.t('contact.texte')}</p>
    <p class="numero-geant" data-effet="numero" data-iris-centre><a href="tel:${k.telephoneLien}" data-action-principale>${[...k.telephone.replace(/ /g, '')].map((ch, i) => html`<span class="chiffre${i % 2 === 1 && i < 9 ? ' chiffre--espace' : ''}">${ch}</span>`)}<span class="visuellement-cache"> : appeler</span></a></p>
    <p class="hero-info" data-info-cle data-anime><span class="point-vert" aria-hidden="true"></span>${c.t('contact.info')}</p>
  </div>
  ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('contact.alt'), cadrage: '80% 50%', priorite: true, classe: 'ouv-scindee-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
</section>

<section class="joindre" id="joindre" aria-labelledby="joindre-titre">
  <div class="conteneur">
    <h2 id="joindre-titre" class="visuellement-cache">Nous joindre</h2>
    <ul class="joindre-grille" role="list" data-anime="cascade" data-visuel>${c.donnees.contenus.contact.blocs.map(([t, d, a], i) => html`<li class="joindre-bloc">
      <p class="joindre-num">0${i + 1}</p>
      <h3>${t}</h3><p>${d}</p>
      <p class="joindre-valeur">${[k.telephone, 'wa.me/33662158363', k.email, '24 h/24'][i]}</p>
      ${i === 3 ? c.lien('reserver', { classe: 'lien-fleche', texte: a }) : html`<a class="lien-fleche" href="${liens[i]}"${i === 1 ? brut(' target="_blank" rel="noopener"') : ''}>${a}</a>`}
    </li>`)}</ul>
  </div>
</section>

<section class="zone fond-ivoire" id="zone" aria-labelledby="zone-titre">
  <div class="conteneur zone-grille">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('contact.zone.surtitre')}</p>
      <h2 id="zone-titre" data-anime="lignes">${c.tb('contact.zone.titre')}</h2>
      <p data-anime>${c.t('contact.zone.texte')}</p>
      ${c.media({ nom: 'paris-nuit', alt: c.s('contact.zone.alt'), classe: 'zone-photo', ratio: '3 / 2', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    </div>
    ${carte(c, { id: 'carte-zone', mode: 'zone' })}
  </div>
</section>

<section class="faq-section" id="faq" aria-labelledby="faq-titre">
  <div class="conteneur faq-grille">
    <div class="tete-section">
      <p class="surtitre" data-anime>${c.t('contact.faq.surtitre')}</p>
      <h2 id="faq-titre" data-anime="lignes">${c.tb('contact.faq.titre')}</h2>
      <div class="faq-logo" data-anime="rideau"><img src="/assets/images/logo-grand.webp" alt="" width="157" height="160" loading="lazy"></div>
    </div>
    ${faq(c)}
  </div>
</section>

${appel(c, { image: 'grok/accueil-appel' })}
`;
};
