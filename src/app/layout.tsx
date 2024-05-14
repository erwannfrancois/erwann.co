import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Erwann François | Software Engineer",
  description:
    "Erwann François is a full-stack software engineer, designer and type maker. He is currently available for hire.",
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
      <body className="min-h-screen antialiased font-primary">
        {/* HEADER */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
