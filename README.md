# The Boyz Rentals & Towing — Website

Static marketing/SEO site for **The Boyz Rentals & Towing** (firefighter-owned trailer & equipment rental + hauling, Denver / Front Range). Built with **Astro** (static output). The site never takes reservations itself — every "reserve / book" action links out to the POS at `rent.tbzrentals.com`.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # serve the built dist/ locally
```

Output is a plain static `dist/` folder — host it anywhere (Netlify, Cloudflare Pages, S3, etc.).

## How it's organized

- **Single source of truth for facts:** `src/data/` — `site.ts` (NAP, phone, hours, real 5.0/86 rating), `equipment.ts` (6 machines + 2 categories), `cities.ts` (8 cities + local context), `services.ts` (hauling + category FAQs), `reviews.ts`.
- **Pages are data-driven, not copy-pasted.** `src/pages/[slug].astro` is one collision-proof dispatcher that generates all flat URLs (category hubs, 6 equipment pages, 8 city hubs, 48 equipment×city matrix pages) from the data files. Templates live in `src/components/templates/`.
- **Schema is centralized:** `src/lib/schema.ts` builds all JSON-LD (WebSite, LocalBusiness w/ real AggregateRating, Service, BreadcrumbList, FAQPage, BlogPosting). All schema matches visible content.
- **Blog:** Markdown in `src/content/blog/` via an Astro content collection.
- **`<head>` order** is locked in `src/layouts/Base.astro` (charset → viewport → title → description → canonical → robots → OG → JSON-LD). Self-referencing absolute canonicals; sitemap + robots.txt generated.

Current build: **75 pages**, 74 in the sitemap (404 is noindex/excluded), **zero JavaScript**, zero broken internal links, every page has a unique title + meta description and exactly one H1.

## ⚠️ Owner punch-list (before / right after launch)

Nothing below is fabricated content — these are spots that need *your real data*. Search the codebase for `TODO(owner)` to find each in context.

**Branding & images**
1. **Logo + favicon** — `public/assets/tbz-logo.svg`, `favicon.svg` are faithful placeholders. Drop in your real artwork.
2. **Social share image** — `public/assets/og-default.svg` is a placeholder; replace with a real **1200×630 raster** (`og-default.jpg`, ideally a fleet photo) and update the default in `src/layouts/Base.astro`. Most social platforms don't render SVG share images.
3. **Hero photo** — homepage hero is a styled placeholder. Add `public/assets/hero-equipment.webp`, drop in an `<img class="hero-media">`, and set `preloadImage` in Base for best LCP. See comment in `src/pages/index.astro`.
4. **Section photos** — the `[ TRAILER PHOTO ]` / `[ SKID STEER PHOTO ]` / `[ Service Area Map ]` placeholders match the approved design; swap for real images/maps when ready.

**Reviews (real numbers only)**
5. The three review cards (Mike R. / Sarah T. / Dave K.) are **placeholders shown for layout** and carry **no** review schema. Replace with the live **Elfsight Google Reviews** widget, or paste real attributed reviews into `attributedReviews` in `src/data/reviews.ts` (that array is what emits Review schema).
6. Keep the **5.0 / 86** AggregateRating in `src/data/site.ts` in sync with your live Google count.
7. Add your **Google Business Profile** reviews URL on `/reviews/` (the "Read Google Reviews" button).

**Wiring**
8. **Domain** — `astro.config.mjs` is set to `https://www.tbzrentals.com`. Confirm www vs non-www, and 301-redirect the other host to the canonical one.
9. **Forms** (footer signup + contact) are wired for **Netlify Forms**. If you host elsewhere, point each form's `action` at your Formspree (or similar) endpoint and remove `data-netlify`. Submissions should reach `info@tbzrentals.com`.
10. **Google Maps** — embed a live map on the homepage service-area panel and `/contact/`.
11. **Social profile URLs** in the footer (currently `#`).
12. **Privacy / Terms** footer links are placeholders (`#`) — add pages or links.

**Content & data**
13. **About page** — add your real founding story: name(s), year started, department/community ties, a team photo. This is the trust section that ranks.
14. **Geo coordinates** in `src/data/site.ts` — confirm the exact lat/long for the Wheat Ridge yard.
15. **CDL / towing wording** — the FAQ/blog answers hedge to "check current Colorado rules." Have your insurer/attorney confirm any towing-requirements language before relying on it.
16. **Backlog city pages** — Golden, Broomfield, Northglenn, Commerce City, Englewood, Littleton, Brighton are listed in the service area but don't have dedicated pages yet. Add them to `src/data/cities.ts` to auto-generate full city + matrix pages.
