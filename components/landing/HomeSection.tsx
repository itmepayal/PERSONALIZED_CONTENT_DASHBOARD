"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StarRating } from "@/components/landing/home/StarRating";
import { AvatarGroup } from "@/components/landing/home/AvatarGroup";
import { Navbar } from "@/components/landing/home/Navbar";
import { BrandLogos } from "@/components/landing/home/BrandLogos";

export const HomeSection = () => {
  return (
    <section className="bg-black px-4 py-10 md:pb-12">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 border border-white/15 rounded-full px-3 py-1 w-fit mt-32 mx-auto"
      >
        <Image src="/svg/spack.svg" alt="spark icon" width={15} height={15} />
        <span className="text-violet-200 text-xs sm:text-sm">
          Announcing our next round of funding.
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-[58px] text-center max-w-4xl mx-auto mt-4 text-white leading-tight font-medium"
      >
        Helping Your Remote Team Thrive and Perform
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-base text-gray-400 text-center mt-4"
      >
        Bring clarity and coordination to your team’s daily tasks.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mt-5"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 text-white bg-[#301469] rounded-full cursor-pointer"
        >
          Get Started
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-4 mt-10 justify-center"
      >
        <AvatarGroup />
        <div>
          <StarRating />
          <p className="text-xs text-white/60">Used by 10,000+ users</p>
        </div>
      </motion.div>

      <BrandLogos />
    </section>
  );
};
