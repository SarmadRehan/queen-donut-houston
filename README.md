# Queen Donut Houston: Landing Page Prototype

A demo landing page for Queen Donut Houston, a neighborhood donut and kolache shop at Ella and
West 18th in the Heights. It is built as a client prototype and is not the shop's official
website; a banner at the top of the page says so.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Yellowtail (script) and Alfa Slab One (block letters), matching the two
  lettering styles on the shop's "You deserve a DONUT" sign; Nunito for body text
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles, favicon
  components/     one component per page section, plus Wordmark, Sunburst and Sprinkles motifs
  data/           shop.ts: contact details, hours, favorites, menu, press quote
  assets/images/  photos (statically imported)
```

All business content lives in `src/data/shop.ts`, so menu and hours updates don't touch any
component.

## Content sources

- **Address, phone, email, bio, branding and photos**: the shop's Facebook page
  (facebook.com/Donutqueenhouston). The four photos are the shop's own posts; photos showing
  customers or staff were left out.
- **Hours**: Community Impact, February 2023. Older listings disagree, so the page says hours may
  vary.
- **Menu items**: Community Impact's Heights doughnut guide, plus items named in press reviews
  (blueberry cake donuts, ham-and-cheese croissants and meat donuts, Houston Press 2009).
- **Quote**: Secret Houston, 2023. It is the only quote on the page.

No source publishes prices, star ratings or recent customer reviews, so the page shows none.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/queen-donut-houston` (the Pages project path), adds
`.nojekyll` so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch.
If the repository is renamed, update the base path in the `deploy` script.

## Notes

- The page is marked `noindex` so the demo never competes with the shop's own listings.
- Online ordering isn't part of the prototype. Every order button opens a "coming soon" dialog
  (`src/components/OrderDialog.tsx`) for ordering dozens and kolaches ahead, with a call button
  instead.
