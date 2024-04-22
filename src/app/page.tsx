"use client";

import { cardsData } from "@/components/cards/CardsAboutData";
import { Button } from "@/components/ui/button";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import Image from "next/image";

export default function Home() {
  //Cards
  const sortedCardData = [...cardsData].sort((a, b) => a.order - b.order);

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
            <Button
              variant="primary"
              onClick={copyMailToClipboard}
              className="w-full md:w-auto"
            >
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="hidden md:block md:col-span-1">
          {sortedCardData
            .filter((card) => card.order % 3 === 1)
            .map((card) => (
              <div key={card.order} className="mb-12">
                {card.layout}
              </div>
            ))}
        </div>
        <div className="hidden md:block md:col-span-1">
          {sortedCardData
            .filter((card) => card.order % 3 === 2)
            .map((card) => (
              <div key={card.order} className="mb-12">
                {card.layout}
              </div>
            ))}
        </div>
        <div className="hidden md:block md:col-span-1">
          {sortedCardData
            .filter((card) => card.order % 3 === 0)
            .map((card) => (
              <div key={card.order} className="mb-12">
                {card.layout}
              </div>
            ))}
        </div>
        <div className="md:hidden">
          {sortedCardData.map((card) => (
            <div key={card.order} className="mb-12">
              {card.layout}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
