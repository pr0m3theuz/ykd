import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const privacyItems = [
  "Local-first data storage",
  "Optional self-hosted sync",
  "No tracking or analytics",
  "Zero data monetization",
  "Full import/export control",
  "Open source transparency",
  "No signup required. No credit card. No BS."
];

const Privacy: React.FC = () => {
  return (
    <section id="privacy" className="py-32 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Checklist */}
          <div className="relative">
            <div className="absolute inset-0 bg-lime-400/5 blur-3xl rounded-full"></div>
            <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 md:p-12 rounded-2xl">
              <ul className="space-y-6">
                {privacyItems.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 border border-lime-400/20">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="font-mono text-lg text-neutral-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// PRIVACY FIRST</span>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-8 leading-[0.9]">
              Your Data.<br />
              Your Control.<br />
              <span className="text-lime-400">Always.</span>
            </h2>
            
            <div className="space-y-6 font-mono text-neutral-400 leading-relaxed">
              <p>
                YKD is built on a <span className="text-white border-b border-lime-400/50">local-first architecture</span> where all your workout data lives on your device. No cloud dependency. No forced uploads. No corporate servers mining your training history.
              </p>
              <p>
                Want multi-device sync? <span className="text-white border-b border-lime-400/50">Self-host your own server</span> with our Docker setup. Want to keep it completely offline? That works too. Your choice. Your data.
              </p>
              <p>
                Every line of code is open source under GPL v3. No hidden telemetry. No data collection. No analytics tracking your every rep. Just a tool that respects your privacy while helping you get stronger.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;