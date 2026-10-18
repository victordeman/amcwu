import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { conferenceDetails } from "@/data/conference";
import { organizingCommittee } from "@/data/speakers";
import { MapPin, Globe, CheckCircle2, Building2, Users, UserCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 max-w-5xl">
      <div className="space-y-4 text-center max-w-4xl mx-auto">
        <Badge variant="accent" className="px-3 py-1 text-sm font-semibold">
          Conference Theme & Overview
        </Badge>
        <SectionHeading
          title="About AMCWU 2026"
          subtitle={conferenceDetails.fullName}
        />
        <p className="text-lg font-medium text-accent italic max-w-3xl mx-auto">
          &ldquo;{conferenceDetails.theme}&rdquo;
        </p>
      </div>

      <Card className="p-6 sm:p-8 space-y-4 leading-relaxed border-border">
        <h3 className="text-xl font-bold text-foreground">Conference Statement &amp; Context</h3>
        <p className="text-muted-foreground sm:text-base">{conferenceDetails.fullThemeStatement}</p>
        <p className="text-muted-foreground">
          {conferenceDetails.description}
        </p>
      </Card>

      {/* Conference Goals */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Conference Objectives &amp; Goals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {conferenceDetails.goalsAndContext.map((goal, idx) => (
            <Card key={idx} className="p-5 flex items-start gap-3 border-border">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{goal}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Organizing Committee Structure */}
      <div className="space-y-6">
        <SectionHeading
          title="Organizing Committee Structure"
          subtitle="Leadership and coordination for AMCWU 2026."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizingCommittee.map((member) => (
            <Card key={member.id} className="p-6 text-center space-y-3 border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto">
                {member.role.includes("General") ? (
                  <Users className="h-6 w-6" />
                ) : (
                  <UserCheck className="h-6 w-6" />
                )}
              </div>
              <Badge variant="outline" className="mx-auto border-accent/40 text-accent font-semibold">
                {member.role}
              </Badge>
              <h4 className="text-lg font-bold text-foreground">{member.title}</h4>
              {member.institution && (
                <p className="text-xs sm:text-sm text-muted-foreground">{member.institution}</p>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Hybrid Access & Venue Section */}
      <section id="hybrid-access" className="scroll-mt-20 space-y-6">
        <SectionHeading
          title="Hybrid Access & Venue Information"
          subtitle="Flexible participation options for in-person and remote virtual attendees."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* On-Campus / In-Person */}
          <Card className="p-6 space-y-4 border-l-4 border-l-gold border-border">
            <div className="flex items-center justify-between">
              <Badge variant="gold">In-Person Attendance</Badge>
              <Building2 className="h-6 w-6 text-gold" />
            </div>
            <h4 className="text-lg font-bold text-foreground">On-Campus Venue</h4>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Venue:</strong> Main Auditorium, Wigwe University
                </span>
              </p>
              <p className="pl-6">Isiokpo, Rivers State, Nigeria</p>
              <p className="pl-6 text-xs italic">
                In-person delegates enjoy full access to physical keynote sessions, networking lunches, conference kits, and exhibition halls.
              </p>
            </div>
          </Card>

          {/* Virtual Attendance */}
          <Card className="p-6 space-y-4 border-l-4 border-l-accent border-border">
            <div className="flex items-center justify-between">
              <Badge variant="accent">Virtual Attendance</Badge>
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <h4 className="text-lg font-bold text-foreground">Remote Virtual Platform</h4>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Access:</strong> Live interactive streaming &amp; virtual presentation halls
                </span>
              </p>
              <p className="pl-6">
                Registered virtual attendees will receive login credentials and session links via email prior to the conference dates.
              </p>
              <p className="pl-6 text-xs italic">
                Includes digital proceedings, live Q&amp;A participation, and electronic certificates of attendance/presentation.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
