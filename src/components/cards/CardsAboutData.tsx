import {
  CardAbout,
  CardAboutContent,
  CardAboutDescription,
  CardAboutHeader,
  CardAboutImage,
  CardAboutMain,
  CardAboutTitle,
} from "@/components/cards/CardAbout";
import { Button } from "../ui/button";
import { LiaEnvelope, LiaLongArrowAltRightSolid } from "react-icons/lia";
import { SiLinkedin, SiGithub, SiStrava, SiGoodreads } from "react-icons/si";
import { copyMailToClipboard } from "@/lib/utilsInterface";
import Link from "next/link";

function CardConnect() {
  return (
    <CardAbout bgColor="bg-purple-200">
      <CardAboutMain>
        <CardAboutHeader>
          <CardAboutTitle>Connect with me</CardAboutTitle>
          <CardAboutDescription>
            Stay in the loop! <br />
            Connect with me on these social platforms to see what I&apos;m up
            to.
          </CardAboutDescription>
        </CardAboutHeader>
        <CardAboutContent>
          <Button onClick={copyMailToClipboard} className="w-full">
            <div className="flex flex-row items-center space-x-2">
              <LiaEnvelope className="w-4 h-4" />
              <span>mail@erwann.co</span>
            </div>
            <span>Click to copy</span>
          </Button>
          <Button className="w-full">
            <a
              href="https://www.linkedin.com/in/erwannfrancois/"
              target="_blank"
              className="w-full flex flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center space-x-2">
                <SiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </div>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://github.com/erwannfrancois"
              target="_blank"
              className="w-full flex flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center space-x-2">
                <SiGithub className="w-4 h-4" />
                <span>Github</span>
              </div>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://www.strava.com/athletes/erwannfrancois"
              target="_blank"
              className="w-full flex flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center space-x-2">
                <SiStrava className="w-4 h-4" />
                <span>Strava</span>
              </div>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://www.goodreads.com/erwannfrancois"
              target="_blank"
              className="w-full flex flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center space-x-2">
                <SiGoodreads className="w-4 h-4" />
                <span>Goodreads</span>
              </div>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </a>
          </Button>
        </CardAboutContent>
      </CardAboutMain>
    </CardAbout>
  );
}

function CardMarathon() {
  return (
    <CardAbout bgColor="bg-orange-200">
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
          <Button className="w-full">
            <a
              href="https://marathonpourtous.paris2024.org/fr/infos-pratiques/parcours"
              target="_blank"
              className="w-full flex flex-row items-center justify-between"
            >
              <span>Discover the race</span>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </a>
          </Button>
        </CardAboutContent>
      </CardAboutMain>
      <CardAboutImage
        src="/homepage/Photos/Paris2024.jpg"
        alt="Erwann François - Software Engineer"
      />
    </CardAbout>
  );
}

function CardCareer() {
  return (
    <CardAbout bgColor="bg-blue-200">
      <CardAboutMain>
        <CardAboutHeader>
          <CardAboutTitle>Career & Experience</CardAboutTitle>
          <CardAboutDescription>
            <p>
              Combining my skills as both a designer and a full-stack software
              engineer, I bring a unique perspective to every project I
              undertake.
            </p>
            <p>
              With a foundation in Microsoft technologies like C#, ASP.NET and
              Vue.js, my journey has evolved to focus on TypeScript-based
              solutions such as Node.js, React, and frameworks like Nest.js and
              Next.js.
            </p>
            <p>
              In addition to my engineering expertise, my design proficiency
              plays a pivotal role in my work. Leveraging tools like Figma, I
              seamlessly blend creativity with technical ability to craft
              intuitive interfaces that enhance user experiences.
            </p>
          </CardAboutDescription>
        </CardAboutHeader>
        <CardAboutContent>
          <Button className="w-full">
            <a
              href="#"
              target="_blank"
              className="w-full flex flex-row items-center justify-between"
            >
              <span>Download my CV</span>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </a>
          </Button>
        </CardAboutContent>
      </CardAboutMain>
    </CardAbout>
  );
}

