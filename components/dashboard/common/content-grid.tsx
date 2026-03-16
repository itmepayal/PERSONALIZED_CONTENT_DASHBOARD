"use client";

import { useState, useEffect } from "react";
import { Reorder, motion } from "framer-motion";

import { ContentCard } from "@/components/dashboard/common/content-card";
import { ContentCardSkeleton } from "@/skeleton/ContentCardSkeleton";
import { ContentItem } from "@/features/content/contentSlice";

interface Props {
  items: ContentItem[];
  loading?: boolean;
  skeletonCount?: number;
}

export function ContentGrid({ items, loading, skeletonCount = 8 }: Props) {
  const [orderedItems, setOrderedItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    setOrderedItems(items);
  }, [items]);

  return (
    <>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <ContentCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && (
        <Reorder.Group
          axis="y"
          values={orderedItems}
          onReorder={setOrderedItems}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {orderedItems.map((item, index) => (
            <Reorder.Item
              key={`${item.id}-${index}`}
              value={item}
              whileDrag={{
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ContentCard item={item} />
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
    </>
  );
}
