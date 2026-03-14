"use client";

import Image from "next/image";
import Link from "next/link";

type IconButtonProps = {
  text: string;
  icon: string;
  href?: string;
};

export function IconButton({ text, icon, href = "#" }: IconButtonProps) {
  return (
    <Link
      href={href}
      className="group hidden md:flex bg-[#301469] text-slate-100 pr-8 pl-2 py-2 rounded-full text-base font-medium 
      hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea] 
      transition items-center"
    >
      <div className="size-9 rounded-full bg-white mr-4 flex items-center justify-center">
        {/* Decorative icon */}
        <Image src={icon} alt="" aria-hidden="true" width={20} height={20} />
      </div>

      {text}
    </Link>
  );
}
