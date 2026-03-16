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

import { ContentGrid } from "@/components/dashboard/common/content-grid";

export default function DashboardPage() {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("technology");

  const { loadingNews, loadingMovies, error } = useAppSelector(
    (state) => state.content
  );

  const isLoading = loadingNews || loadingMovies;

  useEffect(() => {
    dispatch(resetNews());
    dispatch(fetchNews());
    dispatch(fetchMovies());
  }, [dispatch, category]);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-10 p-6">
      <DashboardHeader onSearch={handleSearch} />

      {isLoading ? (
        <ContentGrid items={[]} loading skeletonCount={8} />
      ) : (
        <>
          <ContentList
            title="📰 Personalized News"
            type="news"
            category={category}
            search={search}
          />

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
