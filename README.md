# Engineering Portfolio

A backend-leaning full-stack portfolio built with Next.js 16, React 19, strict TypeScript, Tailwind CSS 4, Motion, Zod, and Playwright.

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

## Add real content

- Update personal facts and links in `data/profile.ts`.
- Add verified role history in `data/experience.ts`.
- Replace the single `Demo System` object in `data/projects.ts`; do not add fabricated projects.
- Set `NEXT_PUBLIC_SITE_URL` to the production origin.
- Replace the printable résumé placeholder at `/resume` after verified résumé content is available.

## Deploy

The app is statically prerendered and ready for Vercel. Add `NEXT_PUBLIC_SITE_URL` in the Vercel project settings before the production deployment so canonical, sitemap, and Open Graph URLs use the live domain.
