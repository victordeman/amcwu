import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { contactInfo } from "@/data/contacts";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 max-w-3xl">
      <SectionHeading
        title="Contact Us"
        subtitle="Get in touch with the Local Organizing Committee (LOC)."
      />
      <Card className="space-y-6">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Official Email</h4>
            <p className="text-sm text-muted-foreground">{contactInfo.officialEmail}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">LOC Contacts</h4>
            <p className="text-sm text-muted-foreground">
              {contactInfo.locChairman.name} ({contactInfo.locChairman.role}): {contactInfo.locChairman.phone}
            </p>
            <p className="text-sm text-muted-foreground">
              {contactInfo.locSecretary.name} ({contactInfo.locSecretary.role}): {contactInfo.locSecretary.phone}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Venue Location</h4>
            <p className="text-sm text-muted-foreground">
              {contactInfo.venueAddress.auditorium}, {contactInfo.venueAddress.institution}
            </p>
            <p className="text-sm text-muted-foreground">
              {contactInfo.venueAddress.location}, {contactInfo.venueAddress.stateCountry}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
