"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { socialItems } from "@/constants/social-items";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ConnectMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const getTextColorClass = (index: Number) => {
    if (hoveredIndex === index) {
      return "dark:text-foreground-inverse";
    }
    return "text-foreground-secondary";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-medium underline decoration-dotted underline-offset-4 hover:decoration-solid">
        Let&apos;s connect
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount className="space-y-2">
        {socialItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            className={cn(
              "flex align-baseline items-baseline justify-between space-x-8 py-2 px-3 rounded-sm bg-surface-secondary dark:hover:text-foreground-inverse",
              hoveredIndex === index && item.hoverBg
            )}
          >
            <div className="space-x-2">
              <span>{item.emoji}</span>
              <span className="font-medium">{item.label}</span>
            </div>
            <span className={cn("text-sm", getTextColorClass(index))}>
              {item.handle}
            </span>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
