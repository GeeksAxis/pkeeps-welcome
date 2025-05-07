import { Shield, Lock, KeyRound, UserCog } from "lucide-react";
import { SecurityBeam } from "../SecurityBeam";

export default function SecuritySection() {
  return (
    <section
      id="security"
      className="py-16 duration-500 transition-all bg-gradient-to-b from-background to-secondary/5"
    >
      <div className=" px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              How Secure Is Pkeeps?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Built with security at the core, Pkeeps ensures your digital
              legacy is protected at every level.
            </p>
          </div>
          <SecurityBeam />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Security Feature 1 */}
            <div className="bg-card border hover:scale-105 duration-300 hover:shadow-amber-200  border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    End-to-end encryption
                  </h3>
                  <p className="text-muted-foreground">
                    Your sensitive information is encrypted from the moment it
                    leaves your device. Only you and your designated
                    beneficiaries can ever access it.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Feature 2 */}
            <div className="bg-card border hover:scale-105 duration-300 hover:shadow-amber-200  border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <KeyRound className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Multi-layer authentication
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced security protocols ensure only authorized
                    individuals can access your account, with multiple
                    verification steps to prevent unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Feature 3 */}
            <div className="bg-card border hover:scale-105 duration-300 hover:shadow-amber-200  border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Secure death verification
                  </h3>
                  <p className="text-muted-foreground">
                    {` Assets are only released after a thorough verification
                    process, ensuring your digital legacy is protected until
                    it's truly needed by your beneficiaries.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Security Feature 4 */}
            <div className="bg-card border hover:scale-105 duration-300 hover:shadow-amber-200  border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCog className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {`You're always in control`}
                  </h3>
                  <p className="text-muted-foreground">
                    Update, delete, or change beneficiaries anytime. Your plan
                    evolves as your life does, with complete flexibility and
                    control over your digital assets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
              Bank-level security
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pkeeps employs the same security standards used by leading
              financial institutions, ensuring your digital legacy is protected
              with the highest level of security available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
