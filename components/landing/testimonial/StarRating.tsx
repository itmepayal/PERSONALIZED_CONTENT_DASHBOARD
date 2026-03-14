import { HiStar } from "react-icons/hi";

type StarRatingProps = {
  count?: number;
};

export const StarRating = ({ count = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <HiStar key={i} className="text-[#FF8F20] text-lg" />
      ))}
    </div>
  );
};
