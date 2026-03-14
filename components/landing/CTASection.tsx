export const CTASection = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="relative max-w-6xl mx-auto">
        {/* Background Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-purple-600/30 blur-[180px] rounded-full -z-10"></div>

        <div
          className="flex flex-col items-center justify-center text-center 
        bg-linear-to-br from-[#301469] via-[#4f46e5] to-[#9333ea]
        rounded-2xl p-12 text-white shadow-[0_0_40px_rgba(79,70,229,0.25)]"
        >
          {/* Badge */}
          <p
            className="px-6 py-2 rounded-full text-sm border border-white/20 
          bg-linear-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent"
          >
            Community & Support
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl md:leading-[1.2] font-semibold max-w-2xl mt-6">
            Join 10,000+ AI Influencers
            <span className="block bg-linear-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
              in the AI Community
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm md:text-base mt-4">
            Unlock all our free resources instantly.
          </p>

          {/* Button */}
          <button
            className="mt-8 px-12 py-4 rounded-full text-sm font-medium
            bg-slate-950 border border-white/10 cursor-pointer
            hover:bg-black 
            hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]
            transition-all duration-300 active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
