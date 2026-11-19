# Maloe Decastel — CV en ligne

Site CV statique construit avec [Astro](https://astro.build) à partir du thème
[astro-aria](https://github.com/miantiao-me/astro-aria), et déployé sur GitHub Pages.

## Pages

| Route       | Contenu                                                    |
| ----------- | ---------------------------------------------------------- |
| `/`         | Accueil : présentation, parcours scolaire, langues, contact |
| `/a-propos` | Détail du parcours, langues et centres d'intérêt            |
| `/cv.html`  | CV A4 prêt à imprimer (fond blanc, mise en page papier)     |

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

## Contenu

Tout le contenu personnel est centralisé :

- `src/collections/parcours.json` — étapes scolaires
- `src/collections/menu.json` — entrées de navigation
- `src/pages/index.astro` — accueil (langues et centres d'intérêt inclus)
- `src/pages/a-propos.astro` — page « À propos »
- `public/cv.html` — version imprimable du CV (nom, téléphone, e-mail)

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit et publie le site à chaque
push sur `main`. Dans le dépôt GitHub : **Settings → Pages → Build and
deployment → Source : GitHub Actions**.

`withastro/action` détecte automatiquement l'URL du site et le chemin de base
(`site` / `base`), donc rien à configurer dans `astro.config.mjs`.

## Première publication

Le dépôt est déjà configuré avec le remote `origin` vers
`maloedecastel-byte/maloedecastel-byte.github.io`. Pour l'authentification, la
GitHub CLI est installée dans `~/.local/bin` :

```sh
~/.local/bin/gh auth login --hostname github.com --git-protocol https --web
gh repo create maloedecastel-byte.github.io --public --source=. --remote=origin --push
```

Puis dans le dépôt : **Settings → Pages → Source : GitHub Actions**.
Le site sera publié sur <https://maloedecastel-byte.github.io>.
