"use client";

import { cardsData } from "@/components/cards/CardsAboutData";
import { Button } from "@/components/ui/button";
import { activities, occupations } from "@/constants/occupations";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import Image from "next/image";
import Link from "next/link";
import {
  LiaCopySolid,
  LiaLongArrowAltDownSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

export default function Home() {
  //Cards

  return (
    <main className="max-w-[1600px] mx-auto px-6 md:px-0 space-y-16 md:space-y-32">
      {/* Hero header */}

      <div className="flex flex-col justify-start space-y-14 mt-8">
        {/* Heading text */}
        <div className="md:max-w-[50%]">
          <h1 className="text-2xl md:text-display font-medium">
            I&apos;m Erwann, a product-centred full-stack software engineer with
            a love for exploration both in code and in life.
          </h1>
        </div>
        {/* Occupation and picture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          <div className="flex flex-col justify-start col-start-2 col-span-1 space-y-6">
            <p className="text-lg">
              Currently seeking full-time contract opportunities as a software
              engineer, I&apos;m excited to contribute my expertise to dynamic
              projects.
            </p>
            <Button
              variant="primary"
              onClick={copyMailToClipboard}
              className="w-full md:w-auto"
            >
              <span>mail@erwann.co</span>
              <div className="flex flex-row items-center space-x-2">
                <span>Click to copy</span>
                <LiaCopySolid className="w-5 h-5" />
              </div>
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
          <div className="flex flex-col justify-start w-full col-span-1 border-t">
            {occupations.map((occupation) => (
              <p key={occupation} className="w-full py-3 border-b">
                {occupation}
              </p>
            ))}
          </div>
          <div className="flex flex-row items-center justify-end col-span-1 col-start-5 space-x-2">
            <LiaLongArrowAltDownSolid className="w-4 h-4" />
            <span className="font-mono uppercase text-sm">Scroll down</span>
            <LiaLongArrowAltDownSolid className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-52">
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
          <div className="flex justify-between">
            {/* Career & Experience */}
            <div className="flex flex-col justify-between w-1/2 space-y-8">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-mono font-medium uppercase">
                  Career & Experience
                </h2>
                <div className="flex flex-col space-y-2">
                  <p>
                    Combining my skills as both a designer and a full-stack
                    software engineer, I bring a unique perspective to every
                    project I undertake.
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
            <div className="bg-gray-200 w-px mx-12"></div>

            {/* Recent Travels */}
            <div className="flex flex-col justify-between w-1/2 space-y-8">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-mono font-medium uppercase">
                  Recent Travels
                </h2>
                <div className="flex flex-col space-y-2">
                  <p>
                    During the summer of 2023, I embarked on a month-long
                    journey to Kazakhstan and Kyrgyzstan.
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
                    <span>To the map of my travels</span>
                    <LiaLongArrowAltRightSolid className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider Horizontal */}
          <div className="bg-gray-200 h-px my-12"></div>

          {/* Bottom */}
          <div className="flex flex-row space-x-24">
            <div className="flex flex-col justify-between w-1/2 space-y-8">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-mono font-medium uppercase">
                  My first Marathon
                </h2>
                <div className="flex flex-col space-y-2">
                  <p>
                    Back in January, I scored my bib for the Paris 2024 Olympic
                    Games Marathon pour Tous. Now, I&apos;m preparing for the
                    big day on August 10, 2024!
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
            <div className="w-1/2">
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
        <div className="flex flex-row space-x-8 w-full justify-center">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-row items-center space-x-8 font-mono text-base uppercase font-medium text-foreground-secondary"
            >
              <span>{activity}</span>
              {index !== activities.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
        {/* Ongoing Projects */}
      </div>
    </main>
  );
}
