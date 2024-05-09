"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";

export default function Header() {
  return (
    <header className="relative z-40">
      {/* Wrapper */}
      <div className="max-w-[1600px] mx-auto py-4 px-6 md:px-0">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center md:gap-32">
          {/* Left part */}
          <div className="flex flex-row space-x-4">
            <Link
              href="/"
              className="flex flex-row space-x-1.5 font-medium hover:underline hover:underline-offset-4"
            >
              <div className="w-5 h-5 text-foreground-primary">
                {/* Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M15.24,7.42l-4.41-.88c-.66-.12-.76-.47-.77-1.22l.04-4.59c-.13-.64-1.1-.64-1.22,0l-1.9,4.59c-.3.71-1.16,1.11-1.82,1.22l-4.41.88c-.68.12-.68,1.04,0,1.16l4.41.88c.66.12.91.56.91,1.22l-.04,4.59c.13.64,1.1.64,1.22,0l1.9-4.59c.3-.73,1.02-1.11,1.68-1.22l4.41-.88c.68-.12.68-1.04,0-1.16Z"
                  />
                </svg>
              </div>

              <span>Erwann François</span>
            </Link>
            <span>Available for hire</span>
          </div>
          {/* Right part */}
          <nav className="right-col">
            <ul className="flex flex-row space-x-6">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:underline hover:underline-offset-4"
                >
                  <Link href={link.href} className="whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
