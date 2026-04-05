# Empirische Bildungsforschung

Course website for *Einführung in die empirische Bildungsforschung* (EBF), Sommersemester 2018 - 2022, Universität Erlangen-Nürnberg.

A landing page built with [Vite](https://vitejs.dev/) (vanilla JS/CSS) that links to the lecture modules and learning apps.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```



## Project structure

```
├── index.html              Entry point
├── src/
│   ├── main.js             Renders session cards, scroll animations
│   ├── style.css           All styles (CSS custom properties, no framework)
│   └── data/sessions.js    Session content (titles, info, links, objectives)
├── public/
│   └── pics/               Slide preview images (slide01.png … slide10.png)
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
