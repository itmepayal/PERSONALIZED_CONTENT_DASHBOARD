"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Products",
    links: ["Components", "Templates", "Icons"],
  },
  {
    title: "Resources",
    links: ["Services", "Templates", "Components", "Blogs", "Store"],
  },
  {
    title: "Company",
    links: ["About", "Vision", "Careers", "Privacy Policy", "Contact Us"],
  },
];

export const FooterLinks = () => {
  return (
    <motion.div
      className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {footerLinks.map((section) => (
        <motion.div
          key={section.title}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h3 className="font-medium text-sm mb-5">{section.title}</h3>

          <motion.ul
            className="space-y-3 text-sm text-white/70"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {section.links.map((link) => (
              <motion.li
                key={link}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
              >
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
};
