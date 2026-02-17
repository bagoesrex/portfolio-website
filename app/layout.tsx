import type { Metadata } from "next";
import { Geist, Geist_Mono, Patrick_Hand, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick-hand",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${patrick.variable} ${merriweather.variable} font-serif antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
