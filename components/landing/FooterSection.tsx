import { Logo } from "@/components/common/Logo";
import { FooterNewsletter } from "@/components/landing/footer/FooterNewsletter";
import { FooterLinks } from "@/components/landing/footer/FooterLinks";
import { FooterBottom } from "@/components/landing/footer/FooterBottom";

export const FooterSection = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#4f46e5] to-transparent" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-6 gap-12">
        <div className="lg:col-span-3 space-y-6">
          <Logo />
          <FooterNewsletter />
        </div>

        <FooterLinks />
      </div>

      <FooterBottom />
    </footer>
  );
};
