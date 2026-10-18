import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { keynoteSpeakers, organizingCommittee } from "@/data/speakers";
import { Mic, UserCheck, GraduationCap } from "lucide-react";

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
            <Card key={s.id} className="p-6 space-y-4 hover:border-gold/50 transition-all duration-200">
              <div className="flex items-center justify-between">
                <Badge variant="gold" className="w-fit text-[11px] gap-1 px-2.5 py-1">
                  <Mic className="h-3.5 w-3.5 text-gold shrink-0" />
                  {s.role}
                </Badge>
                <GraduationCap className="h-5 w-5 text-accent opacity-80" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-xs font-semibold text-accent">{s.institution}</p>
              </div>
              {s.topic && (
                <div className="text-xs font-medium text-foreground bg-muted/60 p-3 rounded-lg border border-border/50">
                  <span className="font-semibold text-gold block mb-0.5">Keynote Presentation Topic:</span>
                  {s.topic}
                </div>
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
            <Card key={member.id} className="p-6 space-y-3 text-center hover:border-accent/50 transition-all duration-200">
              <div className="mx-auto w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-1">
                <UserCheck className="h-5 w-5" />
              </div>
              <Badge variant="accent" className="mx-auto text-[11px]">
                {member.role}
              </Badge>
              <h4 className="text-base font-bold text-foreground">{member.name}</h4>
              {member.institution && (
                <p className="text-xs text-muted-foreground font-medium">{member.institution}</p>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                  className="text-xs text-accent font-medium hover:underline block pt-1"
                >
                  {member.phone}
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
