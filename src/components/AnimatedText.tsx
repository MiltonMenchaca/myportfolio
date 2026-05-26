import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to maintain layout flow and spacing */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated span that fades in */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position of the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.45'],
  });

  // Split string into characters, preserving spaces as single elements
  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        
        // Calculate dynamic global character offset index for this word
        const prevWordsLength = words.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0);

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char, charIndex) => {
              const globalIndex = prevWordsLength + charIndex;
              const totalChars = text.length;
              
              // Calculate scroll trigger boundaries for this specific character
              const start = globalIndex / totalChars;
              const end = Math.min(1, start + 0.1); // add slight transition ease overlap

              return (
                <Character
                  key={charIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
