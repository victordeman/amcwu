import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { conferenceDetails } from "@/data/conference";
import { subthemes } from "@/data/subthemes";
import { importantDates } from "@/data/dates";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <Badge variant="gold" className="mb-4 text-xs tracking-wider uppercase">
            {conferenceDetails.year} International Academic Conference
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            {conferenceDetails.title}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-accent mb-4">
            {conferenceDetails.fullName}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {conferenceDetails.theme}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span>{conferenceDetails.dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{conferenceDetails.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/registration">
              <Button variant="gold" size="lg" className="flex items-center gap-2">
                Register Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/call-for-papers">
              <Button variant="outline" size="lg">
                Call for Papers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-themes Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Conference Sub-Themes"
          subtitle="Explore the key research areas and tracks covered in AMCWU 2026."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {subthemes.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between">
              <div>
                <Badge variant="accent" className="mb-3">
                  Sub-Theme
                </Badge>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                {item.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Dates Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Important Dates"
          subtitle="Mark your calendar for upcoming submission and registration deadlines."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {importantDates.slice(0, 3).map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-accent uppercase">
                  Deadline
                </span>
                <h4 className="text-lg font-bold mt-1 text-foreground">
                  {item.event}
                </h4>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                <span className="text-sm font-semibold text-gold">
                  {item.date}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
