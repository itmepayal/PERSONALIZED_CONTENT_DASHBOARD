"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Heart, ExternalLink } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  addFavorite,
  removeFavorite,
  ContentItem,
} from "@/features/content/contentSlice";

interface Props {
  item: ContentItem;
}

export function ContentCard({ item }: Props) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.content.favorites);

  const isFavorited = favorites.some((f) => String(f.id) === String(item.id));

  const title = item.title || item.name || "Untitled";
  const description = item.description || item.overview || "No description";

  const image =
    item.urlToImage ||
    (item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : "/images/placeholder.png");

  console.log(image);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <Card className="flex flex-col h-105 overflow-hidden group border bg-background/80 backdrop-blur transition-all hover:shadow-2xl">
        {/* IMAGE */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image || "/images/placeholder.png"}
            alt={title}
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Favorite Floating Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 bg-background/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
          >
            <Heart
              className="w-4 h-4"
              fill={isFavorited ? "red" : "none"}
              stroke={isFavorited ? "red" : "currentColor"}
            />
          </button>
        </div>

        {/* BODY */}
        <div className="flex flex-col flex-1">
          {/* HEADER */}
          <CardHeader className="space-y-2 pb-2">
            {item.source?.name && (
              <Badge variant="secondary" className="w-fit text-xs">
                {item.source.name}
              </Badge>
            )}

            <CardTitle className="text-base font-semibold leading-snug line-clamp-2">
              {title}
            </CardTitle>
          </CardHeader>

          {/* DESCRIPTION */}
          <CardContent className="text-sm text-muted-foreground line-clamp-3 flex-1">
            {description}
          </CardContent>

          {/* FOOTER */}
          <CardFooter className="flex items-center justify-between pt-3 border-t">
            {item.url && (
              <Button size="sm" variant="outline" asChild className="text-xs">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Read Article
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
