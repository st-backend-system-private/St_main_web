import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Shatripthi Technologies | Technology That Moves Kolkata Forward",
  description: "Shatripthi Technologies Private Limited is a technology company building next-generation software products for urban India, starting with mobility and expanding into hyperlocal platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="shatripthi"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
