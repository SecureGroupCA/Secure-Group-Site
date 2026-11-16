# Secure Group Protection Services — website

Static Astro site for secure-group.ca. Hosted on Netlify. No CMS, no database. Content lives in files.

## Rules for every change
- **Plain English only.** Grade-5 reading level. Short sentences. No jargon. If a 10-year-old would not understand a sentence, rewrite it.
- **Positive tone.** Facts about risk are fine. Fear-mongering and scolding are not.
- **Vaughan first.** Vaughan is the main city we want to rank in. Mention Vaughan naturally in posts. Mississauga and Bradford come next.
- **Never invent facts** about the company (licence numbers, client names, review quotes, years). Placeholders are marked in `src/data/site.ts` and on the home page.
- **Never advertise camera monitoring or video monitoring.** The company is not allowed to. Cameras = installation only (homes and businesses). Alarm monitoring (burglar) and fire alarm monitoring are fine and should be promoted.
- Keep the design minimal: black, warm white, gold accent. No sliders, no stock-photo clutter, no page builders.

## Where things live
- `src/data/site.ts` — phone, address, hours, licence. Change once, updates everywhere.
- `src/data/services.ts` — the 10 service pages (7 guarding, 3 systems: alarm monitoring, fire alarm monitoring, camera installation).
- `src/data/sectors.ts` — the 10 "who we protect" pages.
- `src/data/areas.ts` — the 7 city pages (Vaughan is `primary: true`).
- `src/content/blog/*.md` — blog posts. One Markdown file = one post.
- `docs/CONTENT-CALENDAR.md` — the 30-post schedule (2 per week for 15 weeks).
- `docs/LAUNCH-TODO.md` — what the client must supply before launch.
- `public/_redirects` — 301s from the old WordPress URLs. Do not delete.

## How to add a blog post (the twice-a-week job)
1. Pick the next title from `docs/CONTENT-CALENDAR.md`.
2. Create `src/content/blog/<slug>.md`. Copy the frontmatter from an existing post. Required fields: `title`, `description`, `publishDate`, `category`, `service`, `area`, `faqs`.
3. Write 1,200–1,800 words. Structure: short answer in the first 2 lines, then H2 sections, a simple table or list where it helps, 3–5 FAQs in the frontmatter, and a final section that links to the matching service page and the Vaughan area page.
4. Set `service:` to the service slug the post sells and `area:` to `vaughan` unless the post is about another city.
5. Run `npm run build`. Fix any error. Commit and push. Netlify deploys on push.
6. Mark the post done in `docs/CONTENT-CALENDAR.md` with the date.

Categories allowed: Prices, Hiring a company, Construction, Condos, Retail, Warehouses, Cameras, Alarms, Careers, Local.

## Commands
- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — builds to `dist/`. Must pass before any push.

## Forms
Quote and job-application forms use Netlify Forms. After the first deploy, open Netlify → Forms and set the notification email to info@secure-group.ca.
