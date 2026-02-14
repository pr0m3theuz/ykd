<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Marquee from '$lib/components/sections/Marquee.svelte';
  import Features from '$lib/components/sections/Features.svelte';
  import PowerFeatures from '$lib/components/sections/PowerFeatures.svelte';
  import Ecosystem from '$lib/components/sections/Ecosystem.svelte';
  import Privacy from '$lib/components/sections/Privacy.svelte';
  import AnalyticsShowcase from '$lib/components/sections/AnalyticsShowcase.svelte';
  import FinalCTA from '$lib/components/sections/FinalCTA.svelte';
  import CustomCursor from '$lib/components/ui/CustomCursor.svelte';

  let loading = true;

  onMount(() => {
    // Simulate initial asset loading for smoother entrance
    const timer = setTimeout(() => {
      loading = false;
    }, 100);
    
    return () => clearTimeout(timer);
  });
</script>

<svelte:head>
  <title>YKD | Own Your Progress</title>
  <meta name="description" content="Privacy-focused, local-first workout tracker." />
</svelte:head>

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
