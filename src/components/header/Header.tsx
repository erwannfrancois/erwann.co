"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";

export default function Header() {
  return (
    <header className="relative z-40">
      {/* Wrapper */}
      <div className="max-w-[1600px] mx-auto flex flex-row gap-12 py-4 px-6 md:px-0">
        {/* Brand */}
        <div className="flex flex-col w-[20%]">
          <Link href="/" className="brand">
            Erwann François
          </Link>
          <span>Available for hire</span>
        </div>
        {/* Right part */}
        <div className="flex flex-row justify-between flex-1">
          <nav className="right-col">
            <ul className="flex flex-row space-x-10">
              {navigationLinks.map((link) => (
                <li key={link.href} className="nav-item">
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
      </div>
    </header>
  );
}
