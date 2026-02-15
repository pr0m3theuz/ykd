import { Download, Github } from 'lucide-react';
import { motion, useReducedMotion, Variants } from 'motion/react';
import PhoneCarousel from '@ui/PhoneCarousel';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background Abstract Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      {/* Decorative Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full mb-8 backdrop-blur-sm">
                <span 
                  className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" 
                  aria-hidden="true"
                />
                <span className="text-xs font-mono text-lime-400 uppercase tracking-widest">
                  v1.0 Stable Release
                </span>
              </div>
            </motion.div>
              
            <motion.h1 
              id="hero-heading"
              className="font-display text-7xl md:text-9xl leading-[0.85] text-white uppercase mb-8"
              variants={itemVariants}
            >
              Get <span className="text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-lime-600">Yoked.</span>
              <br />
              Own Your 
              <br />
              <span className="relative inline-block">
                Progress.
                <svg 
                  className="absolute top-18 left-0 w-full h-20 text-lime-400"
                  viewBox="0 0 800 200" 
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path 
                    d="M 10 110 C 800 0 110 200 790 90"
                    stroke="currentColor" 
                    strokeWidth="25"
                    strokeLinecap="round" 
                    fill="none" 
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-400 font-light max-w-xl leading-relaxed mb-8 border-l-2 border-lime-400 pl-6"
              variants={itemVariants}
            >
              A privacy-focused, open source workout logging ecosystem. 
              Zero subscriptions. Zero data mining. 100% gains.
            </motion.p>

            <motion.ul 
              className="flex flex-col gap-3 mb-10 ml-1"
              variants={itemVariants}
            >
              {[
                'LOCAL-FIRST STORAGE',
                'ZERO SUBSCRIPTIONS',
                'OPEN SOURCE GPL v3'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-lime-400 flex-shrink-0" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3l14 9-14 9V3z" /> 
                    </svg>
                  </span>
                  <span className="font-mono text-white font-bold tracking-widest uppercase text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a 
                href="#download" 
                className="group relative px-10 py-4 bg-lime-400 text-black font-tech font-semibold text-lg uppercase tracking-wide overflow-hidden transition-all [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
                aria-label="Download YKD APK"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Download APK <Download size={20} aria-hidden="true" />
                </span>
              </a>
              
              <a 
                href="https://github.com/pr0m3theuz/workout-app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group px-10 py-4 bg-transparent text-white border-2 border-white font-tech font-semibold text-lg uppercase tracking-wide transition-all hover:bg-white hover:text-black [clip-path:polygon(0_0,90%_0,100%_100%,10%_100%)] flex items-center gap-2 justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
                aria-label="View YKD on GitHub"
              >
                <span>GitHub</span> <Github size={20} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

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
