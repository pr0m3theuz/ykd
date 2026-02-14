<script lang="ts">
  import { Dumbbell, BarChart2, Calendar, Target, Shield, Code } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const features = [
    {
      icon: Dumbbell,
      title: "Smart Set Programming",
      desc: "RIR/RPE-based loading with automatic warm-up calculations, working set templates, and percentage-based progression. Train smart, not just hard."
    },
    {
      icon: BarChart2,
      title: "Comprehensive Analytics",
      desc: "Track PRs, visualize progress, monitor muscle engagement with interactive charts. Automatic 1RM estimation and volume tracking across all rep ranges."
    },
    {
      icon: Calendar,
      title: "Structured Programs",
      desc: "Follow periodized training programs with mesocycle tracking. Import custom programs with the desktop editor and PKL converter."
    },
    {
      icon: Target,
      title: "Exercise Database",
      desc: "Complete muscle mapping, equipment specifications, and YouTube integration for 1,100+ exercises. Add your own custom movements."
    },
    {
      icon: Shield,
      title: "Privacy-First",
      desc: "Your data stays local with optional sync on your terms. No tracking, no analytics, no selling your information. Your workout history belongs to you."
    },
    {
      icon: Code,
      title: "Open Source",
      desc: "Community-driven development under GPL v3. Contribute features, report bugs, or fork the project. Full transparency, zero lock-in."
    }
  ];
</script>

<section id="features" class="py-32 bg-dark-900 relative">
  <div class="container mx-auto px-6">
    <div class="mb-20">
      <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// CAPABILITIES</span>
      <h2 class="font-display text-5xl md:text-7xl text-white uppercase">
        Built for <span class="text-neutral-700">Serious</span> Training
      </h2>
      <p class="mt-6 text-xl text-neutral-400 font-light max-w-2xl">
        Professional-grade features that respect your privacy and enhance your performance.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
      {#each features as feature, index}
        <div 
          in:fly={{ y: 20, delay: index * 100, duration: 600, easing: quintOut }}
          class="group relative bg-dark-900 p-10 hover:bg-neutral-900 transition-colors duration-500 overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          
          <div class="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
            <svelte:component this={feature.icon} size={32} />
          </div>
          
          <h3 class="font-tech font-bold text-2xl text-white mb-4 uppercase tracking-wide">
            {feature.title}
          </h3>
          
          <p class="font-mono text-neutral-400 text-sm leading-relaxed">
            {feature.desc}
          </p>

          <div class="absolute bottom-4 right-4 text-neutral-800 font-display text-6xl opacity-20 select-none group-hover:opacity-40 transition-opacity">
            0{index + 1}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
