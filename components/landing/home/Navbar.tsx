"use client";

import { useState } from "react";
import { SiFeedly } from "react-icons/si";
import { UserIcon } from "lucide-react";
import { IconButton } from "@/components/landing/home/IconButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-2.5 md:pl-6 py-2 max-w-6xl rounded-full mx-auto w-full border border-white/20">
      <div className="relative h-11 w-11 flex items-center justify-center rounded-full bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea] shadow-lg">
        <div className="absolute inset-0 blur-xl bg-purple-500/40 rounded-full"></div>
        <SiFeedly className="relative text-white text-xl" />
      </div>
      <div className="flex items-center">
        <IconButton text="Sign In" icon="/svg/arrow.svg" href="#" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center h-11 w-11 bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea] p-1.5 rounded-full"
        >
          <UserIcon color="white" size={20} />
        </button>
      </div>
    </nav>
  );
}
