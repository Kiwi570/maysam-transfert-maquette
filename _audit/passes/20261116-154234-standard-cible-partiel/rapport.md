# Rapport d’audit

Projet : `maysam-transfert-maquette` · 16/11/2026 16:48:49 · 6 min · 7 page(s) · audit standard ciblé sur /,/404,/contact,/flotte,/reserver,/services,/trajets (étapes : fichiers, mesures, bords, mouvement)

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261116-154234-standard-cible-partiel` · version ?v=1
- Échecs : **8**
- À regarder : **81**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (77), balayage (6), bords de l’écran (7), mouvement (12), effets du plan (11), souris immobile (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-151847-standard | standard | toutes | toutes | 115 | 106 | 1 | échecs |
| **20261116-154234-standard-cible-partiel** (celle-ci) | standard | /,/404,/contact,/flotte,/reserver,/services,/trajets | fichiers, mesures, bords, mouvement | 8 | 81 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-info:nth-of-type(4) « 06 62 15 83 63 · 24 h/24 » _(390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +2)_
- **premier écran : information clé hors de l’écran** — `/reserver` — section#debut > div.conteneur.ouv-vitre-contenu:nth-of-type(2) > p.hero-info:nth-of-type(4) « Prix fixe confirmé à l'avance · réservation 24 h/2 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-info:nth-of-type(4) « 6 services · 24 h/24 » _(390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +3)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver un trajet » _(1366×768 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.surtitre:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 3.47:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/services` — h1#services-titre > em « simple trajet. » — 2.50:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/trajets` — section#debut > div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-dest:nth-of-type(2) « Paris ↔ Orly » — avec div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) > span:nth-of-type(1) « 60 » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (4)

- **section sans visuel** — `/` — section#tarifs « DÉPARTS DEPUIS PARIS Des prix clairs, sans surpris » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#temoignages « TÉMOIGNAGES Ils nous confient leurs trajets. Des c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/services` — section#liste « SIX SERVICES Choisissez votre trajet. 01 / 06 AÉRO » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal)_
- **section sans visuel** — `/trajets` — section#tarifs « LES TARIFS Cinq trajets, cinq prix. Paris ↔ Orly A » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (73)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.surtitre.hero-anim:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#tarifs > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « DÉPARTS DEPUIS PARIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.estim-grille > form.estim-form > fieldset.estim-trajets > legend « VOTRE TRAJET » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-label:nth-of-type(1) « VOTRE VÉHICULE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#services > div.conteneur.services-tete:nth-of-type(1) > div > p.surtitre « NOS SERVICES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-aeroport > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-gares > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-parcs > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-disposition > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-evenements > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-longs > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#vehicules > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « NOS VÉHICULES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pancarte > figure.media.pancarte-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pancarte > div.conteneur.pancarte-grille > div.pancarte-texte > p.surtitre:nth-of-type(1) « À L'AÉROPORT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.pancarte-grille > div.pancarte-texte > div.pancarte-essai > label « ESSAYEZ AVEC VOTRE NOM » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.pancarte-grille > figure.pancarte > div.pancarte-carton > p.pancarte-marque:nth-of-type(1) « MAYSAM TRANSFERT » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(1) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(2) > figcaption > span.temoignage-trajet:nth-of-type(2) « ROISSY CDG ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(3) > figcaption > span.temoignage-trajet:nth-of-type(2) « GARE DU NORD ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(4) > figcaption > span.temoignage-trajet:nth-of-type(2) « PARIS ↔ DISNEYLAND PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(5) > figcaption > span.temoignage-trajet:nth-of-type(2) « MISE À DISPOSITION À LA JOURNÉE » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(6) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille:nth-of-type(2) > figure.temoignage:nth-of-type(1) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- … et 48 autres (rapport.json)

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — div.vehicules-grille — silhouettes : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/flotte` — div.flotte-rangs — silhouettes : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/services` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 47 min de travail pour 75 min de budget, 13 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /flotte, /reserver, /services, /trajets.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- bords de l’écran /services 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /trajets 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 529 images d’intro, 25 de voile et 215 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/reserver,/services,/trajets --seulement=fichiers,mesures
```
