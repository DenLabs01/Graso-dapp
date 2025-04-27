import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body className='antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
