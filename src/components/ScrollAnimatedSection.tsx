import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-100px 0px'
  });

  const { scrollDirection } = useScrollDirection();

  const getDirectionVariants = (dir: string) => {
    const variants = {
      left: { x: [-100, 0], y: [0, 0], opacity: [0, 1] },
      right: { x: [100, 0], y: [0, 0], opacity: [0, 1] },
      up: { x: [0, 0], y: [50, 0], opacity: [0, 1] },
      down: { x: [0, 0], y: [-50, 0], opacity: [0, 1] }
    };
    return variants[dir as keyof typeof variants] || variants.up;
  };

  const getExitVariants = (dir: string) => {
    const variants = {
      left: { x: [0, -30], y: [0, 0], opacity: [1, 0.7] },
      right: { x: [0, 30], y: [0, 0], opacity: [1, 0.7] },
      up: { x: [0, 0], y: [0, 30], opacity: [1, 0.7] },
      down: { x: [0, 0], y: [0, -30], opacity: [1, 0.7] }
    };
    return variants[dir as keyof typeof variants] || variants.up;
  };

  const directionVariants = getDirectionVariants(direction);
  const exitVariants = getExitVariants(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        x: directionVariants.x[0], 
        y: directionVariants.y[0], 
        opacity: 0 
      }}
      animate={inView ? {
        x: directionVariants.x[1],
        y: directionVariants.y[1],
        opacity: 1
      } : {
        x: exitVariants.x[1],
        y: exitVariants.y[1],
        opacity: 0.7
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;