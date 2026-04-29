# Olive

Olive is a small React + Vite starter focused on a polished product/showcase landing UI. It uses React, Vite, Tailwind CSS and Framer Motion to demonstrate a responsive hero and phone product showcase component.

**Key goals:** clean component structure, fast dev feedback via Vite, and Tailwind-driven styling.

**Live demo:** (local) run the dev server and open the URL printed by Vite.

## Features

- Minimal React 19 + Vite setup with HMR
- Tailwind CSS for utility-first styling
- Framer Motion for subtle UI animation
- ESLint configured for consistent code style
- Reusable components: hero, navbar, phone showcase, carousel

## Tech Stack

- React 19
- Vite
- Tailwind CSS + PostCSS
- Framer Motion
- ESLint

## Prerequisites

- Node.js (16+ recommended)
- npm (or use your preferred package manager)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Project Structure

At a glance:

- `index.html` — app entry
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — top-level app component
- `src/index.css` — Tailwind entry
- `src/components/` — UI components
	- `layout/` — `Navbar.jsx`, `BackgroundLayer.jsx`
	- `hero/` — `HeroSection.jsx`, `HeroActions.jsx`, `SocialProof.jsx`
	- `showcase/` — `PhoneShowCase.jsx`, `Carousel.jsx`, `ProductDetails.jsx`, `PhoneShowCase.css`

You can explore the components in `src/components` to learn how the layout and animations are composed.
