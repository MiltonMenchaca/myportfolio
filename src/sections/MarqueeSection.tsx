import React, { useState, useEffect, useRef } from 'react';
import { img } from '../utils/getImageUrl';

const IMAGES = [
  img("/INCTM.png"),
  img("/ssetco.png"),
  img("/blog.png"),
  img("/mediummurak.png"),
];

// Replicated and offset to show Milton's 4 projects scrolling infinitely
const ROW1 = [
  IMAGES[0], IMAGES[1], IMAGES[2], IMAGES[3],
  IMAGES[0], IMAGES[1], IMAGES[2], IMAGES[3],
  IMAGES[0], IMAGES[1], IMAGES[2], IMAGES[3]
];

const ROW2 = [
  IMAGES[2], IMAGES[3], IMAGES[0], IMAGES[1],
  IMAGES[2], IMAGES[3], IMAGES[0], IMAGES[1],
  IMAGES[2], IMAGES[3], IMAGES[0], IMAGES[1]
];

// Tripled to ensure seamless overflow scrolling
const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1];
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculate on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full z-0"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves RIGHT */}
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {ROW1_TRIPLED.map((src, index) => (
            <img
              key={`row1-${index}`}
              src={src}
              alt={`Marquee top ${index}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 pointer-events-none select-none"
            />
          ))}
        </div>

        {/* Row 2 - Moves LEFT */}
        <div
          className="flex gap-3 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${-(offset - 200) - 1500}px, 0, 0)`, // offset base translation to start centered
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {ROW2_TRIPLED.map((src, index) => (
            <img
              key={`row2-${index}`}
              src={src}
              alt={`Marquee bottom ${index}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 pointer-events-none select-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
