# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `yarn dev` (runs on port 8080, host `::`)
- **Build:** `yarn build` (production) or `yarn build:dev` (development mode)
- **Lint:** `yarn lint`
- **Preview production build:** `yarn preview`
- **Add shadcn component:** `yarn dlx shadcn-ui@latest add <component>`
- **Package manager:** Yarn 4 (via Corepack, `nodeLinker: node-modules`)

No test framework is configured.

## Architecture

Single-page marketing/landing site for Retell (language learning app), built with Vite 5 + React 18 + TypeScript + Tailwind CSS 3 + shadcn/ui. Clubhouse.com-inspired minimal design with warm eggshell palette.

### Routing

`src/App.tsx` sets up React Router v6 with routes:

- `/` — Landing page (Index)
- `/blog` — Blog listing page (BlogIndex)
- `/blog/:slug` — Individual blog post (BlogPost)
- `*` — 404 (NotFound)

Wraps the app in QueryClientProvider (TanStack React Query), TooltipProvider, and toast providers.

### Page Composition

`src/pages/Index.tsx` composes the landing page: Header → HeroSection → Features → SocialProof → HowItWorks → DownloadCTA → Footer.

Blog pages (`BlogIndex`, `BlogPost`) share Header + Footer. Blog content is defined in `src/data/blog-posts.ts`.

### Styling

- **Theming:** CSS variables in `src/index.css` with warm eggshell palette (#FBF8EF background, #E8B931 gold accent, #1A1A1A text)
- **Fonts:** Inter (sans, weights 300–700) and Young Serif (serif headings via `font-young-serif`)
- **Animations:** CSS-based scroll reveal (`.reveal` / `.stagger-children` classes) using IntersectionObserver in components
- **Noise texture:** `.noise-bg` class adds subtle fractalNoise SVG overlay
- Respects `prefers-reduced-motion` media query

### Key Utilities

- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/data/blog-posts.ts` — Blog post content and metadata

### Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts`).

### TypeScript

Strict mode is **off** (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`). Target is ES2020.

### Deployment

Deployed on Vercel. Yarn 4 is detected automatically via the `packageManager` field in `package.json`.
