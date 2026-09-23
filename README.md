# Yasir Marwat — Portfolio

A personal Full-Stack Engineer portfolio built with Next.js 16, React 19, strict TypeScript, Tailwind CSS 4, Motion, Zod, dotLottie, and Playwright.

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Verify

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run test:e2e
```

The Playwright suite covers 375×812, 430×932, 768×1024, and 1440×900.

## Contact delivery with Brevo

The contact form validates on the client and server, then sends transactional email through Brevo from the server-only API route. The visitor address is assigned to `Reply-To`; it is never used as the authenticated sender. Missing or rejected provider configuration returns an honest error instead of a false success.

```bash
BREVO_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
CONTACT_FROM_NAME=
```

Keep these values in `.env.local` for development. For Vercel, add them under Project → Settings → Environment Variables for Production, and for Preview if contact delivery should work on preview deployments.

## Content sources

- Identity and verified links: `data/profile.ts`
- Project case studies: `data/projects.ts`
- Employment history: `data/experience.ts`
- Engineering focus and stack: `data/skills.ts`

Project screenshots live under `public/projects`, and the published résumé is served from `/muhammad_yasir.pdf`. Only verified project and employment facts should be added.

## Vercel deployment

1. Push the repository and import it into Vercel.
2. Add the four Brevo/contact environment variables.
3. Deploy and verify the default Vercel URL, including `/api/contact` configuration behavior.
4. Attach `www.yasirmarwat.site` as the production domain only after the
   default deployment is healthy, then configure Vercel to redirect the apex
   `yasirmarwat.site` domain to `www`.
5. Configure the DNS records Vercel provides and verify the canonical production domain.
