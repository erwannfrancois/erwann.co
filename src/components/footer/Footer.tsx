import Link from "next/link";
import SocialLinks from "../socials/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-40">
      {/* Wrapper */}
      <div className="wrapper">
        {/* Top Container */}
        <div className="footer__container">
          <Link href="/" className="font-medium link--hovered">
            Erwann François
          </Link>
          <a href="mailto:mail@erwann.co" className="link--hovered">
            mail@erwann.co
          </a>
        </div>
        {/* End Top Container */}
        {/* Bottom Container */}
        <div className="footer__container">
          <p className="text-sm text-foreground-secondary">
            Copyright © 2024, All Rights Reserved.
          </p>
          <SocialLinks />
        </div>
        {/* End Bottom Container */}
      </div>
      {/* End Wrapper */}
    </footer>
  );
}
