import {
  SiLinkedin,
  SiGithub,
  SiStrava,
  SiGoodreads,
  SiMedium,
} from "react-icons/si";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className="flex flex-row space-x-6">
      <SocialMediaLink
        href="https://www.linkedin.com/in/erwannfrancois/"
        icon={<SiLinkedin />}
        className={className}
      />
      <SocialMediaLink
        href="https://github.com/erwannfrancois"
        icon={<SiGithub />}
        className={className}
      />
      <SocialMediaLink
        href="https://www.medium.com/@erwann.francois"
        icon={<SiMedium />}
        className={className}
      />
      <SocialMediaLink
        href="https://www.goodreads.com/erwannfrancois"
        icon={<SiGoodreads />}
        className={className}
      />
      <SocialMediaLink
        href="https://www.strava.com/athletes/erwannfrancois"
        icon={<SiStrava />}
        className={className}
      />
    </div>
  );
};

interface SocialMediaLinkProps {
  href: string;
  icon: JSX.Element;
  className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  icon,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
