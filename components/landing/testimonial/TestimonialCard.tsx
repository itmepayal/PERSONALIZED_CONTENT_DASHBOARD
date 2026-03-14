import Image from "next/image";
import { StarRating } from "./StarRating";

type TestimonialProps = {
  text: string;
  name: string;
  role: string;
  image: string;
  index: number;
};

export const TestimonialCard = ({
  text,
  name,
  role,
  image,
  index,
}: TestimonialProps) => {
  return (
    <div
      className={`group rounded-2xl p-px 
      bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]
      transition-transform duration-300 hover:scale-[1.02]
      ${
        index === 0
          ? "md:col-span-2"
          : index === 1
          ? "md:col-span-1"
          : index === 2
          ? "md:col-span-1"
          : "md:col-span-2"
      }`}
    >
      {/* Inner Card */}
      <div className="bg-black rounded-2xl p-6 h-full border border-transparent group-hover:border-neutral-700 transition-all duration-300">
        <StarRating />

        <p
          className={`text-neutral-300 text-sm leading-relaxed ${
            index === 0 || index === 3 ? "max-w-xl mb-14" : "mb-8"
          }`}
        >
          {text}
        </p>

        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="text-white text-sm font-medium">{name}</h3>

            {/* FIXED CONTRAST */}
            <p className="text-neutral-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
