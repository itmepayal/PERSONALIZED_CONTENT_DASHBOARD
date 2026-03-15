"use client";

import { HiCheck } from "react-icons/hi";
import { motion } from "framer-motion";

type PricingCardProps = {
  name: string;
  description: string;
  price: number;
  buttonText: string;
  subtext: string;
  features: string[];
  featured?: boolean;
};

export const PricingCard = ({
  name,
  description,
  price,
  buttonText,
  subtext,
  features,
  featured = false,
}: PricingCardProps) => {
  return (
    <motion.div
      className={`group relative rounded-2xl p-px h-full
      bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]
      transition-all duration-300 hover:scale-[1.03]
      ${featured ? "shadow-[0_0_40px_rgba(79,70,229,0.35)]" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-[#0b0b0f] rounded-2xl p-8 h-full flex flex-col">
        {/* Popular Badge */}
        {featured && (
          <motion.span
            className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full
            bg-linear-to-r from-[#A992F2] to-[#DFAB9B]
            text-black font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            Popular
          </motion.span>
        )}

        {/* Plan Name */}
        <motion.h3
          className="text-lg font-semibold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {name}
        </motion.h3>

        <motion.p
          className="text-slate-400 text-sm mt-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {description}
        </motion.p>

        {/* Price */}
        <motion.div
          className="flex items-end gap-2 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-3xl text-white">$</span>
          <span className="text-5xl font-semibold text-white">{price}</span>
        </motion.div>

        {/* Button */}
        <motion.button
          type="button"
          className={`w-full py-3 rounded-lg text-sm cursor-pointer font-medium transition-all duration-300
          ${
            featured
              ? "bg-linear-to-r from-[#A992F2] to-[#DFAB9B] text-black hover:opacity-90"
              : "bg-black border border-neutral-700 text-white hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]"
          }`}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(79,70,229,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {buttonText}
        </motion.button>

        <motion.p
          className="text-xs text-slate-400 mt-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {subtext}
        </motion.p>

        <div className="border-t border-neutral-800 mb-6"></div>

        {/* Features */}
        <motion.div
          className="space-y-3 flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
            >
              <HiCheck aria-hidden="true" className="text-green-400 text-lg" />
              <span className="text-sm text-slate-400">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
