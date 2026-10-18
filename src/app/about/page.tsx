import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { conferenceDetails } from "@/data/conference";
import { MapPin, Globe, CheckCircle2, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 max-w-5xl">
      <SectionHeading
        title="About AMCWU 2026"
        subtitle={conferenceDetails.fullName}
      />

      <Card className="p-6 sm:p-8 space-y-4 leading-relaxed border-border">
        <h3 className="text-xl font-bold text-foreground">Conference Overview</h3>
        <p className="text-muted-foreground">{conferenceDetails.fullThemeStatement}</p>
        <p className="text-muted-foreground">
          Our mission is to foster collaboration across multidisciplinary borders, empower researchers, and accelerate transformative technological solutions for green economy transition and sustainable development across Africa.
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
