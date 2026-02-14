# Animation Fix - Viewport-Based Animations

This document explains the fix for animations that were triggering on page load instead of when scrolling into view.

## 🐛 Problem

The original `Features.svelte` and `PowerFeatures.svelte` components used Svelte's `in:` transition directives:

```svelte
<div in:fly={{ y: 20, delay: idx * 100 }}>
```

**Issue:** These transitions trigger immediately when the component mounts (page load), not when the user scrolls to them. This means animations play before elements are visible.

## ✅ Solution

We implemented Intersection Observer API to detect when elements enter the viewport and trigger animations only then.

### Approach 1: Manual Implementation (Simplest)

This approach tracks visibility state for each element and adds an animation class when it enters the viewport.

```svelte
<script lang="ts">
  import { onMount } from 'svelte';

  let visibleItems: boolean[] = new Array(items.length).fill(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            visibleItems[index] = true;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  });
</script>

{#each items as item, idx}
  <div 
    class="feature-card"
    class:animate-in={visibleItems[idx]}
    data-index={idx}
    style="transition-delay: {idx * 100}ms;"
  >
    <!-- content -->
  </div>
{/each}

<style>
  .feature-card {
    opacity: 0;
    transform: translateY(20px);
  }

  .feature-card.animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
```

### Approach 2: Reusable Svelte Action (Recommended)

Create a reusable `viewport.ts` utility:

```typescript
// src/lib/utils/viewport.ts
export interface AnimateOptions {
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  once?: boolean;
}

export function animate(node: HTMLElement, options: AnimateOptions = {}) {
  const {
    delay = 0,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-in',
    once = true
  } = options;

  let hasTriggered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!once || !hasTriggered)) {
          setTimeout(() => {
            node.classList.add(animationClass);
          }, delay);
          hasTriggered = true;
          if (once) {
            observer.disconnect();
          }
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
```

Then use it in components:

```svelte
<script lang="ts">
  import { animate } from '$lib/utils/viewport';
</script>

{#each items as item, idx}
  <div 
    use:animate={{ delay: idx * 100 }}
    class="feature-card"
  >
    <!-- content -->
  </div>
{/each}
```

## 📦 Updated Components

### 1. Features.svelte
- Fixed staggered animation for 6 feature cards
- Animation triggers when cards are ~10% visible
- 100ms delay between each card

### 2. PowerFeatures.svelte
- Fixed staggered animation for 6 power feature cards
- Same viewport detection logic
- Consistent timing with Features component

### 3. Privacy.svelte
- Fixed slide-in animation for privacy checklist items
- Items slide in from left when visible
- 100ms stagger between items

## 🎨 Animation Styles

### Fade In Up (Features & PowerFeatures)

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Slide In Left (Privacy)

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

## ⚙️ Intersection Observer Options

```typescript
{
  threshold: 0.1,              // Trigger when 10% visible
  rootMargin: '0px 0px -50px 0px'  // Start animation 50px before element enters viewport
}
```

**Explanation:**
- `threshold: 0.1` - Element must be at least 10% visible
- `rootMargin: '0px 0px -50px 0px'` - Negative bottom margin makes animation trigger slightly before element is fully in view, creating a smoother experience

## 🔧 Customization

### Adjust Animation Timing

Change the stagger delay:
```svelte
style="transition-delay: {idx * 150}ms;"  // Slower
style="transition-delay: {idx * 50}ms;"   // Faster
```

### Change Trigger Point

Make animation trigger earlier:
```typescript
rootMargin: '0px 0px -100px 0px'  // 100px before viewport
```

Make animation trigger later:
```typescript
rootMargin: '0px 0px 0px 0px'  // Exactly at viewport edge
```

### Adjust Visibility Threshold

```typescript
threshold: 0.5  // 50% of element must be visible
threshold: 0.8  // 80% of element must be visible
```

### Disable "Trigger Once"

Make animations repeat when scrolling up and down:

```typescript
// In viewport.ts
once: false  // Animation triggers every time element enters viewport
```

## 🎯 Best Practices

1. **Keep animations subtle** - Don't distract from content
2. **Use consistent timing** - Same duration and easing across similar elements
3. **Stagger appropriately** - 50-150ms between items works well
4. **Consider performance** - Limit number of simultaneously animating elements
5. **Test on mobile** - Ensure animations don't cause jank on slower devices

## 🐛 Troubleshooting

### Animations not triggering

**Problem:** Elements don't animate when scrolling into view.

**Solutions:**
- Check browser console for errors
- Verify `data-index` attributes are present
- Ensure observer is set up in `onMount`
- Check that elements have correct class names

### Animations trigger too early/late

**Problem:** Animation timing feels off.

**Solutions:**
- Adjust `rootMargin` to change trigger point
- Modify `threshold` to require more/less visibility
- Change stagger delay timing

### Performance issues

**Problem:** Scrolling feels janky with many animations.

**Solutions:**
- Reduce number of animated elements
- Use `will-change: transform` CSS property
- Simplify animation (remove extra transforms/filters)
- Consider disabling on mobile

### Animations play on page load

**Problem:** Elements still animate immediately.

**Solutions:**
- Ensure you're not using `in:` transition directives
- Check that initial state has `opacity: 0`
- Verify observer is connected before elements render

## 📱 Mobile Considerations

On mobile devices with slower performance:

```typescript
// Detect mobile and simplify animations
const isMobile = window.innerWidth < 768;

const observer = new IntersectionObserver(
  (entries) => {
    // On mobile, animate all at once
    const delay = isMobile ? 0 : index * 100;
    // ...
  }
);
```

Or disable animations entirely on mobile:

```svelte
<script>
  import { browser } from '$app/environment'; // SvelteKit only
  
  const enableAnimations = browser && window.innerWidth >= 768;
</script>

{#if enableAnimations}
  <div use:animate>Content</div>
{:else}
  <div>Content</div>
{/if}
```

## 🎬 Alternative Animation Libraries

If you need more complex animations, consider:

- **svelte-motion** - Framer Motion for Svelte
- **svelte-inview** - Dedicated viewport detection library
- **AutoAnimate** - Automatic animations for DOM changes
- **GSAP** - Professional animation library

## 📚 Resources

- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Svelte Actions](https://svelte.dev/docs/svelte-action)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Web Animation Performance](https://web.dev/animations-guide/)

## ✅ Migration Checklist

To apply these fixes to other components:

- [ ] Remove `in:fly` or other transition directives
- [ ] Add visibility tracking with `onMount`
- [ ] Set up Intersection Observer
- [ ] Add `data-index` attributes
- [ ] Create CSS animations with initial hidden state
- [ ] Add `animate-in` class toggle
- [ ] Test scrolling in both directions
- [ ] Verify on mobile devices
- [ ] Check performance with DevTools
