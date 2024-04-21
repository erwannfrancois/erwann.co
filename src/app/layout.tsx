import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
      </head>
      <body className="min-h-screen antialiased font-primary md:px-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* HEADER */}
          <Header />
          <main>{children}</main>
          {/* FOOTER */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
