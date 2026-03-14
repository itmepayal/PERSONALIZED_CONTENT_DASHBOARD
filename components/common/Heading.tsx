type HeadingProps = {
  title: string;
  description?: string;
};

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-medium text-white">{title}</h2>

      {/* Animated underline */}
      <div className="flex justify-center mt-4">
        <div className="h-1 w-16 md:w-24 rounded-full bg-linear-to-r from-[#301469] via-[#4f46e5] to-[#9333ea] animate-pulse"></div>
      </div>

      {description && (
        <p className="text-white/80 mt-3 text-sm md:text-base">{description}</p>
      )}
    </div>
  );
};
