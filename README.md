# Secure Group Protection Services — secure-group.ca

Astro + Tailwind, static, hosted on Netlify. See `CLAUDE.md` for how to edit content and add blog posts.

## Deploy on Netlify (one-time, ~15 minutes)
1. Push this folder to a GitHub repo on your account (`git remote add origin ... && git push -u origin main`).
2. Netlify → Add new site → Import from Git → pick the repo. Build command `npm run build`, publish directory `dist` (already in `netlify.toml`).
3. Deploy. You get a `*.netlify.app` URL. Check every page.
4. Netlify → Forms → enable form notifications to info@secure-group.ca.
5. Netlify → Domain management → Add domain `secure-group.ca` and `www.secure-group.ca`.
6. In **Bluehost DNS** (where the domain's nameservers point today): change the A record for `@` to Netlify's load balancer IP shown in the Netlify domain panel, and the `www` CNAME to the `*.netlify.app` address. **Do not touch the MX or TXT records** (that is the company's Gmail).
7. Wait for the SSL certificate to show "active" in Netlify (usually under an hour).
8. Keep Bluehost paid for 30 days as a rollback, then cancel the hosting (not the domain).

## After launch
- Google Search Console: add the property, submit `https://secure-group.ca/sitemap-index.xml`.
- Google Business Profile: confirm the Vaughan address, add the website link, add services and photos.
- Fix the old Scarborough (380 Tapscott Rd) listing on Yellow Pages and anywhere else it shows up.
