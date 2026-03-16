"use client";

import { useEffect, useState } from "react";

import { useAppSelector } from "@/store/hooks";

import { PageTitle } from "@/components/dashboard/common/page-title";
import { ContentGrid } from "@/components/dashboard/common/content-grid";
import { ContentSection } from "@/components/dashboard/common/content-section";
import { Card, CardDescription } from "@/components/ui/card";

export default function FavoritesPage() {
  const favorites = useAppSelector((state) => state.content.favorites);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const favoriteNews = favorites.filter((item) => item.url);
  const favoriteMovies = favorites.filter((item) => item.poster_path);

  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Page title */}
      <PageTitle title="❤️ Your Favorites" />

      {/* Empty state */}
      {!loading && favorites.length === 0 && (
        <Card>
          <CardDescription>
            <p className="text-muted-foreground text-center py-10 text-lg capitalize">
              You haven't added any favorites yet.
            </p>
          </CardDescription>
        </Card>
      )}

      {/* Favorite News */}
      {favoriteNews.length > 0 && (
        <ContentSection title="📰 Favorite News">
          <ContentGrid
            items={favoriteNews}
            loading={loading}
            skeletonCount={4}
          />
        </ContentSection>
      )}

      {/* Favorite Movies */}
      {favoriteMovies.length > 0 && (
        <ContentSection title="🎬 Favorite Movies">
          <ContentGrid
            items={favoriteMovies}
            loading={loading}
            skeletonCount={4}
          />
        </ContentSection>
      )}
    </div>
  );
}
