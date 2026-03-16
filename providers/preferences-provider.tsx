"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setCategories } from "@/features/preferences/preferencesSlice";

export default function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("preferences");

    if (saved) {
      const data = JSON.parse(saved);
      dispatch(setCategories(data.categories));
    } else {
      dispatch(setCategories(["technology"]));
    }
  }, [dispatch]);

  return <>{children}</>;
}
