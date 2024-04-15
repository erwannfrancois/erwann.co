"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems } from "@/constants/nav-items";
import { socialItems } from "@/constants/social-items";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinkVariants = cva("font-medium", {
  variants: {
    state: {
      default:
        "flex w-full align-baseline items-baseline justify-between space-x-8 py-2 px-3 rounded-sm bg-surface-secondary",
      active:
        "flex w-full align-baseline items-baseline justify-between space-x-8 py-2 px-3 rounded-sm bg-surface-inverse text-foreground-inverse",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export default function MenuMobile() {
  const asPath = usePathname();

  const [showSocialItems, setShowSocialItems] = useState(false);

  const toggleSocialItems = () => {
    setShowSocialItems(!showSocialItems);
  };

  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="font-medium underline underline-offset-4">
          Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          forceMount
          className="space-y-2 md:mt-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                navLinkVariants({
                  state:
                    asPath === item.href ||
                    (asPath.startsWith(item.href) && item.href !== "/")
                      ? "active"
                      : "default",
                })
              )}
            >
              <div className="space-x-2">
                <span>{item.emoji}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}

          {/* Connect */}
          <div
            className={cn(
              navLinkVariants({
                state: "default",
              })
            )}
            onClick={toggleSocialItems}
          >
            <div className="space-x-2">
              <span>🔗</span>
              <span className="font-medium">Connect</span>
            </div>
            <span className="text-sm text-foreground-secondary">
              {showSocialItems ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </div>
          {showSocialItems &&
            socialItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                className={cn(
                  navLinkVariants({
                    state: "default",
                  })
                )}
              >
                <div className="space-x-2">
                  <span>{item.emoji}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-sm text-foreground-secondary">
                  {item.handle}
                </span>
              </a>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
