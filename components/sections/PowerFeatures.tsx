import React from 'react';
import { motion } from 'framer-motion';

const featureCards = [
  {
    title: "Muscle Engagement Heatmap",
    desc: "Visualize which muscles you've trained with an interactive anatomical breakdown showing target, synergist, and stabilizer engagement."
  },
  {
    title: "Workout Frequency Analytics",
    desc: "Track training consistency with daily, weekly, and monthly frequency charts. Monitor volume trends over time."
  },
  {
    title: "RIR/RPE Programming",
    desc: "Intelligent set editors calculate loads based on 1RM, target reps, and RIR. Generate progressive warm-up schemes automatically."
  },
  {
    title: "Structured Programs",
    desc: "Follow periodized training with mesocycle and microcycle organization. Clear progression through training blocks."
  },
  {
    title: "Active Workout Logging",
    desc: "Track every set with weight, reps, and RIR. Reference previous performance to drive progressive overload."
  },
  {
    title: "Complete Exercise Records",
    desc: "View estimated 1RM, max volume, and best performance across all rep ranges. Chart your strength progression over time."
  }
];

const PowerFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// SEE IT IN ACTION</span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-4">
            Power Features, Beautiful UI
          </h2>
          <p className="font-mono text-neutral-400">
            Every screen designed for efficiency and insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-800 p-8 border border-neutral-800 hover:border-lime-400/30 transition-colors group"
            >
              <div className="w-8 h-1 bg-lime-400 mb-6 group-hover:w-16 transition-all duration-300"></div>
              <h4 className="font-tech font-bold text-xl text-white uppercase mb-4 tracking-wide group-hover:text-lime-400 transition-colors">
                {card.title}
              </h4>
              <p className="font-mono text-sm text-neutral-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerFeatures;