"use client";
import Link from "next/link";
import Image from "next/image";
import SocialMediaLinks from "../socials/SocialLinks";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import { navigationLinks } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="max-w-[1600px] mx-auto flex flex-row justify-between items-end font-mono uppercase mt-40 mb-4">
      {/* Copyright */}
      <div>
        © Copyright Erwann François {new Date().getFullYear()}, All rights
        reserved
      </div>

      {/* Right part */}
      <div className="flex flex-col items-end space-y-2">
        {/* GIF */}
        <div>
          <Image
            src="/homepage/Photos/Succession.gif"
            alt="Succession GIF High Five"
            sizes="100vw"
            width={160}
            height={90}
            className="rounded-sm w-auto h-24"
          />
        </div>
        {/* Thanks */}
        <p>Thank you for being here!</p>
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
