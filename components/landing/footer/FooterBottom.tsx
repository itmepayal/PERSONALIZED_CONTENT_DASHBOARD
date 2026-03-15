"use client";

import { SocialIcons } from "./SocialIcons";
import { motion } from "framer-motion";

export const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <motion.div
      className="max-w-7xl mx-auto mt-14 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Copyright */}
      <motion.p
        className="text-white/60 text-sm"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        © {year}{" "}
        <span className="text-white hover:underline hover:text-white/70">
          Payal Yadav
        </span>
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <SocialIcons />
      </motion.div>
    </motion.div>
  );
};
