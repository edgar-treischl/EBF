# Copilot Instructions

## Project Overview

Static course landing page for *Empirische Bildungsforschung* (EBF), built with **Vite + vanilla JS/CSS** (no framework). Content is in German. The page links out to 10 external lecture modules hosted as Shiny apps on `rstudio.edgar-treischl.de`.

Legacy R Markdown sources are archived in `R/`.

## Commands

```bash
npm install       # install deps (first time)
npm run dev       # local dev server with HMR
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

## Architecture

- `index.html` — shell with header, `#sessions-grid` container, and footer
- `src/main.js` — imports CSS, renders session cards from data, drives scroll animations
- `src/style.css` — all styles; uses CSS custom properties (`:root` vars), no framework
- `src/data/sessions.js` — single source of truth for all session content and links
- `public/pics/` — slide preview images (`slide01.png`…`slide10.png`); served at `/pics/` at runtime
- `.github/workflows/deploy.yml` — builds with Vite and deploys to GitHub Pages on push to `main`

## Key Conventions

**Session data** (`src/data/sessions.js`) is the only place to edit content. Each object has `id`, `title`, `info`, `objectives[]`, `slidesUrl`, `pdfUrl`, and `app` (`{ url, label }` or `null`).

**Image paths** in JS use `import.meta.env.BASE_URL` as prefix so they resolve correctly on GitHub Pages subdirectory deployments:
```js
`${import.meta.env.BASE_URL}pics/slide${session.id}.png`
```

**Scroll animation** — cards start `opacity: 0; transform: translateY(18px)`. An `IntersectionObserver` in `main.js` adds `.visible` (which transitions to opacity 1, translateY 0) with staggered `transitionDelay` per card index. The delay is cleared after the entrance completes so hover feels instant.

**GitHub Pages base** — `VITE_BASE=/<repo-name>/` is injected by the deploy workflow; `vite.config.js` reads it via `process.env.VITE_BASE`. For a root deployment set it to `/`.

**Content language** — all UI strings and session content are in German.
