import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion, Variants } from 'framer-motion';

const MotionSlot = motion(Slot);

const ButtonVariants: Variants = {
  initial: {},
  hover: {},
};

const ArrowVariants: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

export const MoreButton = () => (
  <MotionSlot
    variants={ButtonVariants}
    transition={{ staggerChildren: 0.1 }}
    initial="initial"
    whileHover="hover"
  >
    <div className="center gap-2 py-3 px-4 rounded-lg text-md font-normal bg-teal-700 text-white">
      <div className="w-10"></div>
      もっと見る
      <div className="hstack">
        {Array.from({ length: 3 }).map((_, idx) => (
          <MotionSlot key={idx} variants={ArrowVariants}>
            <div>{`>`}</div>
          </MotionSlot>
        ))}
      </div>
    </div>
  </MotionSlot>
);
