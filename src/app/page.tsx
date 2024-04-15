import ThemeSwitcher from "@/components/common/theme/ThemeSwitcher";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-10 mx-auto items-start mb-12">
      <div className="col-span-3">
        <div className="flex flex-col space-y-12 md:space-y-20">
          <div className="text-xl md:text-display font-medium text-foreground-secondary space-y-8">
            <p>
              I&apos;m <span className="text-foreground">Erwann</span>, a
              product-centered{" "}
              <span className="text-foreground">
                full-stack software engineer
              </span>{" "}
              with a love for exploration both in code and in life.
            </p>
            <p>
              When I&apos;m not coding or designing, you&apos;ll probably find
              me training for my first{" "}
              <span className="text-foreground">marathon</span>, discovering{" "}
              <span className="text-foreground">new cultures</span>, lost in a
              good <span className="text-foreground">book</span>, embracing the
              great <span className="text-foreground">outdoors</span>.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start py-4 border-t font-medium space-y-4 md:space-y-0">
            <div className="flex flex-col space-x-0">
              <p>Currently seeking full-time contract opportunities,</p>
              <p className="text-foreground-secondary">
                I’m excited to contribute my expertise to dynamic projects.
              </p>
            </div>
            <div className="flex flex-row space-x-4 md:space-x-0 md:flex-col md:items-end">
              <p className="flex flex-row items-center">
                <ArrowRightIcon className="mr-2" /> Reach me by email
              </p>
              <a
                href="mailto:mail@erwann.co"
                className="text-foreground-secondary"
              >
                mail@erwann.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
