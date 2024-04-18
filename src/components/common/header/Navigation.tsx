"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { navItems } from "@/constants/nav-items";
import { usePathname } from "next/navigation";

const navLinkVariants = cva("", {
  variants: {
    state: {
      default: "hover:underline hover:underline-offset-4",
      active: "underline underline-offset-4",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export default function Navigation() {
  const asPath = usePathname();

  return (
    <nav>
      <ul className="flex md:items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
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
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
