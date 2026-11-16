# Rapport d’audit

Projet : `maysam-transfert-maquette` · 16/11/2026 16:38:47 · 20 min · 7 page(s) · audit standard

## Résumé

- Statut : **115 échec(s)**
- Passe : `20261116-151847-standard` · version ?v=1
- Échecs : **115**
- À regarder : **106**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (1), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (2), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (5), films des épinglages (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (11), souris immobile (5), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.hero-info.hero-anim:nth-of-type(4) « Réservation 24 h/24 · Paris ↔ Orly 60 € » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-info:nth-of-type(4) « 06 62 15 83 63 · 24 h/24 » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **premier écran : information clé hors de l’écran** — `/reserver` — section#debut > div.conteneur.ouv-vitre-contenu:nth-of-type(2) > p.hero-info.visuellement-cache:nth-of-type(4) « Prix fixe confirmé à l'avance » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **premier écran : information clé hors de l’écran** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-info:nth-of-type(4) « 6 services · 24 h/24 » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### zone tactile sous 44 px (14)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(844×390 normal, 768×1024 normal)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(844×390 normal, 768×1024 normal)_
- **zone tactile sous 44 px** — `/flotte` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/flotte` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/reserver` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/reserver` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/services` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/services` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/trajets` — nav > ul > li:nth-of-type(3) > a « Flotte » — 42 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/trajets` — nav > ul > li:nth-of-type(4) > a « Flotte » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### texte coupé (13)

- **texte coupé** — `/` — div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) > span.estim-montant:nth-of-type(1) « 60 » — coupé par section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **texte coupé** — `/` — div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) > span.estim-devise:nth-of-type(2) « € » — coupé par section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **texte coupé** — `/` — article#service-aeroport > div.service-texte > p:nth-of-type(2) « Orly, Roissy CDG et Beauvais, avec pancarte nomina » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/` — article#service-gares > div.service-texte > p:nth-of-type(2) « Gare du Nord, Montparnasse, Gare de Lyon, Gare de  » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/` — article#service-parcs > div.service-texte > p:nth-of-type(2) « Trajets en famille ou en groupe, bagages inclus. » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/` — article#service-disposition > div.service-texte > p:nth-of-type(2) « Un chauffeur disponible à l'heure ou à la journée. » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/` — article#service-evenements > div.service-texte > p:nth-of-type(2) « Berlines de prestige pour cérémonies et soirées. » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/` — article#service-longs > div.service-texte > p:nth-of-type(2) « Province et Europe, au départ ou à destination de  » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/flotte` — div.conteneur.choix-grille > ul.choix-vehicules > li.choix-vehicule.conseille:nth-of-type(2) > span.choix-conseil « CONSEILLÉ » — coupé par section#choix « LE BON CHOIX Combien êtes-vous ? Indiquez les pass » _(768×1024 normal)_
- **texte coupé** — `/trajets` — div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) > span:nth-of-type(1) « 60 » — coupé par section#debut > div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte coupé** — `/trajets` — div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) > span.prix-geant-devise:nth-of-type(2) « € » — coupé par section#debut > div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte coupé** — `/trajets` — div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) > span.estim-montant:nth-of-type(1) « 60 » — coupé par section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **texte coupé** — `/trajets` — div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) > span.estim-devise:nth-of-type(2) « € » — coupé par section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### textes qui se chevauchent (53)

