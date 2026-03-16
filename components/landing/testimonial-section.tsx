import { Heading } from "../common/header";
import { TestimonialCard } from "./testimonial/testimonial-card";

export const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "If you're using Tailwind CSS, PrebuiltUI is a must have. It dramatically speeds up development while keeping the UI clean and modern.",
      name: "Alex Morgan",
      role: "Founder - Lumens",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: 2,
      text: "PrebuiltUI has completely changed how I build interfaces. Most recommended components and templates.",
      name: "Sarah Collins",
      role: "Tech Lead - You Inc.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: 3,
      text: "PrebuiltUI templates are the most useful product for UI engineers. Saving me hours on every saas project.",
      name: "Emily Carter",
      role: "UI Engineer - Meta",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: 4,
      text: "PrebuiltUI allows me to focus on building features instead of writing CSS. Everything looks premium right out of the box.",
      name: "Ryan Collins",
      role: "Co-founder - Unique",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
  ];

  return (
    <section className="bg-black py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <Heading
          title="Our Testimonials"
          description=" See what our customers are saying as they build and launch projects
            at lightning speed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              index={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
