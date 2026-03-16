"use client";

import { Heading } from "../common/header";
import { PricingCard } from "@/components/landing/price/PricingCard";
import { motion } from "framer-motion";

export const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description:
        "Perfect for trying out PrebuiltUI and validating your first idea.",
      price: 0,
      buttonText: "Start for free",
      subtext: "Free forever. No credit card required.",
      features: [
        "Basic components access",
        "Limited templates",
        "Open-source usage",
      ],
      featured: false,
    },
    {
      id: 2,
      name: "Growth",
      description:
        "Best for founders and developers building real products fast.",
      price: 199,
      buttonText: "Unlock full access",
      subtext: "One-time payment with lifetime access and free updates.",
      features: [
        "Full components access",
        "Unlimited templates",
        "Custom animations",
        "Priority support",
      ],
      featured: true,
    },
    {
      id: 3,
      name: "Scale",
      description: "Built for teams and agencies shipping products together.",
      price: 399,
      buttonText: "Get team access",
      subtext: "One-time team license with lifetime access and free updates.",
      features: [
        "Full components access",
        "Unlimited templates",
        "Everything in Growth",
        "Dedicated support",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Heading
          title="Pricing plans for everyone"
          description="Get access to components, templates and updates. No subscriptions. No surprises."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }, // Stagger the cards
          }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
