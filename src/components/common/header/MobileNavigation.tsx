import { navItems } from "@/constants/nav-items";
import { socialItems } from "@/constants/social-items";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { fontSecondary } from "@/config/fonts";
import { cn } from "@/lib/utils";

export default function MobileNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = "mail@erwann.co";
    navigator.clipboard
      .writeText(textToCopy)
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <div className="md:hidden">
      <p
        className="cursor-pointer font-medium underline underline-offset-4"
        onClick={toggleMobileMenu}
      >
        <HamburgerMenuIcon className="w-8 h-8" />
      </p>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-surface z-50">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-6 px-8 border-b">
              <div className="flex flex-col font-medium">
                <Link href="/">Erwann François</Link>
                <p className="text-foreground-secondary">Available for hire</p>
              </div>
              <Cross1Icon className="w-8 h-8" onClick={toggleMobileMenu} />
            </div>
            <nav className="pt-12 pb-8 px-8 border-b">
              <ul
                className={cn(
                  "flex flex-col gap-3 font-secondary",
                  fontSecondary.variable
                )}
              >
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-3xl">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-10 pt-12 pb-8 px-8">
              <p onClick={handleCopyToClipboard}>mail@erwann.co</p>
              <div>
                <ul className="flex flex-col gap-3">
                  {socialItems.map((item) => (
                    <li key={item.href}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
