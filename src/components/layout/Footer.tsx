import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { conferenceDetails } from "@/data/conference";
import { contactInfo } from "@/data/contacts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <GraduationCap className="h-6 w-6 text-accent" />
              <span className="tracking-tight font-extrabold text-foreground">
                {conferenceDetails.shortTitle}
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {conferenceDetails.theme}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Conference</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-accent transition-colors">Call for Papers</Link></li>
              <li><Link href="/speakers" className="hover:text-accent transition-colors">Keynote Speakers</Link></li>
              <li><Link href="/dates" className="hover:text-accent transition-colors">Important Dates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">Participation</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/registration" className="hover:text-accent transition-colors">Registration & Fees</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Secretariat</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">Contact Info</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{contactInfo.officialEmail}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{contactInfo.locChairman.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{contactInfo.venueAddress.institution}, {contactInfo.venueAddress.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          <p>© {conferenceDetails.year} {conferenceDetails.shortTitle}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
