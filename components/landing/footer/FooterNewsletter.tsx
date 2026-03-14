export const FooterNewsletter = () => {
  return (
    <>
      <p className="text-white/70 text-sm">
        Join our newsletter for regular updates.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          placeholder="example@email.com"
          className="flex-1 bg-[#14171A] border border-white/10 px-4 py-3 rounded-lg
            placeholder:text-white/40 text-sm
            focus:outline-none focus:border-[#4f46e5]"
        />

        <button
          className="px-6 py-3 rounded-lg text-sm font-medium
            border border-white/10
            hover:bg-linear-to-br hover:from-[#301469] hover:via-[#4f46e5] hover:to-[#9333ea]
            transition-all duration-300"
        >
          Subscribe
        </button>
      </div>
    </>
  );
};
