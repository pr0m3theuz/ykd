import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Mon', volume: 4000 },
  { name: 'Tue', volume: 3000 },
  { name: 'Wed', volume: 5000 },
  { name: 'Thu', volume: 2000 },
  { name: 'Fri', volume: 6000 },
  { name: 'Sat', volume: 4500 },
  { name: 'Sun', volume: 1000 },
];

const AnalyticsShowcase: React.FC = () => {
  return (
    <section id="analytics" className="py-32 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             {/* Muscle Engagement Visualization (Simplified SVG based on screenshots) */}
             <div className="relative aspect-[4/3] bg-dark-900 rounded-lg border border-neutral-800 p-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* SVG Muscle Map - Front & Back */}
                <div className="flex gap-8 w-full h-full max-w-lg">
                  <img src='/sections/muscle_engagement.png' alt="Muscle Engagement"></img>
                </div>

                <div className="absolute bottom-4 left-4 font-mono text-xs text-neutral-500">
                  <span className="inline-block w-2 h-2 bg-lime-400 mr-2 rounded-full"></span>
                  Hypertrophy Focus
                </div>
             </div>

             {/* Floating Stats Card */}
             <div className="absolute -bottom-10 -right-10 bg-dark-800 border border-neutral-700 p-6 shadow-2xl w-64 hidden md:block">
                <h4 className="font-tech text-white uppercase text-sm mb-4">Volume Load</h4>
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <Bar dataKey="volume" radius={[2, 2, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 4 ? '#CCFF00' : '#333'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-mono text-lime-400 text-sm tracking-widest uppercase mb-4 block">/// Visual Feedback</span>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase mb-8">
              Data You Can <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-teal-400">Actually Use.</span>
            </h2>
            <p className="font-mono text-neutral-400 leading-relaxed mb-8">
              Stop guessing. YKD provides detailed heatmaps of muscle engagement based on your actual set volume. 
              Track tonnage, reps, and RIR trends over mesocycles.
            </p>
            
            <ul className="space-y-4 font-tech text-lg text-white">
              <li className="flex items-center gap-3">
                <span className="text-lime-400">01</span> Muscle Engagement Heatmaps
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-400">02</span> 1RM & Volume Progression Charts
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-400">03</span> Mesocycle & Microcycle Analysis
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalyticsShowcase;