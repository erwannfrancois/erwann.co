import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/header/Header";

export const metadata: Metadata = {
  title: "Erwann François | Software Engineer",
  description:
    "Erwann François is a product-centred full-stack software engineer with a love for exploration both in code and in life. He is currently available for hire.",
};

export default function NoFooterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <main className="flex mx-auto items-center max-w-[1600px] mt-6 md:mt-8 py-2 md:py-3 px-4 md:px-0">
        {children}
      </main>
    </section>
  );
}
