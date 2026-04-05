# Empirische Bildungsforschung

Course website for *Einführung in die empirische Bildungsforschung* (EBF), Sommersemester 2022, Universität Erlangen-Nürnberg.

A static landing page built with [Vite](https://vitejs.dev/) (vanilla JS/CSS) that links to 10 external lecture modules hosted as Shiny apps.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

### GitHub Pages subdirectory

The deploy workflow automatically sets `VITE_BASE=/<repo-name>/`. For a user/org site (`username.github.io`) set `VITE_BASE=/` or remove the env var in `.github/workflows/deploy.yml`.

## Deploy

Push to `main` – the GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages automatically.

**First-time setup:** go to *Settings → Pages* and set the source to **GitHub Actions**.

## Project structure

```
├── index.html              Entry point
├── src/
│   ├── main.js             Renders session cards, scroll animations
│   ├── style.css           All styles (CSS custom properties, no framework)
│   └── data/sessions.js    Session content (titles, info, links, objectives)
├── public/
│   └── pics/               Slide preview images (slide01.png … slide10.png)
├── R/                      Legacy R Markdown source files (archived)
└── .github/
    └── workflows/
        └── deploy.yml      Build & deploy to GitHub Pages
```

## Adding or updating a session

Edit `src/data/sessions.js`. Each entry has:

| Field | Description |
|---|---|
| `id` | Zero-padded number `'01'`–`'10'` |
| `title` | Session title |
| `info` | Short description shown on the card |
| `objectives` | Array of learning-objective questions (empty array = hidden) |
| `slidesUrl` | Link to the Shiny slide module |
| `pdfUrl` | Link to the PDF slides |
| `app` | `{ url, label }` for an optional interactive app, or `null` |

Slide preview images live in `public/pics/` and follow the naming convention `slide<id>.png`.
