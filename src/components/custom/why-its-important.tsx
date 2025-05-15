"use client"
import {
  AlertTriangle,
  DollarSign,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import { Button } from "../ui/button";
import PreOrderModal from "./PreOrderModal";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
export default function WhyItsImportant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"pre-order" | "waitlist">(
    "pre-order"
  );
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  console.log(isDarkMode);
  return (
    <section
      id="why-it-matters"
      className={`py-16 dark:bg-secondary/5 duration-500 transition-all bg-secondary/5`}
    >
      <div className=" px-6 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Why You Shouldn`t Wait
            </h2>
          </div>

          <p className="text-xl text-muted-foreground mb-10">
            Digital asset planning isn`t something to put off until tomorrow.
            The consequences can be devastating.
          </p>

          <div className="space-y-8">
            {/* Point 1 */}
            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Most people don`t plan for death—especially digital assets.
                </h3>
                <p className="text-muted-foreground">
                  In our digital age, we accumulate countless online accounts,
                  digital currencies, and important documents. Yet 93% of people
                  have no plan for what happens to these assets when they`re
                  gone.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Families struggle, money goes unclaimed, and businesses
                  collapse.
                </h3>
                <p className="text-muted-foreground">
                  Without proper planning, families face emotional and financial
                  hardship. Billions in digital assets go unclaimed each year.
                  Small businesses often fail when owners pass without
                  transferring critical access.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  With Pkeeps, you ensure your loved ones get exactly what they
                  need.
                </h3>
                <p className="text-muted-foreground">
                  No confusion. No legal mess. Just peace of mind knowing your
                  digital legacy is protected and will be properly transferred
                  to those who matter most.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                setModalType("pre-order");
                setIsModalOpen(true);
              }}
              className="mt-10"
            >
              <CreditCard />
              Pre-order now - $8 for 1 year (Limited Offer)
            </Button>
          </div>
        </div>
      </div>
      <PreOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </section>
  );
}
