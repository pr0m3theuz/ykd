import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-lime-400 relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
       </div>

       <div className="container mx-auto px-6 text-center relative z-10">
         <h2 className="font-display text-6xl md:text-8xl text-black uppercase mb-8 leading-[0.85]">
          {/* Start Tracking.<br />
          Start Owning. */} 
          Ready to Take Control?
         </h2>
         <p className="font-mono text-black/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
           Download YKD and take control of your training.<br />Free, open source, privacy-focused.
         </p>
         
         <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/pr0m3theuz/workout-app/releases" 
              className="group relative px-10 py-4 bg-black text-white font-tech font-bold text-lg uppercase tracking-wide overflow-hidden transition-all [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] flex items-center justify-center min-w-[240px]"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                <Download size={20} />
                Download APK
              </span>
            </a>
            <a 
              href="https://github.com/pr0m3theuz/workout-app" 
              className="group px-10 py-4 bg-transparent text-black border-2 border-black font-tech font-bold text-lg uppercase tracking-wide transition-all hover:bg-black hover:text-white [clip-path:polygon(0_0,90%_0,100%_100%,10%_100%)] flex items-center gap-2 min-w-[240px] justify-center"
            >
              <ExternalLink size={20} />
              Documentation
            </a>
         </div>
       </div>
    </section>
  );
};

export default FinalCTA;