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
                  {/* Front Body Abstract */}
                  <svg viewBox="0 0 100 200" className="w-1/2 h-full drop-shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                    <path d="M50 10 L65 15 L70 30 L90 40 L85 80 L95 90 L85 100 L70 90 L70 140 L80 160 L75 190 L60 180 L50 195 L40 180 L25 190 L20 160 L30 140 L30 90 L15 100 L5 90 L15 80 L10 40 L30 30 L35 15 Z" 
                          fill="#1E293B" stroke="#334155" strokeWidth="1" />
                    {/* Pecs - Lime */}
                    <path d="M50 40 L70 45 L70 60 L50 65 L30 60 L30 45 Z" fill="#CCFF00" opacity="0.9" className="animate-pulse-slow" />
                    {/* Abs - Teal */}
                    <path d="M40 70 L60 70 L58 120 L42 120 Z" fill="#2DD4BF" opacity="0.7" />
                    {/* Quads - Purple */}
                    <path d="M30 100 L45 100 L45 160 L30 150 Z" fill="#A855F7" opacity="0.6" />
                    <path d="M70 100 L55 100 L55 160 L70 150 Z" fill="#A855F7" opacity="0.6" />
                  </svg>
                  
                  {/* Back Body Abstract */}
                  <svg viewBox="0 0 100 200" className="w-1/2 h-full drop-shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                    <path d="M50 10 L65 15 L70 30 L90 40 L85 80 L95 90 L85 100 L70 90 L70 140 L80 160 L75 190 L60 180 L50 195 L40 180 L25 190 L20 160 L30 140 L30 90 L15 100 L5 90 L15 80 L10 40 L30 30 L35 15 Z" 
                          fill="#1E293B" stroke="#334155" strokeWidth="1" />
                    {/* Traps/Back - Orange (from screenshot) */}
                    <path d="M50 20 L75 35 L50 90 L25 35 Z" fill="#F97316" opacity="0.9" />
                    {/* Lats - Teal */}
                    <path d="M30 50 L50 90 L70 50 L80 80 L50 110 L20 80 Z" fill="#2DD4BF" opacity="0.5" />
                  </svg>
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