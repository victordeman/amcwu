import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { subthemes } from "@/data/subthemes";

export default function CallForPapersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <SectionHeading
        title="Call for Papers"
        subtitle="Submit your original research papers and presentations to AMCWU 2026."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subthemes.map((theme) => (
          <Card key={theme.id} className="space-y-3">
            <Badge variant="accent">{theme.title}</Badge>
            <p className="text-sm text-muted-foreground">{theme.description}</p>
            <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
              {theme.topics.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
