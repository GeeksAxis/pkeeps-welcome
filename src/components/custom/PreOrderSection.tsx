"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Hand, PartyPopper } from "lucide-react";
import PreOrderModal from "./PreOrderModal";

export default function PreOrderSection() {
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
    <section
      id="pricing"
      className="py-16 bg-background duration-500 transition-all relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-primary/5 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary/5 rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-primary/10 rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-18 h-18 bg-primary/5 rounded-full" />
        <div className="absolute top-10 right-10 w-12 h-12 bg-primary/5 rounded-full" />
        <div className="absolute bottom-10 left-10 w-14 h-14 bg-primary/10 rounded-full" />
      </div>

      <div className=" px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background pointer-events-none" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <PartyPopper className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Limited Pre-Launch Offer
                </h2>
              </div>

              {/* Main offer */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-foreground mb-6">
                  Pre-order now for just{" "}
                  <span className="font-bold text-primary">$8</span> and get{" "}
                  <span className="font-bold">1 year of access</span> when
                  Pkeeps launches.
                </p>
                <div className="flex items-center justify-center gap-x-4 text-lg font-medium text-foreground">
                  <span>Early access</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>Locked-in price</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span>Peace of mind</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-primary hover:bg-primary/90"
                  onClick={openPreOrderModal}
                >
                  <CreditCard /> Pre-order Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-primary text-primary hover:bg-primary/10"
                  onClick={openWaitlistModal}
                >
                  <Hand /> Join the Waitlist
                </Button>
              </div>

              {/* Additional info */}
              <p className="text-sm text-muted-foreground text-center mt-6">
                Limited time offer. Regular price will be $35/year after launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <PreOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </section>
  );
}
