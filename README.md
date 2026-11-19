# Maloe Decastel — CV en ligne

Site CV statique construit avec [Astro](https://astro.build) à partir du thème
[astro-aria](https://github.com/miantiao-me/astro-aria), et déployé sur GitHub Pages.

## Pages

| Route       | Contenu                                                    |
| ----------- | ---------------------------------------------------------- |
| `/`         | Accueil : présentation, parcours scolaire, langues, contact |
| `/a-propos` | Détail du parcours, langues et centres d'intérêt            |
| `/cv.html`  | CV A4 prêt à imprimer (fond blanc, mise en page papier)     |
| `/cv.pdf`   | Même CV en PDF téléchargeable                               |
| `*`         | Page 404 avec retour à l'accueil                            |

## Développement

Node.js 20+ et pnpm sont requis. Sur cette machine, ils sont installés
localement dans `~/.local` (sans droits administrateur). Il faut donc les
ajouter au `PATH` :

```sh
export PATH="$HOME/.local/node/bin:$HOME/.local/bin:$PATH"

pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # génère dist/
pnpm preview  # sert dist/ localement
pnpm pdf      # régénère public/cv.pdf depuis public/cv.html
```

`pnpm pdf` utilise `playwright-core` et le Chromium déjà présent sur la machine.
La génération est aussi possible à la main avec n'importe quel Chrome :

```sh
chrome --headless --print-to-pdf=public/cv.pdf public/cv.html
```

## Contenu

Tout le contenu personnel est centralisé :

- `src/collections/parcours.json` — étapes scolaires
- `src/collections/menu.json` — entrées de navigation
- `src/pages/index.astro` — accueil (langues et centres d'intérêt inclus)
- `src/pages/a-propos.astro` — page « À propos »
- `public/cv.html` — version imprimable du CV (nom, téléphone, e-mail)
- `public/cv.pdf` — PDF généré depuis `public/cv.html` (`pnpm pdf`)
- `public/og.png` — image d'aperçu pour les partages (1200 × 630)
- `public/favicon.svg` — favicon « MD » aux couleurs du site

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque
push sur `main`. Dans le dépôt GitHub : **Settings → Pages → Build and
deployment → Source : GitHub Actions**.

L'URL publique est fixée dans `astro.config.mjs` (`site`), ce qui permet de
générer les balises `canonical` et `og:image` en URL absolue.

## Site en ligne

Le site est publié sur <https://maloedecastel-byte.github.io> depuis le dépôt
`maloedecastel-byte/maloedecastel-byte.github.io`.

Chaque push sur `main` déclenche le workflow `Deploy to GitHub Pages` :
GitHub Actions construit le site et le republie (environ 1 à 2 minutes).
