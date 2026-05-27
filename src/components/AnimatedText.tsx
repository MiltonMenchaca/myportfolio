import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position of the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.45'],
  });

  // Smoothly interpolate the progress of the gradient reveal
  const gradientStyle = useTransform(scrollYProgress, (progress) => {
    // We map the 0-1 progress to 0-100% of the gradient, with a smooth 20% transition zone
    const p1 = Math.max(0, progress * 120 - 20);
    const p2 = Math.min(100, progress * 120);
    return `linear-gradient(to bottom, #D7E2EA ${p1}%, rgba(215, 226, 234, 0.2) ${p2}%)`;
  });

  return (
    <motion.p
      ref={containerRef}
      className={`${className} select-none`}
      style={{
        backgroundImage: gradientStyle,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block', // keeps the background clip container tight around text flow
      }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
