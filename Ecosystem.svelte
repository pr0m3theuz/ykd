<script lang="ts">
  import { ArrowUpRight, Smartphone, Monitor, Cloud, RefreshCw } from 'lucide-svelte';

  const projects = [
    {
      icon: Smartphone,
      title: "Mobile App",
      desc: "Android application with Jetpack Compose UI, Couchbase Lite storage, and real-time workout tracking. Execute programs, log sets, view analytics.",
      tags: ["Kotlin", "Compose", "Couchbase Lite", "Material 3"],
      link: "https://github.com/pr0m3theuz/workout-app"
    },
    {
      icon: Monitor,
      title: "Program Importer",
      desc: "Desktop application for importing PKL files, validating exercises, and managing programs with hierarchical tree view. Built with Compose Multiplatform.",
      tags: ["Kotlin MP", "Compose Desktop", "Couchbase SDK"],
      link: "https://github.com/pr0m3theuz/ykd_import_programs_kmp"
    },
    {
      icon: Cloud,
      title: "Sync Server",
      desc: "Docker-based backend with Couchbase Server and Sync Gateway. Multi-device synchronization, data backup, and local-first architecture support.",
      tags: ["Docker", "Couchbase", "Sync Gateway"],
      link: "https://github.com/pr0m3theuz/ykd_workout_app_server"
    },
    {
      icon: RefreshCw,
      title: "PKL Converter",
      desc: "Python script to convert CSV workout templates to PKL format. Maps 1,100+ exercise variations and structures programs hierarchically.",
      tags: ["Python", "PKL", "CSV Parser"],
      link: "https://github.com/pr0m3theuz/ykd_workout_program_pkl_generator"
    }
  ];
</script>

<section id="ecosystem" class="py-32 bg-neutral-950">
  <div class="container mx-auto px-6">
    <div class="mb-16">
      <span class="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// COMPLETE ECOSYSTEM</span>
      <h2 class="font-display text-5xl md:text-7xl text-white uppercase mb-6">
        Four Components,<br />One System
      </h2>
      <p class="font-mono text-neutral-400 text-lg max-w-2xl">
         YKD is a complete ecosystem for creating, managing, and executing workout programs.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each projects as project, idx}
        <a 
          href={project.link}
          target="_blank"
          rel="noreferrer"
          class="group relative flex flex-col justify-between bg-dark-900 border border-neutral-800 p-8 hover:border-lime-400/50 transition-colors rounded-xl overflow-hidden"
        >
          <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} class="text-lime-400" />
          </div>

          <div>
            <div class="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
              <svelte:component this={project.icon} size={32} />
            </div>
            
            <h3 class="font-display text-2xl text-white uppercase mb-4">
              {project.title}
            </h3>
            
            <p class="font-mono text-sm text-neutral-500 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
              {project.desc}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tags as tag}
              <span class="px-2 py-1 bg-neutral-800 text-[10px] font-mono text-neutral-400 uppercase rounded group-hover:text-lime-400 group-hover:bg-neutral-800/80 transition-colors">
                {tag}
              </span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
