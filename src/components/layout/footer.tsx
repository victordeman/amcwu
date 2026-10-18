import Link from "next/link";
import { Crown, Mail, Phone, MapPin } from "lucide-react";
import { conferenceDetails } from "@/data/conference";
import { contactInfo } from "@/data/contacts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground mt-auto">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand & Host University */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-gold">
                <Crown className="h-5 w-5 text-gold shrink-0" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                  Wigwe University
                </span>
                <span className="font-display font-bold text-base tracking-tight text-foreground">
                  AMCWU <span className="text-accent font-sans font-extrabold">2026</span>
                </span>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {conferenceDetails.fullName} — Advancing Global Higher Education through Interdisciplinary Innovation.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center text-xs text-accent font-medium hover:underline">
                Host: Wigwe University, Isiokpo
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Conference
                </Link>
              </li>
              <li>
                <Link href="/call-for-papers" className="hover:text-accent transition-colors">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-accent transition-colors">
                  Keynote Speakers
                </Link>
              </li>
              <li>
                <Link href="/dates" className="hover:text-accent transition-colors">
                  Important Dates
                </Link>
              </li>
            </ul>
          </div>

          {/* Participation & Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide text-foreground mb-4">
              Participation
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <Link href="/registration" className="hover:text-accent transition-colors">
                  Registration & Fees
                </Link>
              </li>
              <li>
                <Link href="/call-for-papers#submission" className="hover:text-accent transition-colors">
                  Paper Submission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide text-foreground mb-4">
              Secretariat Contact
            </h3>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {conferenceDetails.year} Wigwe University — AMCWU 2026. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
