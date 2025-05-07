import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Pkeeps",
  description: "Privacy policy for Pkeeps digital legacy platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-muted-foreground">Last Updated: May 1, 2025</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Introduction
          </h2>
          <p className="text-muted-foreground">
            {`
            At Pkeeps ("we", "our", or "us"), we take your privacy seriously.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our digital legacy platform.
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the platform.`}
          </p>
          <p className="text-muted-foreground mt-4">
            {`
            We reserve the right to make changes to this Privacy Policy at any
            time and for any reason. We will alert you about any changes by
            updating the "Last Updated" date of this Privacy Policy. You are
            encouraged to periodically review this Privacy Policy to stay
            informed of updates.`}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Information We Collect
          </h2>

          <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
            Personal Information
          </h3>
          <p className="text-muted-foreground">
            We may collect personal information that you voluntarily provide to
            us when you register on the platform, express an interest in
            obtaining information about us or our products and services, or
            otherwise contact us. The personal information we collect may
            include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
            <li>Name, email address, and contact information</li>
            <li>Billing information and payment details</li>
            <li>Account credentials and security questions</li>
            <li>Information about your beneficiaries</li>
            <li>Digital assets you choose to store on our platform</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
            Derivative Data
          </h3>
          <p className="text-muted-foreground">
            Our servers automatically collect information when you access the
            platform, such as your IP address, browser type, operating system,
            access times, and the pages you have viewed directly before and
            after accessing the platform. This information is not linked to
            personally identifiable information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground">
            We may use the information we collect about you for various
            purposes, including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing transactions and sending related information</li>
            <li>Verifying your identity and processing beneficiary claims</li>
            <li>Responding to your inquiries and customer service requests</li>
            <li>
              Sending administrative information, such as updates to our terms,
              conditions, and policies
            </li>
            <li>
              Sending promotional communications, such as special offers or
              other information we think you may find interesting
            </li>
            <li>
              Monitoring and analyzing usage and trends to improve your
              experience with the platform
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Security of Your Information
          </h2>
          <p className="text-muted-foreground">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
          <p className="text-muted-foreground mt-4">
            Your sensitive information, such as digital assets and beneficiary
            details, is encrypted using industry-standard encryption
            technologies. We implement multi-layer authentication and strict
            access controls to ensure that only authorized individuals can
            access your information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
          </p>
          <address className="mt-2 not-italic text-muted-foreground">
            Pkeeps Ltd.
            <br />
            Email: privacy@pkeeps.com
            <br />
            Phone: +234 8145497197
          </address>
        </section>
      </div>
    </main>
  );
}
