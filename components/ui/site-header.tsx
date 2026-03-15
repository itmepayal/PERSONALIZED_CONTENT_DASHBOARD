import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "../common/ThemeToggler";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) items-center justify-between border-b px-4 lg:px-6">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mx-2 h-4" />

        <h1 className="text-base font-semibold">Documents</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
