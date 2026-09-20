# Muhammad Yasir — Portfolio

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

## Contact delivery

The contact form validates on the client and server. It deliberately returns a visible configuration message instead of pretending to deliver when these server-only variables are missing:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

## Content sources

- Identity and verified links: `data/profile.ts`
- Project case studies: `data/projects.ts`
- Employment history: `data/experience.ts`
- Engineering focus and stack: `data/skills.ts`

Only verified facts should be added. The internal case-study template must be replaced—not duplicated as a claimed project—when real work is ready.
