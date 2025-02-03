import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "BSH Cargo | Modern Shipping Solutions",
  description:
    "BSH Cargo - Your trusted partner in global shipping and logistics solutions. Fast, reliable, and efficient cargo services worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${syne.className} antialiased bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
