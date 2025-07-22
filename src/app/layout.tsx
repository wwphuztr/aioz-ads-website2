import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cambridge Dictionary - English Dictionary & Thesaurus",
  description: "The most popular dictionary and thesaurus for learners of English. Meanings and definitions of words with pronunciations and translations.",
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
        <Script
          src="https://api-ads.aitoaz.cyou/api/v1/platform/download_header_script_file?orgId=ce6faa21-4f5e-4f77-9f5b-fcf569bb847a&platformId=500bf3fa-b90f-440e-820b-9acffeeaa0f"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
