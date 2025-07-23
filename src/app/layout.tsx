import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
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
      <head>
        <script
          defer
          src="https://api-ads.attoaioz.cyou/api/v1/platform/download_header_script_file.js?orgId=ce6faa21-416e-4f77-915b-1e759d91b847&platformId=55080037-615f-4021-98b4-7cfe4d120413"
          crossOrigin="anonymous">
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://api-ads-publisher.attoaioz.cyou/api/v1/script"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {/* <Script
          src="https://api-ads.attoaioz.cyou/api/v1/platform/download_header_script_file.js?orgId=ce6faa21-416e-4f77-915b-1e759d91b847&platformId=50fd8f60-2b07-446e-a20b-9ac11feeefb1"
          strategy="beforeInteractive"
        /> */}
        {children}
      </body>
    </html>
  );
}
