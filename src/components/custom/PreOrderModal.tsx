"use client";

import type React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/lib/superbase";
import { MoonLoader } from "react-spinners";
import toast from "react-hot-toast";
import { getPublicEnv } from "@/config";
// import { usePaystackPayment } from "react-paystack";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "pre-order" | "waitlist";
}

export default function PreOrderModal({
  isOpen,
  onClose,
  type,
}: PreOrderModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  // const paystackConfig = {
  //   reference: new Date().getTime().toString(),
  //   email: email,
  //   amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  //   publicKey: "pk_test_b448c10aa89a7654b88480a95b1d787e9f3f61c3",
  // };

  // const initializePaystackPayment = usePaystackPayment(paystackConfig);
  // const onSuccessPaystack = (reference: any) => {
  //   // Implementation for whatever you want to do with reference and after success call.
  //   console.log(reference);

  //   closePaymentModal(); // this will close the modal programmatically
  //   supabase
  //     .from("pre_orders")
  //     .insert([{ email, name }])
  //     .then(({ error }) => {
  //       if (error) {
  //         console.log("Error inserting pre-order data:", error);
  //         toast.error("Something went wrong. Please try again.");
  //       }
  //       // console.log("Pre-order data inserted:", data);
  //       toast.success("Pre-order successful!");
  //     });
  //   setTimeout(() => {
  //     onClose();
  //     setEmail("");
  //     setName("");
  //     setAgreeToTerms(false);
  //     setLoading(false);
  //   }, 800);
  // };
  // const onClosePaystack = () => {
  //   // implementation for  whatever you want to do when the Paystack dialog closed.
  //   console.log("closed");
  //   setTimeout(() => {
  //     onClose();
  //     setEmail("");
  //     setName("");
  //     toast.error("Payment cancelled.");
  //     setAgreeToTerms(false);
  //     setLoading(false);
  //   }, 800);
  // };

  const FlutterwaveConfig = {
    public_key: getPublicEnv().NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: 200,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${email}`,
      phone_number: "",
      name: `${name}`,
    },
    customizations: {
      title: "Pkeeps Pre-order",
      description: "Payment for Pkeeps Pre-order",
      logo: "https://kvafxmawjzunxnororfu.supabase.co/storage/v1/object/public/assets//Shield%20Check.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(FlutterwaveConfig);

  const checkExistingPreOrder = async (email: string) => {
    try {
      const res = await fetch("/api/check-pre-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      return data.exists;
    } catch (error) {
      console.error("Error checking existing pre-order:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (type == "pre-order") {
      const hasPreOrdered = await checkExistingPreOrder(email);

      console.log("hasPreOrdered:", hasPreOrdered);

      if (hasPreOrdered) {
        toast.error("You have already pre-ordered!");
        setTimeout(() => {
          onClose();
          setEmail("");
          setName("");
          setAgreeToTerms(false);
          setLoading(false);
        }, 800);
        return;
      }

      handleFlutterPayment({
        callback: async (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
          await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              name,
              transaction_id: response.transaction_id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.error) {
                toast.error("Something went wrong. Please try again.");
              } else {
                toast.success("Pre-order successful!");
              }
            });

          setTimeout(() => {
            onClose();
            setEmail("");
            setName("");
            setAgreeToTerms(false);
            setLoading(false);
          }, 800);
        },
        onClose: () => {
          setTimeout(() => {
            onClose();
            setEmail("");
            setName("");
            toast.error("Payment cancelled.");
            setAgreeToTerms(false);
            setLoading(false);
          }, 800);
        },
      });
    }

    if (type == "waitlist") {
      // Handle waitlist logic here
      await supabase
        .from("waitlist")
        .insert([{ email, name }])
        .then(({ data, error }) => {
          if (error) {
            console.error("Error inserting waitlist data:", error);
            if (error.code === "23505") {
              toast("You are already on the waitlist!");
            }
            setTimeout(() => {
              onClose();
              // toast.error("Something went wrong. Please try again.");
              setLoading(false);
            }, 800);
          } else {
            console.log("Waitlist data inserted:", data);
            setTimeout(() => {
              onClose();
              toast.success("You have been added to the waitlist!");
              setLoading(false);
            }, 800);
          }
        });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {type === "pre-order" ? "Pre-order Pkeeps" : "Join the Waitlist"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {type === "pre-order"
              ? "Secure your spot and get 1 year of access for just $8 when we launch."
              : "Be the first to know when Pkeeps launches and get exclusive early access."}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {type === "pre-order" && (
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Pre-order Summary
                  </p>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pkeeps 1-Year Access</span>
                    <span>$8.00</span>
                  </div>
                  <div className="border-t border-border my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>$8.00</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {`You'll be redirected to our secure payment page after
                    submission.`}
                  </p>
                </div>
              )}

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) =>
                    setAgreeToTerms(checked as boolean)
                  }
                  required
                />
                <Label htmlFor="terms" className="text-sm leading-tight">
                  I agree to the{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={!agreeToTerms || loading}
              >
                {type === "pre-order" ? "Proceed to Payment" : "Join Waitlist"}
                <MoonLoader loading={loading} size={16} color="gray" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
