<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from './components/layout/Navbar.svelte';
  import Footer from './components/layout/Footer.svelte';
  import Hero from './components/sections/Hero.svelte';
  import Marquee from './components/sections/Marquee.svelte';
  import Features from './components/sections/Features.svelte';
  import PowerFeatures from './components/sections/PowerFeatures.svelte';
  import Ecosystem from './components/sections/Ecosystem.svelte';
  import Privacy from './components/sections/Privacy.svelte';
  import AnalyticsShowcase from './components/sections/AnalyticsShowcase.svelte';
  import FinalCTA from './components/sections/FinalCTA.svelte';
  import CustomCursor from './components/ui/CustomCursor.svelte';

  let loading = true;

  onMount(() => {
    // Simulate initial asset loading for smoother entrance
    const timer = setTimeout(() => {
      loading = false;
    }, 100);
    
    return () => clearTimeout(timer);
  });
</script>

{#if !loading}
  <div class="relative min-h-screen flex flex-col">
    <CustomCursor />
    <Navbar />
    
    <main class="flex-grow">
      <Hero />
      <Marquee direction="left" />
      <Features />
      <PowerFeatures />
      <AnalyticsShowcase />
      <Marquee direction="right" text="OPEN SOURCE /// GPL V3 /// LOCAL FIRST /// NO SUBSCRIPTIONS /// " />
      <Privacy />
      <Ecosystem />
      <FinalCTA />
    </main>

    <Footer />
  </div>
{/if}
