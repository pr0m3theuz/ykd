# YKD Workout App - Svelte Components

This is a Svelte conversion of the YKD workout app landing page components originally built in React.

## Components Converted

1. **Privacy.svelte** - Privacy-focused section with animated checklist
2. **PowerFeatures.svelte** - Feature cards showcase
3. **Marquee.svelte** - Scrolling text marquee
4. **Hero.svelte** - Main hero section with phone carousel
5. **FinalCTA.svelte** - Final call-to-action section
6. **Features.svelte** - Main features grid
7. **Ecosystem.svelte** - Four component ecosystem showcase
8. **AnalyticsShowcase.svelte** - Analytics visualization section
9. **PhoneCarousel.svelte** - Animated phone mockup carousel
10. **Navbar.svelte** - Navigation bar with mobile menu
11. **Footer.svelte** - Footer with links and social icons

## Installation & Setup

### 1. Install Dependencies

```bash
npm install -D svelte lucide-svelte
```

### 2. Required Tailwind CSS Setup

Make sure you have Tailwind CSS configured in your SvelteKit project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-900': '#0a0a0a',
        'dark-800': '#121212',
      },
      fontFamily: {
        'display': ['YourDisplayFont', 'sans-serif'],
        'tech': ['YourTechFont', 'monospace'],
        'mono': ['monospace'],
      },
    },
  },
  plugins: [],
}
```

### 3. Custom Fonts

You'll need to add custom fonts referenced in the components:
- `font-display` - For large headings
- `font-tech` - For technical/techy text
- `font-mono` - Monospace font

Add these to your `app.css` or global styles file.

### 4. Static Assets

The components reference several image paths that need to be in your `static/` folder:

```
static/
└── sections/
    ├── muscle_engagement.png
    ├── screenshot1.png
    ├── screenshot2.png
    ├── screenshot3.png
    ├── screenshot4.png
    └── screenshot5.png
```

## Key Differences from React Version

### Animation Library
- **React**: Uses `framer-motion`
- **Svelte**: Uses built-in `svelte/transition` and `svelte/easing`

### Icons
- **React**: `lucide-react`
- **Svelte**: `lucide-svelte`

### State Management
- **React**: `useState`, `useEffect`
- **Svelte**: Reactive variables, `onMount`, `onDestroy`

### Charts (AnalyticsShowcase)
The React version uses `recharts` which is React-specific. The Svelte version includes a simple bar chart implementation using pure CSS/HTML. For more complex charts, consider:
- **Chart.js** with `svelte-chartjs`
- **ApexCharts** with `svelte-apexcharts`
- **layerchart** (native Svelte charting library)

## Usage Example

```svelte
<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Features from './components/Features.svelte';
  import Marquee from './components/Marquee.svelte';
  import PowerFeatures from './components/PowerFeatures.svelte';
  import AnalyticsShowcase from './components/AnalyticsShowcase.svelte';
  import Privacy from './components/Privacy.svelte';
  import Ecosystem from './components/Ecosystem.svelte';
  import FinalCTA from './components/FinalCTA.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Navbar />
<Hero />
<Marquee />
<Features />
<PowerFeatures />
<AnalyticsShowcase />
<Privacy />
<Ecosystem />
<FinalCTA />
<Footer />
```

## Component Props

### Marquee
```svelte
<Marquee 
  text="CUSTOM TEXT /// " 
  direction="left" 
/>
```

All other components have no required props.

## Styling Notes

The components use Tailwind's arbitrary values extensively (e.g., `[clip-path:polygon(...)]`). Make sure your Tailwind JIT compiler is enabled.

Some custom CSS animations are included inline in components (e.g., marquee animation, spinning rings).

## Browser Compatibility

These components use modern CSS features like:
- CSS `clip-path`
- CSS Grid
- CSS Custom Properties
- `backdrop-filter`

Ensure your target browsers support these features or include appropriate polyfills.

## License

GPL v3.0 - Same as the original YKD project
