import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 30, reverse = false, className = '' }) => {
  return (
    <div className={`group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <div
        className="flex w-max gap-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
