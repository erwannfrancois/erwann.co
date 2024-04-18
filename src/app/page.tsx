"use client";

import { fontSecondary } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  const handleCopyToClipboard = () => {
    const textToCopy = "mail@erwann.co";
    navigator.clipboard
      .writeText(textToCopy)
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <div>
      <div className="flex flex-col gap-10 md:max-w-[50%] mx-auto">
        <h1
          className={cn(
            "text-3xl md:text-display font-light font-secondary text-center",
            fontSecondary.variable
          )}
        >
          I&apos;m <span className="font-medium">Erwann</span>, a
          product-centred{" "}
          <span className="font-medium">full-stack software engineer</span> with
          a love for exploration both in code and in life.
        </h1>

        <div>
          <Image
            src="/homepage/Photos/Erwann-Placeholder.avif"
            alt="Picture of the author"
            sizes="100vw"
            width={160}
            height={90}
            className="rounded-xl w-full h-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between pt-4 border-t font-medium leading-tight">
          <div>
            <p>
              Currently seeking full-time contract opportunities as a software
              engineer,
            </p>
            <p className="text-foreground-secondary">
              I&apos;m excited to contribute my expertise to dynamic projects.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <p>Reach me by email</p>
            <p
              className="text-foreground-secondary"
              onClick={handleCopyToClipboard}
            >
              mail@erwann.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
