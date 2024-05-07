"use client";
import Image from "next/image";
import SocialMediaLinks from "../socials/SocialLinks";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="max-w-[1600px] px-6 md:px-0 mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-4 text-sm font-mono font-medium uppercase mt-40 mb-4">
      {/* Copyright */}
      <div className="order-2 md:order-1">
        © Copyright Erwann François {new Date().getFullYear()}, All rights
        reserved
      </div>

      {/* Right part */}
      <div className="flex flex-col md:items-end space-y-4 order-1">
        {/* Thanks */}
        <p>Thank you for being here!</p>
        {/* GIF */}
        <div>
          {theme === "dark" ? (
            <Image
              src="/homepage/Photos/Succession.gif"
              alt="Succession GIF High Five"
              sizes="100vw"
              width={160}
              height={90}
              className="rounded-sm w-auto h-32"
            />
          ) : (
            <Image
              src="/homepage/Photos/TheOffice.gif"
              alt="The Office GIF High Five"
              sizes="100vw"
              width={160}
              height={90}
              className="rounded-sm w-auto h-32"
            />
          )}
        </div>

        {/* Mail + Socials */}
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
    </footer>
  );
}
