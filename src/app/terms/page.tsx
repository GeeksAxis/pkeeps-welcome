import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Pkeeps",
  description: "Terms of service for Pkeeps digital legacy platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-muted-foreground">Last Updated: May 1, 2025</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-muted-foreground">
            {`
            These Terms of Service constitute a legally binding agreement made
            between you and Pkeeps, Inc. ("Company," "we," "us," or "our"),
            concerning your access to and use of the Pkeeps digital legacy
            platform. You agree that by accessing the platform, you have read,
            understood, and agree to be bound by all of these Terms of Service.
            `}
          </p>
          <p className="text-muted-foreground mt-4">
            IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE PLATFORM AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            2. User Representations
          </h2>
          <p className="text-muted-foreground">
            By using the platform, you represent and warrant that:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-2 text-muted-foreground">
            <li>
              You have the legal capacity and agree to comply with these Terms
              of Service.
            </li>
            <li>
              You are not a minor in the jurisdiction in which you reside.
            </li>
            <li>
              You will not access the platform through automated or non-human
              means.
            </li>
            <li>
              You will not use the platform for any illegal or unauthorized
              purpose.
            </li>
            <li>
              Your use of the platform will not violate any applicable law or
              regulation.
            </li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            3. Services
          </h2>
          <p className="text-muted-foreground">
            {`
            Pkeeps provides a digital legacy platform that allows users to
            securely store digital assets and designate beneficiaries who will
            receive access to these assets after the user's passing. Our
            services include:
            `}
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
            <li>
              Secure storage of digital assets, including passwords,
              cryptocurrency information, and important documents
            </li>
            <li>Designation of beneficiaries for different asset categories</li>
            <li>Verification process to ensure proper transfer of assets</li>
            <li>
              Management tools to update, delete, or modify stored information
              and beneficiary designations
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            4. Fees and Payment
          </h2>
          <p className="text-muted-foreground">
            We offer subscription-based access to our platform. By signing up
            for a subscription, you agree to pay the fees indicated at the time
            of purchase. Subscription fees are billed in advance on an annual
            basis. You authorize us to charge your designated payment method for
            these fees.
          </p>
          <p className="text-muted-foreground mt-4">
            We reserve the right to correct any errors or mistakes in pricing,
            even if we have already requested or received payment. We also
            reserve the right to refuse any order placed through the platform.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            5. Cancellation
          </h2>
          <p className="text-muted-foreground">
            You can cancel your subscription at any time by contacting us or
            through your account settings. If you cancel, you will continue to
            have access to the platform until the end of your current billing
            period. We offer a 30-day money-back guarantee for new subscribers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            6. Prohibited Activities
          </h2>
          <p className="text-muted-foreground">
            You may not access or use the platform for any purpose other than
            that for which we make the platform available. The platform may not
            be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us.
          </p>
          <p className="text-muted-foreground mt-4">
            Prohibited activities include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
            <li>
              Attempting to bypass any measures designed to prevent or restrict
              access to the platform
            </li>
            <li>Using the platform to store or transmit illegal content</li>
            <li>
              Impersonating or attempting to impersonate the Company or another
              user
            </li>
            <li>
              Using the platform in a manner that could disable, overburden,
              damage, or impair the platform
            </li>
            <li>
              Using any information obtained from the platform to harass, abuse,
              or harm another person
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-muted-foreground">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE
            COMPANY BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
            OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH
            THE USE OF THE PLATFORM, WHETHER BASED ON CONTRACT, TORT, STRICT
            LIABILITY, OR OTHERWISE, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE
            POSSIBILITY OF DAMAGES.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            8. Contact Us
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please
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
