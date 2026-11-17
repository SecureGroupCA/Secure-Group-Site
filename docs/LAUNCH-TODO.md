# Before launch — things only the client can supply

| # | Item | Where it goes | Status |
|---|---|---|---|
| 1 | PSISA agency licence number | `src/data/site.ts` → `licence.number`, set `verified: true` | ✅ 2026-11-16 (1190623) |
| 2 | Insurance wording (e.g. "$2M general liability") | `src/data/site.ts` → `insurance` | ✅ 2026-11-16 ($10M) |
| 3 | 3–5 real client reviews with permission (name/company or "Property manager, Vaughan") | `src/pages/index.astro` → `reviews` array; delete the "sample reviews" note | ✅ 2026-11-16: 19 real 5-star Google reviews, copied word for word |
| 4 | 15–20 real photos: guards in uniform, patrol vehicle, office, a job site | `public/images/`, then add to hero and About page | ◐ 2026-11-16: 20 real photos added (10 old Instagram 640px + 10 newer 2023-24 photos from the Social Media folder, location data removed). Logo added to header, footer and browser icon. Still want a photo of the office and a wide home-page banner photo |
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
| 15 | BC security business licence number | `src/data/provinces.ts` → `british-columbia` → `licence.number`, set `verified: true` | ☐ Owner has the licence; number to be sent |
| 16 | Alberta security services business licence number | `src/data/provinces.ts` → `alberta` → `licence.number`, set `verified: true` | ☐ Owner has the licence; number to be sent |
| 17 | Confirm which services are offered in BC and Alberta (alarm monitoring, fire alarm monitoring and camera installation are not listed there yet) | `src/data/provinces.ts` and BC/AB entries in `areas.ts` → `topServices` | ✅ 2026-11-17: owner said all services. BC and Alberta pages now list every service |
| 18 | Any BC or Alberta office address or local phone number (helps Google rank those cities) | `src/data/provinces.ts` | ☐ |
| 19 | Google Business Profile address says 1030 Kamato Rd, Mississauga; site says 90 Winges Rd, Vaughan. Fix whichever is wrong | Google / `src/data/site.ts` | ☐ |
