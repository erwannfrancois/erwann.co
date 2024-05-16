import {
  SiLinkedin,
  SiGithub,
  SiStrava,
  SiGoodreads,
  SiMedium,
} from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-6">
      <SocialMediaLink
        href="https://www.linkedin.com/in/erwannfrancois/"
        icon={<SiLinkedin />}
      />
      <SocialMediaLink
        href="https://github.com/erwannfrancois"
        icon={<SiGithub />}
      />
      <SocialMediaLink href="https://www.medium.com" icon={<SiMedium />} />
      <SocialMediaLink
        href="https://www.goodreads.com/erwannfrancois"
        icon={<SiGoodreads />}
      />
      <SocialMediaLink
        href="https://www.strava.com/athletes/erwannfrancois"
        icon={<SiStrava />}
      />
    </div>
  );
};

interface SocialMediaLinkProps {
  href: string;
  icon: JSX.Element;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link--hovered"
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
