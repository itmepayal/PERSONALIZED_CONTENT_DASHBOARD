"use client";

import { motion } from "framer-motion";

export const FooterNewsletter = () => {
  return (
    <motion.div
      className="w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.p
        className="text-white/70 text-sm sm:text-base"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Join our newsletter for regular updates.
      </motion.p>

      <motion.div
        className="mt-4 flex flex-col sm:flex-row gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.input
          type="email"
          placeholder="example@email.com"
          className="w-full flex-1 bg-[#14171A] border border-white/10 px-4 py-3 rounded-lg
            placeholder:text-white/40 text-sm sm:text-base
            focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/40"
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        />

        <motion.button
          className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm sm:text-base font-medium
            border border-white/10
            hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]
            transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(79,70,229,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          Subscribe
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
