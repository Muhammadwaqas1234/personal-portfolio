# Muhammad Waqas — AI Engineer Portfolio

A 3D, interactive portfolio built with **React + Vite + react-three-fiber (Three.js)** and **Framer Motion**.
Dark glassmorphism theme, animated 3D particle/torus-knot background, mouse-tilt cards, scroll reveals,
animated counters, custom cursor — and full SEO so Google can index it.

🔗 **Live:** https://muhammadwaqas1234.github.io/personal-portfolio/

## Tech stack
- React 18 + Vite 5
- react-three-fiber + @react-three/drei (3D scene)
- Framer Motion (scroll animations)
- Typed.js (rotating roles)
- Plain CSS (single design-system stylesheet)

## Run locally
```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Edit your content
All text, projects, skills, stats, and links live in **`src/data/content.js`** — edit that one file,
no need to touch components.

## Deploy

### Option A — GitHub Pages (automatic)
This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).
1. Push to the `main` branch.
2. In your repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` rebuilds and publishes to
   `https://muhammadwaqas1234.github.io/personal-portfolio/`.

### Option B — Vercel / Netlify (free)
- Import the repo. Build command `npm run build`, output dir `dist`.
- If deploying at a **root domain** (not a `/personal-portfolio/` subpath), change
  `base` in `vite.config.js` to `'/'` and update the absolute URLs in `index.html`,
  `public/robots.txt`, and `public/sitemap.xml`.

## SEO
- Meta description, keywords, Open Graph + Twitter cards, canonical URL — in `index.html`.
- JSON-LD `Person` structured data for Google rich results.
- `public/robots.txt` and `public/sitemap.xml`.
- After deploying, submit the site to [Google Search Console](https://search.google.com/search-console)
  to get indexed faster.

---
© 2026 Muhammad Waqas · AI Engineer · Agentic AI & RAG
