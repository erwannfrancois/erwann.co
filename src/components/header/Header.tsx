"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { useState } from "react";
import { LiaMinusSolid, LiaPlusSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-40">
      <div className="max-w-[1600px] mx-auto py-4 px-6 md:px-0">
        <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 justify-between items-baseline">
          <div className="flex flex-row space-x-4">
            <Link
              href="/"
              className="font-medium hover:underline hover:underline-offset-4"
              onClick={closeMenu}
            >
              Erwann François
            </Link>
            <span>Available for hire</span>
          </div>

          <div className="flex flex-col space-x-0 space-y-1 md:space-y-0 md:flex-row md:space-x-20 w-full md:w-auto items-baseline font-mono font-medium uppercase text-sm">
            <div
              onClick={toggleMenu}
              className="md:hidden flex flex-row items-center space-x-2"
            >
              <span>Menu</span> {!isMenuOpen && <LiaPlusSolid />}{" "}
              {isMenuOpen && <LiaMinusSolid />}
            </div>
            <div
              className={cn(
                "md:block space-y-1",
                isMenuOpen ? "block" : "hidden"
              )}
            >
              <nav>
                <ul className="flex flex-row space-x-8">
                  {navigationLinks.map((link) => (
                    <li
                      key={link.href}
                      className="hover:underline hover:underline-offset-4"
                      onClick={closeMenu}
                    >
                      <Link href={link.href} className="whitespace-nowrap">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-row space-x-20">
                <ThemeSwitcher />
                <p
                  className="cursor-pointer hover:underline hover underline-offset-4"
                  onClick={copyMailToClipboard}
                >
                  mail@erwann.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