- **textes qui se chevauchent** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.surtitre.hero-anim:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — avec h1#hero-titre « À l'heure, à chaque trajet. » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.surtitre.hero-anim:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — avec h1#hero-titre > em « à chaque » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > div.estim-vehicule > p.estim-vehicule-nom « Tesla Model Y ou Mercedes Classe E » — avec div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) > span.estim-montant:nth-of-type(1) « 60 » _(768×1024 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-prix:nth-of-type(2) > span.estim-montant:nth-of-type(1) « 60 » — avec section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-duree:nth-of-type(3) « Paris ↔ Orly · 30–45 min » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/` — article.vehicule:nth-of-type(1) > dl.vehicule-chiffres > div:nth-of-type(1) > dt « PASSAGERS » — avec article.vehicule:nth-of-type(1) > dl.vehicule-chiffres > div:nth-of-type(1) > dd « 1 à 3 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — article.vehicule:nth-of-type(1) > dl.vehicule-chiffres > div:nth-of-type(2) > dt « VALISES » — avec article.vehicule:nth-of-type(1) > dl.vehicule-chiffres > div:nth-of-type(2) > dd « 3 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — article.vehicule:nth-of-type(2) > dl.vehicule-chiffres > div:nth-of-type(1) > dt « PASSAGERS » — avec article.vehicule:nth-of-type(2) > dl.vehicule-chiffres > div:nth-of-type(1) > dd « 1 à 3 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — article.vehicule:nth-of-type(2) > dl.vehicule-chiffres > div:nth-of-type(2) > dt « VALISES » — avec article.vehicule:nth-of-type(2) > dl.vehicule-chiffres > div:nth-of-type(2) > dd « 3 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — article.vehicule:nth-of-type(3) > dl.vehicule-chiffres > div:nth-of-type(1) > dt « PASSAGERS » — avec article.vehicule:nth-of-type(3) > dl.vehicule-chiffres > div:nth-of-type(1) > dd « 1 à 7 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — article.vehicule:nth-of-type(3) > dl.vehicule-chiffres > div:nth-of-type(2) > dt « VALISES » — avec article.vehicule:nth-of-type(3) > dl.vehicule-chiffres > div:nth-of-type(2) > dd « 7 » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.conteneur.pancarte-grille > figure.pancarte > div.pancarte-carton > p.pancarte-marque:nth-of-type(1) « MAYSAM TRANSFERT » — avec div.conteneur.pancarte-grille > figure.pancarte > div.pancarte-carton > p.pancarte-nom:nth-of-type(2) « Votre nom » _(768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 1920×1080 normal, 1366×768 sansJs, +2)_
- **textes qui se chevauchent** — `/` — section#tarifs > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « DÉPARTS DEPUIS PARIS » — avec h2#tableau-titre « Des prix clairs, sans surprise. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#estimation > div.conteneur.estim-grille > div.estim-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « ESTIMATION » — avec h2#estimation-titre « Estimez votre tarif en quelques secondes. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#vehicules > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « NOS VÉHICULES » — avec h2#flotte-titre « Des véhicules premium pour chaque trajet. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#pancarte > div.conteneur.pancarte-grille > div.pancarte-texte > p.surtitre:nth-of-type(1) « À L'AÉROPORT » — avec h2#pancarte-titre « Votre nom vous attend. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#temoignages > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « TÉMOIGNAGES » — avec h2#temoignages-titre « Ils nous confient leurs trajets. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/404` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.surtitre:nth-of-type(1) « ERREUR 404 » — avec h1#titre-404 « Ce trajet n'existe pas. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#zone > div.conteneur.zone-grille > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « ZONE DESSERVIE » — avec h2#zone-titre « Paris et toute l'Île‑de‑France. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#zone > div.conteneur.zone-grille > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « ZONE DESSERVIE » — avec h2#zone-titre > em « et toute l'Île‑de‑France. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.ouv-scindee-texte > p.surtitre:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — avec h1#contact-titre « Une question ? Joignables à tout moment. » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/contact` — div.ouv-scindee-texte > p.numero-geant:nth-of-type(3) > a > span.chiffre:nth-of-type(1) « 0 » — avec section#debut > div.ouv-scindee-texte > p.hero-info:nth-of-type(4) « Assistance 24 h/24, 7 j/7 » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/contact` — div.ouv-scindee-texte > p.numero-geant:nth-of-type(3) > a > span.chiffre.chiffre--espace:nth-of-type(2) « 6 » — avec section#debut > div.ouv-scindee-texte > p.hero-info:nth-of-type(4) « Assistance 24 h/24, 7 j/7 » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/contact` — div.ouv-scindee-texte > p.numero-geant:nth-of-type(3) > a > span.chiffre:nth-of-type(3) « 6 » — avec section#debut > div.ouv-scindee-texte > p.hero-info:nth-of-type(4) « Assistance 24 h/24, 7 j/7 » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/contact` — div.ouv-scindee-texte > p.numero-geant:nth-of-type(3) > a > span.chiffre.chiffre--espace:nth-of-type(4) « 2 » — avec section#debut > div.ouv-scindee-texte > p.hero-info:nth-of-type(4) « Assistance 24 h/24, 7 j/7 » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/flotte` — div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(1) > dt « PASSAGERS » — avec div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(1) > dd « 1 à 3 » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/flotte` — div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(2) > dt « VALISES » — avec div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(2) > dd « 3 » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/flotte` — div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(1) > dt « PASSAGERS » — avec div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(1) > dd « 1 à 7 » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/flotte` — div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(2) > dt « VALISES » — avec div.flotte-rang-texte:nth-of-type(2) > dl.vehicule-chiffres.vehicule-chiffres--grand > div:nth-of-type(2) > dd « 7 » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/flotte` — section#debut > div.conteneur.ouv-bandeau-tete:nth-of-type(1) > p.surtitre « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — avec h1#flotte-titre « Trois véhicules, un même soin. » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/flotte` — section#vehicules > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre « LA FLOTTE » — avec h2#liste-titre « Le bon véhicule pour chaque trajet. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/flotte` — section#choix > div.conteneur.choix-grille > div.tete-section > p.surtitre:nth-of-type(1) « LE BON CHOIX » — avec h2#choix-titre « Combien êtes-vous ? » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/flotte` — section#confort > div.conteneur.confort-grille > div > p.surtitre « CONFORT » — avec h2#confort-titre « Le confort, jusqu'aux détails. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/reserver` — aside.fpe__tete.recap > figure.pancarte.pancarte--petite > div.pancarte-carton > p.pancarte-marque:nth-of-type(1) « MAYSAM TRANSFERT » — avec aside.fpe__tete.recap > figure.pancarte.pancarte--petite > div.pancarte-carton > p.pancarte-nom:nth-of-type(2) « Votre nom » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/reserver` — section#debut > div.conteneur.ouv-vitre-contenu:nth-of-type(2) > p.surtitre:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — avec h1#reserver-titre « Réservez votre trajet en quelques minutes. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.surtitre:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — avec h1#services-titre « Bien plus qu'un simple trajet. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/services` — section#aeroport > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre « À L'AÉROPORT » — avec h2#aeroport-titre « Trois gestes qui rassurent. » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/trajets` — section#debut > div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-dest:nth-of-type(2) « Paris ↔ Orly » — avec div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) > span:nth-of-type(1) « 60 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **textes qui se chevauchent** — `/trajets` — div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-montant:nth-of-type(3) > span:nth-of-type(1) « 60 » — avec section#debut > div.conteneur.ouv-prix-grille > div.prix-geant:nth-of-type(2) > p.prix-geant-duree:nth-of-type(4) « 30–45 min » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, 1366×768 normal, +4)_
- **textes qui se chevauchent** — `/trajets` — div.carte.carte--trajets:nth-of-type(2) > div.carte-detail > div.carte-fiche:nth-of-type(1) > p.carte-fiche-lieu:nth-of-type(1) « Aéroport d'Orly » — avec div.carte.carte--trajets:nth-of-type(2) > div.carte-detail > div.carte-fiche:nth-of-type(1) > p.carte-fiche-prix:nth-of-type(2) « 60 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **textes qui se chevauchent** — `/trajets` — div.carte.carte--trajets:nth-of-type(2) > div.carte-detail > div.carte-fiche:nth-of-type(1) > p.carte-fiche-prix:nth-of-type(2) « 60 € » — avec div.carte.carte--trajets:nth-of-type(2) > div.carte-detail > div.carte-fiche:nth-of-type(1) > p.carte-fiche-duree:nth-of-type(3) « Paris ↔ Orly · 30–45 min » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- … et 13 autres (rapport.json)

