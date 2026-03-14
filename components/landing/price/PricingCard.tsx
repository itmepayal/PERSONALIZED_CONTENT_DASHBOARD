import { HiCheck } from "react-icons/hi";

type PricingCardProps = {
  name: string;
  description: string;
  price: number;
  buttonText: string;
  subtext: string;
  features: string[];
  featured?: boolean;
};

export const PricingCard = ({
  name,
  description,
  price,
  buttonText,
  subtext,
  features,
  featured,
}: PricingCardProps) => {
  return (
    <div
      className={`group relative rounded-2xl p-px
      bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]
      transition-all duration-300 hover:scale-[1.02]
      ${featured ? "shadow-[0_0_40px_rgba(79,70,229,0.35)]" : ""}`}
    >
      <div className="bg-[#0b0b0f] rounded-2xl p-8 h-full">
        {/* Popular Badge */}
        {featured && (
          <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-linear-to-r from-[#A992F2] to-[#DFAB9B] text-black font-medium">
            Popular
          </span>
        )}

        {/* Plan Name */}
        <h3 className="text-lg font-semibold text-white">{name}</h3>

        <p className="text-slate-400 text-sm mt-2 mb-6">{description}</p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-6">
          <span className="text-3xl text-white">$</span>
          <span className="text-5xl font-semibold text-white">{price}</span>
        </div>

        {/* Button */}
        <button
          className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-300
          ${
            featured
              ? "bg-linear-to-r from-[#A992F2] to-[#DFAB9B] text-black hover:opacity-90"
              : "bg-black border border-neutral-700 text-white hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]"
          }`}
        >
          {buttonText}
        </button>

        <p className="text-xs text-slate-400 mt-3 mb-6">{subtext}</p>

        <div className="border-t border-neutral-800 mb-6"></div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <HiCheck className="text-green-400 text-lg" />
              <span className="text-sm text-slate-400">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
