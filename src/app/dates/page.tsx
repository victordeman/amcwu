import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { importantDates } from "@/data/dates";

export default function DatesPage() {
  const timelineItems = importantDates.map((d) => ({
    date: d.date,
    title: d.event,
    description: d.description,
    isPassed: d.isPassed,
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 max-w-3xl">
      <SectionHeading
        title="Important Dates"
        subtitle="Key deadlines and schedule for AMCWU 2026."
      />
      <Timeline items={timelineItems} />
    </div>
  );
}
