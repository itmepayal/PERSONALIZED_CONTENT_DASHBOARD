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
    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="font-medium text-sm mb-5">{section.title}</h3>

          <ul className="space-y-3 text-sm text-white/70">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
