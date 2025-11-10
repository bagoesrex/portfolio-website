import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import localFont from 'next/font/local'
import Footer from "@/components/layout/footer";

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
  metadataBase: new URL("https://bagoes.dev"),
  title: "Bagus Rahmawan | Tech Enthusiast",
  description: "a passionate technology enthusiast and developer.",
  keywords: ["Bagus Rahmawan", "bagoesrex", "bagoes rex", "web developer", "portfolio", "next.js", "frontend", "software engineer"],
  authors: [{ name: "Bagus Rahmawan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.className} antialiased min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
