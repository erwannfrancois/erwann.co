"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  // Get the base path
  const basePath = `/${pathname.split("/")[1]}`;

  return (
    <header className="relative z-40">
      {/* Wrapper */}
      <div className="wrapper flex flex-row justify-between items-center md:items-baseline md:gap-12">
        {/* Brand */}
        <div className="flex flex-col md:w-[20%]">
          <Link href="/" className="brand">
            Erwann François
          </Link>
          <span>Available for hire</span>
        </div>
        {/* End Brand */}
        {/* Right Part */}
        <div className="hidden md:flex flex-row justify-between flex-1 gap-2">
          <nav>
            <ul className="flex flex-row gap-4 md:gap-10">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className={cn(
                    "nav-item",
                    basePath === link.href && "underline underline-offset-4"
                  )}
                >
                  <Link href={link.href} className="whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a href="mailto:mail@erwann.co" className="contact">
            mail@erwann.co
          </a>
        </div>
        {/* End Right Part */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="md:hidden w-8 h-8 flex items-center justify-center bg-surface-inverse text-foreground-inverse rounded-full">
                <PlusIcon className="w-4 h-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              {navigationLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  className={cn(
                    basePath === link.href &&
                      "bg-surface-primary text-foreground-inverse"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="mailto:mail@erwann.co">mail@erwann.co</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* End Wrapper */}
    </header>
  );
}
