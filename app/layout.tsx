import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import localFont from 'next/font/local'

const nunitoSans = localFont({
  src: '../public/fonts/NunitoSans.ttf',
  variable: "--font-nunito-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bagus Rahmawan",
  description: "Just a tech anthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
