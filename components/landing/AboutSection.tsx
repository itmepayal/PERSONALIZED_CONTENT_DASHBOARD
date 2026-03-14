import {
  HiLightningBolt,
  HiColorSwatch,
  HiPuzzle,
  HiBookOpen,
  HiCube,
  HiSparkles,
} from "react-icons/hi";

import { Heading } from "@/components/common/Heading";
import { AboutCard } from "@/components/landing/about/AboutCard";

const features = [
  {
    icon: HiLightningBolt,
    title: "Lightning-Fast Performance",
    desc: "Built with speed — minimal load times and optimized rendering.",
  },
  {
    icon: HiColorSwatch,
    title: "Beautifully Designed Components",
    desc: "Modern, pixel-perfect UI components ready for any project.",
  },
  {
    icon: HiPuzzle,
    title: "Plug-and-Play Integration",
    desc: "Simple setup with support for React, Next.js and Tailwind CSS.",
  },
  {
    icon: HiBookOpen,
    title: "Clear & Comprehensive",
    desc: "Get started fast with usage examples, live previews and code.",
  },
  {
    icon: HiCube,
    title: "Fully Customizable",
    desc: "Adapt styles, colors and layout to match your brand.",
  },
  {
    icon: HiSparkles,
    title: "Accessibility First",
    desc: "Built with WCAG standards to ensure inclusive experiences.",
  },
];

export const AboutSection = () => {
  return (
    <section className="bg-black py-24 px-6">
      <Heading
        title="About Us"
        description="A visual collection of our most recent works — each piece crafted with intention, emotion, and style."
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        <div className="absolute w-150 h-150 bg-purple-600/20 blur-[200px] rounded-full left-1/2 -translate-x-1/2 -top-40 -z-10"></div>

        {features.map((feature, index) => (
          <AboutCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};
