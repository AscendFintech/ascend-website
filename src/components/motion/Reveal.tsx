import React from 'react';
import { motion, Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  amount?: number;
  as?: 'div' | 'span';
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  distance,
  once = true,
  amount = 0.25,
  as = 'div',
}) => {
  const offset = { ...offsets[direction] };
  if (distance !== undefined) {
    if (offset.y !== undefined) offset.y = offset.y > 0 ? distance : -distance;
    if (offset.x !== undefined) offset.x = offset.x > 0 ? distance : -distance;
  }

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = as === 'span' ? motion.span : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
