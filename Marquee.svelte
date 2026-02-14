<script lang="ts">
  export let text = "TRACK WHAT MATTERS /// OWN YOUR DATA /// SMART SET PROGRAMMING /// OFFLINE CAPABLE /// ";
  export let direction: 'left' | 'right' = 'left';
</script>

<div class="py-8 bg-dark-800 border-y border-neutral-800 overflow-hidden">
  <div 
    class="flex whitespace-nowrap {direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}"
  >
    <span class="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
      {text} <span class="text-lime-400">{text}</span> {text}
    </span>
    <span class="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
      {text} <span class="text-lime-400">{text}</span> {text}
    </span>
  </div>
</div>

<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-marquee {
    animation: marquee 25s linear infinite;
  }

  .animate-marquee-reverse {
    animation: marquee 25s linear infinite reverse;
  }
</style>
