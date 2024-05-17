"use client";

import { IoReturnDownForwardSharp } from "react-icons/io5";
import Image from "next/image";
import SocialLinks from "@/components/socials/SocialLinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { News, fetchNewsData } from "@/services/fetchNewsData";
import NewsList from "@/components/news/NewsList";

export default function Home() {
  const [newsData, setNewsData] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await fetchNewsData();
      setNewsData(news.slice(0, 4));
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="wrapper my-12 flex flex-col gap-10">
        {/* Hero Header */}
        <div className="hero__container">
          <div className="hero__text">
            <h1>
              Hello, I&apos;m{" "}
              <span className="hero__text--emphasis">Erwann</span>, a
              product-driven{" "}
              <span className="hero__text--emphasis">
                full-stack software engineer, designer, and type maker
              </span>
              , who thrives on exploration, both in code and in life.
            </h1>
            <p>
              I&apos;m{" "}
              <span className="hero__text--emphasis">
                currently on the lookout for exciting full-time software
                engineering contract opportunities
              </span>{" "}
              where I can bring my expertise to the table and dive into dynamic
              group projects.
            </p>
          </div>
          <div className="hero__cta">
            <IoReturnDownForwardSharp />
            <a href="mailto:mail@erwann.co" className="link--hovered">
              mail@erwann.co
            </a>
          </div>
        </div>
        {/* End Hero Header */}
        {/* Photo */}
        <div className="flex flex-row justify-end">
          <div className="md:w-[50%]">
            <Image
              src="/homepage/Images/Erwann.avif"
              alt="Erwann François - Software Engineer"
              sizes="100vw"
              width={160}
              height={90}
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
        {/* End Photo */}
        {/* Content */}
        <div>
          {/* Connect with me */}
          <div className="content__section flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <h2>Connect with me</h2>
            <SocialLinks />
          </div>
          {/* End Connect with me */}
          {/* About */}
          <div className="content__section flex flex-col gap-6">
            <h2>About</h2>
            <div className="flex flex-col gap-4">
              <div className="about__wrapper">
                <div className="about__bullet" />
                <p className="about__text">
                  Passionate about new cultures and landscapes, I travelled
                  across more than{" "}
                  <Link href="/travels" className="about__link">
                    35 countries on every continent
                  </Link>{" "}
                  and most of them where solo journeys, my backpack in tow.
                </p>
              </div>
              <div className="about__wrapper">
                <div className="about__bullet" />
                <p className="about__text">
                  Engineering software solutions for more than 8 years. {""}
                  <a href="#" className="about__link">
                    Download my CV
                  </a>
                </p>
              </div>
              <div className="about__wrapper">
                <div className="about__bullet" />
                <p className="about__text">
                  Currently working on Embark, a project management solution for
                  small businesses and independents. More about it coming soon.
                </p>
              </div>
              <div className="about__wrapper">
                <div className="about__bullet" />
                <p className="about__text">
                  Crafting custom typefaces for the future launch of EF Type
                  Foundry, my platform to show and retail my fonts.
                </p>
              </div>
              <div className="about__wrapper">
                <div className="about__bullet" />
                <p className="about__text">
                  Triathlete but more runner at the moment (I secured a bib for
                  the{" "}
                  <a
                    href="https://marathonpourtous.paris2024.org/fr/infos-pratiques/parcours"
                    target="_blank"
                    className="about__link"
                  >
                    Paris 2024 Olympic Games Marathon pour Tous
                  </a>
                  )
                </p>
              </div>
            </div>
          </div>
          {/* End About */}
          {/* News */}
          <div className="content__section flex flex-col gap-6">
            <div className="flex flex-row justify-between items-center">
              <h2>My latest news</h2>
              <Link
                href="/news"
                className="flex flex-row items-center gap-2 link--hovered"
              >
                <IoReturnDownForwardSharp />
                <span>See all news</span>
              </Link>
            </div>
            <NewsList news={newsData} />
          </div>
          {/* End News */}
        </div>
        {/* End Content */}
      </div>
    </>
  );
}
