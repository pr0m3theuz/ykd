# Complete File Structure

This document lists all files in the Phoenix LiveView YKD project.

## Root Files

```
.formatter.exs              # Elixir code formatter config
.gitignore                  # Git ignore patterns
.tool-versions              # asdf version manager config
docker-compose.yml          # Docker Compose for development
Dockerfile                  # Docker build configuration
mix.exs                     # Project definition and dependencies
mix.lock                    # Locked dependency versions (auto-generated)
README.md                   # Main documentation
QUICK_START.md             # Quick setup guide
INSTALLATION.md            # Detailed installation instructions
REACT_VS_LIVEVIEW.md       # Comparison with React version
```

## Assets Directory (`assets/`)

Frontend assets: JavaScript, CSS, and configuration.

```
assets/
├── css/
│   └── app.css                    # Main stylesheet with animations
├── js/
│   ├── app.js                     # Main JavaScript entry point
│   └── hooks.js                   # LiveView hooks (cursor, carousel, etc.)
├── vendor/
│   └── topbar.js                  # Progress bar library
├── package.json                   # Node.js dependencies
├── package-lock.json              # Locked Node dependencies (auto-generated)
└── tailwind.config.js             # Tailwind CSS configuration
```

## Configuration Directory (`config/`)

Application configuration files.

```
config/
├── config.exs          # Main configuration
├── dev.exs             # Development environment config
├── prod.exs            # Production environment config
├── runtime.exs         # Runtime configuration (for releases)
└── test.exs            # Test environment config
```

## Library Directory (`lib/`)

Main application code.

```
lib/
├── ykd_web.ex                          # Main web module
└── ykd_web/
    ├── application.ex                  # Application supervisor
    ├── endpoint.ex                     # Phoenix endpoint
    ├── router.ex                       # URL routing
    ├── telemetry.ex                    # Telemetry/metrics
    ├── gettext.ex                      # Internationalization
    ├── components.ex                   # All section components
    ├── components/
    │   ├── core_components.ex          # Core UI components (icon, flash)
    │   ├── layouts.ex                  # Layout module
    │   └── layouts/
    │       ├── root.html.heex          # Root HTML template
    │       └── app.html.heex           # App layout template
    ├── controllers/
    │   ├── error_html.ex               # Error page controller
    │   └── error_html/
    │       ├── 404.html.heex           # 404 error page
    │       └── 500.html.heex           # 500 error page
    └── live/
        └── home_live.ex                # Main landing page LiveView
```

## Private Directory (`priv/`)

Static assets and gettext translations.

```
priv/
├── gettext/                        # Translation files
│   ├── en/
│   │   └── LC_MESSAGES/
│   │       ├── default.po          # Default translations
│   │       └── errors.po           # Error translations
│   ├── default.pot                 # Default template
│   └── errors.pot                  # Errors template
└── static/                         # Public static files
    ├── images/
    │   └── README.md               # Instructions for adding images
    ├── fonts/                      # Custom fonts (if any)
    ├── robots.txt                  # Search engine instructions
    └── favicon_README.md           # Instructions for favicon
```

## Release Directory (`rel/`)

Release configuration.

```
rel/
└── env.sh.eex          # Release environment script template
```

## Test Directory (`test/`)

Test files.

```
test/
├── test_helper.exs                 # Test configuration
├── support/
│   └── conn_case.ex                # Test case for controllers
└── ykd_web/
    └── live/
        └── home_live_test.exs      # Tests for home page
```

## Auto-Generated Directories

These are created when you build the project:

```
_build/             # Compiled Elixir code
deps/               # Downloaded dependencies
node_modules/       # Node.js packages (in assets/)
priv/static/assets/ # Compiled CSS and JS
```

## Component Breakdown

The main components file (`lib/ykd_web/components.ex`) contains these sections:

1. **custom_cursor** - Custom lime cursor on desktop
2. **navbar** - Sticky navigation with scroll effects
3. **hero** - Main headline with phone carousel
4. **marquee** - Animated scrolling text
5. **features** - Six feature cards with icons
6. **power_features** - Detailed feature grid
7. **analytics_showcase** - Data visualization section
8. **privacy** - Privacy-first messaging
9. **ecosystem** - Four project cards
10. **final_cta** - Download call-to-action
11. **footer** - Links and copyright

## JavaScript Hooks

In `assets/js/hooks.js`:

- **CustomCursor** - Follows mouse, lime green dot + outline
- **Navbar** - Changes style on scroll
- **MobileMenu** - Toggles mobile navigation
- **PhoneCarousel** - Auto-rotates screenshots every 4s
- **FadeIn** - Intersection Observer animations

## Key Features by File

### `lib/ykd_web/components.ex` (Main Components)
- All 10 landing page sections
- Component functions with HEEx templates
- Dynamic data rendering with Elixir

### `assets/css/app.css` (Styles)
- Custom cursor styles
- Noise overlay effect
- Clip-path button shapes
- Keyframe animations (marquee, fade-in, spin)
- Custom scrollbar

### `assets/js/hooks.js` (Interactivity)
- DOM manipulation for cursor
- Carousel rotation logic
- Scroll detection
- Menu toggles

### `config/config.exs` (Configuration)
- Endpoint settings
- Asset compilation config
- Logger configuration
- JSON library setup

## File Count Summary

- Elixir files (.ex/.exs): ~18
- Template files (.heex): ~5
- JavaScript files (.js): 3
- CSS files (.css): 1
- Config files: 5
- Documentation files (.md): 7
- Other (JSON, Dockerfile, etc.): ~8

**Total: ~47 files** (excluding auto-generated)

## Missing Files (To Add)

These files are referenced but you need to provide:

1. **Images** in `priv/static/images/`:
   - screenshot1.png
   - screenshot2.png
   - screenshot3.png
   - screenshot4.png
   - screenshot5.png
   - muscle_engagement.png

2. **Favicon** in `priv/static/`:
   - favicon.ico

## File Permissions

Make sure these files are executable (if on Unix):

```bash
chmod +x rel/env.sh.eex
```

## Editing Tips

**To change content:**
- Edit `lib/ykd_web/components.ex`

**To change styles:**
- Edit `assets/css/app.css`
- Edit `assets/tailwind.config.js` for colors/fonts

**To change interactivity:**
- Edit `assets/js/hooks.js`

**To add routes:**
- Edit `lib/ykd_web/router.ex`

All changes hot-reload in development!
