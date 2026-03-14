import { IconType } from "react-icons";

type AboutCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export const AboutCard = ({
  icon: Icon,
  title,
  description,
}: AboutCardProps) => {
  return (
    <div className="group relative rounded-xl p-0.5 bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea] hover:scale-105 transition-transform duration-300">
      {/* Inner Card */}
      <div className="bg-black rounded-lg p-8 flex flex-col items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111827] border border-[#374151] group-hover:bg-linear-to-br group-hover:from-[#301469] group-hover:via-[#4f46e5] group-hover:to-[#9333ea] transition-all duration-300">
          <Icon className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
