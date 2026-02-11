import React from 'react';

interface MarqueeProps {
  text?: string;
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text = "TRACK WHAT MATTERS /// OWN YOUR DATA /// SMART SET PROGRAMMING /// OFFLINE CAPABLE /// ", 
  direction = 'left' 
}) => {
  return (
    <div className="py-8 bg-dark-800 border-y border-neutral-800 overflow-hidden">
      <div 
        className={`flex whitespace-nowrap ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{ animationDirection: direction === 'left' ? 'normal' : 'reverse' }}
      >
        <span className="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
          {text} <span className="text-lime-400">{text}</span> {text}
        </span>
        <span className="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
          {text} <span className="text-lime-400">{text}</span> {text}
        </span>
      </div>
      <style>{`
        .animate-marquee-reverse {
          animation: marquee 25s linear infinite reverse;
        }
      `}</style>
    </div>
  );
};

export default Marquee;