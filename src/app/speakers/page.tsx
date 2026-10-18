import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { keynoteSpeakers, organizingCommittee } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-8">
        <SectionHeading
          title="Keynote Speakers"
          subtitle="Meet our distinguished keynote speakers addressing emerging technologies for green economy transition."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keynoteSpeakers.map((s) => (
            <Card key={s.id} className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-accent font-medium">{s.role}</p>
              <p className="text-xs font-medium text-muted-foreground">{s.institution}</p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border">{s.bio}</p>
              {s.topic && (
                <div className="pt-2">
                  <span className="text-xs font-semibold text-gold uppercase">Keynote Topic:</span>
                  <p className="text-sm font-medium text-foreground">{s.topic}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <SectionHeading
          title="Organizing Committee"
          subtitle="Leadership and Local Organizing Committee for the conference."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {organizingCommittee.map((m) => (
            <Card key={m.id} className="space-y-1">
              <h4 className="font-bold text-base text-foreground">{m.title}</h4>
              <p className="text-xs text-accent font-medium">{m.role}</p>
              {m.institution && <p className="text-xs text-muted-foreground">{m.institution}</p>}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
