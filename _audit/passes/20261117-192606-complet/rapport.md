# Rapport d’audit

Projet : `maysam-transfert-maquette` · 17/11/2026 20:50:54 · 25 min · 7 page(s) · audit complet

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261117-192606-complet` · version ?v=2
- Échecs : **8**
- À regarder : **68**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (2), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (8), films des épinglages (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (12), souris immobile (6), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | — dispensé | v11 : pas d'objet obligatoire ; l'estimateur et la pancarte au nom tapé servent le visiteur |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | — dispensé | vitre teintée qui remonte (glisse) : le geste du métier, filet doré sur le bord |
| 4. Quelque chose relie les sections et les pages | — dispensé | v11 : la lumière des phares relie l'intro, le voile et l'ouverture |
| 5. Un titre fait l’événement sur chaque page | — dispensé | v11 : titres francs en Bodoni, mot en or italique |
| 6. La scène est un geste du métier | — dispensé | la galerie des services est la vitrine des six prestations |
| 7. L’action principale a un retour physique | — dispensé | v11 : la pancarte affiche le nom tapé dans le formulaire |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### texte coupé (2)

- **texte coupé** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(5) > blockquote.billet-avis > p « « Discret, souriant et une conduite très sûre. » » — coupé par section#temoignages « TÉMOIGNAGES Ils nous confient leurs trajets. Des c » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(6) > blockquote.billet-avis > p « « Tarif fixe clair dès la demande, pas de compteur » — coupé par section#temoignages « TÉMOIGNAGES Ils nous confient leurs trajets. Des c » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(1) > div.billet-talon > p.billet-route:nth-of-type(2) « ORLY ↔ PARIS » — avec figure.billet:nth-of-type(1) > div.billet-talon > p.billet-nom:nth-of-type(4) > span « Paris 15e » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **textes qui se chevauchent** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(2) > div.billet-talon > p.billet-route:nth-of-type(2) « ROISSY CDG ↔ PARIS » — avec figure.billet:nth-of-type(2) > div.billet-talon > p.billet-nom:nth-of-type(4) > strong « Sofiane » _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **textes qui se chevauchent** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(3) > div.billet-talon > p.billet-route:nth-of-type(2) « GARE DU NORD ↔ PARIS » — avec figure.billet:nth-of-type(3) > div.billet-talon > p.billet-nom:nth-of-type(4) > span « Paris 9e » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **textes qui se chevauchent** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(4) > div.billet-talon > p.billet-route:nth-of-type(2) « PARIS ↔ DISNEYLAND PARIS » — avec figure.billet:nth-of-type(4) > div.billet-talon > p.billet-nom:nth-of-type(4) > strong « Marc » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **textes qui se chevauchent** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(4) > div.billet-talon > p.billet-route:nth-of-type(2) « PARIS ↔ DISNEYLAND PARIS » — avec figure.billet:nth-of-type(4) > div.billet-talon > p.billet-nom:nth-of-type(4) > span « Créteil » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_
- **textes qui se chevauchent** — `/` — div.billets:nth-of-type(2) > figure.billet:nth-of-type(6) > div.billet-talon > p.billet-route:nth-of-type(2) « ORLY ↔ PARIS » — avec figure.billet:nth-of-type(6) > div.billet-talon > p.billet-nom:nth-of-type(4) > strong « Thomas » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, +10)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 358 × 49 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (61)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.surtitre.hero-anim:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#tarifs > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « DÉPARTS DEPUIS PARIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.estim-grille > form.estim-form > fieldset.estim-trajets > legend « VOTRE TRAJET » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-label:nth-of-type(1) « VOTRE VÉHICULE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#services > div.conteneur.services-tete:nth-of-type(1) > div > p.surtitre « NOS SERVICES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-aeroport > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-gares > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-parcs > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-disposition > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-evenements > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-longs > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#vehicules > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « NOS VÉHICULES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pancarte > figure.media.pancarte-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pancarte > div.conteneur.pancarte-grille > div.pancarte-texte > p.surtitre:nth-of-type(1) « À L'AÉROPORT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.pancarte-grille > div.pancarte-texte > div.pancarte-essai > label « ESSAYEZ AVEC VOTRE NOM » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.pancarte-grille > figure.pancarte > div.pancarte-carton > p.pancarte-marque:nth-of-type(1) « MAYSAM TRANSFERT » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.ouv-scindee-texte > p.surtitre:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ouv-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#zone > div.conteneur.zone-grille > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « ZONE DESSERVIE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/flotte` — section#debut > div.conteneur.ouv-bandeau-tete:nth-of-type(1) > p.surtitre « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/flotte` — section#debut > div.ouv-bandeau-image:nth-of-type(2) > figure.media.ouv-bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 36 autres (rapport.json)

### section sans visuel (1)

- **section sans visuel** — `/services` — section#liste « SIX SERVICES Choisissez votre trajet. 01 / 06 AÉRO » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (9.2 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/flotte` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-flotte-*.png _(1366×768)_

### fluidité (1)

- **fluidité** — `/` — 7 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/services` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 19 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Journal : « revue complète du site (ordinateur et téléphone) » 19 min pour 15 prévues.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : vitre teintée qui remonte (glisse) : le geste du métier, filet doré sur le bord.
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : pas d'objet obligatoire ; l'estimateur et la pancarte au nom tapé servent le visiteur.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : la lumière des phares relie l'intro, le voile et l'ouverture.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : titres francs en Bodoni, mot en or italique.
- Grille wouahou : point « 6. La scène est un geste du métier » dispensé (config.json) : la galerie des services est la vitrine des six prestations.
- Grille wouahou : point « 7. L’action principale a un retour physique » dispensé (config.json) : v11 : la pancarte affiche le nom tapé dans le formulaire.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2885 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2657 ms depuis le premier octet
- Ouverture /flotte (1366×768) : 2389 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2570 ms depuis le premier octet
- Ouverture /services (1366×768) : 2593 ms depuis le premier octet
- Ouverture /trajets (1366×768) : 2407 ms depuis le premier octet
- Ouverture / (390×844) : 2897 ms depuis le premier octet
- Ouverture /contact (390×844) : 2676 ms depuis le premier octet
- Ouverture /flotte (390×844) : 2369 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2560 ms depuis le premier octet
- Ouverture /services (390×844) : 2654 ms depuis le premier octet
- Ouverture /trajets (390×844) : 2448 ms depuis le premier octet
- film de l'ouverture /trajets 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 461 images d’intro, 28 de voile et 212 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /flotte : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Tient dans l'écran /trajets : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /flotte 1366×768 (molette) : 0 % d'images lentes sur 246, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 175, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 1 % d'images lentes sur 277, tâche la plus longue 0 ms
- Fluidité /trajets 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1428, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /flotte 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /trajets 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.68 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /flotte : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /trajets : 0.55 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
