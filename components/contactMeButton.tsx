"use client";

import { Button } from "@/components/ui/button";

export function ContactMeButton() {
  const handleScroll = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleScroll}
      variant="outline"
      className="border-zinc-700 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500"
    >
      Contact Me
    </Button>
  );
}
