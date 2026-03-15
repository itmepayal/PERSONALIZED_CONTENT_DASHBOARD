"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

type AboutCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export const AboutCard = ({
  icon: Icon,
  title,
  description,
}: AboutCardProps) => {
  return (
    <motion.div
      className="group relative rounded-xl p-0.5 bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-black rounded-lg p-8 flex flex-col items-start gap-4">
        <motion.div
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111827] border border-[#374151] group-hover:bg-linear-to-br group-hover:from-[#301469] group-hover:via-[#4f46e5] group-hover:to-[#9333ea]"
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Icon className="text-white text-xl" />
        </motion.div>

        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
