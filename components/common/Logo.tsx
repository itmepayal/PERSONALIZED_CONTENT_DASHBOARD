"use client";

import { SiFeedly } from "react-icons/si";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className="p-2 rounded-full bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]">
        <SiFeedly className="text-white text-xl" />
      </div>
    </motion.div>
  );
};
