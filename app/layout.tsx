import type { Metadata } from "next";
import {
  Architects_Daughter,
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-architects-daughter",
});

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
  description:
    "Official portfolio of Bagus Rahmawan (BagoesRex), a web developer building responsive and interactive web applications with Next.js and modern frontend technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        architectsDaughter.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