### photo faible affichée en grand (6)

- **photo faible affichée en grand** — `/` — article#service-aeroport > figure.media.service-media > picture > img « Terminal d'aéroport la nuit, façade de verre éclai » — grok/service-aeroport (4/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article#service-gares > figure.media.service-media > picture > img « Grande gare au petit matin, verrière et lumière do » — grok/service-gares (5/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article#service-parcs > figure.media.service-media > picture > img « Coffre ouvert avec deux valises et un rehausseur,  » — grok/service-parcs (4/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article#service-disposition > figure.media.service-media > picture > img « Banquette arrière en cuir noir, eau et plaid, lumi » — grok/service-disposition (4/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article#service-evenements > figure.media.service-media > picture > img « Ruban blanc noué à la portière d'une berline noire » — grok/service-evenements (4/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article#service-longs > figure.media.service-media > picture > img « Autoroute à la tombée du jour, traînées de lumière » — grok/service-longs-trajets (4/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 1985 px pour un écran de 1366 px _(1366×768 sansJs)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 320×568 sansJs, +1)_
- **premier écran : bouton principal hors de l’écran** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Réserver un trajet » _(320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs, +1)_

### élément recouvert (11)

- **élément recouvert** — `/contact` — div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(1) — par div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(2) — par div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(3) — par div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > circle:nth-of-type(1) _(390×844 normal, 768×1024 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(4) — par div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(5) — par div.conteneur.zone-grille > div.carte.carte--zone:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/contact` — section#debut > div.ouv-scindee-texte > p.hero-info:nth-of-type(4) « Assistance 24 h/24, 7 j/7 » — par div.ouv-scindee-texte > p.numero-geant:nth-of-type(3) > a > span.chiffre.chiffre--espace:nth-of-type(2) « 6 » _(1920×1080 normal)_
- **élément recouvert** — `/trajets` — div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > g.carte-point.actif:nth-of-type(1) — par div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/trajets` — div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(2) — par div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/trajets` — div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(3) — par div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > circle:nth-of-type(1) _(768×1024 normal, 390×844 normal)_
- **élément recouvert** — `/trajets` — div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(4) — par div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/trajets` — div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > g.carte-point:nth-of-type(5) — par div.conteneur > div.carte.carte--trajets:nth-of-type(2) > svg.carte-svg > path.carte-idf:nth-of-type(1) _(1366×768 normal, 1920×1080 normal)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/services` — h1#services-titre « Bien plus qu'un simple trajet. » — haut 386 px, bas 513 px, zone 65–503 px _(320×568 normal, 320×568 sansJs)_

### premier écran : titre h1 invisible (1)

- **premier écran : titre h1 invisible** — `/services` — h1#services-titre « Bien plus qu'un simple trajet. » _(844×390 normal)_

### contraste sur image (2)

- **contraste sur image** — `/services` — section#debut > div.conteneur.ouv-plein-contenu:nth-of-type(2) > p.surtitre:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 3.67:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/services` — h1#services-titre > em « simple trajet. » — 2.75:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile (6)

- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/trajets` — bande en rgb(129, 109, 71) à côté du voile en rgb(13, 14, 19), sur 5 image(s) sur 5 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/trajets` — bande en rgb(129, 109, 71) à côté du voile en rgb(13, 14, 19), sur 4 image(s) sur 4 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/trajets` — bande en rgb(129, 109, 71) à côté du voile en rgb(13, 14, 19), sur 2 image(s) sur 2 (films/bords-voile-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/trajets` — bande en rgb(129, 109, 71) à côté du voile en rgb(13, 14, 19), sur 5 image(s) sur 5 (films/bords-voile-services-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/services` — bande en rgb(129, 109, 71) à côté du voile en rgb(13, 14, 19), sur 3 image(s) sur 3 (films/bords-voile-trajets-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/trajets` — bande en rgb(130, 109, 72) à côté du voile en rgb(13, 14, 19), sur 3 image(s) sur 3 (films/bords-voile-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/reserver` — section#formulaire.fpe.fond-ivoire — ses effets (pancarte) ne bougent pas, ou sont cachés à cette taille _(1366×768 normal, 390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (3)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 580 × 58 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(1366×768)_
- **grille : objet d’ouverture hors du premier écran** — `/contact` — 358 × 44 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_
- **grille : objet d’ouverture hors du premier écran** — `/reserver` — 868 × 44 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(1366×768)_

### section sans visuel (5)

- **section sans visuel** — `/` — section#tarifs « DÉPARTS DEPUIS PARIS Des prix clairs, sans surpris » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/` — section#temoignages « TÉMOIGNAGES Ils nous confient leurs trajets. Des c » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/` — section#services « NOS SERVICES Bien plus qu'un simple trajet. Illust » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/services` — section#liste « SIX SERVICES Choisissez votre trajet. 01 / 06 AÉRO » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal)_
- **section sans visuel** — `/trajets` — section#tarifs « LES TARIFS Cinq trajets, cinq prix. Paris ↔ Orly A » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (73)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > p.surtitre.hero-anim:nth-of-type(1) « CHAUFFEUR PRIVÉ · PARIS & ÎLE‑DE‑FRANCE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#tarifs > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « DÉPARTS DEPUIS PARIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.estim-grille > form.estim-form > fieldset.estim-trajets > legend « VOTRE TRAJET » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#estimation > div.conteneur.estim-grille > div.estim-resultat:nth-of-type(2) > p.estim-label:nth-of-type(1) « VOTRE VÉHICULE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#services > div.conteneur.services-tete:nth-of-type(1) > div > p.surtitre « NOS SERVICES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-aeroport > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-gares > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-parcs > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-disposition > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-evenements > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#service-longs > figure.media.service-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#vehicules > div.conteneur > div.tete-section:nth-of-type(1) > p.surtitre:nth-of-type(1) « NOS VÉHICULES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pancarte > figure.media.pancarte-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pancarte > div.conteneur.pancarte-grille > div.pancarte-texte > p.surtitre:nth-of-type(1) « À L'AÉROPORT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.pancarte-grille > div.pancarte-texte > div.pancarte-essai > label « ESSAYEZ AVEC VOTRE NOM » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.pancarte-grille > figure.pancarte > div.pancarte-carton > p.pancarte-marque:nth-of-type(1) « MAYSAM TRANSFERT » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(1) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(2) > figcaption > span.temoignage-trajet:nth-of-type(2) « ROISSY CDG ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(3) > figcaption > span.temoignage-trajet:nth-of-type(2) « GARE DU NORD ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(4) > figcaption > span.temoignage-trajet:nth-of-type(2) « PARIS ↔ DISNEYLAND PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(5) > figcaption > span.temoignage-trajet:nth-of-type(2) « MISE À DISPOSITION À LA JOURNÉE » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(6) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.temoignages-grille:nth-of-type(2) > figure.temoignage:nth-of-type(1) > figcaption > span.temoignage-trajet:nth-of-type(2) « ORLY ↔ PARIS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- … et 48 autres (rapport.json)

### typographie française (7)

- **typographie française** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(1) > blockquote > p « « Chauffeur ponctuel, véhicule impeccable et prix  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(2) > blockquote > p « « Suivi du vol en direct et accueil avec pancarte  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(3) > blockquote > p « « Chauffeur devant chez moi à 5h30. Parfait. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(4) > blockquote > p « « Sièges enfants installés sans rien demander. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(5) > blockquote > p « « Discret, souriant et une conduite très sûre. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.temoignages-grille.fx-fini:nth-of-type(2) > figure.temoignage:nth-of-type(6) > blockquote > p « « Tarif fixe clair dès la demande, pas de compteur » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/reserver` — section#bon-a-savoir > div.conteneur.faq-grille > div.tete-section:nth-of-type(1) > p:nth-of-type(2) « Une question avant de réserver ? 06 62 15 83 63, 2 » — espace insécable manquante avant ou après « ? » _(1366×768 normal)_

### identifiant en double (1)

- **identifiant en double** — `/services` — article#aeroport « 01 / 06 AÉROPORTS Transferts aéroport Orly, Roissy » — id="aeroport" _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

### bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant le voile** — `/trajets` — bande en rgb(129, 109, 71) à côté du voile en rgb(13, 14, 19), sur 1 image(s) sur 1 (films/bords-voile-flotte-1366.png) _(1366×768 barre de défilement classique (15 px))_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (9.1 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/flotte` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-flotte-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (6)

- **effet qui ne bouge pas au défilement** — `/` — form.estim-form — estimateur : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — div.vehicules-grille — silhouettes : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/flotte` — div.flotte-rangs — silhouettes : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/reserver` — figure.pancarte.pancarte--petite — pancarte : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/services` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_
- **effet qui ne bouge pas au défilement** — `/trajets` — form.estim-form — estimateur : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 47 min de travail pour 75 min de budget, 13 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /flotte, /reserver, /services, /trajets.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2899 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2624 ms depuis le premier octet
- Ouverture /flotte (1366×768) : 2335 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2505 ms depuis le premier octet
- Ouverture /services (1366×768) : 2628 ms depuis le premier octet
- Ouverture /trajets (1366×768) : 2333 ms depuis le premier octet
- Ouverture / (390×844) : 2897 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2623 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /flotte (390×844) : 2397 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2501 ms depuis le premier octet
- Ouverture /services (390×844) : 2552 ms depuis le premier octet
- film de l'ouverture /services 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /trajets (390×844) : 2323 ms depuis le premier octet
- Bords de l’écran : 512 images d’intro, 23 de voile et 209 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /flotte : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /services : aucune section épinglée ou plein écran.
- Tient dans l'écran /trajets : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 429, tâche la plus longue 52 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité /flotte 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité /services 1366×768 (molette) : 0 % d'images lentes sur 285, tâche la plus longue 0 ms
- Fluidité /trajets 1366×768 (molette) : 0 % d'images lentes sur 325, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1428, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /flotte 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /services 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /trajets 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.69 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /flotte : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /services : 0.60 s de calcul au chargement (téléphone ralenti).
- Vitesse /trajets : 0.57 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/contact,/flotte,/reserver,/services,/trajets --seulement=fichiers,mesures,bords,mouvement
```
