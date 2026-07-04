import React from 'react';
import { motion, Variants } from 'framer-motion';

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}) => {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={container}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

const offsets = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  direction = 'up',
  distance,
}) => {
  const offset = { ...offsets[direction] } as { x?: number; y?: number };
  if (distance !== undefined) {
    if (offset.y !== undefined) offset.y = offset.y > 0 ? distance : -distance;
    if (offset.x !== undefined) offset.x = offset.x > 0 ? distance : -distance;
  }

  const item: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
};
