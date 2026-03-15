"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";

import { NavDocuments } from "@/components/ui/nav-documents";
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
  TrendingUpIcon,
  HeartIcon,
  NewspaperIcon,
  FilmIcon,
  MusicIcon,
  SearchIcon,
  SettingsIcon,
  CircleHelpIcon,
  BookmarkIcon,
  CommandIcon,
} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Personalized Feed",
      url: "/feed",
      icon: <NewspaperIcon />,
    },
    {
      title: "Trending",
      url: "/trending",
      icon: <TrendingUpIcon />,
    },
    {
      title: "Favorites",
      url: "/favorites",
      icon: <HeartIcon />,
    },
  ],

  documents: [
    {
      name: "News",
      url: "/news",
      icon: <NewspaperIcon />,
    },
    {
      name: "Movies",
      url: "/movies",
      icon: <FilmIcon />,
    },
    {
      name: "Music",
      url: "/music",
      icon: <MusicIcon />,
    },
    {
      name: "Saved Content",
      url: "/saved",
      icon: <BookmarkIcon />,
    },
  ],

  navSecondary: [
    {
      title: "Search",
      url: "/search",
      icon: <SearchIcon />,
    },
    {
      title: "Preferences",
      url: "/preferences",
      icon: <SettingsIcon />,
    },
    {
      title: "Help",
      url: "/help",
      icon: <CircleHelpIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const userData = {
    name: user?.fullName || "User",
    email: user?.primaryEmailAddress?.emailAddress || "",
    avatar: user?.imageUrl || "",
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard">
                <CommandIcon className="size-5" />
                <span className="text-base font-semibold">
                  Content Dashboard
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
