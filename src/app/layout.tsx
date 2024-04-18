import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/common/theme/ThemeProvider";
import Header from "@/components/common/header/Header";

import { fontPrimary } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Erwann François | Software Engineer",
  description:
    "Erwann François is a product-centred full-stack software engineer with a love for exploration both in code and in life. He is currently available for hire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased font-primary",
          fontPrimary.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex mx-auto items-center max-w-[1600px] mt-12 md:mt-24 py-2 md:py-3 px-4 md:px-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
