"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addRealtimeNews } from "@/features/content/contentSlice";

import { PageTitle } from "@/components/dashboard/common/page-title";
import { ContentGrid } from "@/components/dashboard/common/content-grid";
import { ContentSection } from "@/components/dashboard/common/content-section";
import { Card, CardDescription } from "@/components/ui/card";

export default function RealtimeFeed() {
  const [currentNews, setCurrentNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const eventSource = new EventSource("/api/realtime");

    eventSource.onopen = () => {
      console.log("SSE connected");
    };

    eventSource.onmessage = (event) => {
      try {
        const articles = JSON.parse(event.data);

        if (!Array.isArray(articles)) {
          setCurrentNews([]);
          setLoading(false);
          return;
        }

        setCurrentNews(articles);
        setLoading(false);

        articles.forEach((data: any) => {
          dispatch(
            addRealtimeNews({
              id: data.url ?? `${data.title}-${data.publishedAt}`,
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
        setLoading(false);
      }
    };

    eventSource.onerror = () => {
      setCurrentNews([]);
      setLoading(false);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12 p-6">
      <PageTitle title="📡 Live News Feed" />

      {!loading && currentNews.length === 0 && (
        <Card>
          <CardDescription>
            <p className="text-muted-foreground text-center py-10 text-lg capitalize">
              No live news available right now
            </p>
          </CardDescription>
        </Card>
      )}

      <ContentSection title="📰 Latest Live News">
        <ContentGrid items={currentNews} loading={loading} skeletonCount={4} />
      </ContentSection>
    </div>
  );
}
