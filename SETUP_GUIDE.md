# YKD Workout App - Svelte Setup Guide

This guide covers two setup options for the YKD landing page in Svelte: **SvelteKit** (recommended) and **Vite + Svelte**.

## 📋 Table of Contents

1. [Quick Start with SvelteKit](#sveltekit-setup-recommended)
2. [Alternative: Vite + Svelte Setup](#vite--svelte-setup)
3. [Project Structure](#project-structure)
4. [Configuration Files](#configuration-files)
5. [Static Assets](#static-assets)
6. [Custom Cursor](#custom-cursor-implementation)

---

## 🚀 SvelteKit Setup (Recommended)

### 1. Create a New SvelteKit Project

```bash
npm create svelte@latest ykd-app
cd ykd-app
npm install
```

When prompted:
- Choose "Skeleton project"
- Select "Yes, using TypeScript syntax"
- Add ESLint and Prettier if desired

### 2. Install Dependencies

```bash
npm install -D lucide-svelte
```

### 3. File Structure

```
ykd-app/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── layout/
│   │       │   ├── Navbar.svelte
│   │       │   └── Footer.svelte
│   │       ├── sections/
│   │       │   ├── Hero.svelte
│   │       │   ├── Features.svelte
│   │       │   ├── PowerFeatures.svelte
│   │       │   ├── AnalyticsShowcase.svelte
│   │       │   ├── Privacy.svelte
│   │       │   ├── Ecosystem.svelte
│   │       │   ├── FinalCTA.svelte
│   │       │   └── Marquee.svelte
│   │       └── ui/
│   │           ├── PhoneCarousel.svelte
│   │           └── CustomCursor.svelte
│   ├── routes/
│   │   └── +page.svelte
│   └── app.html
├── static/
│   └── sections/
│       ├── screenshot1.png
│       ├── screenshot2.png
│       ├── screenshot3.png
│       ├── screenshot4.png
│       ├── screenshot5.png
│       └── muscle_engagement.png
└── package.json
```

### 4. Add Files

**src/app.html** - Use the `app.html` file provided

**src/routes/+page.svelte** - Use the `+page.svelte` file provided

### 5. Configure Tailwind (Production Setup)

For production, replace the CDN with proper Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#CCFF00',
          500: '#B3E600',
        },
        dark: {
          900: '#050505',
          800: '#0A0A0A',
          700: '#121212',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        tech: ['Archivo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}
```

**src/app.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #CCFF00;
}

/* Noise Overlay */
.bg-noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 50;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

Import in `src/routes/+layout.svelte`:

```svelte
<script>
  import '../app.css';
</script>

<slot />
```

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## ⚡ Vite + Svelte Setup

### 1. Create a New Vite Project

```bash
npm create vite@latest ykd-app -- --template svelte-ts
cd ykd-app
npm install
```

### 2. Install Dependencies

```bash
npm install -D lucide-svelte
```

### 3. File Structure

```
ykd-app/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.svelte
│   │   │   └── Footer.svelte
│   │   ├── sections/
│   │   │   ├── Hero.svelte
│   │   │   ├── Features.svelte
│   │   │   ├── PowerFeatures.svelte
│   │   │   ├── AnalyticsShowcase.svelte
│   │   │   ├── Privacy.svelte
│   │   │   ├── Ecosystem.svelte
│   │   │   ├── FinalCTA.svelte
│   │   │   └── Marquee.svelte
│   │   └── ui/
│   │       ├── PhoneCarousel.svelte
│   │       └── CustomCursor.svelte
│   ├── App.svelte
│   ├── main.ts
│   └── app.css
├── public/
│   └── sections/
│       ├── screenshot1.png
│       ├── screenshot2.png
│       ├── screenshot3.png
│       ├── screenshot4.png
│       ├── screenshot5.png
│       └── muscle_engagement.png
├── index.html
└── package.json
```

### 4. Add Files

**index.html** - Use the `index.html` file provided

**src/main.ts** - Use the `main.ts` file provided

**src/App.svelte** - Use the `App.svelte` file provided

### 5. Update Import Paths

In `App.svelte`, update imports to:

```svelte
<script lang="ts">
  import Navbar from './components/layout/Navbar.svelte';
  import Footer from './components/layout/Footer.svelte';
  // ... etc
</script>
```

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 📁 Project Structure

### Component Organization

```
components/
├── layout/          # Page structure components
│   ├── Navbar.svelte
│   └── Footer.svelte
├── sections/        # Main page sections
│   ├── Hero.svelte
│   ├── Features.svelte
│   ├── PowerFeatures.svelte
│   ├── AnalyticsShowcase.svelte
│   ├── Privacy.svelte
│   ├── Ecosystem.svelte
│   ├── FinalCTA.svelte
│   └── Marquee.svelte
└── ui/             # Reusable UI components
    ├── PhoneCarousel.svelte
    └── CustomCursor.svelte
```

---

## ⚙️ Configuration Files

### package.json

```json
{
  "name": "ykd-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/kit": "^2.0.0",
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    "lucide-svelte": "^0.263.1",
    "svelte": "^4.0.0",
    "vite": "^5.0.0"
  }
}
```

### svelte.config.js (SvelteKit)

```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config;
```

---

## 🖼️ Static Assets

Place these images in the appropriate directory:

**SvelteKit:** `static/sections/`
**Vite:** `public/sections/`

Required images:
- `screenshot1.png`
- `screenshot2.png`
- `screenshot3.png`
- `screenshot4.png`
- `screenshot5.png`
- `muscle_engagement.png`

---

## 🖱️ Custom Cursor Implementation

The `CustomCursor.svelte` component creates an interactive custom cursor with:

- **Dot**: Follows mouse exactly (8px circle)
- **Outline**: Smooth follow with delay (40px circle)
- **Hover Effect**: Expands to 60px when over interactive elements
- **Touch Devices**: Automatically hidden on mobile

### How It Works

```svelte
<script lang="ts">
  import { onMount } from 'svelte';

  let dotX = 0, dotY = 0;
  let outlineX = 0, outlineY = 0;
  let isHovering = false;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      setTimeout(() => {
        outlineX = e.clientX;
        outlineY = e.clientY;
      }, 50);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  });
</script>
```

### Customization

Adjust cursor appearance in the `<style>` section:

```css
.cursor-dot {
  width: 8px;           /* Size of inner dot */
  background-color: #CCFF00;  /* Color */
}

.cursor-outline {
  width: 40px;          /* Normal size */
  border: 1px solid rgba(204, 255, 0, 0.5);
}

.cursor-outline.hovering {
  width: 60px;          /* Hover size */
}
```

---

## 🎨 Font Setup

The app uses Google Fonts loaded in the HTML:

- **Anton** - Display headings
- **Archivo** - Technical text
- **JetBrains Mono** - Monospace code
- **Inter** - Body text

These are configured in Tailwind as:

```js
fontFamily: {
  display: ['Anton', 'sans-serif'],
  tech: ['Archivo', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
  sans: ['Inter', 'sans-serif'],
}
```

---

## 🚢 Deployment

### SvelteKit

**Vercel/Netlify:**
```bash
npm run build
```

**Static Site:**
```bash
npm install -D @sveltejs/adapter-static
```

Update `svelte.config.js`:
```js
import adapter from '@sveltejs/adapter-static';
```

### Vite

```bash
npm run build
```

Deploy the `dist/` folder to any static host.

---

## 🐛 Troubleshooting

### "Module not found: lucide-svelte"
```bash
npm install -D lucide-svelte
```

### Images not loading
- Check file paths in components
- Ensure images are in `static/` (SvelteKit) or `public/` (Vite)

### Tailwind classes not working
- For production, install Tailwind properly (don't use CDN)
- Run `npx tailwindcss init -p`

### Custom cursor not showing
- Check media query: cursor is hidden on touch devices
- Verify z-index doesn't conflict with other elements

---

## 📝 License

GPL v3.0 - Same as the original YKD project
