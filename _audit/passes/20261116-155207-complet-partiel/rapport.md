# Rapport d’audit

Projet : `maysam-transfert-maquette` · 16/11/2026 16:59:39 · 8 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261116-155207-complet-partiel` · version ?v=1
- Échecs : **12**
- À regarder : **77**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-151847-standard | standard | toutes | toutes | 115 | 106 | 1 | échecs |
| 20261116-154234-standard-cible-partiel | standard | /,/404,/contact,/flotte,/reserver,/services,/trajets | fichiers, mesures, bords, mouvement | 8 | 81 | 0 | échecs |
| 20261116-154954-standard-cible-partiel | standard | /,/404,/reserver,/services,/trajets | fichiers, mesures | 1 | 63 | 0 | échecs |
| **20261116-155207-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 12 | 77 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.hero-info.hero-anim:nth-of-type(4) « Réservation 24 h/24 · Paris ↔ Orly 60 € » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.ouv-scindee-texte > p.hero-info:nth-of-type(4) « Assistance 24 h/24, 7 j/7 » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/reserver` — section#debut > div.conteneur.ouv-vitre-contenu:nth-of-type(2) > p.hero-info:nth-of-type(4) « Prix fixe confirmé à l'avance · réservation 24 h/2 » _(1000×560 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — h2#services-titre « Bien plus qu'un simple trajet. » — avec section#services > div.conteneur.services-tete:nth-of-type(1) > p.masque-ecran-bas « Des transferts aéroport à la mise à disposition, d » _(1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/flotte` — div.conteneur.choix-grille > ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(1) > p « Tesla Model Y · 1 à 3 passagers · 3 valises » — avec div.conteneur.choix-grille > ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(1) > span.choix-conseil « CONSEILLÉ » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/flotte` — div.conteneur.choix-grille > ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(2) > p « Mercedes Classe E · 1 à 3 passagers · 3 valises » — avec div.conteneur.choix-grille > ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(2) > span.choix-conseil « CONSEILLÉ » _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1024×768 sansWebgl, 1000×560 sansWebgl, 1280×720 sansWebgl)_
- **textes qui se chevauchent** — `/flotte` — ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(2) > p > strong « Mercedes Classe E » — avec div.conteneur.choix-grille > ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(2) > span.choix-conseil « CONSEILLÉ » _(1000×560 normal, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(2560×1440 normal, 2560×1440 sansWebgl)_
- **premier écran : bouton principal hors de l’écran** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver un trajet » _(2560×1440 normal, 2560×1440 sansWebgl)_

### texte coupé (3)

- **texte coupé** — `/reserver` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(2) > span.fpe__nom:nth-of-type(2) « Date et lieux » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/reserver` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1280×720 normal, 1024×768 sansWebgl, 1000×560 sansWebgl, 1280×720 sansWebgl)_
- **texte coupé** — `/reserver` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(5) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (4)

- **section sans visuel** — `/` — section#tarifs « DÉPARTS DEPUIS PARIS Des prix clairs, sans surpris » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#temoignages « TÉMOIGNAGES Ils nous confient leurs trajets. Des c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/services` — section#liste « SIX SERVICES Choisissez votre trajet. 01 / 06 AÉRO » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_
- **section sans visuel** — `/trajets` — section#tarifs « LES TARIFS Cinq trajets, cinq prix. Paris ↔ Orly A » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (73)

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
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(1) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(2) > figcaption > span.temoignage-trajet:nth-of-type(2) « ROISSY CDG ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(3) > figcaption > span.temoignage-trajet:nth-of-type(2) « GARE DU NORD ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(4) > figcaption > span.temoignage-trajet:nth-of-type(2) « PARIS ↔ DISNEYLAND PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(5) > figcaption > span.temoignage-trajet:nth-of-type(2) « MISE À DISPOSITION À LA JOURNÉE » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(6) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille:nth-of-type(2) > figure.temoignage:nth-of-type(1) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- … et 48 autres (rapport.json)

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /flotte : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Tient dans l'écran /trajets : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/contact,/flotte,/reserver,/services --seulement=fichiers,mesures
```
