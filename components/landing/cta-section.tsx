"use client";

import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Background Glow */}
        <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-72 sm:w-96 lg:w-125 h-72 sm:h-96 lg:h-125 bg-purple-600/30 blur-[160px] sm:blur-[180px] rounded-full -z-10"></div>

        <motion.div
          className="flex flex-col items-center justify-center text-center
            bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]
            rounded-2xl sm:rounded-3xl
            px-6 sm:px-10 lg:px-16
            py-10 sm:py-14 lg:py-16
            text-white
            shadow-[0_0_40px_rgba(79,70,229,0.25)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.p
            className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm border border-white/20
            bg-linear-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            Community & Support
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="mt-6 font-semibold
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            leading-tight md:leading-[1.2]
            max-w-xl lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Join 10,000+ AI Influencers
            <span className="block bg-linear-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
              in the AI Community
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/80 text-sm sm:text-base mt-4 max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Unlock all our free resources instantly.
          </motion.p>

          {/* Button */}
          <motion.button
            className="mt-8 w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4
            rounded-full text-sm sm:text-base font-medium
            bg-slate-950 border border-white/10 cursor-pointer
            hover:bg-black
            hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(79,70,229,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
