import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header/Header";

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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rpw3fpi.css" />
        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col font-primary md:px-8">
        {/* HEADER */}
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
