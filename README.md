# Indian Engineering Company — Website (Redesigned)

Premium industrial website for **Indian Engineering Company (IEC)** — motor, generator, alternator and turbine rewinding & repair, serving power plants, dams and heavy industry across India since 1998. Based in Ranoli, Vadodara, Gujarat.

React 19 + Vite single-page app, no backend. See `CLAUDE.md` and `BRAND.md` (added in the first real push) for project conventions and verified company facts.

## Commands
```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run lint
```

## Deploy
Vercel project pointed at this repo, framework preset "Vite", build command `npm run build`, output dir `dist`. Push to `main` = auto-deploy.
