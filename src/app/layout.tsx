import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Nunito, Yellowtail } from "next/font/google";

import { shop } from "@/data/shop";

import "./globals.css";

// Script and slab faces echo the two lettering styles on the shop's sign.
const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
});

const alfaSlab = Alfa_Slab_One({
  variable: "--font-alfa-slab",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const title = `${shop.name} | Donuts & Kolaches in the Heights`;

export const metadata: Metadata = {
  title,
  description: shop.description,
  // Demo build: keep it out of search results so it never competes with the shop's own listings.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: shop.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#4b2a1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${yellowtail.variable} ${alfaSlab.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
