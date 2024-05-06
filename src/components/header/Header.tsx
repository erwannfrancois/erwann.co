"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Header() {
  return (
    <header className="relative z-40">
      <div className="max-w-[1600px] mx-auto py-4">
        <div className="flex flex-row justify-between items-baseline">
          <div className="flex flex-row space-x-4">
            <Link
              href="/"
              className="font-medium hover:underline hover:underline-offset-4"
            >
              Erwann François
            </Link>
            <span>Available for hire</span>
          </div>
          <div className="flex flex-row space-x-20 items-baseline font-mono font-medium uppercase text-sm">
            <nav>
              <ul className="flex flex-row space-x-8">
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
    </header>
  );
}
