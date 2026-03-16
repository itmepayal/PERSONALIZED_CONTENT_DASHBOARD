"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addRealtimeNews } from "@/features/content/contentSlice";

import { PageTitle } from "@/components/dashboard/common/page-title";
import { ContentGrid } from "@/components/dashboard/common/content-grid";
import { ContentSection } from "@/components/dashboard/common/content-section";

export default function RealtimeFeed() {
  const [currentNews, setCurrentNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const eventSource = new EventSource("/api/realtime");

    console.log("Connecting to SSE...");

    eventSource.onopen = () => {
      console.log("SSE connected");
    };

    eventSource.onmessage = (event) => {
      try {
        const articles = JSON.parse(event.data);

        if (!Array.isArray(articles)) return;

        setCurrentNews(articles);
        setLoading(false);

        articles.forEach((data: any) => {
          dispatch(
            addRealtimeNews({
              id: data.url || Date.now(),
              title: data.title,
              description: data.description,
              url: data.url,
              urlToImage: data.urlToImage,
              source: data.source,
              publishedAt: data.publishedAt,
            })
          );
        });
      } catch (err) {
        console.error("Invalid SSE data", err);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE error", err);
      eventSource.close();
      setLoading(false);
    };

    return () => {
      eventSource.close();
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Page title */}
      <PageTitle title="📡 Live News Feed" />

      {/* Empty state */}
      {!loading && currentNews.length === 0 && (
        <p className="text-muted-foreground">
          No live news available right now.
        </p>
      )}

      {/* Live News Section */}
      <ContentSection title="📰 Latest Live News">
        <ContentGrid items={currentNews} loading={loading} skeletonCount={4} />
      </ContentSection>
    </div>
  );
}
