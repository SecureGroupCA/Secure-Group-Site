# Secure Group Protection Services — website

Static Astro site for secure-group.ca. Serves Ontario, British Columbia and Alberta (head office in Vaughan, ON). Hosted on Netlify. No CMS, no database. Content lives in files.

## Open reminders (tell the owner at the start of the next session, then delete this section when done)
Added 2026-11-17 at the owner's request. Use simple, grade-5 English.
1. **Netlify deploys are paused.** The team ran out of build credits. The test site stays online, but changes pushed after that (three provinces, all services in BC/AB, quote email links, Careers hr@ email) are not live until the owner upgrades the Netlify team or the next billing cycle starts. Never upgrade for them. After deploys resume, check the test site shows the latest commit.
2. **Confirm form emails.** In Gmail, gs@, info@ and hr@ must each click Netlify's confirmation email (check Spam). Then send a TEST quote from /contact and check gs@ and info@ both got it.
3. Optional only, when the owner asks what is left: BC and Alberta licence numbers (not mandatory to show).

## Rules for every change
- **Plain English only.** Grade-5 reading level. Short sentences. No jargon. If a 10-year-old would not understand a sentence, rewrite it.
- **Positive tone.** Facts about risk are fine. Fear-mongering and scolding are not.
- **Three provinces.** The site targets all of Ontario, British Columbia and Alberta (owner's decision, 2026-11-17). Say "Ontario, BC and Alberta" in site-wide copy. Vaughan is still the head office and the #1 Ontario city page.
- **Licences are per province.** Ontario PSISA, BC security business licence, Alberta security services business licence. Never say an Ontario licence covers BC or Alberta. Numbers live in `src/data/site.ts` (Ontario) and `src/data/provinces.ts` (BC, AB).
- **No made-up local claims outside the GTA.** No BC or Alberta office, no "2 hours" promise outside the GTA, no "since 2014" for BC or Alberta, no claims about local clients there unless the owner confirms them.
- **Never invent facts** about the company (licence numbers, client names, review quotes, years). Placeholders are marked in `src/data/site.ts` and on the home page.
- **Never advertise camera monitoring or video monitoring.** The company is not allowed to. Cameras = installation only (homes and businesses). Alarm monitoring (burglar) and fire alarm monitoring are fine and should be promoted.
- **No prices on service pages.** The owner wants people to call. Blog posts may quote market ranges as education, but never "we charge $X".
- **Never name the alarm or camera manufacturer or the monitoring station.** The company is a dealer. Only the ULC licence number may be shown (it lives in `src/data/site.ts`).
- Keep the design minimal: black, warm white, gold accent. No sliders, no stock-photo clutter, no page builders.

## Where things live
- `src/data/site.ts` — phone, address, hours, licence. Change once, updates everywhere.
- `src/data/services.ts` — the 10 service pages (7 guarding, 3 systems: alarm monitoring, fire alarm monitoring, camera installation).
- `src/data/sectors.ts` — the 10 "who we protect" pages.
- `src/data/provinces.ts` — the 3 province pages (`/ontario`, `/british-columbia`, `/alberta`) and each province's licence.
- `src/data/areas.ts` — the 23 city pages (12 Ontario, 7 BC, 4 Alberta). Each has `province:`. Vaughan is `primary: true`.
- `src/content/blog/*.md` — blog posts. One Markdown file = one post.
- `docs/CONTENT-CALENDAR.md` — the 30-post schedule (2 per week for 15 weeks).
- `docs/LAUNCH-TODO.md` — what the client must supply before launch.
- `public/_redirects` — 301s from the old WordPress URLs. Do not delete.

## How to add a blog post (the twice-a-week job)
1. Pick the next title from `docs/CONTENT-CALENDAR.md`.
2. Create `src/content/blog/<slug>.md`. Copy the frontmatter from an existing post. Required fields: `title`, `description`, `publishDate`, `category`, `service`, `area`, `faqs`.
3. Write 1,200–1,800 words. Structure: short answer in the first 2 lines, then H2 sections, a simple table or list where it helps, 3–5 FAQs in the frontmatter, and a final section that links to the matching service page and the matching province or city page.
4. Set `service:` to the service slug the post sells and `area:` to the city the post is about (default `vaughan` for Ontario-wide posts).
5. Run `npm run build`. Fix any error. Commit and push. Netlify deploys on push.
6. Mark the post done in `docs/CONTENT-CALENDAR.md` with the date.

Categories allowed: Prices, Hiring a company, Construction, Condos, Retail, Warehouses, Cameras, Alarms, Careers, Local.

## Commands
- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — builds to `dist/`. Must pass before any push.

## Forms
Quote and job-application forms use Netlify Forms. After the first deploy, open Netlify → Project configuration → Notifications → Form submission notifications and add one email notification each for info@secure-group.ca and gs@secure-group.ca (owner wants quote requests in both inboxes).
