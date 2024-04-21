import { cn } from "@/lib/utils";
import Image from "next/image";

// Card Parent
interface CardAboutProps {
  bgColor: string;
  children: React.ReactNode;
}

function CardAbout({ bgColor, children }: CardAboutProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between space-y-6 min-h-[480px] text-black rounded-sm",
        bgColor
      )}
    >
      {children}
    </div>
  );
}

// Main part
interface CardAboutMainProps {
  children: React.ReactNode;
}

function CardAboutMain({ children }: CardAboutMainProps) {
  return <div className="p-6 md:p-8 space-y-6">{children}</div>;
}

// Header
interface CardAboutHeaderProps {
  children: React.ReactNode;
}

function CardAboutHeader({ children }: CardAboutHeaderProps) {
  return <div className="space-y-4">{children}</div>;
}

// Title
interface CardAboutTitleProps {
  children: React.ReactNode;
}

function CardAboutTitle({ children }: CardAboutTitleProps) {
  return <h2 className="text-xl font-medium">{children}</h2>;
}

// Description
interface CardAboutDescriptionProps {
  children: React.ReactNode;
}

function CardAboutDescription({ children }: CardAboutDescriptionProps) {
  return <p>{children}</p>;
}

// Content
interface CardAboutContentProps {
  children: React.ReactNode;
}

function CardAboutContent({ children }: CardAboutContentProps) {
  return <div>{children}</div>;
}

// Image
interface CardAboutImageProps {
  src: string;
  alt: string;
}

function CardAboutImage({ src, alt }: CardAboutImageProps) {
  return (
    <div className="pr-6 md:pr-8">
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        width={160}
        height={90}
        className="w-full h-auto rounded-se-md"
      />
    </div>
  );
}

export {
  CardAbout,
  CardAboutMain,
  CardAboutHeader,
  CardAboutTitle,
  CardAboutDescription,
  CardAboutContent,
  CardAboutImage,
};