function CardEFType() {
  return (
    <CardAbout bgColor="bg-yellow-200">
      <CardAboutMain>
        <CardAboutHeader>
          <CardAboutTitle>EF Type</CardAboutTitle>
          <CardAboutDescription>
            <p>
              Balancing my roles as a software engineer and designer, I&apos;ve
              explored diverse design avenues, ranging from graphic design to
              UI/UX design.
            </p>
            <p>
              I&apos;m deeply fascinated by typography and have embarked on
              creating custom typefaces. EF Type will serve as my type foundry
              e-commerce platform, where I&apos;ll display and retail the fonts
              I&apos;ve crafted.
            </p>
          </CardAboutDescription>
        </CardAboutHeader>
        <CardAboutContent>
          <div className="flex flex-row items-center justify-center py-2 bg-white rounded-full text-sm uppercase font-mono">
            Design phase
          </div>
        </CardAboutContent>
      </CardAboutMain>
      <CardAboutImage
        src="/homepage/Photos/Paris2024.jpg"
        alt="Erwann François - Software Engineer"
      />
    </CardAbout>
  );
}

function CardTravel() {
  return (
    <CardAbout bgColor="bg-gray-200">
      <CardAboutMain>
        <CardAboutHeader>
          <CardAboutTitle>Last travel</CardAboutTitle>
          <CardAboutDescription>
            <p>
              During the summer of 2023, I embarked on a month-long journey to
              Kazakhstan and Kyrgyzstan.
            </p>
            <p>
              From breathtaking lakes nestled at 3000m to unforgettable
              experiences in Yurt camps, I wholeheartedly recommend exploring
              the wonders of Kyrgyzstan.
            </p>
          </CardAboutDescription>
        </CardAboutHeader>
        <CardAboutContent>
          <Button className="w-full">
            <Link
              href="/travels"
              className="w-full flex flex-row items-center justify-between"
            >
              <span>All my travels</span>
              <LiaLongArrowAltRightSolid className="w-4 h-4" />
            </Link>
          </Button>
        </CardAboutContent>
      </CardAboutMain>
      <CardAboutImage
        src="/homepage/Photos/Paris2024.jpg"
        alt="Erwann François - Software Engineer"
      />
    </CardAbout>
  );
}

function CardEmbark() {
  return (
    <CardAbout bgColor="bg-lime-200">
      <CardAboutMain>
        <CardAboutHeader>
          <CardAboutTitle>Embark Projects</CardAboutTitle>
          <CardAboutDescription>
            <p>
              I&apos;m presently developing Embark, a versatile project
              management solution designed specifically for small companies and
              freelancers.
            </p>
            <p>
              This tool covers everything from client to finance management,
              empowering entrepreneurs to efficiently oversee their operations.
            </p>
            <p>
              Additionally, it will feature a project portal enabling clients to
              track project progress and access all necessary documents shared
              by the entrepreneurs.
            </p>
          </CardAboutDescription>
        </CardAboutHeader>
        <CardAboutContent>
          <div className="flex flex-row items-center justify-center py-2 bg-white rounded-full text-sm uppercase font-mono">
            Coming soon
          </div>
        </CardAboutContent>
      </CardAboutMain>
      <CardAboutImage
        src="/homepage/Photos/Paris2024.jpg"
        alt="Erwann François - Software Engineer"
      />
    </CardAbout>
  );
}

export const cardsData = [
  { layout: <CardConnect />, order: 1 },
  { layout: <CardMarathon />, order: 2 },
  { layout: <CardCareer />, order: 3 },
  { layout: <CardEFType />, order: 4 },
  { layout: <CardTravel />, order: 5 },
  { layout: <CardEmbark />, order: 6 },
];
