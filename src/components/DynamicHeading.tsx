import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface DynamicHeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const DynamicHeading: React.FC<DynamicHeadingProps> = ({
  children,
  level = 'h2',
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  });

  const { scrollDirection } = useScrollDirection();

  const HeadingTag = level;

  const textVariants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === 'down' ? 50 : -50,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={textVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative"
    >
      <HeadingTag
        className={`font-playfair font-bold text-cherry-red ${className}`}
        style={{
          background: 'linear-gradient(135deg, #dc2626, #b91c1c, #991b1b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        <motion.span className="inline-block">
          {String(children).split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{ transformOrigin: '50% 100%' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.span>
      </HeadingTag>
      
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-800"
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default DynamicHeading;