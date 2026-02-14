<script lang="ts">
  import { onMount } from 'svelte';

  let dotX = 0;
  let dotY = 0;
  let outlineX = 0;
  let outlineY = 0;
  let isHovering = false;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      
      // Smooth outline movement with slight delay
      setTimeout(() => {
        outlineX = e.clientX;
        outlineY = e.clientY;
      }, 50);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  });
</script>

<div 
  class="cursor-dot"
  style="left: {dotX}px; top: {dotY}px;"
></div>

<div 
  class="cursor-outline"
  class:hovering={isHovering}
  style="left: {outlineX}px; top: {outlineY}px;"
></div>

<style>
  .cursor-dot,
  .cursor-outline {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 9999;
    pointer-events: none;
  }
  
  .cursor-dot {
    width: 8px;
    height: 8px;
    background-color: #CCFF00;
  }
  
  .cursor-outline {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(204, 255, 0, 0.5);
    transition: width 0.2s, height 0.2s, background-color 0.2s;
  }
  
  .cursor-outline.hovering {
    width: 60px;
    height: 60px;
    background-color: rgba(204, 255, 0, 0.1);
  }
  
  /* Hide cursor on touch devices */
  @media (hover: none) {
    .cursor-dot, 
    .cursor-outline {
      display: none;
    }
  }
</style>
