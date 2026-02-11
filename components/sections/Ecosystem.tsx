import React from 'react';
import { ArrowUpRight, Smartphone, Monitor, Cloud, RefreshCw } from 'lucide-react';

const projects = [
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App",
    desc: "Android application with Jetpack Compose UI, Couchbase Lite storage, and real-time workout tracking. Execute programs, log sets, view analytics.",
    tags: ["Kotlin", "Compose", "Couchbase Lite", "Material 3"],
    link: "https://github.com/pr0m3theuz/workout-app"
  },
  {
    icon: <Monitor size={32} />,
    title: "Program Importer",
    desc: "Desktop application for importing PKL files, validating exercises, and managing programs with hierarchical tree view. Built with Compose Multiplatform.",
    tags: ["Kotlin MP", "Compose Desktop", "Couchbase SDK"],
    link: "https://github.com/pr0m3theuz/ykd-import-programs-kmp"
  },
  {
    icon: <Cloud size={32} />,
    title: "Sync Server",
    desc: "Docker-based backend with Couchbase Server and Sync Gateway. Multi-device synchronization, data backup, and local-first architecture support.",
    tags: ["Docker", "Couchbase", "Sync Gateway"],
    link: "https://github.com/pr0m3theuz/workout-app-server"
  },
  {
    icon: <RefreshCw size={32} />,
    title: "PKL Converter",
    desc: "Python script to convert CSV workout templates to PKL format. Maps 1,100+ exercise variations and structures programs hierarchically.",
    tags: ["Python", "PKL", "CSV Parser"],
    link: "https://github.com/pr0m3theuz/ykd_workout_program_pkl_generator"
  }
];

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// COMPLETE ECOSYSTEM</span>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-6">
            Four Components,<br />One System
          </h2>
          <p className="font-mono text-neutral-400 text-lg max-w-2xl">
             YKD is a complete ecosystem for creating, managing, and executing workout programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between bg-dark-900 border border-neutral-800 p-8 hover:border-lime-400/50 transition-colors rounded-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-lime-400" />
              </div>

              <div>
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                
                <h3 className="font-display text-2xl text-white uppercase mb-4">
                  {project.title}
                </h3>
                
                <p className="font-mono text-sm text-neutral-500 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 bg-neutral-800 text-[10px] font-mono text-neutral-400 uppercase rounded group-hover:text-lime-400 group-hover:bg-neutral-800/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;