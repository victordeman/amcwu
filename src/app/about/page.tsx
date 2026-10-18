import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { conferenceDetails } from "@/data/conference";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <SectionHeading
        title={`About ${conferenceDetails.shortTitle}`}
        subtitle={conferenceDetails.title}
      />
      <Card className="space-y-4 leading-relaxed">
        <p>{conferenceDetails.fullThemeStatement}</p>
        <div className="pt-4 border-t border-border space-y-2">
          <h3 className="font-semibold text-lg text-foreground">Conference Goals & Context</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {conferenceDetails.goalsAndContext.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
