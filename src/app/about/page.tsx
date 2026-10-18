import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { conferenceDetails } from "@/data/conference";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <SectionHeading
        title="About AMCWU 2026"
        subtitle={conferenceDetails.fullName}
      />
      <Card className="space-y-4 leading-relaxed">
        <p>{conferenceDetails.description}</p>
        <p>
          Our mission is to foster collaboration across multidisciplinary borders and enable transformative educational research on a global scale.
        </p>
      </Card>
    </div>
  );
}
