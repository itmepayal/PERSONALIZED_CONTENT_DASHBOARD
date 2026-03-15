"use client";

import { motion } from "framer-motion";

type HeadingProps = {
  title: string;
  description?: string;
};

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <motion.h2
        className="text-2xl md:text-4xl font-medium text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      <div className="flex justify-center mt-4">
        <motion.div
          className="h-1 w-16 md:w-24 rounded-full bg-linear-to-r from-[#301469] via-[#4f46e5] to-[#9333ea]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {description && (
        <motion.p
          className="text-white/80 mt-3 text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
