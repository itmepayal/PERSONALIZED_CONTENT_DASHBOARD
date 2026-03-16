"use client";

import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  fetchNews,
  fetchMovies,
  resetNews,
} from "@/features/content/contentSlice";

import { DashboardHeader } from "@/components/dashboard/common/header";
import { ContentList } from "@/components/dashboard/common/content-list";

import { ErrorAlert } from "@/components/dashboard/common/error-alert";
import { ContentGrid } from "@/components/dashboard/common/content-grid";

export default function DashboardPage() {
  const dispatch = useAppDispatch();

  // Search query state
  const [search, setSearch] = useState("");

  // Selected news category
  const [category, setCategory] = useState("technology");

  // Get loading + error state from Redux
  const { loadingNews, loadingMovies, error } = useAppSelector(
    (state) => state.content
  );

  // Combined loading state
  const isLoading = loadingNews || loadingMovies;

  // Fetch content whenever category changes
  useEffect(() => {
    dispatch(resetNews()); // reset previous news list
    dispatch(fetchNews()); // fetch news based on category
    dispatch(fetchMovies()); // fetch movie recommendations
  }, [dispatch, category]);

  // Search handler (memoized)
  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-10 p-6">
      {/* Dashboard header with search input */}
      <DashboardHeader onSearch={handleSearch} />

      {/* Display error if API fails */}
      {error && (
        <ErrorAlert message="Failed to load content. Please try again." />
      )}

      {/* Show loading skeletons */}
      {isLoading ? (
        <ContentGrid items={[]} loading skeletonCount={8} />
      ) : (
        <>
          {/* Personalized News Section */}
          <ContentList
            title="📰 Personalized News"
            type="news"
            category={category}
            search={search}
          />

          {/* Movie Recommendations */}
          <ContentList
            title="🎬 Movie Recommendations"
            type="movies"
            search={search}
          />
        </>
      )}
    </div>
  );
}
