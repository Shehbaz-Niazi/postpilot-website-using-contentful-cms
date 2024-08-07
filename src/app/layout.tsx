import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/components/widgets/NavbarSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post Pilot Marketing",
  description: "create by Full Stack Web Developer Shehbaz Niazi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarSection/>
        {children}
        </body>
    </html>
  );
}
