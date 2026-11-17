# Maysam Transfert · maquette v2

Maquette de présentation du futur site de Maysam Transfert, chauffeur privé à Paris et en Île‑de‑France.
Direction « Les phares dans la nuit » : noir et or du logo, Paris de nuit, prix fixes mis en avant.

- Adresse de la maquette : https://maysam-transfert-maquette.vercel.app
- Site actuel : https://www.maysam-transfert.fr (SITE123)
- Pages : accueil, Trajets & tarifs, Services, Flotte, Réserver, Contact, page 404.
- Langue : français.

## Ce que le client doit fournir (à compléter)

| Information | Où elle apparaîtra |
|---|---|
| Mentions légales complètes : nom et prénom de l'entrepreneur, adresse, numéro SIRET, responsable de la publication | Pied de page, page « Mentions légales » du site final |
| Numéro d'inscription au registre des VTC | Mentions légales |
| Assurance responsabilité civile professionnelle (obligatoire pour un VTC) : assureur et numéro de contrat, si le client souhaite l'afficher | Mentions légales |
| Politique de confidentialité (RGPD) : données recueillies par le formulaire, durée de conservation, droits | Lien sous le formulaire, pied de page |
| Hébergeur du site final : Vercel Inc. (adresse à vérifier sur vercel.com au moment de la mise en ligne) | Mentions légales |
| Crédits : les images marquées « Illustration générée » ont été créées par intelligence artificielle (Grok) | Mentions légales |
| Photos réelles de vos véhicules (Tesla Model Y, Mercedes Classe E, Mercedes Classe V) et, si vous le souhaitez, du chauffeur | Page Flotte, accueil |

### Retiré ou remplacé faute d'information

| Élément | Page | Ce qui s'affiche à la place |
|---|---|---|
| Tarif de la mise à disposition (à l'heure, à la journée) | Trajets & tarifs, Services | « Tarif donné à la demande » |
| Forfaits des longs trajets (province, Europe) | Trajets & tarifs, Services | « Forfait donné à la demande » |
| Tarif des événements et mariages | Services, Réserver | « Tarif à la demande » |
| Prix en Mercedes Classe V (4 à 7 passagers) | Estimateur, Réserver | « Tarif confirmé à la réservation » |
| Note et nombre d'avis | Accueil | Les 6 témoignages réels du site, sans note |
| Photo de la Mercedes Classe E (la photo du site actuel montre une Classe S) | Flotte | Silhouette dessinée |

## Points relevés sur le site actuel

- Orly, Roissy CDG et Beauvais sont marqués « aller-retour », les gares et Disneyland « par trajet » : la maquette affiche un prix par trajet, dans un sens ou dans l'autre (choix validé).
- L'estimateur proposait des vans de 6 et 8 places alors que la flotte n'a qu'une Classe V de 7 places : la maquette suit la flotte (choix validé).
- La photo « Mercedes Classe E » montre une Classe S ; toutes les photos viennent de banques d'images.
- Le site affiche un sélecteur FR, EN, ES, IT mais n'est qu'en français.
- Le téléphone est écrit « 00 33 6 62… » : la maquette l'écrit 06 62 15 83 63.
- Les mentions légales ne donnent ni SIRET, ni adresse, ni responsable de la publication.

## Règle du secteur

Un VTC ne prend en charge un client que sur réservation préalable (code des transports, article L. 3120‑2) : la maquette parle de « réservation 24 h/24 », jamais de prise en charge immédiate.

## À la mise en ligne définitive

À retirer :
- la consigne `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`) ;
- le formulaire de réservation simulé (à brancher sur un vrai envoi : e-mail ou outil de réservation) ;
- les mentions « à compléter » du pied de page, remplacées par les vraies pages ;
- les phrases d'attente (« Tarif donné à la demande ») si le client donne ses tarifs.

À garder : la mention « Illustration générée » sur chaque image créée par IA.

## Technique

Site statique (HTML, CSS, JavaScript), généré par `node outils/generer.mjs` à partir de `donnees/` (textes, trajets, services, véhicules, témoignages, FAQ) et de `source/`. Ne jamais modifier les pages `.html` à la main.
Images : pipeline de la bibliothèque (`plan-images.json`, `donnees/images.json`). Audit : `_audit/` (rapport dans `_audit/rapport/rapport.md`).
Modules repris de la bibliothèque : formulaire-par-etapes (Réserver), planches-empilees (Services).
