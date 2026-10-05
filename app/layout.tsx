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
  metadataBase: new URL("https://bagoesrex.com"),
  title: {
    default: "Bagus Rahmawan — BagoesRex",
    template: "%s | Bagus Rahmawan",
  },
  description:
    "Portfolio of Bagus Rahmawan (BagoesRex), a web developer building responsive and interactive web applications with Next.js and modern frontend technologies.",
  keywords: [
    "Bagus Rahmawan",
    "BagoesRex",
    "bagoesrex",
    "web developer",
    "frontend developer",
    "Next.js developer",
    "portfolio",
  ],
  authors: [{ name: "Bagus Rahmawan", url: "https://bagoesrex.com" }],
  creator: "Bagus Rahmawan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bagoesrex.com",
    siteName: "Bagus Rahmawan",
    title: "Bagus Rahmawan — BagoesRex",
    description:
      "Portfolio of Bagus Rahmawan (BagoesRex), a web developer building responsive and interactive web applications with Next.js and modern frontend technologies.",
  },
  twitter: {
    card: "summary",
    title: "Bagus Rahmawan — BagoesRex",
    description:
      "Portfolio of Bagus Rahmawan (BagoesRex), a web developer building responsive and interactive web applications.",
    creator: "@bagoesrex",
  },
  alternates: {
    canonical: "https://bagoesrex.com",
  },
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
      <body className="flex min-h-full min-w-sm flex-col overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
