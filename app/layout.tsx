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
  description: "Official portfolio of Bagus Rahmawan (BagoesRex), web developer specializing in Next.js and modern frontend technologies.",
  keywords: ["Bagus Rahmawan", "BagoesRex", "bagoesrex", "Web Developer", "Next.js Developer", "Frontend Developer", "Portfolio Website"],
  authors: [{ name: "Bagus Rahmawan" }],
  openGraph: {
    title: "Bagus Rahmawan | Tech Enthusiast",
    description: "Official portfolio of Bagus Rahmawan (BagoesRex), web developer specializing in Next.js and modern frontend technologies.",
    url: "https://bagoes.dev",
    siteName: "bagoes.dev",
    locale: "en_US",
    type: "website",
  },
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
