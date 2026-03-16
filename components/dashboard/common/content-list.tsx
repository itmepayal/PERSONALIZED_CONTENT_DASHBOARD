"use client";
import { v4 as uuidv4 } from "uuid";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { fetchNews, fetchMovies } from "@/features/content/contentSlice";

import { ContentGrid } from "./content-grid";

interface Props {
  title: string;
  type: "news" | "movies";
  category?: string;
  search?: string;
}

export function ContentList({ title, type, category, search }: Props) {
  const dispatch = useAppDispatch();

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { news, movies, hasMoreNews, hasMoreMovies } = useAppSelector(
    (state) => state.content
  );

  const items = type === "news" ? news : movies;
  const hasMore = type === "news" ? hasMoreNews : hasMoreMovies;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting && hasMore) {
          if (type === "news") {
            dispatch(fetchNews());
          }

          if (type === "movies") {
            dispatch(fetchMovies());
          }
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [dispatch, hasMore, type, category]);

  const filteredItems = items.filter((item: any) => {
    if (!search) return true;

    const text =
      item.title || item.name || item.description || item.overview || "";

    return text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <ContentGrid items={filteredItems} />

      <div ref={loaderRef} />

      {!hasMore && items.length > 0 && (
        <p className="text-center text-muted-foreground">
          🎉 You reached the end
        </p>
      )}
    </section>
  );
}
