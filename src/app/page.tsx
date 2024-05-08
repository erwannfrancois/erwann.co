"use client";

import SocialLinks from "@/components/socials/SocialLinks";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import HighFive from "@/components/GIFs/HighFive";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleCopy = () => {
    copyMailToClipboard();
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  return (
    <div className="max-w-[1600px] mx-auto flex flex-col flex-1 w-full justify-between gap-20 mt-6 md:mt-12 mb-6 px-6 md:px-0">
      {/* Container */}
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-32">
        {/* Left part */}
        <div className="flex-1">
          <div className="flex flex-col space-y-10">
            <h1 className="text-2xl md:text-display text-foreground-secondary">
              Hi, I&apos;m <span className="header-highlight">Erwann</span> — a{" "}
              <span className="header-highlight">
                full-stack software engineer
              </span>
              , <span className="header-highlight">designer</span>, and{" "}
              <span className="header-highlight">type maker</span>. I&apos;m
              passionate about leveraging technology to create meaningful
              solutions and experiences. My focus lies in bridging the gap
              between code and design to deliver practical, user-centric
              solutions that make a difference.
            </h1>
            <p className="text-2xl md:text-display text-foreground-secondary">
              I&apos;m{" "}
              <span className="header-highlight">
                on the lookout for exciting full-time contract opportunities
              </span>{" "}
              where I can bring my expertise to the table and dive into dynamic
              group projects.
            </p>
          </div>
        </div>
        {/* Right part */}
        <div className="md:w-[400px] flex flex-col space-y-10">
          <div className="flex flex-col space-y-2">
            <h2>Contact</h2>
            <div className="flex flex-col space-y-2">
              <p
                className="text-foreground-primary font-normal hover:underline hover:underline-offset-4 cursor-pointer"
                onClick={handleCopy}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {isCopied
                  ? "Copied!"
                  : isHovering
                  ? "Click to copy"
                  : "mail@erwann.co"}
              </p>
              <SocialLinks />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h2>Resume</h2>
            <a href="#" target="_blank" className="link">
              <span>Download my resume</span>
              <LiaLongArrowAltRightSolid className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h2>Current Personal Projects</h2>
            <div className="flex flex-col space-y-2">
              <div>
                <h3>/ Embark</h3>
                <p>
                  A project management tool for small businesses and
                  freelancers.
                </p>
              </div>
              <div>
                <h3>/ EF Type Foundry</h3>
                <p>My platform to showcase and sell the font I am crafting.</p>
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left part */}
        <div className="flex-1 flex flex-col justify-between space-y-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col flex-1 space-y-4 leading-snug">
              <p>
                From handball matches to horse riding through Crossfit sessions,
                I&apos;ve embraced a wide array of athletic disciplines. <br />
                In January, I&apos;ve also secured my bib for the Paris 2024
                Olympic Games Marathon pour Tous. With the big day on August 10,
                2024, I&apos;m laser-focused on training and setting my first
                time on this distance.
              </p>
              <a
                href="https://marathonpourtous.paris2024.org/fr/infos-pratiques/parcours"
                target="_blank"
                className="link"
              >
                <span>Discover the Paris 2024 Race</span>
                <LiaLongArrowAltRightSolid className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-col flex-1 space-y-4 leading-snug">
              <p>
                I love exploring — I&apos;ve journeyed through diverse
                landscapes and cultures across 35 countries on every continent.
                <br /> In 2023, I immersed myself in the stunning landscapes of
                Kyrgyzstan, from high-altitude lakes to unforgettable Yurt camp
                experiences. I cannot recommend visiting that beautiful country
                enough.
              </p>
              <Link href="/travels" className="link">
                <span>Check the map of my travels</span>
                <LiaLongArrowAltRightSolid className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <p>
            Always exploring the worlds of coding, sports, travels, design,
            books, cooking, and font making.
          </p>
        </div>
        {/* Right part */}
        <div className="md:w-[400px] flex flex-col justify-between items-end space-y-12">
          <div>
            <Image
              src="/homepage/Photos/Erwann.jpeg"
              alt="Erwann François - Software Engineer"
              sizes="100vw"
              width={160}
              height={90}
              className="rounded-sm w-full h-auto"
            />
          </div>
          <HighFive />
        </div>
      </div>
    </div>
  );
}
