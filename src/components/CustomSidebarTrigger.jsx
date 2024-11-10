import React from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function CustomSidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      className="flex items-center gap-4 py-7 px-3 rounded-none font-bold text-4xl"
      onClick={toggleSidebar}
    >
      {/* <Tablet className="h-20 w-20" /> */}
      <h1>Pokedex</h1>
      <span className="sr-only">Toggle Pokedex</span>
    </Button>
  );
}
