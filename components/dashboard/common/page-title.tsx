"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
}

export function PageTitle({ title }: Props) {
  return (
    <motion.h2
      className="text-2xl md:text-3xl font-semibold"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {title}
    </motion.h2>
  );
}
