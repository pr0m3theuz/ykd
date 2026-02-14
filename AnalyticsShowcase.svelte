<script lang="ts">
  // Note: This component uses Recharts which is React-specific.
  // For a pure Svelte solution, consider using Chart.js, ApexCharts, or layerchart instead.
  // For now, keeping the structure but commenting out the chart
  
  const data = [
    { name: 'Mon', volume: 4000 },
    { name: 'Tue', volume: 3000 },
    { name: 'Wed', volume: 5000 },
    { name: 'Thu', volume: 2000 },
    { name: 'Fri', volume: 6000 },
    { name: 'Sat', volume: 4500 },
    { name: 'Sun', volume: 1000 },
  ];
</script>

<section id="analytics" class="py-32 bg-neutral-950 overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="order-2 lg:order-1 relative">
         <!-- Muscle Engagement Visualization -->
         <div class="relative aspect-[4/3] bg-dark-900 rounded-lg border border-neutral-800 p-8 flex items-center justify-center group">
            <div class="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- SVG Muscle Map - Front & Back -->
            <div class="flex gap-8 w-full h-full max-w-lg">
              <img src='/sections/muscle_engagement.png' alt="Muscle Engagement" />
            </div>

            <div class="absolute bottom-4 left-4 font-mono text-xs text-neutral-500">
              <span class="inline-block w-2 h-2 bg-lime-400 mr-2 rounded-full"></span>
              Hypertrophy Focus
            </div>
         </div>

         <!-- Floating Stats Card -->
         <div class="absolute -bottom-10 -right-10 bg-dark-800 border border-neutral-700 p-6 shadow-2xl w-64 hidden md:block">
            <h4 class="font-tech text-white uppercase text-sm mb-4">Volume Load</h4>
            <div class="h-24 flex items-end gap-1">
              {#each data as entry, index}
                <div 
                  class="flex-1 rounded-t-sm transition-all hover:opacity-80"
                  style="height: {(entry.volume / 6000) * 100}%; background-color: {index === 4 ? '#CCFF00' : '#333'};"
                  title="{entry.name}: {entry.volume}"
                ></div>
              {/each}
            </div>
            <div class="flex justify-between mt-2 text-[10px] text-neutral-500 font-mono">
              <span>Mon</span>
              <span>Sun</span>
            </div>
         </div>
      </div>

      <div class="order-1 lg:order-2">
        <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// Visual Feedback</span>
        <h2 class="font-display text-5xl md:text-6xl text-white uppercase mb-8">
          Data You Can <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-400">Actually Use.</span>
        </h2>
        <p class="font-mono text-neutral-400 leading-relaxed mb-8">
          Stop guessing. YKD provides detailed heatmaps of muscle engagement based on your actual set volume. 
          Track tonnage, reps, and RIR trends over mesocycles.
        </p>
        
        <ul class="space-y-4 font-tech text-lg text-white">
          <li class="flex items-center gap-3">
            <span class="text-lime-400">01</span> Muscle Engagement Heatmaps
          </li>
          <li class="flex items-center gap-3">
            <span class="text-lime-400">02</span> 1RM & Volume Progression Charts
          </li>
          <li class="flex items-center gap-3">
            <span class="text-lime-400">03</span> Mesocycle & Microcycle Analysis
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
