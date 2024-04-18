"use client";

import Link from "next/link";
import Navigation from "./header/Navigation";

export default function Footer() {
  const handleCopyToClipboard = () => {
    const textToCopy = "mail@erwann.co";
    navigator.clipboard
      .writeText(textToCopy)
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <footer className="flex items-center py-6 px-8 md:px-0 mt-10 md:mt-20 border-b">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-[1600px] mx-auto gap-8 w-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-24">
          <div className="flex flex-row items-center gap-4 font-medium">
            <Link href="/">Erwann François</Link>
            <p className="text-foreground-secondary">Available for hire</p>
          </div>
          <Navigation />
          <p className="cursor-pointer" onClick={handleCopyToClipboard}>
            mail@erwann.co
          </p>
        </div>
        <p>© Copyright Erwann François 2024, All rights reserved</p>
      </div>
    </footer>
  );
}
