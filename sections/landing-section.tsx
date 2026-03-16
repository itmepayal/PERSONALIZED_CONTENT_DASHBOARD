"use client";

import { HomeSection } from "@/components/landing/HomeSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";
import { FooterSection } from "@/components/landing/FooterSection";

export default function LandingSection() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <CTASection />
      <TestimonialSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}
