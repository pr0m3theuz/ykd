import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import screenshot1 from '@assets/screenshot1.png';
import screenshot2 from '@assets/screenshot2.png';
import screenshot3 from '@assets/screenshot3.png';
import screenshot4 from '@assets/screenshot4.png';
import screenshot5 from '@assets/screenshot5.png';

interface Screenshot {
  src: string;
  alt: string;
  callouts: string[];
}

const screenshots: Screenshot[] = [
  { 
    src: screenshot1,
    alt: 'YKD Analytics Dashboard showing 139 workouts and 670+ tons lifted',
    callouts: ['📊 139 WORKOUTS', '💪 670+ TONS LIFTED', '🎯 MUSCLE HEATMAP']
  },
  { 
    src: screenshot2,
    alt: 'Training frequency and volume trends tracker',
    callouts: ['📈 TRACK CONSISTENCY', '📊 VOLUME TRENDS', '⚡ TRAINING FREQUENCY']
  },
  { 
    src: screenshot3,
    alt: 'Muscle engagement breakdown with 21.5 sets for traps',
    callouts: ['🎯 MUSCLE ENGAGEMENT', '💪 21.5 SETS TRAPS', '📊 FULL BREAKDOWN']
  },
  { 
    src: screenshot4,
    alt: 'Program library with 12 structured training programs',
    callouts: ['📅 12 PROGRAMS', '🏋️ STRUCTURED TRAINING', '▶️ QUICK START']
  },
  { 
    src: screenshot5,
    alt: 'Live workout tracking with plate calculator',
    callouts: ['⏱️ LIVE WORKOUT', '💪 SET TRACKING', '📋 PLATE CALCULATOR']
  }
];

const calloutPositions = [
  { className: "top-[20%] -left-[5%] md:-left-[20%]", align: "left" },
  { className: "top-[50%] -right-[5%] md:-right-[25%] -translate-y-1/2", align: "right" },
  { className: "bottom-[20%] -left-[5%] md:-left-[20%]", align: "left" }
] as const;

const PhoneCarousel = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Rings Background */}
      {!shouldReduceMotion && (
        <>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[500px] h-[500px] rounded-full border border-neutral-800 border-dashed opacity-50"
            aria-hidden="true"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] rounded-full border border-neutral-700 border-dashed opacity-50"
            aria-hidden="true"
          />
        </>
      )}

      {/* Feature Callouts (Floating) */}
      <AnimatePresence mode="wait">
        {screenshots[activeIndex].callouts.map((text, index) => (
          <motion.div
            key={`${activeIndex}-${index}`}
            initial={{ opacity: 0, scale: 0.8, x: calloutPositions[index].align === 'left' ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: index * 0.1 }}
            className={`absolute ${calloutPositions[index].className} z-30 pointer-events-none hidden md:block`}
          >
            <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-700 hover:border-lime-400 transition-colors px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
              <span className="font-tech font-bold uppercase tracking-wider text-white whitespace-nowrap">
                {text}
              </span>
            </div>
            {/* Connector Line */}
            <div 
              className={`absolute w-12 h-[1px] bg-neutral-700
              ${calloutPositions[index].align === 'left' ? '-right-12 top-1/2' : '-left-12 top-1/2'} 
              hidden lg:block`}
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Phone Mockup */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.3 }}
        className="relative w-[360px] h-[800px] bg-dark-900 rounded-[1.5rem] border-8 border-neutral-800 shadow-2xl overflow-hidden z-20"
        role="region"
        aria-label="App screenshots carousel"
      >
        {/* Notch */}
        {/*
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-xl z-30"
          aria-hidden="true"
        />
        */}
        {/* Carousel Container */}
        <div className="relative w-full h-full bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </AnimatePresence>

          {/* Overlay Gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" 
            aria-hidden="true"
          />
        </div>

        {/* Navigation Dots */}
        <div 
          className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30"
          role="tablist"
          aria-label="Screenshot navigation"
        >
          {screenshots.map((screenshot, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 ${
                idx === activeIndex 
                  ? 'bg-lime-400 w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              role="tab"
              aria-label={`Go to screenshot ${idx + 1}: ${screenshot.alt}`}
              aria-selected={idx === activeIndex}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
});

PhoneCarousel.displayName = 'PhoneCarousel';

export default PhoneCarousel;
