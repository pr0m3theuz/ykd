import { memo } from 'react';

interface MarqueeProps {
  text?: string;
  direction?: 'left' | 'right';
}

const Marquee = memo(({ 
  text = "TRACK WHAT MATTERS /// OWN YOUR DATA /// SMART SET PROGRAMMING /// OFFLINE CAPABLE /// ", 
  direction = 'left' 
}: MarqueeProps) => {
  return (
    <div 
      className="py-8 bg-dark-800 border-y border-neutral-800 overflow-hidden"
      role="marquee"
      aria-label={`Scrolling text: ${text}`}
    >
      <div 
        className={`flex whitespace-nowrap ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        }`}
      >
        <MarqueeContent text={text} />
        <MarqueeContent text={text} />
      </div>
    </div>
  );
});

Marquee.displayName = 'Marquee';

const MarqueeContent = memo(({ text }: { text: string }) => (
  <span className="text-4xl md:text-6xl font-display uppercase text-neutral-800 px-4">
    {text} <span className="text-lime-400">{text}</span> {text}
  </span>
));

MarqueeContent.displayName = 'MarqueeContent';

export default Marquee;
