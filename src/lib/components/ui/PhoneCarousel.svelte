<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const screenshots = [
    { 
      src: '/sections/screenshot1.png',
      callouts: ['📊 139 WORKOUTS', '💪 670+ TONS LIFTED', '🎯 MUSCLE HEATMAP']
    },
    { 
      src: '/sections/screenshot2.png',
      callouts: ['📈 TRACK CONSISTENCY', '📊 VOLUME TRENDS', '⚡ TRAINING FREQUENCY']
    },
    { 
      src: '/sections/screenshot3.png',
      callouts: ['🎯 MUSCLE ENGAGEMENT', '💪 21.5 SETS TRAPS', '📊 FULL BREAKDOWN']
    },
    { 
      src: '/sections/screenshot4.png',
      callouts: ['📅 12 PROGRAMS', '🏋️ STRUCTURED TRAINING', '▶️ QUICK START']
    },
    { 
      src: '/sections/screenshot5.png',
      callouts: ['⏱️ LIVE WORKOUT', '💪 SET TRACKING', '📋 PLATE CALCULATOR']
    }
  ];

  const calloutPositions = [
    { className: "top-[20%] -left-[5%] md:-left-[20%]", align: "left" },
    { className: "top-[50%] -right-[5%] md:-right-[25%] -translate-y-1/2", align: "right" },
    { className: "bottom-[20%] -left-[5%] md:-left-[20%]", align: "left" }
  ];

  let activeIndex = 0;
  let interval: number;

  onMount(() => {
    interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % screenshots.length;
    }, 4000);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  function setActiveIndex(index: number) {
    activeIndex = index;
  }
</script>

<div class="relative w-full h-full flex items-center justify-center">
  <!-- Animated Rings Background -->
  <div class="absolute w-[500px] h-[500px] rounded-full border border-neutral-800 border-dashed opacity-50 z-0 animate-spin-slow"></div>
  <div class="absolute w-[400px] h-[400px] rounded-full border border-neutral-700 border-dashed opacity-50 z-0 animate-spin-reverse"></div>

  <!-- Feature Callouts (Floating) -->
  {#key activeIndex}
    {#each screenshots[activeIndex].callouts as text, index}
      <div
        in:fly={{ 
          x: calloutPositions[index].align === 'left' ? 20 : -20, 
          opacity: 0, 
          duration: 300, 
          delay: index * 100,
          easing: quintOut 
        }}
        out:fade={{ duration: 200 }}
        class="absolute {calloutPositions[index].className} z-30 pointer-events-none hidden md:block"
      >
         <div class="bg-neutral-900/90 backdrop-blur-md border border-neutral-700 hover:border-lime-400 transition-colors px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
           <span class="font-tech font-bold uppercase tracking-wider text-white whitespace-nowrap">
             {text}
           </span>
         </div>
         <!-- Connector Line -->
         <div 
            class="absolute w-12 h-[1px] bg-neutral-700
            {calloutPositions[index].align === 'left' ? '-right-12 top-1/2' : '-left-12 top-1/2'} 
            hidden lg:block"
          ></div>
      </div>
    {/each}
  {/key}

  <!-- Phone Mockup -->
  <div class="relative w-[300px] h-[600px] bg-dark-900 rounded-[3rem] border-8 border-neutral-800 shadow-2xl overflow-hidden z-20">
    <!-- Notch -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-xl z-30"></div>
    
    <!-- Carousel Container -->
    <div class="relative w-full h-full bg-neutral-900">
      {#key activeIndex}
        <img
          src={screenshots[activeIndex].src}
          alt="App Screenshot"
          in:fade={{ duration: 500 }}
          out:fade={{ duration: 500 }}
          class="absolute inset-0 w-full h-full object-cover"
        />
      {/key}

      <!-- Overlay Gradient for Text readability if needed -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
      {#each screenshots as _, idx}
        <button
          on:click={() => setActiveIndex(idx)}
          class="w-2 h-2 rounded-full transition-all duration-300 {idx === activeIndex ? 'bg-lime-400 w-6' : 'bg-white/30 hover:bg-white/50'}"
          aria-label="Go to slide {idx + 1}"
        />
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  .animate-spin-slow {
    animation: spin-slow 40s linear infinite;
  }

  .animate-spin-reverse {
    animation: spin-reverse 30s linear infinite;
  }
</style>
