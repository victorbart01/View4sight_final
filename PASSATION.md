# Passation, View4Sight

Site vitrine (marketing) de **View4Sight**, SaaS français de visualisation de nuages de points 3D et BIM dans le navigateur. Ce document explique ce qui a été fait, ce qui reste à faire, comment ça tourne, et comment reprendre le projet avec une IA.

À lire en premier. Pour les détails techniques et les pièges du code, voir `AGENTS.md`.

---

## 1. Démarrer en local (5 min)

```bash
npm install
cp .env.example .env.local   # puis remplir les vraies valeurs (voir section 4)
npm run dev                  # http://localhost:3000
```

Build de production : `npm run build` puis `npm start`. Node 20+ recommandé.

---

## 2. La stack en bref

- **Next.js 15** (App Router, JavaScript, pas TypeScript), **React 19**.
- Style : **SCSS + CSS d'un template ThemeForest "Lexend"** (Bootstrap/UIKit). Tailwind est installé mais quasi pas utilisé.
- **i18n maison** : EN + FR, langue détectée par l'URL (`/en/...`, `/fr/...`).
- **Paiements** : Polar.sh (organisation de **production**, checkout vérifié). **Emails** : Nodemailer (SMTP). **Chat** : widget Zoho.
- Thème sombre, couleur de marque orange `#FE552E`.

---

## 3. Organisation du code

```
app/[locale]/...        toutes les pages du site (préfixe /en ou /fr)
app/api/...             checkout Polar, webhook Polar, formulaire de démo
components/view4sight/  tous les composants du site (le reste de components/ = template)
data/translations/      en.json + fr.json (tous les textes)
data/*.js               contenus (menu, pricing, blog, FAQ, carrières...)
lib/i18n.js             langues et helpers
lib/pageMetadata.js     titres/SEO bilingues des pages
lib/polar.js            config paiements
middleware.js           redirige vers /en ou /fr selon la langue du navigateur
```

---

## 4. Variables d'environnement

Le modèle complet est dans **`.env.example`**. À reporter dans `.env.local` (local) **ET** dans les réglages du projet Vercel (production) :

- `POLAR_ACCESS_TOKEN`, `POLAR_SERVER`, `NEXT_PUBLIC_BASE_URL`
- `EMAIL_SERVER_HOST`, `EMAIL_SERVER_PORT`, `EMAIL_SERVER_USER`, `EMAIL_SERVER_PASSWORD`, `EMAIL_FROM`

Détails de configuration Polar : voir **`POLAR_SETUP.md`**.

---

## 5. Ce qui a été fait (reprise 2026)

Le site était un template abandonné. Travail réalisé pour le remettre en état livrable :

- Refonte des sections clés : homepage, bloc sécurité (carte de France en nuage de points), témoignages, page fonctionnalités, page use-cases, CTA global, pages carrières et support.
- Traduction complète **EN/FR** de tout le site public (textes, métadonnées SEO, pages légales).
- Nouvelle page use-case "Ville de Paris" façon Linear/Vercel.
- Montée de version **Next.js 15.5.19** (correction de la faille critique CVE-2025-66478 qui bloquait le déploiement Vercel).
- Nettoyage du repo : suppression des fichiers de brouillon, des endpoints de debug, et sortie des secrets du suivi git.

---

## 6. Ce qui reste à faire

🔴 = à traiter **avant la mise en ligne**.

- 🔴 **Régénérer le mot de passe SMTP.** `.env.local` a été commité dans git par le passé, donc le mot de passe email est exposé dans l'historique. Le régénérer (l'ancien token Polar sandbox exposé est déjà mort ; le token Polar de production actuel n'est pas dans git).
- 🔴 **Remplacer les clients fictifs.** Les logos et citations Ville de Paris / VINCI / Eiffage (page use-cases et page "urban-planning") sont des placeholders. Afficher de vraies marques comme clients implique leur accord (risque juridique et d'image). Repérés par `// TODO before go-live` dans le code.
- 🔴 **Finaliser Polar.** Le site est branché sur l'organisation Polar de production (token + IDs produits à jour dans `data/view4sight-pricing.js`, checkout testé OK). Restent : configurer le **webhook Polar de production** (endpoint `/api/webhooks/polar` + son secret dans l'env) et vérifier que les prix affichés sur `/tarifs` correspondent aux produits Polar (Team 79 / Studio 199 $ par mois, 759,20 / 1910,40 $ par an). Rappel : tester un checkout en production = vrai paiement.
- Faire relire la traduction EN des pages légales (confidentialité, CGU) par quelqu'un du juridique.
- Traduire les pages de détail use-case (`components/view4sight/UseCaseDetail.jsx`, encore en anglais, contenu pas encore validé).
- Passe responsive mobile complète (le template est responsive, restent des détails d'espacement à finir).
- Nettoyage optionnel : garder un seul lockfile (conserver `package-lock.json`, supprimer `yarn.lock`), retirer les composants morts du template (`components/headers/*`, `components/view4sight/*/Cta.jsx`), vérifier l'endpoint `app/api/checkout-direct`.

---

## 7. Reprendre le projet avec une IA

Le site a été construit et poli en binôme avec une IA (Claude Code, Cursor). Pour continuer de la même façon :

- Ouvre le repo dans **Cursor** ou **Claude Code**. Le fichier **`AGENTS.md`** est lu automatiquement : il contient les conventions et les pièges du template. À faire lire à l'IA en premier.
- Workflow efficace : lance `npm run dev`, demande une modification sur un composant, regarde le rendu sur `localhost:3000`, itère avec des captures d'écran.
- Toujours passer les textes par `data/translations/{en,fr}.json`, jamais en dur.
- Vérifier chaque changement sur `/fr` **et** `/en`, sur desktop **et** mobile.

---

## 8. Déploiement (Vercel)

- Push sur la branche `main` → déploiement automatique.
- ⚠️ Ne pas redescendre Next.js sous 15.5.x : Vercel bloque les versions vulnérables à la CVE. Ne jamais lancer `npm audit fix --force` (cela casse la version de Next).
- Renseigner les variables d'environnement (section 4) dans les réglages Vercel.
