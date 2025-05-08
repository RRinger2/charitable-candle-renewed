import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "./context/SearchContext";
import ClientLayout from "./ClientLayout";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Charitable Candle - Handcrafted Candles for a Cause",
  description: "Discover our collection of handcrafted, premium quality candles that support charitable causes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}>
      <body className="bg-gray-50 min-h-screen">
        <SearchProvider>
          <ClientLayout>{children}</ClientLayout>
        </SearchProvider>
      </body>
    </html>
  );
}
