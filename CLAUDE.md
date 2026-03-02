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

Single-page marketing/landing site for Retell (language learning platform), built with Vite 5 + React 18 + TypeScript + Tailwind CSS 3 + shadcn/ui.

### Routing

`src/App.tsx` sets up React Router v6 with two routes: `/` (Index) and `*` (NotFound). Wraps the app in QueryClientProvider (TanStack React Query), TooltipProvider, and toast providers (shadcn Toaster + Sonner).

### Page Composition

`src/pages/Index.tsx` composes the landing page from standalone section components in `src/components/`: Header → HeroSection → Features → ProblemSection → HowItWorks → Testimonials → Pricing → TrustSecurity → FAQ → FinalCTA → Footer. The TaskBoard/TaskCard/TaskColumn components render a Kanban-style demo within DashboardPreview.

### Styling

- **Theming:** CSS variables in `src/index.css` with dark mode as default; light mode toggled via `.light-mode` class (managed by next-themes)
- **Custom palette:** `cosmic` greys (`cosmic-dark`, `cosmic-darker`, `cosmic-light`, `cosmic-accent`, `cosmic-muted`) in `tailwind.config.ts`
- **Fonts:** Inter (sans, weights 300–700) and Young Serif (serif headings via `font-young-serif`)
- **Custom animations:** `float`, `pulse-slow`, `gradient-shift` keyframes in Tailwind config
- **Utility classes in CSS:** `cosmic-gradient`, `cosmic-glow`, `cosmic-glass`, `cosmic-card`, `cosmic-grid`, `nav-pill`, `icon-glow`, `task-card`, `scroll-reveal` (with staggered delay variants)
- Respects `prefers-reduced-motion` media query

### Key Utilities & Hooks

- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/hooks/useScrollAnimation.tsx` — IntersectionObserver-based scroll reveal (returns `isVisible` + `elementRef`)
- `src/hooks/use-mobile.tsx` — viewport detection (breakpoint: 768px)

### Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts`).

### TypeScript

Strict mode is **off** (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`). Target is ES2020.

### Deployment

Deployed on Vercel. Yarn 4 is detected automatically via the `packageManager` field in `package.json`.
