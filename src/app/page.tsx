"use client";

import {
  CardAbout,
  CardAboutContent,
  CardAboutDescription,
  CardAboutHeader,
  CardAboutImage,
  CardAboutMain,
  CardAboutTitle,
} from "@/components/cards/CardAbout";
import { Button } from "@/components/ui/button";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import Image from "next/image";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Home() {
  return (
    <main className="max-w-[1600px] mx-auto px-6 md:px-0 space-y-16 md:space-y-32">
      {/* Hero header */}
      <div className="space-y-12 md:space-y-24">
        <div className="md:max-w-[75%] mt-10 md:mt-20">
          <h1 className="text-3xl md:text-display">
            Hey, bonjour! <br />
            I&apos;m Erwann, a product-centred full-stack software engineer with
            a love for exploration both in code and in life.
          </h1>
        </div>
        <div className="w-full flex flex-row justify-end">
          <div className="md:max-w-[50%] space-y-4">
            <p className="md:text-lg">
              Currently seeking full-time contract opportunities as a software
              engineer, I&apos;m excited to contribute my expertise to dynamic
              projects.
            </p>
            <Button variant="primary" onClick={copyMailToClipboard}>
              <span>mail@erwann.co</span>
              <span>Click to copy</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="md:max-w-[75%]">
        <Image
          src="/homepage/Photos/Erwann-Placeholder.avif"
          alt="Erwann François - Software Engineer"
          sizes="100vw"
          width={160}
          height={90}
          className="rounded-sm w-full h-auto"
        />
      </div>

      {/* Scroll text */}
      <p className="text-lg text-center md:text-start md:text-3xl">
        From coding to crafting, and everything in between. <br />
        Get to know me better below.
      </p>

      {/* Cards */}
      <CardAbout bgColor="bg-yellow-200">
        <CardAboutMain>
          <CardAboutHeader>
            <CardAboutTitle>My first marathon</CardAboutTitle>
            <CardAboutDescription>
              Back in January, I scored my bib for the Paris 2024 Olympic Games
              Marathon pour Tous. <br />
              Now, I&apos;m preparing for the big day on August 10, 2024!
            </CardAboutDescription>
          </CardAboutHeader>
          <CardAboutContent>
            <Button>
              <span>Discover the race</span>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </Button>
          </CardAboutContent>
        </CardAboutMain>
        <CardAboutImage
          src="/homepage/Photos/Erwann-Placeholder.avif"
          alt="Erwann François - Software Engineer"
        />
      </CardAbout>
      <div className="flex flex-col justify-between space-y-6 min-h-[480px] bg-yellow-200 text-black">
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">My first marathon</h2>
            <p>
              Back in January, I scored my bib for the Paris 2024 Olympic Games
              Marathon pour Tous. <br />
              Now, I&apos;m preparing for the big day on August 10, 2024!
            </p>
          </div>
          <Button>
            <span>Discover the race</span>
            <LiaLongArrowAltRightSolid className="w-4 h-4" />
          </Button>
        </div>
        <div className="pr-6 md:pr-8">
          <Image
            src="/homepage/Photos/Erwann-Placeholder.avif"
            alt="Erwann François - Software Engineer"
            sizes="100vw"
            width={160}
            height={90}
            className="w-full h-auto rounded-se-md"
          />
        </div>
      </div>
    </main>
  );
}
