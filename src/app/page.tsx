// "use client";
import Footer from "@/components/custom/Footer";
import { Hero } from "@/components/custom/Hero";
import MetricsStatistics from "@/components/custom/Metric-statistics";
import PreOrderSection from "@/components/custom/PreOrderSection";
import SecuritySection from "@/components/custom/security-section";
import WhoPkeepsIsFor from "@/components/custom/who-is-pkeeps-for";
import WhyItsImportant from "@/components/custom/why-its-important";
import { CreditCard, Hand } from "lucide-react";
import type { Metadata } from "next";

// ✅ This metadata is automatically used by Next.js for SEO & social previews
export const metadata: Metadata = {
  title: "Pkeeps - Secure Your Legacy",
  description:
    "Pkeeps lets you securely store and share sensitive digital assets, only when it matters most.",
  openGraph: {
    title: "Pkeeps - Secure Your Legacy",
    description:
      "Store and transfer digital assets with confidence. Share only when necessary.",
    url: "https://pkeeps.com", // your production URL
    siteName: "Pkeeps",
    images: [
      {
        url: "https://pkeeps.com/og-image.jpg", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Pkeeps - Secure Your Legacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pkeeps - Secure Your Legacy",
    description:
      "Pkeeps securely stores and transfers your digital assets when you're gone.",
    images: ["https://pkeeps.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero
        content={{
          title: "Secure Your Legacy. Share It When It Matters Most.",
          titleHighlight: "with ease",
          description:
            "Pkeeps lets you safely store and transfer sensitive digital assets to your chosen people—only when you're no longer around.",
          primaryAction: {
            href: "/docs/getting-started",
            text: "Pre-order now - $8 for 1 year (Limited Offer)",
            icon: <CreditCard />,
          },
          secondaryAction: {
            href: "/components",
            text: "Join the Waitlist",
            icon: <Hand />,
          },
        }}
      />
      <WhoPkeepsIsFor />
      <WhyItsImportant />
      <MetricsStatistics />
      <SecuritySection />
      <PreOrderSection />
      <Footer />
    </>
  );
}
