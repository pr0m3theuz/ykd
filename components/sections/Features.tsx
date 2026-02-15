import React from 'react';
import { Dumbbell, BarChart2, Calendar, Target, Shield, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Dumbbell size={32} />,
    title: "Smart Set Programming",
    desc: "RIR/RPE-based loading with automatic warm-up calculations, working set templates, and percentage-based progression. Train smart, not just hard."
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Comprehensive Analytics",
    desc: "Track PRs, visualize progress, monitor muscle engagement with interactive charts. Automatic 1RM estimation and volume tracking across all rep ranges."
  },
  {
    icon: <Calendar size={32} />,
    title: "Structured Programs",
    desc: "Follow periodized training programs with mesocycle tracking. Import custom programs with the desktop editor and PKL converter."
  },
  {
    icon: <Target size={32} />,
    title: "Exercise Database",
    desc: "Complete muscle mapping, equipment specifications, and YouTube integration for 1,100+ exercises. Add your own custom movements."
  },
  {
    icon: <Shield size={32} />,
    title: "Privacy-First",
    desc: "Your data stays local with optional sync on your terms. No tracking, no analytics, no selling your information. Your workout history belongs to you."
  },
  {
    icon: <Code size={32} />,
    title: "Open Source",
    desc: "Community-driven development under GPL v3. Contribute features, report bugs, or fork the project. Full transparency, zero lock-in."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// CAPABILITIES</span>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase">
            Built for <span className="text-neutral-700">Serious</span> Training
          </h2>
          <p className="mt-6 text-xl text-neutral-400 font-light max-w-2xl">
            Professional-grade features that respect your privacy and enhance your performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: typeof features[0], index: number }> = ({ feature, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-dark-900 p-10 hover:bg-neutral-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      
      <div className="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
        {feature.icon}
      </div>
      
      <h3 className="font-tech font-bold text-2xl text-white mb-4 uppercase tracking-wide">
        {feature.title}
      </h3>
      
      <p className="font-mono text-neutral-400 text-sm leading-relaxed">
        {feature.desc}
      </p>

      <div className="absolute bottom-4 right-4 text-neutral-800 font-display text-6xl opacity-20 select-none group-hover:opacity-40 transition-opacity">
        0{index + 1}
      </div>
    </motion.div>
  );
};

export default Features;