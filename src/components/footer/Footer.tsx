import Link from "next/link";
import SocialLinks from "../socials/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-40 bg-surface-primary text-foreground-on_primary mt-40 pt-40 pb-2">
      <div className="wrapper flex flex-col md:flex-row gap-4 justify-between items-baseline">
        <div className="flex flex-col md:flex-row items-baseline md:gap-10">
          <Link href="/" className="brand text-3xl md:text-display">
            Erwann François
          </Link>
          <span>Available for hire</span>
        </div>
        <div className="flex flex-row items-baseline gap-10">
          <a href="mailto:mail@erwann.co" className="footer-link">
            mail@erwann.co
          </a>
          <SocialLinks className="footer-link" />
        </div>
      </div>
    </footer>
  );
}
