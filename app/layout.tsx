import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "BSH Logistics | Modern Shipping Solutions",
  description:
    "BSH Logistics - Your trusted partner in global shipping and logistics solutions. Fast, reliable, and efficient cargo services worldwide.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${syne.className} antialiased bg-white`}>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
