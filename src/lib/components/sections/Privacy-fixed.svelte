<script lang="ts">
  import { Check } from 'lucide-svelte';
  import { onMount } from 'svelte';

  const privacyItems = [
    "Local-first data storage",
    "Optional self-hosted sync",
    "No tracking or analytics",
    "Zero data monetization",
    "Full import/export control",
    "Open source transparency",
    "No signup required. No credit card. No BS."
  ];

  let visibleItems: boolean[] = new Array(privacyItems.length).fill(false);

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

    const items = document.querySelectorAll('.privacy-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  });
</script>

<section id="privacy" class="py-32 bg-dark-900 relative overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- Visual Checklist -->
      <div class="relative">
        <div class="absolute inset-0 bg-lime-400/5 blur-3xl rounded-full"></div>
        <div class="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 md:p-12 rounded-2xl">
          <ul class="space-y-6">
            {#each privacyItems as item, idx}
              <li 
                class="privacy-item flex items-center gap-4"
                class:animate-in={visibleItems[idx]}
                data-index={idx}
                style="transition-delay: {idx * 100}ms;"
              >
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 border border-lime-400/20">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span class="font-mono text-lg text-neutral-200">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Text Content -->
      <div>
        <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// PRIVACY FIRST</span>
        <h2 class="font-display text-5xl md:text-7xl text-white uppercase mb-8 leading-[0.9]">
          Your Data.<br />
          Your Control.<br />
          <span class="text-lime-400">Always.</span>
        </h2>
        
        <div class="space-y-6 font-mono text-neutral-400 leading-relaxed">
          <p>
            YKD is built on a <span class="text-white border-b border-lime-400/50">local-first architecture</span> where all your workout data lives on your device. No cloud dependency. No forced uploads. No corporate servers mining your training history.
          </p>
          <p>
            Want multi-device sync? <span class="text-white border-b border-lime-400/50">Self-host your own server</span> with our Docker setup. Want to keep it completely offline? That works too. Your choice. Your data.
          </p>
          <p>
            Every line of code is open source under GPL v3. No hidden telemetry. No data collection. No analytics tracking your every rep. Just a tool that respects your privacy while helping you get stronger.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .privacy-item {
    opacity: 0;
    transform: translateX(-20px);
  }

  .privacy-item.animate-in {
    animation: slideInLeft 0.6s ease-out forwards;
  }

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
</style>
