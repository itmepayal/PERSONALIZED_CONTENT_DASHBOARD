"use client";

import { HiStar } from "react-icons/hi";
import { motion, Variants, Transition } from "framer-motion";

type StarRatingProps = {
  count?: number;
};

export const StarRating = ({ count = 5 }: StarRatingProps) => {
  // Define a transition object
  const starTransition: Transition = { duration: 0.4, ease: "easeOut" };

  // Variants for each star
  const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: starTransition },
  };

  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          variants={starVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: i * 0.1, ...starTransition }}
        >
          <HiStar className="text-[#FF8F20] text-lg" />
        </motion.div>
      ))}
    </div>
  );
};
