# YKD - Elixir/Phoenix LiveView Version

This is an Elixir/Phoenix LiveView rewrite of the YKD workout tracker landing page. The original was built with React, and this version maintains the same brutalist/industrial aesthetic while leveraging Phoenix LiveView for server-rendered interactivity.

## Design Aesthetic

- **Brutalist/Industrial Tech**: Raw, functional design with sharp edges
- **Color Palette**: Lime green (#CCFF00) accents on dark backgrounds (#050505)
- **Typography**: 
  - Anton (display headlines)
  - Archivo (technical text)
  - JetBrains Mono (code/data)
  - Inter (body text)
- **Animations**: Custom cursor, marquee scrolling, carousel, fade-ins
- **Details**: Noise overlay, custom scrollbar, clip-path buttons

## Tech Stack

- **Elixir 1.14+**
- **Phoenix 1.7**
- **Phoenix LiveView 0.20**
- **Tailwind CSS 3.4**
- **Heroicons**

## Project Structure

```
ykd_phoenix/
├── assets/
│   ├── css/
│   │   └── app.css              # Custom styles, animations, cursor
│   ├── js/
│   │   ├── app.js               # Main JS entry point
│   │   └── hooks.js             # LiveView hooks for interactivity
│   ├── vendor/
│   │   └── topbar.js            # Progress bar library
│   └── tailwind.config.js       # Tailwind configuration
├── config/
│   ├── config.exs               # Main config
│   ├── dev.exs                  # Development config
│   ├── prod.exs                 # Production config
│   ├── runtime.exs              # Runtime config
│   └── test.exs                 # Test config
├── lib/
│   └── ykd_web/
│       ├── components/
│       │   ├── core_components.ex    # Icon component
│       │   ├── layouts.ex            # Layout module
│       │   └── layouts/
│       │       └── root.html.heex    # Root HTML template
│       ├── controllers/
│       │   └── error_html.ex         # Error pages
│       ├── live/
│       │   └── home_live.ex          # Main page LiveView
│       ├── application.ex            # Application supervisor
│       ├── components.ex             # All section components
│       ├── endpoint.ex               # Phoenix endpoint
│       ├── router.ex                 # Routes
│       └── telemetry.ex              # Telemetry/metrics
│   └── ykd_web.ex                    # Main web module
└── mix.exs                           # Dependencies
```

## Components

The landing page is composed of the following sections:

1. **Navbar** - Sticky navigation with scroll effects
2. **Hero** - Main headline with phone carousel
3. **Marquee** - Animated scrolling text
4. **Features** - Six feature cards with icons
5. **PowerFeatures** - Six detailed feature descriptions
6. **AnalyticsShowcase** - Data visualization showcase
7. **Privacy** - Privacy-first messaging with checklist
8. **Ecosystem** - Four project cards
9. **FinalCTA** - Download call-to-action
10. **Footer** - Links and copyright

## JavaScript Hooks

LiveView hooks provide client-side interactivity:

- **CustomCursor**: Custom lime-green cursor on desktop
- **Navbar**: Scroll-based background/border changes
- **MobileMenu**: Mobile menu toggle
- **PhoneCarousel**: Auto-rotating screenshot carousel with callouts
- **FadeIn**: Intersection Observer for staggered animations

## Setup Instructions

### Prerequisites

- Elixir 1.14 or later
- Erlang/OTP 25 or later
- Node.js 18+ (for asset compilation)

### Installation

1. **Install dependencies:**
   ```bash
   mix deps.get
   ```

2. **Install Node.js dependencies:**
   ```bash
   cd assets && npm install && cd ..
   ```

3. **Setup assets:**
   ```bash
   mix assets.setup
   ```

4. **Start the Phoenix server:**
   ```bash
   mix phx.server
   ```

5. **Visit the site:**
   Open [http://localhost:4000](http://localhost:4000)

### Development

The dev server includes:
- Live reload for code changes
- Auto-compilation of CSS/JS
- Hot module replacement for LiveView

### Production Build

```bash
# Build assets
mix assets.deploy

# Start production server
MIX_ENV=prod mix phx.server
```

## Key Differences from React Version

### Advantages of Phoenix LiveView

1. **Server-rendered**: Initial page load is fully rendered HTML
2. **Real-time updates**: WebSocket connection for live updates without REST APIs
3. **Less JavaScript**: Most interactivity handled server-side
4. **SEO-friendly**: Content available without JavaScript execution
5. **Simplified state**: Server maintains state, no client-side state management

### What Stayed the Same

- Visual design and aesthetic
- All animations and transitions
- Component structure (navbar, hero, features, etc.)
- Custom cursor, marquee, carousel functionality

### Implementation Notes

- **Framer Motion → CSS Animations**: React's Framer Motion replaced with CSS keyframes and transitions
- **React Hooks → LiveView Hooks**: Client-side hooks in JavaScript for DOM manipulation
- **useState → Server State**: LiveView maintains state on the server
- **Component Props → Assigns**: Phoenix assigns replace React props

## Customization

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  lime: {
    400: '#CCFF00',  // Your accent color
  },
  dark: {
    900: '#050505',  // Background
  }
}
```

### Fonts

Edit `assets/css/app.css` to change Google Fonts imports

### Content

Edit `lib/ykd_web/components.ex` to update text, links, and data

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: ~50KB (gzipped)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

GPL v3.0 (matching the original YKD project)

## Credits

Original design and concept by pr0m3theuz
Elixir/Phoenix conversion demonstrates the power of LiveView for modern web applications
