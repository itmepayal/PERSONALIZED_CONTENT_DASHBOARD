"use client";

import { useEffect, useState } from "react";

import { useAppSelector } from "@/store/hooks";

import { PageTitle } from "@/components/dashboard/common/page-title";
import { ContentGrid } from "@/components/dashboard/common/content-grid";
import { ContentSection } from "@/components/dashboard/common/content-section";

export default function FavoritesPage() {
  // Get favorites from Redux store
  const favorites = useAppSelector((state) => state.content.favorites);

  // Local loading state for skeleton animation
  const [loading, setLoading] = useState(true);

  // Fake loading delay for UI skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Separate favorites into news and movies
  const favoriteNews = favorites.filter((item) => item.url);
  const favoriteMovies = favorites.filter((item) => item.poster_path);

  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Page title */}
      <PageTitle title="❤️ Your Favorites" />

      {/* Empty state */}
      {!loading && favorites.length === 0 && (
        <p className="text-muted-foreground">
          You haven't added any favorites yet.
        </p>
      )}

      {/* Favorite News */}
      <ContentSection title="📰 Favorite News">
        <ContentGrid items={favoriteNews} loading={loading} skeletonCount={4} />
      </ContentSection>

      {/* Favorite Movies */}
      <ContentSection title="🎬 Favorite Movies">
        <ContentGrid
          items={favoriteMovies}
          loading={loading}
          skeletonCount={4}
        />
      </ContentSection>
    </div>
  );
}
