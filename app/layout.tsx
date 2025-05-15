import type React from "react";
import type { Metadata } from "next";
import {
  Montserrat,
  DM_Sans,
  Inter,
  Syne,
  Raleway,
  Roboto_Condensed,
  League_Spartan,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graso",
  description:
    "A decentralized platform aimed at providing developers and individual investors access to the real estate market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable}
          ${dmSans.variable}
          ${inter.variable}
          ${syne.variable}
          ${raleway.variable}
          ${robotoCondensed.variable}
          ${leagueSpartan.variable}
          antialiased
          w-full min-h-screen
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
