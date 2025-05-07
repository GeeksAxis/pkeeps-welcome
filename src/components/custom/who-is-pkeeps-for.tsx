import { Users, Briefcase, Heart, Shield } from "lucide-react";

export default function WhoPkeepsIsFor() {
  return (
    <section
      id="how-it-works"
      className="py-16 duration-500 transition-all flex-col items-center bg-background"
    >
      <div className="  px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Who Pkeeps Is For
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure digital asset management for everyone who values protection
            and peace of mind.
          </p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-card hover:scale-105 transition-all hover:shadow-amber-200  duration-300 rounded-lg p-6 shadow-sm border border-border hover:shadow-md ">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Individuals
            </h3>
            <p className="text-muted-foreground text-center">
              Individuals with digital assets (wallets, passwords, crypto,
              documents).
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card hover:scale-105 transition-all  hover:shadow-amber-200  duration-300 rounded-lg p-6 shadow-sm border border-border hover:shadow-md ">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Entrepreneurs
            </h3>
            <p className="text-muted-foreground text-center">
              Entrepreneurs and business owners with sensitive IP or business
              keys.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card hover:scale-105 transition-all  hover:shadow-amber-200  duration-300 rounded-lg p-6 shadow-sm border border-border hover:shadow-md ">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Family-Focused
            </h3>
            <p className="text-muted-foreground text-center">
              People who want to ensure their family or loved ones don`t lose
              access to critical information after they pass.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-card hover:scale-105 transition-all hover:shadow-amber-200  duration-300 rounded-lg p-6 shadow-sm border border-border hover:shadow-md">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-3">
              Forward Thinkers
            </h3>
            <p className="text-muted-foreground text-center">
              Anyone thinking ahead about estate planning in a digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
