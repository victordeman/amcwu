import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { keynoteSpeakers, organizingCommittee } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 max-w-5xl">
      {/* Keynote Speakers */}
      <section className="space-y-6">
        <SectionHeading
          title="Keynote Speakers"
          subtitle="Meet the distinguished keynote speakers for AMCWU 2026."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keynoteSpeakers.map((s) => (
            <Card key={s.id} className="p-6 space-y-3">
              <Badge variant="gold" className="w-fit text-[11px]">
                {s.role}
              </Badge>
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-xs font-semibold text-accent">{s.institution}</p>
              {s.topic && (
                <p className="text-xs font-medium text-foreground bg-muted/60 p-2.5 rounded-md border border-border/40">
                  <span className="font-semibold text-gold">Topic: </span>
                  {s.topic}
                </p>
              )}
              <p className="text-xs text-muted-foreground leading-relaxed">{s.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="space-y-6">
        <SectionHeading
          title="Organizing Committee"
          subtitle="Conference leadership driving AMCWU 2026."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {organizingCommittee.map((member) => (
            <Card key={member.id} className="p-5 space-y-2 text-center">
              <Badge variant="accent" className="mx-auto text-[11px]">
                {member.role}
              </Badge>
              <h4 className="text-base font-bold text-foreground">{member.name}</h4>
              {member.institution && (
                <p className="text-xs text-muted-foreground">{member.institution}</p>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
