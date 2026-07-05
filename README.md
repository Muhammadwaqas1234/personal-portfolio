<div align="center">

# Muhammad Waqas — AI Engineer Portfolio

**A fast, modern, single-page portfolio built with React and Vite.**

*Dark glassmorphism design · scroll-reveal animations · animated stat counters · full SEO*

<br>

[![Live Demo](https://img.shields.io/badge/Live_Demo-muhammadwaqas1234.github.io-00B4D8?style=for-the-badge&logo=githubpages&logoColor=white)](https://muhammadwaqas1234.github.io/personal-portfolio/)

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

</div>

---

## Overview

This is the source code for my personal portfolio — a single-page application showcasing my work as an AI Engineer specializing in **Agentic AI**, **RAG systems**, and **production ML services**. The site is intentionally lightweight: no WebGL, no heavy UI framework — just React, a single design-system stylesheet, and subtle motion design for a polished, fast experience on any device.

**Live site:** [muhammadwaqas1234.github.io/personal-portfolio](https://muhammadwaqas1234.github.io/personal-portfolio/)

---

## Features

- **Hero section** with rotating role titles powered by Typed.js
- **Animated stat counters** that count up when scrolled into view
- **Scroll-reveal animations** throughout, built with Framer Motion
- **Skills grid** — six capability cards covering Agentic AI, RAG, LLMs, backend, computer vision, and realtime voice AI
- **Featured projects** — production systems with badges, descriptions, and tech tags
- **Certifications gallery** with verify links
- **Contact section** — email, WhatsApp, LinkedIn, and GitHub
- **Single-file content management** — every word on the site lives in one data file
- **Full SEO** — meta tags, Open Graph / Twitter cards, JSON-LD structured data, sitemap, and robots.txt
- **Zero-config deployment** — pushes to `main` automatically build and publish via GitHub Actions

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| UI framework | React 18 |
| Build tool | Vite 5 |
| Animations | Framer Motion (scroll reveals), Typed.js (rotating roles) |
| Styling | Plain CSS — single design-system stylesheet (`src/styles.css`) |
| Hosting & CI/CD | GitHub Pages via GitHub Actions |

---

## Project Structure

```
personal-portfolio/
├── .github/workflows/deploy.yml   # CI/CD — builds & deploys to GitHub Pages on push
├── index.html                     # Meta tags, OG/Twitter cards, JSON-LD
├── vite.config.js                 # Vite config (base path for GitHub Pages)
├── public/
│   ├── images/                    # Photos, project images, certificates
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx                   # App entry point
    ├── App.jsx                    # Page layout
    ├── styles.css                 # Design system (theme, components, animations)
    ├── data/
    │   └── content.js             # ★ ALL site content — edit this one file
    └── components/
        ├── Header.jsx             # Navigation
        ├── Home.jsx               # Hero with typed roles
        ├── Sections.jsx           # Stats, About, Skills, Projects, Certs, Contact
        ├── Counter.jsx            # Animated count-up numbers
        ├── Reveal.jsx             # Scroll-reveal wrapper
        └── Scene3D.jsx            # Lightweight CSS backdrop (glow + grid)
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/Muhammadwaqas1234/personal-portfolio.git
cd personal-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server → http://localhost:5173
npm run dev
```

| Script | Description |
| :--- | :--- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Manual deploy to GitHub Pages (`gh-pages`) |

---

## Customizing Content

All text, projects, skills, stats, certifications, and links live in **[`src/data/content.js`](src/data/content.js)** — edit that one file to update the site; no component changes needed. Images go in `public/images/`.

---

## Deployment

### GitHub Pages (automatic)

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: **Settings → Pages → Source → GitHub Actions**.

### Vercel / Netlify

Import the repo with build command `npm run build` and output directory `dist`. If deploying at a **root domain** (not the `/personal-portfolio/` subpath), set `base: '/'` in `vite.config.js` and update the absolute URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

---

## SEO

- Meta description, keywords, canonical URL, Open Graph and Twitter cards in `index.html`
- JSON-LD `Person` structured data for Google rich results
- `robots.txt` and `sitemap.xml` in `public/`
- After deploying, submit the site to [Google Search Console](https://search.google.com/search-console) for faster indexing

---

## Contact

- **Email:** [raiwaqasabid@gmail.com](mailto:raiwaqasabid@gmail.com)
- **LinkedIn:** [linkedin.com/in/muhammad-waqas-111a68212](https://www.linkedin.com/in/muhammad-waqas-111a68212)
- **GitHub:** [@Muhammadwaqas1234](https://github.com/Muhammadwaqas1234)

<div align="center">

<br>

*© 2026 Muhammad Waqas · AI Engineer · Agentic AI & RAG*

</div>
