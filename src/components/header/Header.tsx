"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Header() {
  const pathname = usePathname();
  // Get the base path
  const basePath = `/${pathname.split("/")[1]}`;

  return (
    <header className="relative z-40">
      {/* Wrapper */}
      <div className="wrapper">
        {/* Top Container */}
        <div className="header__container">
          <div className="flex flex-col md:flex-row md:gap-4">
            <Link href="/" className="font-medium link--hovered">
              Erwann François
            </Link>
            <span className="text-foreground-secondary">
              Available for hire
            </span>
          </div>
          <a href="mailto:mail@erwann.co" className="link--hovered">
            mail@erwann.co
          </a>
        </div>
        {/* End Top Container */}
        {/* Bottom Container */}
        <div className="header__container">
          <nav>
            <ul className="nav__list">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className={cn(
                    "nav__item",
                    basePath === link.href && "nav__item--active"
                  )}
                >
                  <Link href={link.href} className="whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
        {/* End Bottom Container */}
      </div>
      {/* End Wrapper */}
    </header>
  );
}
