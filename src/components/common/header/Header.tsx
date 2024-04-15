import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex mx-auto items-center max-w-[1600px] py-2 md:py-3 px-4 md:px-0">
      <div className="flex flex-row w-full justify-between items-start">
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
        <div className="flex flex-row items-center space-x-8 md:space-x-12">
          <ThemeSwitcher />

          <Menu />
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
