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
          src="https://api-ads.attoaioz.cyou/api/v1/platform/download_header_script_file.js?orgId=ce6faa21-416e-4f77-915b-1e759d91b847&platformId=50fd8f60-2b07-446e-a20b-9ac11feeefb1"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
