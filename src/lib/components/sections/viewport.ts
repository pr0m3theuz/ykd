/**
 * Svelte action for viewport-triggered animations
 * Usage: <div use:inView={{ threshold: 0.1 }} on:inView={handleInView}>
 */

export interface InViewOptions extends IntersectionObserverInit {
  onEnter?: (entry: IntersectionObserverEntry) => void;
  onLeave?: (entry: IntersectionObserverEntry) => void;
  once?: boolean; // Only trigger once
}

export function inView(node: HTMLElement, options: InViewOptions = {}) {
  const {
    onEnter,
    onLeave,
    once = true,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    ...observerOptions
  } = options;

  let hasTriggered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!once || !hasTriggered) {
            node.dispatchEvent(new CustomEvent('inView', { detail: entry }));
            onEnter?.(entry);
            hasTriggered = true;
          }
        } else {
          if (!once || !hasTriggered) {
            node.dispatchEvent(new CustomEvent('outView', { detail: entry }));
            onLeave?.(entry);
          }
        }
      });
    },
    {
      threshold,
      rootMargin,
      ...observerOptions
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

/**
 * Simpler viewport animation action that adds a class when element enters viewport
 * Usage: <div use:animate={{ delay: 100 }}>
 */

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
        } else if (!entry.isIntersecting && !once) {
          node.classList.remove(animationClass);
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    update(newOptions: AnimateOptions) {
      Object.assign(options, newOptions);
    },
    destroy() {
      observer.disconnect();
    }
  };
}

/**
 * Batch animate multiple elements
 * Useful for staggered animations
 */
export function createViewportObserver(
  callback: (index: number, entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    ...observerOptions
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          callback(index, entry);
        }
      });
    },
    {
      threshold,
      rootMargin,
      ...observerOptions
    }
  );

  return {
    observe: (element: Element) => observer.observe(element),
    disconnect: () => observer.disconnect()
  };
}
