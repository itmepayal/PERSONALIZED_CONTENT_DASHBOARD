import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  { icon: FaXTwitter, href: "#", label: "Twitter / X" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social, i) => {
        const Icon = social.icon;

        return (
          <a
            key={i}
            href={social.href}
            aria-label={social.label}
            title={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10
              hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]
              transition-all duration-300"
          >
            <Icon className="text-lg" />
          </a>
        );
      })}
    </div>
  );
};
