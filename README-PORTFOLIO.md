# Portfolio & Demos — drop-in guide

## 1. Copy files into your repo
Copy the `src/` contents into your Argon Industries project, merging folders:

- `src/pages/Portfolio.tsx` → your pages folder
- `src/pages/Demos.tsx` → your pages folder
- `src/components/portfolio/` → your components folder
- `src/data/caseStudies.ts` + `src/data/demos.ts` → your data folder
- `src/styles/portfolio.css` → your styles folder

If your existing project already has `pages/`, `components/`, `data/`, `styles/`
directories in different casing or locations, just place these files
alongside them — nothing here depends on Argon's existing file structure.

## 2. Add the fonts (for the portfolio page)
Add this to your `index.html` `<head>`, above your existing font links:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

If Fraunces or JetBrains Mono are already loaded elsewhere in the project
(e.g. reused from JSA or Argon's own brand font), you can skip re-adding
duplicates — just make sure both weights above are covered.

## 3. Add the routes
In your router file (likely `App.tsx` or `main.tsx`, wherever your
`<Routes>` block lives):

```tsx
import Portfolio from "./pages/Portfolio";
import Demos from "./pages/Demos";

// inside <Routes>
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/demos" element={<Demos />} />
```

## 4. Add nav links
Add two links to your site nav — keep them visually distinct so visitors
know they're leaving the agency-branded pages:

```tsx
<Link to="/demos">Demos</Link>
<Link to="/portfolio">PM Portfolio</Link>
```

## 5. Before you publish — review the content
- `src/data/caseStudies.ts` has real project detail pulled from your build
  history. Read through each entry and trim anything you don't want
  public (exact figures, client contact info, etc.) — none of it is
  fabricated, but some of it may be more internal than you want a
  hiring manager or prospect to see.
- `src/data/demos.ts` has placeholder entries for Amoke Oge, Khadz and
  T's, and Corebymo. Add/remove entries and drop in live Lovable URLs
  as you go. Swap the gradient placeholder blocks for real screenshots
  once you have them (just replace the `<div>` with an `<img>`).

## Design notes
- `/portfolio` uses its own color system (ink / cream / teal / amber)
  and typography (Fraunces + Inter + JetBrains Mono) scoped entirely
  under `.pm-portfolio` in `portfolio.css` — it will not leak into or
  clash with Argon's existing blue/orange brand styles.
- `/demos` intentionally reuses Argon's blue/orange palette so it reads
  as part of the agency site.
- The rotated "stamp" badge (LIVE / LIVE · PAID / IN PROGRESS) on each
  case study is the one signature visual flourish — everything else on
  the portfolio page is kept quiet on purpose so that element stands out.
