import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/context/ThemeContext";
import { InnerLayout } from "./InnerLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "pkeeps ",
  description:
    "pkeeps is a platform that connects Provides estate planning and management services to individuals and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <ThemeProvider>
          <InnerLayout>{children}</InnerLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
