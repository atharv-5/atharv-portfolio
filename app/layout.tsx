import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atharv Gehlod | Data Analytics & Machine Learning",
  description:
    "Personal portfolio of Atharv Gehlod, B.Tech CSE student specializing in Data Analytics, Machine Learning, and Financial Technology.",
  keywords: [
    "Atharv Gehlod",
    "Data Analytics",
    "Machine Learning",
    "Python",
    "SQL",
    "Portfolio",
    "Financial Technology",
  ],
  authors: [{ name: "Atharv Gehlod" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-bg)] text-[var(--color-dark)]">
        {children}
      </body>
    </html>
  );
}
