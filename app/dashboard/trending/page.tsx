"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchTrendingNews,
  fetchTrendingMovies,
} from "@/features/content/contentSlice";

import { PageTitle } from "@/components/dashboard/common/page-title";
import { ContentGrid } from "@/components/dashboard/common/content-grid";
import { ContentSection } from "@/components/dashboard/common/content-section";

export default function TrendingPage() {
  const dispatch = useAppDispatch();

  // Get trending content and loading states
  const { trendingNews, trendingMovies, loadingNews, loadingMovies, error } =
    useAppSelector((state) => state.content);

  // Fetch trending content on page load
  useEffect(() => {
    dispatch(fetchTrendingNews());
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Page title */}
      <PageTitle title="🔥 Trending Today" />

      {/* Error display */}
      {error && (
        <p className="text-red-500 text-sm">Failed to load trending content.</p>
      )}

      {/* Trending News */}
      <ContentSection title="📰 Trending News">
        <ContentGrid items={trendingNews} loading={loadingNews} />
      </ContentSection>

      {/* Trending Movies */}
      <ContentSection title="🎬 Trending Movies">
        <ContentGrid items={trendingMovies} loading={loadingMovies} />
      </ContentSection>
    </div>
  );
}
