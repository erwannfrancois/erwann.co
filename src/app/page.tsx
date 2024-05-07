"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { activities, occupations } from "@/constants/occupations";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LiaCopySolid,
  LiaLongArrowAltDownSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copyMailToClipboard();
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  return (
    <main className="max-w-[1600px] mx-auto px-6 md:px-0 space-y-16 md:space-y-52">
      {/* Hero header */}

      <div className="flex flex-col justify-start space-y-14 mt-8">
        {/* Heading text */}
        <div className="md:max-w-[50%]">
          <h1 className="text-3xl md:text-display">
            I&apos;m Erwann, a product-centred full-stack software engineer with
            a love for exploration both in code and in life.
          </h1>
        </div>
        {/* Occupation and picture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          <div className="flex flex-col justify-start md:col-start-2 col-span-1 space-y-6">
            <p className="md:text-lg">
              Currently seeking full-time contract opportunities as a software
              engineer, I&apos;m excited to contribute my expertise to dynamic
              projects.
            </p>
            <Button
              variant="primary"
              onClick={handleCopy}
              className="w-full md:w-auto"
            >
              <span>mail@erwann.co</span>
              {!isCopied ? (
                <div className="flex flex-row items-center space-x-2">
                  <span>Click to copy</span>
                  <LiaCopySolid className="w-5 h-5" />
                </div>
              ) : (
                <span>Copied!</span>
              )}
            </Button>
          </div>
          <div className="col-span-1">
            <Image
              src="/homepage/Photos/Erwann.jpeg"
              alt="Erwann François - Software Engineer"
              sizes="100vw"
              width={160}
              height={90}
              className="rounded-sm w-full h-auto"
            />
          </div>
        </div>
        {/* About me and scroll */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-end text-foreground-secondary">
          <div className="flex flex-col justify-start w-full col-span-1 border-t border-border-secondary">
            {occupations.map((occupation) => (
              <p
                key={occupation}
                className="w-full py-3 border-b border-border-secondary"
              >
                {occupation}
              </p>
            ))}
          </div>
          <div className="flex flex-row items-center md:justify-end col-span-1 md:col-start-5 space-x-2">
            <LiaLongArrowAltDownSolid className="w-4 h-4 animate-bounce" />
            <span className="font-mono uppercase text-sm">Scroll down</span>
            <LiaLongArrowAltDownSolid className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-24 md:space-y-52">
        {/* Opener */}
        <div className="flex md:justify-end w-full text-lg">
          <p>
            From coding to crafting, and everything in between. <br />
            Get to know me better below.
          </p>
        </div>
        {/* Sections */}
        <div>
          {/* Top */}
          <div className="flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0">
            {/* Career & Experience */}
            <div className="flex flex-col justify-between md:w-1/2 space-y-8">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-mono font-medium uppercase">
                  Professional Journey
                </h2>
                <div className="flex flex-col space-y-2">
                  <p>
                    Bringing together a fusion of full-stack software
                    engineering and design, I bring a unique perspective to
                    every project I am part of.
                  </p>
                  <p>
                    With a foundation in Microsoft technologies like C#, ASP.NET
                    and Vue.js, my journey has evolved to focus on
                    TypeScript-based solutions such as Node.js, React, and
                    frameworks like Nest.js and Next.js.
                  </p>
                  <p>
                    In addition to my engineering expertise, my design
                    proficiency plays a pivotal role in my work. Leveraging
                    tools like Figma, I seamlessly blend creativity with
                    technical ability to craft intuitive interfaces that enhance
                    user experiences.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="w-full">
                  <a
                    href="#"
                    target="_blank"
                    className="w-full flex flex-row items-center justify-between"
                  >
                    <span>Download my CV</span>
                    <LiaLongArrowAltRightSolid className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Divider Vertical */}
            <div className="bg-surface-inverse/50 h-px md:h-auto md:w-px my-12 md:mx-12"></div>

            {/* Recent Travels */}
            <div className="flex flex-col justify-between md:w-1/2 space-y-8">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-mono font-medium uppercase">
                  Recent Travels
                </h2>
                <div className="flex flex-col space-y-2">
                  <p>
                    An avid explorer, I&apos;ve traversed diverse landscapes and
                    immersed myself in countless cultures. With solo backpacking
                    and shared adventures with friends and family, I&apos;ve
                    wandered through over 35 countries across every continent.
                  </p>
                  <p>
                    Most recently, during the summer of 2023, I embarked on a
                    month-long journey to Kazakhstan and Kyrgyzstan.
                  </p>
                  <p>
                    From breathtaking lakes nestled at 3000m to unforgettable
                    experiences in Yurt camps, I wholeheartedly recommend
                    exploring the wonders of Kyrgyzstan.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="w-full">
                  <Link
                    href="/travels"
                    className="w-full flex flex-row items-center justify-between"
                  >
                    <span>Explore all my travels</span>
                    <LiaLongArrowAltRightSolid className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider Horizontal */}
          <div className="bg-surface-inverse/50 h-px my-12"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24">
            <div className="flex flex-col justify-between md:w-1/2 space-y-8">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-mono font-medium uppercase">
                  My first Marathon
                </h2>
                <div className="flex flex-col space-y-2">
                  <p>
                    Sports have always been a cornerstone of my life, whether
                    I&apos;m cheering from the sidelines or pushing my own
                    limits in competition. From the thrill of handball matches
                    to the intensity of Crossfit sessions, and extending to
                    activities such as horse riding or boxing, I&apos;ve
                    embraced a wide array of athletic disciplines.
                  </p>
                  <p>
                    Currently, I&apos;m immersed in training for my debut
                    triathlon, balancing swimming, road biking, and running as I
                    gear up for the challenge.
                  </p>
                  <p>
                    Amidst this journey, I&apos;ve also secured my bib for the
                    Paris 2024 Olympic Games Marathon pour Tous, marking a
                    significant milestone in my athletic pursuits. As for many
                    athletes, taking part in the Olympic Games is a dream, even
                    if it&apos;s only in the <i>for all</i> event. <br />
                    With the big day on August 10, 2024, I&apos;m laser-focused
                    on training and setting my first time on this distance.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="w-full">
                  <a
                    href="https://marathonpourtous.paris2024.org/fr/infos-pratiques/parcours"
                    target="_blank"
                    className="w-full flex flex-row items-center justify-between"
                  >
                    <span>Meet the race</span>
                    <LiaLongArrowAltRightSolid className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/homepage/Photos/MPTParis2024.jpg"
                alt="Marathon pour Tous - Paris 2024"
                sizes="100vw"
                width={160}
                height={90}
                className="rounded-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* Activities */}
        <div className="hidden md:flex flex-row space-x-8 w-full justify-center">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-row items-center space-x-8 font-mono text-base uppercase font-medium text-foreground-primary dark:text-foreground"
            >
              <span>{activity}</span>
              {index !== activities.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
        {/* Ongoing Projects */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="flex flex-row items-baseline col-span-1 space-x-3 font-mono uppercase font-medium leading-loose">
            <div className="w-3 h-3 rounded-full bg-surface-inverse" />
            <span>Ongoing projects</span>
          </div>
          <div className="flex flex-col space-y-8 col-span-2 p-6 md:p-8 rounded-sm bg-white text-black">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-mono uppercase font-medium">
                Embark
              </h2>
              <div className="flex flex-wrap md:flex-row gap-1 md:space-x-2">
                <Badge>SAAS</Badge>
                <Badge>Productivity</Badge>
                <Badge variant="primary">Coming soon</Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p>
                I&apos;m currently developing Embark, a versatile project
                management solution designed specifically for small companies
                and freelancers.
              </p>
              <p>
                This tool covers everything from client to finance management,
                empowering entrepreneurs to efficiently oversee their
                operations. Additionally, it will feature a project portal
                enabling clients to track project progress and access all
                necessary documents shared by the entrepreneurs.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-8 col-span-2 p-6 md:p-8 rounded-sm bg-white text-black">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-mono uppercase font-medium">
                EF Type Foundry
              </h2>
              <div className="flex flex-wrap md:flex-row gap-1 md:space-x-2">
                <Badge>Type Design</Badge>
                <Badge>E-Commerce</Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p>
                Balancing my roles as a software engineer and designer,
                I&apos;ve explored diverse design avenues, ranging from graphic
                design to UI/UX design.
              </p>
              <p>
                I&apos;m deeply fascinated by typography and have embarked on
                creating custom typefaces. EF Type will serve as my type foundry
                e-commerce platform, where I&apos;ll display and retail the
                fonts I&apos;ve crafted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
