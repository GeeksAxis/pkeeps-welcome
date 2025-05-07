"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState);

    // Show success message
    setIsSubmitted(true);

    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions about Pkeeps? Our team is here to help. Reach out
              to us using any of the methods below or fill out the contact form.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Email</h3>
                <p className="text-muted-foreground">support@pkeeps.com</p>
                <p className="text-muted-foreground">info@pkeeps.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Phone</h3>
                <p className="text-muted-foreground">
                  Customer Support: +234 8145497197
                </p>
                <p className="text-muted-foreground">
                  Sales Inquiries: +2348106859478
                </p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  Pkeeps, Inc.
                  <br />
                  123 Digital Avenue
                  <br />
                  Secure City, SC 12345
                  <br />
                  United States
                </p>
              </div>
            </div> */}
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Business Hours
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
              <p>Saturday: 10:00 AM - 2:00 PM WAT</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full py-8">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-center">
                {`
                Thank you for contacting us. We'll get back to you as soon as
                possible.`}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={formState.subject}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
