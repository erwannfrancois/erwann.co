"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import MobileNavigation from "./MobileNavigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const handleCopyToClipboard = () => {
    const textToCopy = "mail@erwann.co";
    navigator.clipboard
      .writeText(textToCopy)
      .catch((error) => console.error("Error copying text: ", error));
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Check if scrolled more than 400px and scroll direction is down
      if (currentScrollTop > 200 && currentScrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 flex items-center py-4 md:py-6 px-8 md:px-0 border-b z-10 bg-surface",
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex flex-row items-center max-w-[1600px] mx-auto justify-between w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 font-medium">
          <Link href="/">Erwann François</Link>
          <p className="text-foreground-secondary">Available for hire</p>
        </div>
        <div className="hidden md:flex flex-row items-center gap-20 font-medium">
          {/* Navigation */}
          <Navigation />
          {/* Theme Switcher */}
          <ThemeSwitcher />
          {/* Email */}
          <p
            className="font-medium cursor-pointer"
            onClick={handleCopyToClipboard}
          >
            mail@erwann.co
          </p>
        </div>
        {/* Mobile nav */}
        <MobileNavigation />
      </div>
    </header>
  );
}
