import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number; // default 150
  strength?: number; // default 3
  activeTransition?: string; // default "transform 0.3s ease-out"
  inactiveTransition?: string; // default "transform 0.6s ease-in-out"
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to element center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Check if mouse is within element bounds + padding distance
      const limitX = rect.width / 2 + padding;
      const limitY = rect.height / 2 + padding;

      if (Math.abs(distanceX) < limitX && Math.abs(distanceY) < limitY) {
        // Cursor is within range - apply attraction
        setTransition(activeTransition);
        const transX = distanceX / strength;
        const transY = distanceY / strength;
        setTransform(`translate3d(${transX}px, ${transY}px, 0px)`);
      } else {
        // Reset transformation when cursor leaves range
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
