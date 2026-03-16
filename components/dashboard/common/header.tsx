"use client";

import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import debounce from "lodash.debounce";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  onSearch: (search: string) => void;
}

export function DashboardHeader({ onSearch }: DashboardHeaderProps) {
  const [search, setSearch] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        onSearch(value);
      }, 500),
    [onSearch]
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CardTitle className="text-xl font-semibold text-center md:text-left">
          Personalized Content Dashboard
        </CardTitle>

        <div className="flex w-full md:w-auto">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />

            <Input
              placeholder="Search news, movies..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-8 w-full"
            />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
