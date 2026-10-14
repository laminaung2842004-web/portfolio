# Portfolio

A personal portfolio site built with **React** and **pure CSS** (no UI libraries,
no CSS frameworks). Bundled with Vite.

## Features

- Responsive single-page layout: hero, about, skills, contact
- Light theme only (simplified for quick setup)
- Scroll-spy navigation with `IntersectionObserver` and smooth scrolling
- Validated contact form (client-side) with inline error messages
- Hand-written CSS: custom properties, Flexbox, Grid, keyframe animations,
  `prefers-reduced-motion` support

## Getting started

```bash
cd ~/Desktop/portfolio
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx              # layout + scroll-spy hooks
    ├── main.jsx             # React entry point
    ├── data.js              # all content in one place
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        └── global.css       # design tokens, components, animations
```

## Customizing

Edit `src/data.js` to change your name, role, socials, skills and
experience. Colors, spacing and typography live in the design-token blocks at
the top of `src/styles/global.css`.
