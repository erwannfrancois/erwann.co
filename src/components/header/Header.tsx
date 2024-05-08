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
              className="flex flex-row space-x-2 font-medium hover:underline hover:underline-offset-4"
            >
              <div className="w-5 h-5 text-foreground-primary">
                {/* Logo */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_101_239)">
                    <path
                      d="M12.4125 6.63412L13.3232 -0.818377L11.4133 -0.85621L9.65495 5.70793C9.02118 7.76015 8.02277 8.16578 5.91875 8.27973L0.92144 8.47126L0.558367 10.5703L4.91347 10.9575C7.44944 11.1738 8.14048 12.5363 7.95807 14.3277L7.10955 21.2522L9.08171 21.2913L10.9421 14.117C11.3842 12.3412 12.3389 11.3017 14.2171 11.3078L19.4843 11.1216L19.8014 9.32254L14.311 8.71574C13.0943 8.57751 12.2333 8.06242 12.4223 6.60318L12.4125 6.63412Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_239">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span>Erwann François</span>
            </Link>
            <span className="font-light">Available for hire</span>
          </div>
          {/* Right part */}
          <nav className="md:w-[400px]">
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
