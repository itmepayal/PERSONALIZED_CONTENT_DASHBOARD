import { SiFeedly } from "react-icons/si";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]">
        <SiFeedly className="text-white text-xl" />
      </div>
    </div>
  );
};
