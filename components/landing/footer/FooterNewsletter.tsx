export const FooterNewsletter = () => {
  return (
    <div className="w-full max-w-md">
      <p className="text-white/70 text-sm sm:text-base">
        Join our newsletter for regular updates.
      </p>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full flex-1 bg-[#14171A] border border-white/10 px-4 py-3 rounded-lg
            placeholder:text-white/40 text-sm sm:text-base
            focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/40"
        />

        <button
          className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm sm:text-base font-medium
            border border-white/10
            hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]
            transition-all duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
