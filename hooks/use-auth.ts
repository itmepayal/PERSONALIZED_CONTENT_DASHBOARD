"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function useLogout() {
  const { signOut } = useClerk();
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { logout };
}
