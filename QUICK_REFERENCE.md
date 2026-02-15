# Quick Reference Guide

## 🏃‍♂️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📂 Project Structure

```
ykd-landing/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Page sections
│   │   └── ui/              # Reusable components
│   ├── App.tsx              # Main app with lazy loading
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── public/
│   └── sections/            # Images, assets
├── index.html               # HTML template
├── vite.config.ts           # Build configuration
├── tailwind.config.js       # Tailwind theme
├── tsconfig.json            # TypeScript config
└── package.json
```

## 🎨 Component Patterns

### Basic Component Template

```tsx
import { memo } from 'react';
import { useReducedMotion } from 'framer-motion';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent = memo(({ title, description }: MyComponentProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      aria-labelledby="section-heading"
      className="py-32 bg-dark-900"
    >
      <h2 id="section-heading" className="font-display text-5xl">
        {title}
      </h2>
      {description && <p>{description}</p>}
    </section>
  );
});

MyComponent.displayName = 'MyComponent';
export default MyComponent;
```

### Animated Component Template

```tsx
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
};
```

## 🎯 Import Aliases

```typescript
// Path aliases configured in vite.config.ts and tsconfig.json
import Component from '@/Component';
import Layout from '@components/layout/Layout';
import Button from '@ui/Button';
import Hero from '@sections/Hero';
```

## 🎨 Tailwind Classes Reference

### Colors
```css
bg-dark-950       /* #000000 */
bg-dark-900       /* #050505 */
bg-dark-800       /* #0A0A0A */
bg-dark-700       /* #121212 */
text-lime-400     /* #CCFF00 */
text-lime-500     /* #B3E600 */
```

### Typography
```css
font-display      /* Anton */
font-tech         /* Archivo */
font-mono         /* JetBrains Mono */
```

### Custom Animations
```css
animate-marquee
animate-marquee-reverse
animate-fade-in
animate-slide-up
animate-scale-in
animate-pulse-slow
animate-spin-slow
```

## ♿ Accessibility Checklist

- [ ] All interactive elements have focus states
- [ ] Images have alt text
- [ ] Sections have proper ARIA labels
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works
- [ ] Motion respects prefers-reduced-motion
- [ ] Screen reader tested

## 🚀 Performance Tips

### Do's ✅
```tsx
// Memoize components
const MyComponent = memo(() => { ... });

// Use useCallback for stable refs
const handler = useCallback(() => { ... }, [deps]);

// Lazy load heavy components
const Chart = lazy(() => import('./Chart'));

// Use passive event listeners
window.addEventListener('scroll', handler, { passive: true });
```

### Don'ts ❌
```tsx
// Don't create inline objects in render
<Component style={{ margin: 10 }} />  // ❌
const style = useMemo(() => ({ margin: 10 }), []);  // ✅

// Don't use index as key in dynamic lists
{items.map((item, i) => <div key={i} />)}  // ❌
{items.map(item => <div key={item.id} />)}  // ✅
```

## 🎨 Animation Guidelines

```tsx
import { useReducedMotion } from 'framer-motion';

const MyComponent = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ /* animations */ }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        // Always provide reduced motion fallback
      }}
    />
  );
};
```

## 🔧 Common Tasks

### Adding a New Section

1. Create component in `src/components/sections/`
2. Follow the component template above
3. Add lazy import in `App.tsx`
4. Wrap in `<Suspense>` boundary

```tsx
// App.tsx
const NewSection = lazy(() => import('@sections/NewSection'));

// In render
<Suspense fallback={<SectionLoader />}>
  <NewSection />
</Suspense>
```

### Adding New Icons

```bash
# Lucide React icons are already installed
import { IconName } from 'lucide-react';

// Usage
<IconName size={24} className="text-lime-400" />
```

### Custom Tailwind Utilities

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      custom: '#FF0000'
    },
    animation: {
      'custom': 'customAnim 1s ease-in-out'
    },
    keyframes: {
      customAnim: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.1)' }
      }
    }
  }
}
```

## 🐛 Debugging

### React DevTools
```bash
# Install browser extension
# Chrome: React Developer Tools
# Firefox: React Developer Tools
```

### Performance Profiling
```tsx
import { Profiler } from 'react';

<Profiler id="MyComponent" onRender={(id, phase, actualDuration) => {
  console.log(`${id} took ${actualDuration}ms`);
}}>
  <MyComponent />
</Profiler>
```

### Build Analysis
```bash
# Analyze bundle size
npm run build
# Check dist folder sizes

# Use Vite's built-in visualization
vite-bundle-visualizer
```

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints */
sm: 640px    /* @media (min-width: 640px) */
md: 768px    /* @media (min-width: 768px) */
lg: 1024px   /* @media (min-width: 1024px) */
xl: 1280px   /* @media (min-width: 1280px) */
2xl: 1536px  /* @media (min-width: 1536px) */
```

## 🔗 Useful Commands

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Update packages
npm update

# Check bundle size
npm run build
ls -lh dist/assets
```

## 📚 Documentation Links

- [React Docs](https://react.dev/)
- [Vite Docs](https://vite.dev/)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Common Issues

### Issue: "Module not found"
```bash
# Solution: Check path aliases in tsconfig.json and vite.config.ts
# Restart dev server after config changes
```

### Issue: Tailwind classes not working
```bash
# Solution: Ensure files are in content array
# tailwind.config.js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```

### Issue: TypeScript errors
```bash
# Solution: Check tsconfig.json "include" paths
# Run: npm run build to see all errors
```

---

**Last Updated:** February 2026
