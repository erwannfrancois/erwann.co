import localfont from "next/font/local";

export const fontPrimary = localfont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal/PPNeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal/PPNeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/PPNeueMontreal/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-primary",
});
