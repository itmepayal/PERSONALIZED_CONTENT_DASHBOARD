"use client";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaXTwitter, href: "#", label: "Twitter / X" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export const SocialIcons = () => {
  return (
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
      {socialLinks.map((social, i) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={i}
            href={social.href}
            aria-label={social.label}
            title={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10
              hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]
              transition-all duration-300 flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 15px rgba(79,70,229,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="text-lg text-white" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};
