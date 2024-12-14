import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Cursor } from "@/core/components/cursor";
import { FooterComponent, HeaderComponent } from "@/core/components/layout";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piset Heang",
  description: "Welcome to Piset Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComponent />
        {children}
        <FooterComponent />

        <Cursor />
      </body>
    </html>
  );
}
