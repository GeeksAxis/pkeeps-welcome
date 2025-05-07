import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Pkeeps",
  description:
    "Frequently asked questions about Pkeeps digital legacy platform.",
};

export default function FAQsPage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            About Pkeeps
          </h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                What is Pkeeps?
              </h3>
              <p className="text-muted-foreground">
                Pkeeps is a digital legacy platform designed to transfer your
                most important digital assets to the people you trust, when it
                matters most. We help you securely store and manage access to
                your digital accounts, passwords, cryptocurrency, and important
                documents, ensuring they can be safely passed on to your
                designated beneficiaries.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                How does Pkeeps work?
              </h3>
              <p className="text-muted-foreground">
                Pkeeps allows you to securely store your digital assets and
                designate beneficiaries who will receive access to them after
                your passing. Our platform uses end-to-end encryption and a
                secure verification process to ensure your assets are only
                transferred to your designated beneficiaries when the time
                comes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Is Pkeeps secure?
              </h3>
              <p className="text-muted-foreground">
                Yes, security is our top priority. Pkeeps uses bank-level
                security measures including end-to-end encryption, multi-layer
                authentication, and secure verification processes. Your data is
                encrypted from the moment it leaves your device, and only you
                and your designated beneficiaries can access it.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Account & Pricing
          </h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                How much does Pkeeps cost?
              </h3>
              <p className="text-muted-foreground">
                Pkeeps is currently available for pre-order at a special price
                of $10 for a full year of access. After our official launch, the
                regular price will be $49 per year. We also offer a free trial
                period for new users to explore the platform.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Can I cancel my subscription?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. If you
                cancel, you`ll continue to have access until the end of your
                current billing period. We also offer a 30-day money-back
                guarantee for new subscribers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                How do I update my beneficiaries?
              </h3>
              <p className="text-muted-foreground">
                {`
                You can update your beneficiaries at any time through your
                account settings. Simply log in, navigate to the "Beneficiaries"
                section, and make your changes. You can add, remove, or modify
                beneficiaries and what assets they'll have access to.`}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Digital Assets & Transfer
          </h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                What types of digital assets can I store?
              </h3>
              <p className="text-muted-foreground">
                Pkeeps allows you to store various types of digital assets,
                including passwords to online accounts, cryptocurrency wallet
                information, important documents, digital photos, and other
                digital valuables. You can organize these assets into categories
                and assign different beneficiaries to different asset groups.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                How does the verification process work?
              </h3>
              <p className="text-muted-foreground">
                Our verification process is thorough to ensure the security of
                your assets. When a beneficiary makes a claim, we verify their
                identity and confirm the account holder`s passing through
                official documentation. This multi-step process ensures your
                digital legacy is only transferred to the right people at the
                right time.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Is Pkeeps legally binding?
              </h3>
              <p className="text-muted-foreground">
                While Pkeeps helps facilitate the transfer of digital assets, we
                recommend consulting with a legal professional to ensure your
                digital legacy plan aligns with your overall estate planning.
                Pkeeps can work alongside traditional legal documents like wills
                and trusts to provide a comprehensive solution.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-medium text-foreground mb-4">
          Still have questions?
        </h3>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help you with any questions you might have
          about Pkeeps.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </main>
  );
}
