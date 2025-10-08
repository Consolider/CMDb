import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Card from "@/components/card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOVIES",
  description: "A website with movies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased w-[100%] h-[100vh] flex items-center justify-center`}
        >
        <Header />
        {children}
        {/* <Card /> */}
      </body>
    </html>
  );
}
