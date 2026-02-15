import { useEffect, useRef, memo } from 'react';

const CustomCursor = memo(() => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return;

    let posX = 0;
    let posY = 0;

    const onMouseMove = (e: MouseEvent) => {
      posX = e.clientX;
      posY = e.clientY;

      // Use RAF for smooth animation
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate(${posX}px, ${posY}px)`;
        }

        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.animate(
            {
              transform: `translate(${posX}px, ${posY}px)`
            }, 
            { 
              duration: 500, 
              fill: "forwards",
              easing: 'ease-out'
            }
          );
        }
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className="cursor-dot hidden md:block fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-lime-400 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div 
        ref={cursorOutlineRef} 
        className="cursor-outline hidden md:block fixed pointer-events-none z-[9999] w-10 h-10 rounded-full border border-lime-400/50 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;
