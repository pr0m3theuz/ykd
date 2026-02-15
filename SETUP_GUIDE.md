# Setup Guide

## 🚀 Quick Setup (5 minutes)

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

Visit http://localhost:3000 to see the site running!

## 📦 Detailed Setup

### 1. Clone/Download Project

```bash
# If using git
git clone <your-repo>
cd ykd-landing

# Or extract the zip file
unzip ykd-landing.zip
cd ykd-landing
```

### 2. Install Dependencies

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

**Installation time**: ~2-3 minutes depending on internet speed

### 3. Environment Setup (Optional)

If you need environment variables:

```bash
# Create .env file
touch .env
```

Add your variables:
```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-id
```

### 4. Development

```bash
# Start dev server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

## 🔧 IDE Setup

### VS Code (Recommended)

Install these extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

**Settings (`.vscode/settings.json`):**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### WebStorm / IntelliJ

1. Enable ESLint: Preferences → Languages → JavaScript → Code Quality Tools → ESLint
2. Enable Prettier: Preferences → Languages → JavaScript → Prettier
3. Enable TypeScript service

## 🗂️ Project Structure Explained

```
ykd-landing/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Top navigation
│   │   │   └── Footer.tsx      # Bottom footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Landing hero section
│   │   │   ├── Features.tsx    # Feature grid
│   │   │   ├── Marquee.tsx     # Scrolling text
│   │   │   └── ...             # Other sections
│   │   └── ui/
│   │       ├── CustomCursor.tsx    # Custom cursor
│   │       └── PhoneCarousel.tsx   # Phone mockup carousel
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── sections/            # Images and static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts          # Build configuration
├── tailwind.config.js      # Styling configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  lime: { 400: '#YOUR_COLOR' },  // Change accent color
  dark: { 900: '#YOUR_BG' }      // Change background
}
```

### Typography

Edit `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['YourFont', 'sans-serif'],
}
```

Don't forget to import fonts in `index.html`.

### Content

Edit section components in `src/components/sections/`:
- Hero text: `Hero.tsx`
- Features: `Features.tsx`
- etc.

### Images

Replace images in `public/sections/` directory:
- Keep same filenames OR
- Update references in components

## 🔍 Troubleshooting

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use different port
npm run dev -- --port 3001

# Or kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: Module not found errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:**
```bash
# Restart TS server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"

# Or check tsconfig.json paths
```

### Issue: Tailwind classes not working

**Solution:**
1. Check `tailwind.config.js` content array includes your files
2. Restart dev server
3. Clear browser cache

### Issue: Build fails

**Solution:**
```bash
# Check for TypeScript errors
npm run build

# Fix any type errors shown
# Then rebuild
```

## 📱 Testing Different Devices

### Local Network Testing

1. Get your local IP:
```bash
# macOS/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

2. Access from other devices:
```
http://YOUR_IP:3000
```

### Browser Testing

Test in:
- Chrome DevTools device mode
- Firefox Responsive Design Mode
- Safari Developer Tools
- Real mobile devices

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/'
})
```

2. Build and deploy:
```bash
npm run build
# Use GitHub Actions or manual deployment
```

## 🔐 Environment Variables

Create `.env` file:
```env
# API endpoints
VITE_API_URL=https://api.yoursite.com

# Feature flags
VITE_ENABLE_ANALYTICS=false

# Public keys
VITE_PUBLIC_KEY=your-public-key
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📊 Performance Optimization

### Before Deployment

```bash
# 1. Build for production
npm run build

# 2. Check bundle size
ls -lh dist/assets

# 3. Test production build
npm run preview

# 4. Run Lighthouse audit
# Use Chrome DevTools → Lighthouse
```

### Optimization Tips

1. **Images**: Compress and use modern formats (WebP, AVIF)
2. **Fonts**: Only load needed font weights
3. **Dependencies**: Audit with `npm audit`
4. **Code**: Remove console.logs and debugger statements

## 🆘 Getting Help

1. **Check Documentation**:
   - README.md
   - MODERNIZATION.md
   - QUICK_REFERENCE.md

2. **Common Issues**: See MIGRATION_CHECKLIST.md

3. **Framework Docs**:
   - [Vite](https://vite.dev)
   - [React](https://react.dev)
   - [Tailwind](https://tailwindcss.com)

4. **Community**:
   - Open GitHub issue
   - Stack Overflow with relevant tags

## ✅ Post-Setup Checklist

- [ ] Dependencies installed successfully
- [ ] Dev server runs without errors
- [ ] Site loads at http://localhost:3000
- [ ] All sections visible and animated
- [ ] No console errors
- [ ] Responsive on mobile view
- [ ] TypeScript compiles with no errors

## 🎉 Success!

You're all set! The modernized YKD landing page is ready for development.

**Next Steps**:
1. Read QUICK_REFERENCE.md for development patterns
2. Customize colors and content
3. Review MIGRATION_CHECKLIST.md for remaining tasks
4. Build and deploy!

---

**Questions?** Open an issue or check the documentation.
