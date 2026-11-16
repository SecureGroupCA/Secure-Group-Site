# Before launch — things only the client can supply

| # | Item | Where it goes | Status |
|---|---|---|---|
| 1 | PSISA agency licence number | `src/data/site.ts` → `licence.number`, set `verified: true` | ✅ 2026-11-16 (1190623) |
| 2 | Insurance wording (e.g. "$2M general liability") | `src/data/site.ts` → `insurance` | ✅ 2026-11-16 ($10M) |
| 3 | 3–5 real client reviews with permission (name/company or "Property manager, Vaughan") | `src/pages/index.astro` → `reviews` array; delete the "sample reviews" note | ☐ |
| 4 | 15–20 real photos: guards in uniform, patrol vehicle, office, a job site | `public/images/`, then add to hero and About page | ◐ 2026-11-16: 10 photos from the company Instagram added (home, About, Careers, 4 service pages). They are only 640px. Still want newer, larger photos, especially an office photo and a wide photo for the home page banner |
| 5 | Confirm response-time promise ("2 hours") is one they can keep | `src/data/site.ts`, `areas.ts`, home page | ✅ 2026-11-16 (owner confirmed; founding year 2014 also confirmed) |
| 6 | Confirm the price range on the Prices blog post and service pages ($25–$45/hr) | `src/data/services.ts`, blog post | ✅ No longer needed: service pages show no prices and the price post was removed |
| 7 | Social links (Facebook, Instagram, LinkedIn, Google Business) | `src/data/site.ts` → `social` | ◐ Instagram added. Still need the full LinkedIn URL; Facebook and Google if any |
| 8 | Owner name and short bio for the About page | `src/pages/about.astro` | ☐ |
| 9 | Google Business Profile: confirm ownership at 90 Winges Rd | Google | ☐ |
| 10 | Kill/update old Scarborough listing on Yellow Pages (11-380 Tapscott Rd) | Yellow Pages, Bing, Apple Maps | ☐ |
| 11 | An OG image (1200×630) for social sharing | `public/og.png` | ☐ |
| 12 | Netlify Forms notification email set | Netlify dashboard | ☐ |
| 13 | ULC licence number for the monitoring station (do NOT name the manufacturer or station on the site) | `src/data/site.ts` → `ulc.number`, set `verified: true` | ✅ 2026-11-16 (17515) |
| 14 | Prices: owner chose NOT to show prices on service pages. The blog price guide shows market ranges only. Confirm he is okay with that post staying up. | `src/content/blog/how-much-...md` | ✅ 2026-11-16: owner said no. Post removed, old URL 301s to `/services/security-guards` |
