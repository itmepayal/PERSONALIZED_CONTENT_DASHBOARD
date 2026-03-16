"use client";

import { HomeSection } from "@/components/landing/home-section";
import { AboutSection } from "@/components/landing/about-section";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CTASection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

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
