"use client";
import Footer from "@/components/custom/Footer";
import { Hero } from "@/components/custom/Hero";
import MetricsStatistics from "@/components/custom/Metric-statistics";
import PreOrderSection from "@/components/custom/PreOrderSection";
import SecuritySection from "@/components/custom/security-section";
import WhoPkeepsIsFor from "@/components/custom/who-is-pkeeps-for";
import WhyItsImportant from "@/components/custom/why-its-important";
import { CreditCard, Hand } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* <div className="relative  w-full overflow-hidden rounded-lg  bg-background"> */}
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
      {/* </div> */}
      <WhoPkeepsIsFor />
      <WhyItsImportant />
      <MetricsStatistics />
      <SecuritySection />
      <PreOrderSection />
      <Footer />
    </>
  );
}
