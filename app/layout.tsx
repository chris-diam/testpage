import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Roboto } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Flex({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
