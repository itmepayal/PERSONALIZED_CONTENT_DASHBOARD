"use client";

import { useState } from "react";
import { UserIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

import { IconButton } from "@/components/landing/home/IconButton";
import { Logo } from "@/components/common/logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-2.5 md:pl-6 py-2 max-w-6xl rounded-full mx-auto w-full border border-white/20"
    >
      <Logo />

      <div className="flex items-center gap-3">
        {isSignedIn ? (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              text="Dashboard"
              icon="/svg/arrow.svg"
              href="/dashboard"
            />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              text="Get Started"
              icon="/svg/arrow.svg"
              href="/sign-up"
            />
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex items-center justify-center h-11 w-11 bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea] p-1.5 rounded-full"
        >
          <UserIcon color="white" size={20} />
        </motion.button>
      </div>
    </motion.nav>
  );
}
