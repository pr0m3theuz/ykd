# Complete Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Elixir 1.14+** and **Erlang/OTP 25+**
   
   **macOS (using Homebrew):**
   ```bash
   brew install elixir
   ```

   **Linux (Ubuntu/Debian):**
   ```bash
   wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb
   sudo dpkg -i erlang-solutions_2.0_all.deb
   sudo apt-get update
   sudo apt-get install esl-erlang elixir
   ```

   **Windows:**
   - Download from https://elixir-lang.org/install.html
   - Or use Chocolatey: `choco install elixir`

2. **Node.js 18+** (for asset compilation)
   
   **macOS:**
   ```bash
   brew install node
   ```

   **Linux:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

   **Windows:**
   - Download from https://nodejs.org

### Verify Installation

```bash
elixir --version  # Should show Elixir 1.14+ and Erlang/OTP 25+
node --version    # Should show v18.0.0 or higher
npm --version     # Should show 9.0.0 or higher
```

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd ykd_phoenix
```

### 2. Install Elixir Dependencies

```bash
mix deps.get
```

This downloads all Elixir packages defined in `mix.exs`.

**Troubleshooting:**
- If you get "mix: command not found", Elixir is not properly installed
- If you get compilation errors, ensure Erlang/OTP version matches requirements

### 3. Install Node Dependencies

```bash
cd assets
npm install
cd ..
```

This installs Tailwind CSS and other JavaScript dependencies.

**Troubleshooting:**
- If `npm install` fails, delete `assets/node_modules` and `assets/package-lock.json`, then try again
- Ensure you're in the `assets` directory when running npm install

### 4. Setup and Compile Assets

```bash
mix assets.setup
mix assets.build
```

This:
- Installs Tailwind CSS binary
- Installs esbuild binary
- Compiles CSS and JavaScript

**Troubleshooting:**
- If Tailwind fails to install, run: `mix tailwind.install --if-missing`
- If esbuild fails, run: `mix esbuild.install --if-missing`

### 5. Compile the Application

```bash
mix compile
```

This compiles all Elixir code.

### 6. Start the Development Server

```bash
mix phx.server
```

Or start with an interactive shell:
```bash
iex -S mix phx.server
```

**You should see:**
```
[info] Running YkdWeb.Endpoint with Bandit 1.2.0 at 127.0.0.1:4000 (http)
[info] Access YkdWeb.Endpoint at http://localhost:4000
```

### 7. Visit the Application

Open your browser to: **http://localhost:4000**

## Common Issues and Solutions

### Issue: "Port 4000 already in use"

**Solution:**
```bash
# Find and kill the process using port 4000
lsof -ti:4000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :4000   # Windows (then use Task Manager to kill)
```

### Issue: Assets not compiling

**Solution:**
```bash
# Manually compile assets
cd assets
npx tailwindcss -i css/app.css -o ../priv/static/assets/app.css
npx esbuild js/app.js --bundle --outdir=../priv/static/assets
cd ..
```

### Issue: "Module YkdWeb.Endpoint not available"

**Solution:**
```bash
# Clean and recompile
mix clean
mix deps.clean --all
mix deps.get
mix compile
```

### Issue: LiveView not connecting

**Check browser console for errors:**
1. Open Developer Tools (F12)
2. Look for WebSocket connection errors
3. Ensure no browser extensions are blocking WebSockets

**Solution:**
```bash
# Clear browser cache
# Restart Phoenix server
# Check that no firewall is blocking localhost:4000
```

### Issue: Images not loading

The project includes placeholder image references. To add actual images:

1. Place images in `priv/static/images/`
2. Name them: `screenshot1.png`, `screenshot2.png`, etc.
3. Or update paths in `lib/ykd_web/components.ex`

## Project Structure Overview

```
ykd_phoenix/
├── assets/              # Frontend assets (CSS, JS)
│   ├── css/
│   │   └── app.css     # Custom styles
│   ├── js/
│   │   ├── app.js      # Main JS entry
│   │   └── hooks.js    # LiveView hooks
│   └── tailwind.config.js
├── config/              # Application configuration
│   ├── config.exs      # Main config
│   ├── dev.exs         # Development config
│   ├── prod.exs        # Production config
│   └── runtime.exs     # Runtime config
├── lib/
│   └── ykd_web/        # Web application code
│       ├── components/ # Reusable components
│       ├── live/       # LiveView modules
│       └── ...
├── priv/               # Static files
│   ├── static/         # Public assets
│   └── gettext/        # Translations
├── test/               # Tests
└── mix.exs            # Project dependencies
```

## Development Workflow

### Making Changes

1. **Edit components:** `lib/ykd_web/components.ex`
2. **Edit styles:** `assets/css/app.css`
3. **Edit JavaScript:** `assets/js/hooks.js`
4. **Changes auto-reload** thanks to Phoenix Live Reload

### Running Tests

```bash
mix test
```

### Formatting Code

```bash
mix format
```

### Checking for Issues

```bash
mix compile --warnings-as-errors
```

## Adding Screenshots

1. Add images to `priv/static/images/`:
   - screenshot1.png
   - screenshot2.png
   - screenshot3.png
   - screenshot4.png
   - screenshot5.png
   - muscle_engagement.png

2. Images should be:
   - PNG format
   - 1170x2532 pixels (or similar phone ratio)
   - Optimized for web

## Production Deployment

### Option 1: Using Releases

```bash
# Build production assets
MIX_ENV=prod mix assets.deploy

# Build release
MIX_ENV=prod mix release

# Run release
_build/prod/rel/ykd_web/bin/server
```

### Option 2: Using Docker

```bash
# Build Docker image
docker build -t ykd_web .

# Run container
docker run -p 4000:4000 -e SECRET_KEY_BASE="$(mix phx.gen.secret)" ykd_web
```

### Option 3: Deploy to Fly.io

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Launch app
fly launch

# Deploy
fly deploy
```

## Environment Variables

For production, set these environment variables:

```bash
SECRET_KEY_BASE=your_secret_key_base_here  # Generate with: mix phx.gen.secret
PHX_HOST=your-domain.com
PORT=4000
```

## Getting Help

- **Phoenix Guides:** https://hexdocs.pm/phoenix/overview.html
- **LiveView Docs:** https://hexdocs.pm/phoenix_live_view
- **Elixir Forum:** https://elixirforum.com
- **Phoenix Forum:** https://elixirforum.com/c/phoenix-forum

## Next Steps

1. ✅ Get the server running
2. ✅ Add your actual screenshots
3. ✅ Customize content in `components.ex`
4. ✅ Update colors in `tailwind.config.js`
5. ✅ Deploy to production

Happy coding! 🚀
