"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import PreOrderModal from "./PreOrderModal";

// import HeroBadge from "@/components/ui/hero-badge";

const ease = [0.16, 1, 0.3, 1];

interface HeroContentProps {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
}

function HeroContent({
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
}: HeroContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"pre-order" | "waitlist">(
    "pre-order"
  );

  const openPreOrderModal = () => {
    setModalType("pre-order");
    setIsModalOpen(true);
  };

  const openWaitlistModal = () => {
    setModalType("waitlist");
    setIsModalOpen(true);
  };

  return (
    <div className={`flex flex-col transition-all duration-300 space-y-4 `}>
      <motion.h1
        className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </motion.h1>
      <motion.p
        className="max-w-[42rem] leading-normal text-primary sm:text-xl sm:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease }}
      >
        {primaryAction && (
          <Button
            // href={primaryAction.href}
            onClick={() => {
              openPreOrderModal();
            }}
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center"
            )}
          >
            {primaryAction.icon}
            {primaryAction.text}
          </Button>
        )}
        {secondaryAction && (
          <Button
            // href={secondaryAction.href}
            onClick={() => {
              openWaitlistModal();
            }}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 w-full sm:w-auto text-primary justify-center"
            )}
          >
            {secondaryAction.icon}
            {secondaryAction.text}
          </Button>
        )}
      </motion.div>
      <PreOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </div>
  );
}

interface HeroProps {
  pill?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
  };
  content: HeroContentProps;
  preview?: React.ReactNode;
}

const Hero = ({ pill, content, preview }: HeroProps) => {
  console.log(pill);
  const { width, height } = useWindowSize();

  return (
    <div className="  relative overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 -z-30  size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.25}
        flickerChance={0.5}
        height={height!}
        width={width!}
      />
      <div className="flex min-h-[calc(60vh-64px)] z-10 flex-col lg:flex-row items-center py-8 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 w-full lg:max-w-2xl">
          {/* {pill && <HeroBadge {...pill} />} */}
          <HeroContent {...content} />
        </div>
        {preview && (
          <div className="w-full lg:max-w-xl lg:pl-16 mt-12 lg:mt-0">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};

export { Hero };
