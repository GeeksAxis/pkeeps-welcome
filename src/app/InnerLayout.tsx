"use client";
import { useTheme } from "@/components/context/ThemeContext";
import Navbar from "@/components/custom/NavBar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function InnerLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${geistSans.variable} ${
        geistMono.variable
      } antialiased transition-all duration-500   ${
        theme === "dark" ? "dark" : ""
      } `}
    >
      <Navbar />
      {children}
    </div>
  );
}
