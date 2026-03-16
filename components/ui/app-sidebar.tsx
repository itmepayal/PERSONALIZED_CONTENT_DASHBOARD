"use client";

import * as React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

import { NavMain } from "@/components/ui/nav-main";
import { NavSecondary } from "@/components/ui/nav-secondary";
import { NavUser } from "@/components/ui/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboardIcon,
  HeartIcon,
  SettingsIcon,
  CommandIcon,
  TrendingUpIcon,
  RadioIcon,
} from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

const navMain: NavItem[] = [
  {
    title: "Feed",
    url: "/dashboard",
    icon: <LayoutDashboardIcon className="size-4" />,
  },
  {
    title: "Trending",
    url: "/dashboard/trending",
    icon: <TrendingUpIcon className="size-4" />,
  },
  {
    title: "Favorites",
    url: "/dashboard/favorites",
    icon: <HeartIcon className="size-4" />,
  },
  {
    title: "Live",
    url: "/dashboard/live",
    icon: <RadioIcon className="size-4" />,
  },
];

const navSecondary: NavItem[] = [
  {
    title: "Preferences",
    url: "/dashboard/settings/preferences",
    icon: <SettingsIcon className="size-4" />,
  },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  const userData = {
    name: user?.fullName || "User",
    email: user?.primaryEmailAddress?.emailAddress || "",
    avatar: user?.imageUrl || "",
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="flex items-center gap-2">
                <CommandIcon className="size-5" />
                <span className="text-base font-semibold">
                  Content Dashboard
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* MAIN NAV */}
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* USER */}
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
