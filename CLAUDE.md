# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/resume website for Alicia Fu, built with Gatsby 3 and adapted from [Gatsby Theme Intro](https://github.com/wkocjan/gatsby-theme-intro). Styled with TailwindCSS 2. Deployed to GitHub Pages via GitHub Actions on push to `develop`.

## Commands

```bash
yarn develop       # Local dev server (localhost:8000)
yarn build         # Production build
yarn buildprod     # Clean + production build (gatsby clean && gatsby build)
yarn format        # Prettier format all JS/JSX/JSON/MD files
yarn clean         # Clear Gatsby cache (.cache/ and public/)
yarn serve         # Serve production build locally
```

## Architecture

**Content-driven single-page site.** All site content lives in YAML files under `content/`, which Gatsby sources via `gatsby-transformer-yaml` and exposes through GraphQL.

### Content Files (`content/`)

- `profile.yaml` — Name, profession, bio, skills, highlights, location, budget
- `work-history.yaml` — Employment history
- `education-certifications.yaml` — Education and certifications (supports images)
- `projects.yaml` — Portfolio projects
- `social.yaml` — Social media links
- `testimonials.yaml` — Client testimonials

### Key Source Structure

- **`src/templates/index.js`** — Main page template. Queries all YAML data via GraphQL fragments and composes the full page from Sidebar + MainContent.
- **`src/components/`** — React components organized by section (sidebar, work-history, education-certifications, projects, contact-form, etc.). Each maps to a section of the single-page layout.
- **`src/types/`** — PropTypes definitions and GraphQL fragment exports for each content type.
- **`src/gatsby/node/`** — Gatsby Node API hooks: `sourceNodes.js` defines GraphQL schema types, `createPages.js` generates the index page, `onPreBootstrap.js` ensures content directory exists.
- **`src/themes/`** — Color theme definitions (JS objects exporting color tokens). Active theme set in `gatsby-config.js` (`gh-inspired`).
- **`src/styles/style.css`** — TailwindCSS entry point.

### How Theming Works

The active theme is configured in `gatsby-config.js` as a string (e.g., `gh-inspired`). `tailwind.config.js` loads the corresponding color file from `src/themes/` and injects the colors into the Tailwind theme. Components reference theme colors via Tailwind classes like `bg-back`, `text-front`, `text-lead`.

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yaml`) builds on push to `develop` and deploys the `public/` folder to the `master` branch via `gh-pages`.

## Formatting

- Prettier: no semicolons, double quotes, 2-space indent, trailing commas (es5), LF line endings
