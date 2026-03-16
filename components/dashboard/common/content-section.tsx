"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function ContentSection({ title, children }: Props) {
  return (
    <motion.section
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>

      {children}
    </motion.section>
  );
}
