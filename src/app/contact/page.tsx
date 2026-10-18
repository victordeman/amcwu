import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { contactInfo } from "@/data/contacts";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 max-w-3xl">
      <SectionHeading
        title="Contact Us"
        subtitle="Get in touch with the AMCWU 2026 conference secretariat."
      />
      <Card className="space-y-6">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Email Inquiries</h4>
            <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
            <p className="text-sm text-muted-foreground">{contactInfo.supportEmail}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Phone Support</h4>
            <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Secretariat Office</h4>
            <p className="text-sm text-muted-foreground">{contactInfo.secretariat}</p>
            <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
