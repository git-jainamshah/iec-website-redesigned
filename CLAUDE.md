# Indian Engineering Company (IEC) — Website

React 19 + Vite SPA, react-router-dom routing, no backend. Plain CSS-in-JS (`<style>` blocks per component) on top of CSS variables in `src/styles/index.css`. i18n via `react-i18next` (`src/utils/translateService.js`).

See `BRAND.md` for verified company facts — treat it as source of truth, do not invent new stats/names.

## Structure
- `src/pages/*.jsx` — route-level pages (one per `<Route>` in `src/App.jsx`)
- `src/components/*.jsx` — shared sections (Header, Footer, Hero, etc.) and homepage blocks
- `src/components/PageHero.jsx` — shared sub-page banner (label/title/subtitle/breadcrumbs)
- `src/assets/` — images/logos, imported directly in JSX (Vite handles hashing)
- `public/` — robots.txt, sitemap.xml, favicon.png (served as-is, not processed by Vite)

## Conventions
- Each page/component owns its own `<style>` block at the bottom of the file; design tokens (colors, spacing, fonts) come from CSS vars defined in `src/styles/index.css` — reuse those vars, don't hardcode hex/px values.
- Routes are added in `src/App.jsx` only.
- Forms (e.g. `Contact.jsx`) are currently client-side only (no submit endpoint) — `console.log` placeholder on submit.

## SEO / cache-busting (already configured)
- `index.html` has full meta/OG/Twitter/JSON-LD — update `canonical`/`og:url`/schema `address` if domain or address changes.
- `vercel.json` sets `no-cache` on `index.html` and `immutable` on `/assets/*` (Vite content-hashes built JS/CSS) — every deploy is picked up instantly, no manual cache-busting needed.
- `public/sitemap.xml` — add new routes here when adding pages.

## Commands
```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run lint
```

## Deploy
Vercel project should point at this repo, framework preset "Vite", build command `npm run build`, output dir `dist`. Push to `main` = auto-deploy.
