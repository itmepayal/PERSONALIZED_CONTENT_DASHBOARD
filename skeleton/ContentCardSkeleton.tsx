"use client";

export function ContentCardSkeleton() {
  return (
    <div className="animate-pulse border rounded-lg p-4 bg-card">
      {/* Image placeholder */}
      <div className="h-32 w-full bg-gray-300 dark:bg-gray-700 rounded-md mb-4"></div>

      {/* Title placeholder */}
      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

      {/* Description placeholder */}
      <div className="h-6 w-full bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
      <div className="h-6 w-5/6 bg-gray-200 dark:bg-gray-600 rounded"></div>

      {/* Button placeholder */}
      <div className="h-10 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mt-4"></div>
    </div>
  );
}
