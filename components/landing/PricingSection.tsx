import { Heading } from "../common/Heading";
import { PricingCard } from "@/components/landing/price/PricingCard";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
