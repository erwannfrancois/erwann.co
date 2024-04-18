"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const handleCopyToClipboard = () => {
    const textToCopy = "mail@erwann.co";
    navigator.clipboard
      .writeText(textToCopy)
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <header className="flex  items-center py-6 px-8 md:px-0 border-b">
      <div className="flex flex-row items-center max-w-[1600px] mx-auto justify-between w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 font-medium">
          <Link href="/">Erwann François</Link>
          <p className="text-foreground-secondary">Available for hire</p>
        </div>
        <div className="hidden md:flex flex-row items-center gap-20">
          {/* Navigation */}
          <Navigation />
          {/* Theme Switcher */}
          <ThemeSwitcher />
          {/* Email */}
          <p className="font-medium" onClick={handleCopyToClipboard}>
            mail@erwann.co
          </p>
        </div>
        {/* Mobile nav */}
        <MobileNavigation />
      </div>
    </header>
  );
}
