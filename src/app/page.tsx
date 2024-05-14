import SocialLinks from "@/components/socials/SocialLinks";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper flex flex-col gap-20 md:gap-40">
      {/* Hero Header */}
      <div className="flex flex-row gap-12 md:mt-8">
        <div className="hidden md:block w-[20%]"></div>
        <div className="flex flex-col gap-8 md:gap-12 flex-1">
          <h1 className="text-3xl md:text-display font-medium">
            Full-stack software engineer, designer, and type maker.
          </h1>
          <div className="flex flex-col gap-4 md:w-[50%] text-foreground-secondary">
            <p>
              Hello, I&apos;m <span className="text-foreground">Erwann</span>, a
              product-driven full-stack software engineer who thrives on
              exploration, both in code and in life. I merge code and design to
              deliver meaningful user-centric solutions.
            </p>
            <p>
              I&apos;m currently{" "}
              <span className="text-foreground">
                on the lookout for exciting full-time software engineering
                contract opportunities
              </span>{" "}
              where I can bring my expertise to the table and dive into dynamic
              group projects.
            </p>
            <a href="mailto:mail@erwann.co" className="link">
              Get in touch
            </a>
          </div>
          <div className="flex flex-row justify-end">
            <div className="md:w-[50%]">
              <Image
                src="/homepage/Images/Erwann.avif"
                alt="Erwann François - Software Engineer"
                sizes="100vw"
                width={160}
                height={90}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Header */}
      {/* Projects */}
      <div className="flex flex-col gap-8">
        <h2 className="font-medium text-3xl md:text-display">
          Current personal projects
        </h2>
        <hr className="border border-border/50"></hr>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="hidden md:block md:w-[20%]"></div>
          <div className="flex flex-col md:flex-row gap-12 flex-1">
            {/* Project Embark */}
            <div className="flex flex-col gap-6 flex-1">
              <div>
                <Image
                  src="/homepage/Images/Project.avif"
                  alt="Embark - Project Management Solution"
                  sizes="100vw"
                  width={160}
                  height={90}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="project-title">Embark</h3>
                <p className="text-foreground-secondary">
                  A project management solution for small businesses and
                  freelancers. It covers client and finance management and
                  includes a project portal for clients to track progress and
                  access shared documents.
                </p>
              </div>
            </div>
            {/* Project EF Type Foundry */}
            <div className="flex flex-col gap-6 flex-1">
              <div>
                <Image
                  src="/homepage/Images/Project.avif"
                  alt="EF Type Foundry - Font Platform"
                  sizes="100vw"
                  width={160}
                  height={90}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="project-title">EF Type Foundry</h3>
                <p className="text-foreground-secondary">
                  As a software engineer and designer, I&apos;ve delved into
                  various design areas, from graphic to UI/UX design but
                  typography slowly became my passion, and I&apos;m now creating
                  custom typefaces. <br />
                  EF Type Foundry is my platform to showcase and sell these
                  fonts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Projects */}
      {/* About */}
      <div className="flex flex-col gap-12 md:w-[50%]">
        <div className="about-container">
          <h2 className="font-medium">A little more about me</h2>
          <div className="flex flex-col gap-2 text-foreground-secondary">
            <p>
              I&apos;ve journeyed through diverse landscapes and cultures across
              more than{" "}
              <Link href="/travels" className="link">
                35 countries on every continent
              </Link>
              . In 2023, I immersed myself in the stunning landscapes of
              Kyrgyzstan, from high-altitude lakes to unforgettable Yurt camp
              experiences. I cannot recommend visiting that beautiful country
              enough.
            </p>
            <p>
              Sports also play a big part in my life. From handball matches to
              horse riding through Crossfit sessions, I&apos;ve embraced a wide
              array of athletic disciplines. In January, I&apos;ve also secured
              my bib for the{" "}
              <a
                href="https://marathonpourtous.paris2024.org/fr/infos-pratiques/parcours"
                target="_blank"
                className="link"
              >
                Paris 2024 Olympic Games Marathon pour Tous
              </a>
              . With the big day on August 10, 2024, I&apos;m laser-focused on
              training and setting my first time on this distance.
            </p>
          </div>
        </div>
        <div className="about-container">
          <h2 className="font-medium">Let&apos;s connect</h2>
          <SocialLinks className="link" />
        </div>
        <div className="about-container">
          <h2 className="font-medium">Career & experience</h2>
          <a href="#" target="_blank" className="link">
            Download my CV
          </a>
        </div>
      </div>
      {/* End About */}
      {/* News */}
      <div className="flex flex-col gap-8">
        <h2 className="font-medium text-3xl md:text-display">My latest news</h2>
        <hr className="border border-border/50"></hr>
        <div className="flex flex-row gap-12"></div>
      </div>
      {/* End News */}
    </div>
  );
}
