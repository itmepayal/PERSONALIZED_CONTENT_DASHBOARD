"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategories } from "@/features/preferences/preferencesSlice";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Laptop,
  Briefcase,
  HeartPulse,
  Trophy,
  Atom,
  Clapperboard,
} from "lucide-react";

const categories = [
  { name: "technology", icon: Laptop },
  { name: "business", icon: Briefcase },
  { name: "sports", icon: Trophy },
  { name: "health", icon: HeartPulse },
  { name: "science", icon: Atom },
  { name: "entertainment", icon: Clapperboard },
];

export default function Preferences() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.preferences.categories);

  const toggleCategory = (cat: string) => {
    if (selected.includes(cat)) {
      dispatch(setCategories([]));
    } else {
      dispatch(setCategories([cat])); // only one allowed
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>Select Your Interests</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selected.includes(cat.name);

            return (
              <Badge
                key={cat.name}
                onClick={() => toggleCategory(cat.name)}
                className={`cursor-pointer px-4 py-2 h-10 capitalize text-sm flex items-center gap-2 transition-all
                ${
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                <Icon size={20} />
                {cat.name}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
