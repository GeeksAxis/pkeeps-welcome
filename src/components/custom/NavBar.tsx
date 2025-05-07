"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, ShieldCheck, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { useTheme } from "../context/ThemeContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-background duration-500 transition-all  border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <ShieldCheck />
              <span className="ml-2 text-xl font-bold text-foreground">
                PKeeps
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/#how-it-works"
              className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#why-it-matters"
              className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Why It Matters
            </Link>
            <Link
              href="/#security"
              className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Security
            </Link>
            <Link
              href="/#stats"
              className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Stats
            </Link>
            <Link
              href="/#pricing"
              className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <Button variant={"ghost"} className="" onClick={toggleTheme}>
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/#why-it-matters"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Why It Matters
          </Link>
          <Link
            href="/#security"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Security
          </Link>
          <Link
            href="/#stats"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Stats
          </Link>
          <Link
            href="/#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Button variant={"ghost"} className="" onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
