import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Header() {
  return (
    <header className="px-4 md:px-8 py-2 md:py-3">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col md:flex-row md:items-center font-medium">
          <Link
            href="/"
            className="md:hover:underline hover:underline-offset-4"
          >
            Erwann François
          </Link>
          <div className="flex flex-row items-center">
            <ArrowRightIcon className="mr-1 md:mr-2 md:ml-2 text-foreground-secondary" />
            <span className="text-foreground-secondary">
              Available for hire
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 md:space-x-12">
          <ThemeSwitcher />

          <Menu />
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
