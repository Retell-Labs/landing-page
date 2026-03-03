# Retell Landing Page

Marketing website and blog for the Retell language learning app. Clubhouse-inspired minimal design with warm eggshell palette, app download focus, and SEO blog.

## Tech Stack

| Layer           | Technology                                  |
| --------------- | ------------------------------------------- |
| Build           | Vite 5                                      |
| Framework       | React 18                                    |
| Language        | TypeScript                                  |
| Styling         | Tailwind CSS 3 + shadcn/ui                  |
| Routing         | React Router v6                             |
| Fonts           | Inter (sans) + Young Serif (serif headings) |
| Package Manager | Yarn 4                                      |
| Deployment      | Vercel                                      |

## Getting Started

### Prerequisites

- Node.js >= 22
- Yarn 4 (`corepack enable`)

### Setup

```bash
# Install dependencies
yarn install

# Start dev server (port 8080)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Scripts

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `yarn dev`       | Start dev server with HMR        |
| `yarn build`     | Production build                 |
| `yarn build:dev` | Development mode build           |
| `yarn preview`   | Preview production build locally |
| `yarn lint`      | ESLint                           |

## Routes

| Path          | Page      | Description                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| `/`           | Index     | Landing page (hero, features, social proof, how it works, download CTA) |
| `/blog`       | BlogIndex | Blog listing with article cards                                         |
| `/blog/:slug` | BlogPost  | Individual blog post with markdown rendering                            |
| `*`           | NotFound  | 404 page                                                                |

## Page Structure

### Landing Page (`/`)

1. **Header** — Logo + nav (Features, Blog) + "Get Retell" pill button
2. **Hero** — Headline, subtitle, App Store/Google Play buttons, phone mockup
3. **Features** — 3 cards: Import Any Video, AI-Powered Lessons, Practice Speaking
4. **Social Proof** — Stats strip (10,000+ learners, 12+ languages, 50,000+ lessons)
5. **How It Works** — 3 steps: Share a video → AI creates your lesson → Practice & level up
6. **Download CTA** — "Start learning for free" with download buttons
7. **Footer** — Logo, links (Product, Legal, Connect), social icons, copyright

### Blog (`/blog`, `/blog/:slug`)

Blog content is defined in `src/data/blog-posts.ts`. Current articles:

- How to Learn Languages from TikTok Videos
- Spaced Repetition: The Science of Never Forgetting
- Pronunciation Tips That Actually Work

## Design

- **Background:** #FBF8EF (warm eggshell)
- **Primary accent:** #E8B931 (warm gold)
- **Text:** #1A1A1A (dark) / #8B8680 (muted)
- **Cards:** #F5F0E5
- **Border:** #E5DFD3
- **Noise texture:** Subtle fractalNoise SVG overlay via `.noise-bg`
- **Animations:** CSS scroll reveal (`.reveal` / `.stagger-children`) with `prefers-reduced-motion` support

## Project Structure

```
landing-page/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Features.tsx
│   │   ├── SocialProof.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── DownloadCTA.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                    # shadcn/ui components
│   ├── data/
│   │   └── blog-posts.ts          # Blog content and metadata
│   ├── pages/
│   │   ├── Index.tsx               # Landing page
│   │   ├── BlogIndex.tsx           # Blog listing
│   │   ├── BlogPost.tsx            # Blog post renderer
│   │   └── NotFound.tsx            # 404
│   ├── hooks/
│   │   └── use-mobile.tsx          # Viewport detection
│   ├── lib/
│   │   └── utils.ts                # cn() helper
│   ├── App.tsx                     # Router setup
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Theme variables + animations
├── index.html                      # SEO meta tags + JSON-LD
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```
