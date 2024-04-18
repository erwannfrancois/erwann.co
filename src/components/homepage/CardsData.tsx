import { fontSecondary } from "@/config/fonts";
import { socialItems } from "@/constants/social-items";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const handleCopyToClipboard = () => {
  const textToCopy = "mail@erwann.co";
  navigator.clipboard
    .writeText(textToCopy)
    .catch((error) => console.error("Error copying text: ", error));
};

function SocialCard() {
  return (
    <div className="flex flex-col text-center gap-8 h-full w-full">
      <div className="flex flex-col gap-4">
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          Connect with me
        </h2>
        <p>
          Discover what I&apos;m up to with the following socials (
          <span className="font-medium">@erwannfrancois</span> everywhere)
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-3 font-medium">
          <li
            onClick={handleCopyToClipboard}
            className="flex flex-row items-center justify-between py-2.5 px-5 rounded-md shadow cursor-pointer bg-rose-100"
          >
            <span>mail@erwann.co</span>
            <span>Click to copy</span>
          </li>
          {socialItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "flex flex-row items-center justify-between py-2.5 px-5 rounded-md shadow",
                  item.bgColor
                )}
                target="_blank"
              >
                <span>{item.label}</span>
                <span>{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MarathonCard() {
  return (
    <div className="flex flex-col text-center gap-8 h-full w-full">
      <div className="relative h-52">
        <Image
          src="/homepage/Photos/Paris2024.jpg"
          alt="Paris 2024 Olympic Games Posters"
          sizes="100vw"
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          My first marathon
        </h2>
        <p>
          Back in January, I scored my bib for the Paris 2024 Olympic Games
          Marathon pour Tous. <br />
          Now, I&apos;m preparing for the big day on August 10, 2024!
        </p>
      </div>
      <div>
        <Button asChild className="bg-white w-full">
          <a
            href="https://marathonpourtous.paris2024.org/fr/infos-pratiques/parcours"
            target="_blank"
          >
            Discover the race
          </a>
        </Button>
      </div>
    </div>
  );
}

function CareerCard() {
  return (
    <div className="flex flex-col text-center gap-8 h-full w-full">
      <div className="relative h-52">
        <Image
          src="/homepage/Photos/Paris2024.jpg"
          alt="Career Link"
          sizes="100vw"
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          Career & Experience
        </h2>
        <div className="flex flex-col gap-2">
          <p>
            Combining my skills as both a designer and a full-stack software
            engineer, I bring a unique perspective to every project I undertake.
          </p>
          <p>
            With a foundation in Microsoft technologies like C#, ASP.NET and
            Vue.js, my journey has evolved to focus on TypeScript-based
            solutions such as Node.js, React, and frameworks like Nest.js and
            Next.js.
          </p>
          <p>
            In addition to my engineering expertise, my design proficiency plays
            a pivotal role in my work. Leveraging tools like Figma, I seamlessly
            blend creativity with technical ability to craft intuitive
            interfaces that enhance user experiences.
          </p>
        </div>
      </div>
      <div>
        <Button asChild className="bg-white w-full">
          <a href="#" target="_blank">
            Download my CV
          </a>
        </Button>
      </div>
    </div>
  );
}

function EFTypeCard() {
  return (
    <div className="flex flex-col text-center gap-8 h-full w-full">
      <div className="relative h-52">
        <Image
          src="/homepage/Photos/Paris2024.jpg"
          alt="Career Link"
          sizes="100vw"
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white rounded-full px-4 py-1.5 w-fit text-sm font-medium">
          Currently designing
        </div>
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          EF Type
        </h2>
        <div className="flex flex-col gap-2">
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
        </div>
      </div>
    </div>
  );
}

function ErwannCard() {
  return (
    <div className="flex flex-col text-center gap-8 h-full w-full">
      <div className="relative h-52">
        <Image
          src="/homepage/Photos/Paris2024.jpg"
          alt="Career Link"
          sizes="100vw"
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          Erwann [erˌwan]
        </h2>
        <p>
          I&apos;m Erwann François. Pronouncing my first name, Erwann, might
          pose a challenge, but here&apos;s a tip: think &quot;Air One.&quot;
        </p>
      </div>
    </div>
  );
}

function TravelCard() {
  return (
    <div className="flex flex-col text-center gap-8 h-full w-full">
      <div className="relative h-52">
        <Image
          src="/homepage/Photos/Paris2024.jpg"
          alt="Career Link"
          sizes="100vw"
          fill={true}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          My last travel
        </h2>
        <div className="flex flex-col gap-2">
          <p>
            During the summer of 2023, I embarked on a month-long journey to
            Kazakhstan and Kyrgyzstan.
          </p>
          <p>
            From breathtaking lakes nestled at 3000m to unforgettable
            experiences in Yurt camps, I wholeheartedly recommend exploring the
            wonders of Kyrgyzstan.
          </p>
        </div>
      </div>
      <div>
        <Button asChild className="bg-white w-full">
          <Link href="/travels">All my travels</Link>
        </Button>
      </div>
    </div>
  );
}

function EmbarkCard() {
  return (
    <div className="flex flex-col items-center text-center gap-8 h-full w-full">
      <Image
        src="/homepage/Photos/Embark.gif"
        alt="Career Link"
        sizes="100vw"
        width={160}
        height={90}
        className="rounded-lg object-center"
      />
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white rounded-full px-4 py-1.5 w-fit text-sm font-medium">
          Coming soon
        </div>
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          Embark Projects
        </h2>
        <div className="flex flex-col gap-2">
          <p>
            I&apos;m presently developing Embark, a versatile project management
            solution designed specifically for small companies and freelancers.
          </p>
          <p>
            This tool covers everything from client to finance management,
            empowering entrepreneurs to efficiently oversee their operations
          </p>
          <p>
            Additionally, it will feature a project portal enabling clients to
            track project progress and access all necessary documents shared by
            the entrepreneurs.
          </p>
        </div>
      </div>
    </div>
  );
}

function MoodCard() {
  return (
    <div className="flex flex-col items-center text-center gap-8 h-full w-full">
      <Image
        src="/homepage/Photos/MScottDance.gif"
        alt="Career Link"
        sizes="100vw"
        width={160}
        height={90}
        className="rounded-lg object-center w-full"
      />
      <div className="flex flex-col items-center gap-4">
        <h2
          className={cn(
            "text-3xl font-secondary font-medium",
            fontSecondary.variable
          )}
        >
          My current mood
        </h2>
        <p>
          Who doesn&apos;t love a little bit of Michael Scott&apos;s dancing
          moves?
        </p>
      </div>
    </div>
  );
}

export const cardData = [
  { layout: <SocialCard />, color: "bg-white", order: 1 },
  { layout: <MarathonCard />, color: "bg-orange-200", order: 2 },
  { layout: <CareerCard />, color: "bg-blue-200", order: 3 },
  { layout: <EFTypeCard />, color: "bg-yellow-200", order: 4 },
  { layout: <ErwannCard />, color: "bg-sky-200", order: 5 },
  { layout: <TravelCard />, color: "bg-lime-200", order: 6 },
  { layout: <EmbarkCard />, color: "bg-purple-200", order: 7 },
  { layout: <MoodCard />, color: "bg-pink-200", order: 8 },
];
