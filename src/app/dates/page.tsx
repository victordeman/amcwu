import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { importantDates } from "@/data/dates";
import { Calendar, Clock } from "lucide-react";

export default function DatesPage() {
  const timelineItems = importantDates.map((d) => ({
    date: d.date,
    title: d.event,
    description: d.description,
    isPassed: d.isPassed,
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 max-w-4xl">
      <SectionHeading
        title="Important Dates & Deadlines"
        subtitle="Mark your calendar with key submission, registration, and event dates for AMCWU 2026."
      />

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-4">
        <div className="p-2.5 bg-primary/10 rounded-lg text-accent shrink-0 mt-0.5">
          <Calendar className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            Main Conference Event
            <span className="text-xs font-semibold px-2 py-0.5 bg-gold/10 text-gold border border-gold/30 rounded-full">
              18th–19th Nov 2026
            </span>
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All authors and attendees are encouraged to take note of the submission and registration deadlines below to ensure inclusion in the conference proceedings.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/60">
          <Clock className="h-5 w-5 text-accent" />
          <h3 className="text-base font-bold text-foreground">Timeline of Key Events</h3>
        </div>
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}
