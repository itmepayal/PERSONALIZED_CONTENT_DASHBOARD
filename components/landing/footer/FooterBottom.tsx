import { SocialIcons } from "./SocialIcons";

export const FooterBottom = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-white/60 text-sm">© 2025 Payal Yadav</p>

      <SocialIcons />
    </div>
  );
};
