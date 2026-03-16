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
import { Card, CardDescription } from "@/components/ui/card";

export default function TrendingPage() {
  const dispatch = useAppDispatch();

  const { trendingNews, trendingMovies, loadingNews, loadingMovies, error } =
    useAppSelector((state) => state.content);

  useEffect(() => {
    dispatch(fetchTrendingNews());
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Page title */}
      <PageTitle title="🔥 Trending Today" />

      {/* Trending News */}
      {trendingNews.length > 0 && (
        <ContentSection title="📰 Trending News">
          <ContentGrid items={trendingNews} loading={loadingNews} />
        </ContentSection>
      )}

      {!loadingNews && trendingNews.length === 0 && (
        <Card>
          <CardDescription>
            <p className="text-muted-foreground text-center py-10 text-lg capitalize">
              No trending news available right now.
            </p>
          </CardDescription>
        </Card>
      )}

      {/* Trending Movies */}
      {trendingMovies.length > 0 && (
        <ContentSection title="🎬 Trending Movies">
          <ContentGrid items={trendingMovies} loading={loadingMovies} />
        </ContentSection>
      )}

      {!loadingMovies && trendingMovies.length === 0 && (
        <Card>
          <CardDescription>
            <p className="text-muted-foreground text-center py-10 text-lg capitalize">
              No trending movies available right now.
            </p>
          </CardDescription>
        </Card>
      )}
    </div>
  );
}
