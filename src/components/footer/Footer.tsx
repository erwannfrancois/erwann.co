"use client";
import Link from "next/link";
import SocialMediaLinks from "../socials/SocialLinks";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import { navigationLinks } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 max-w-[1600px] mx-auto px-6 md:px-0 py-6 mt-20">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
        <Link href="/" className="font-medium">
          Erwann François
        </Link>
        <ul className="flex flex-row space-x-4">
          {navigationLinks.map((link) => (
            <li
              key={link.href}
              className="hover:underline hover:underline-offset-4"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center gap-6">
          <p
            className="cursor-pointer hover:underline hover underline-offset-4"
            onClick={copyMailToClipboard}
          >
            mail@erwann.co
          </p>
          <SocialMediaLinks />
        </div>
      </div>
      <div>
        <p>© Copyright Erwann François 2024, All rights reserved</p>
      </div>
    </footer>
  );
}
