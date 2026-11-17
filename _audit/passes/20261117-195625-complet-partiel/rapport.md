# Rapport d’audit

Projet : `maysam-transfert-maquette` · 17/11/2026 21:05:07 · 9 min · 7 page(s) · audit complet (étapes : fichiers, grille, mesures, bords)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261117-195625-complet-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), bords de l’écran (7)

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

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-192606-complet | complet | toutes | toutes | 8 | 68 | 1 | échecs |
| 20261117-195114-complet-cible-partiel | complet | / | fichiers, mesures | 1 | 19 | 0 | échecs |
| 20261117-195433-complet-cible-partiel | complet | / | fichiers, mesures | 0 | 19 | 0 | complet |
| **20261117-195625-complet-partiel** (celle-ci) | complet | toutes | fichiers, grille, mesures, bords | 0 | 5 | 0 | complet |

## Échecs

Aucun.

## À regarder

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 358 × 49 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (3)

- **texte de contenu sous 13 px (ordinateur)** — `/flotte` — article#classe-v > div.flotte-rang-texte:nth-of-type(2) > p.badge:nth-of-type(2) « FAMILLES ET GROUPES » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 5 · TRAJET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/services` — article#longs > div.ple__contenu > p.ple__cartouche:nth-of-type(1) > span:nth-of-type(2) « PROVINCE, EUROPE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

### section sans visuel (1)

- **section sans visuel** — `/services` — section#liste « SIX SERVICES Choisissez votre trajet. 01 / 06 AÉRO » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 13 min de travail pour 75 min de budget, 0 min d’attente de l’utilisateur.
- Grille wouahou : point « 3. La transition reprend le motif » dispensé (config.json) : vitre teintée qui remonte (glisse) : le geste du métier, filet doré sur le bord.
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : pas d'objet obligatoire ; l'estimateur et la pancarte au nom tapé servent le visiteur.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : la lumière des phares relie l'intro, le voile et l'ouverture.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : titres francs en Bodoni, mot en or italique.
- Grille wouahou : point « 6. La scène est un geste du métier » dispensé (config.json) : la galerie des services est la vitrine des six prestations.
- Grille wouahou : point « 7. L’action principale a un retour physique » dispensé (config.json) : v11 : la pancarte affiche le nom tapé dans le formulaire.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Bords de l’écran : 459 images d’intro, 24 de voile et 205 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
