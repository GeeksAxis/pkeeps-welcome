import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className=" px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold text-foreground">Pkeeps</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Pkeeps is a digital legacy platform designed to transfer your most
              important assets to the people you trust, when it matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faqs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+2348146497197"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  (+234) 8145497197
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pkeeps. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
