import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <SectionHeading
        title="Speakers"
        subtitle="Meet the distinguished keynote and invited speakers for AMCWU 2026."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakers.map((s) => (
          <Card key={s.id} className="space-y-2">
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="text-sm text-accent font-medium">{s.role}</p>
            <p className="text-xs text-muted-foreground">{s.institution}</p>
            {s.topic && <p className="text-sm text-foreground mt-2">{s.topic}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
}
