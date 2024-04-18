import { cn } from "@/lib/utils";
import React from "react";

interface CardHomeProps {
  children: React.ReactNode;
  color: string;
}

export default function CardHome({ children, color }: CardHomeProps) {
  return (
    <div
      className={cn(
        "min-h-[400px] w-full flex items-center justify-center dark:text-foreground-inverse mb-10 break-inside-avoid-column shadow-md px-8 md:px-12 py-10 rounded-xl",
        color
      )}
    >
      {children}
    </div>
  );
}
