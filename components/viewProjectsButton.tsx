"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ViewProjectsButton() {
  const handleScroll = () => {
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleScroll}
      className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
    >
      <span className="relative z-10 flex items-center">
        View Projects
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  );
}
