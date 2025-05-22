import { motion } from "framer-motion";

import React from "react";

/**
 * Motion component for animating elements on scroll.
 * @param {number} duration - Duration of the animation in seconds.
 * @param {React.ReactNode} children - Children elements to be animated.
 * @returns {JSX.Element} - Animated motion div.
 */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

interface CardMotionProps {
  custom?: number;
  amount: number;
  children: React.ReactNode;
}

export const CardMotion: React.FC<CardMotionProps> = ({
  custom,
  amount,
  children,
}) => {
  return (
    <motion.div
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      variants={cardVariants}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};
