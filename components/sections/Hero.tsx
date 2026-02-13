import React from 'react';
import { Download, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import PhoneCarousel from '../ui/PhoneCarousel';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                <span className="text-xs font-mono text-lime-400 uppercase tracking-widest">v1.0 Stable Release</span>
              </div>
              
              <h1 className="font-display text-7xl md:text-9xl leading-[0.85] text-white uppercase mb-8">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-lime-600">Yoked.</span><br />
                Own Your <br />
                <span className="relative">
                  Progress.
                  <svg className="absolute -bottom-0.5 z-50 left-0 w-full h-20 text-lime-400" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <path d="M 10 110 C 800 0 110 200 790 90" stroke="currentColor" strokeWidth="20" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-neutral-400 font-light max-w-xl leading-relaxed mb-8 border-l-2 border-lime-400 pl-6">
                A privacy-focused, open source workout logging ecosystem. 
                Zero subscriptions. Zero data mining. 100% gains.
              </p>

              <ul className="flex flex-col gap-3 mb-10 ml-1">
                {[
                  'LOCAL-FIRST STORAGE',
                  'ZERO SUBSCRIPTIONS',
                  'OPEN SOURCE GPL v3'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-lime-400 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3l14 9-14 9V3z" /> 
                      </svg>
                    </span>
                    <span className="font-mono text-white font-bold tracking-widest uppercase text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#download" 
                  className="group relative px-10 py-4 bg-lime-400 text-black font-tech font-semibold text-lg uppercase tracking-wide overflow-hidden transition-all [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]"
                >
                  <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Download APK <Download size={20} />
                  </span>
                </a>
                
                <a 
                  href="https://github.com/pr0m3theuz/workout-app" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group px-10 py-4 bg-transparent text-white border-2 border-white font-tech font-semibold text-lg uppercase tracking-wide transition-all hover:bg-white hover:text-black [clip-path:polygon(0_0,90%_0,100%_100%,10%_100%)] flex items-center gap-2 justify-center"
                >
                  <span>GitHub</span> <Github size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual Content - Carousel Mockup */}
          <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center">
            <PhoneCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;