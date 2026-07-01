# AGENTS.md, contexte pour l'IA

À lire avant de modifier ce repo. Site vitrine Next.js de **View4Sight** (SaaS français de nuages de points 3D). Construit sur un template ThemeForest "Lexend" puis fortement personnalisé. Vue d'ensemble non technique : voir `PASSATION.md`.

## Règles de base

- Stack : **Next.js 15 App Router, React 19, JavaScript** (pas TypeScript). SCSS + CSS du template (Bootstrap/UIKit). Tailwind est installé mais quasi inutilisé, ne pas s'en servir.
- Thème sombre, fond quasi noir `#0E0E0F`. Couleur de marque orange `#FE552E` (survol `#C54E34`).
- Bilingue EN/FR : tout texte visible passe par `t('clef')` (hook `useTranslation`) avec la clef ajoutée dans `data/translations/en.json` **et** `fr.json`. Jamais de texte en dur. Certains composants reçoivent une prop `locale` + un helper `tx({fr,en}, locale)`, c'est valable aussi.
- Composants du site : **`components/view4sight/`**. Le reste de `components/` est le template d'origine, souvent mort.
- Textes FR : **pas de tiret cadratin (—), jamais.** Ton clair et moderne.

## Pièges du template (important)

- Les classes flex du template (`d-flex align-items-center justify-content-center`) **ne centrent pas de façon fiable**. Centrer en inline (`style={{display:'flex',alignItems:'center',justifyContent:'center'}}`) ou en CSS propre.
- Le CSS global force `fill: rgb(181,181,183)` sur tout `path`/`rect`/`circle` de SVG. Forcer la couleur en inline ou en CSS scopé, sinon les icônes virent au gris.
- Les utilitaires d'espacement, `max-w` et bordure du template sont en `!important`. Pour les surcharger, utiliser une **classe** (pas de l'inline), sauf `background-color` qui passe en inline.
- `.form-control` est `!important` : les surcharges d'input doivent l'être aussi.
- Bordure semi-transparente qui "bave" sur une pilule arrondie : remplacer `border` par `box-shadow: inset 0 0 0 1px rgba(...)`.
- Animations d'apparition : un `data-anime` n'anime que s'il contient `targets: >*`. Sans ça, no-op silencieux (l'élément apparaît sans animation). Référence correcte : `MainFeatures.jsx`.
- Les changements de `next.config.mjs` ne sont pas rechargés à chaud : redémarrer `npm run dev`.

## i18n, comment ça marche

- `middleware.js` redirige toute URL sans préfixe de langue vers `/en` ou `/fr` (selon le navigateur).
- La locale = premier segment de l'URL. `lib/i18n.js` définit `locales = ['en','fr']`, défaut `en`.
- Pages serveur qui exportent des métadonnées : utiliser `lib/pageMetadata.js` (map bilingue centrale) ou un objet inline `{fr,en}`, pas le hook client `useTranslation`.

## Workflow conseillé

1. `npm run dev` (port 3000).
2. Modifier un composant dans `components/view4sight/` ou une page dans `app/[locale]/`.
3. Vérifier sur `/fr/...` **et** `/en/...` (fuite de langue fréquente).
4. Vérifier desktop **et** mobile (390px) : 0 débordement horizontal, 0 erreur console.

## Placeholders, ne pas prendre pour argent comptant

- Clients Ville de Paris / VINCI / Eiffage (logos + citations) : **fictifs**, marqués `// TODO before go-live`.
- Traduction EN des pages légales : à faire relire par un juriste.
- Paiements Polar : branchés sur la **production** (org View4Site, IDs produits dans `data/view4sight-pricing.js`). Tester un checkout en prod = vrai paiement. Le webhook de production reste à configurer.
