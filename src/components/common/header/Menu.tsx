"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConnectMenu from "./ConnectMenu";
import { navItems } from "@/constants/nav-items";

const navLinkVariants = cva("font-medium", {
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

export default function Menu() {
  const asPath = usePathname();

  return (
    <nav className="hidden md:flex flex-row space-x-4">
      <ul className="md:flex items-center space-x-4">
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
      <ConnectMenu />
    </nav>
  );
}
