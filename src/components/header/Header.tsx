"use client";

import { useState, useEffect, useRef } from "react";
import { navigationLinks } from "@/constants/navigation";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import Link from "next/link";
import SocialMediaLinks from "../socials/SocialLinks";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //  Handles clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.screen.width > 768 &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 left-0 right-0">
      {/* Wrapper */}
      <div className="flex flex-row items-center justify-between max-w-[1600px] mx-auto py-6 px-6 md:px-0 relative">
        {/* Left container */}
        <div className="flex flex-row space-x-4">
          <Link href="/" className="font-medium">
            Erwann François
          </Link>
          <p>Available for hire</p>
        </div>

        {/* Right container */}
        <div className="relative">
          {/* SVG Button */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path fill="currentColor" d="M0 0H6V6H0z"></path>
              <path fill="currentColor" d="M0 12H6V18H0z"></path>
              <path fill="currentColor" d="M12 0H18V6H12z"></path>
              <path fill="currentColor" d="M12 12H18V18H12z"></path>
            </svg>
          </div>

          {/* Desktop menu */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="hidden md:block absolute right-0 top-full z-40 bg-surface-accent_primary text-foreground-on_accent rounded-sm mt-4"
            >
              <div className="flex flex-row space-x-10 px-10 py-8">
                <nav>
                  <ul className="flex flex-col space-y-4 min-w-[320px]">
                    {navigationLinks.map((link) => (
                      <li
                        key={link.href}
                        className="hover:underline hover:underline-offset-4"
                      >
                        <Link
                          href={link.href}
                          className="text-3xl whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex flex-col items-end justify-between">
                  <div className="cursor-pointer" onClick={toggleMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 22 22"
                    >
                      <path
                        stroke="#000"
                        strokeWidth="3"
                        d="M2 2l18 18m0-18L2 20"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-row items-center space-x-12">
                    <ThemeSwitcher />
                    <p
                      className="cursor-pointer hover:underline hover underline-offset-4"
                      onClick={copyMailToClipboard}
                    >
                      mail@erwann.co
                    </p>
                    <SocialMediaLinks />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed right-0 top-0 w-screen h-screen z-40 py-6 px-6 bg-surface-accent_primary text-foreground-on_accent rounded-sm">
              <div className="h-full flex flex-col">
                <div
                  className="w-full flex justify-end cursor-pointer"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 22 22"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M2 2l18 18m0-18L2 20"
                    ></path>
                  </svg>
                </div>

                <div className="flex flex-col space-y-12">
                  <nav>
                    <ul className="flex flex-col space-y-4 min-w-[320px] py-12 border-b">
                      {navigationLinks.map((link) => (
                        <li
                          key={link.href}
                          className="hover:underline hover:underline-offset-4"
                        >
                          <Link
                            href={link.href}
                            className="text-3xl whitespace-nowrap"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="flex flex-col space-y-12">
                    <p
                      className="cursor-pointer hover:underline hover underline-offset-4"
                      onClick={copyMailToClipboard}
                    >
                      mail@erwann.co
                    </p>

                    <ThemeSwitcher />

                    <SocialMediaLinks />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
