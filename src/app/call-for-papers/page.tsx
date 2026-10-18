import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { subthemes } from "@/data/subthemes";
import { importantDates } from "@/data/dates";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { ExternalLink, FileText, Calendar, CheckCircle } from "lucide-react";

export default function CallForPapersPage() {
  const submissionDates = importantDates.filter(
    (d) =>
      d.id === "abstract-submission-deadline" ||
      d.id === "notification-of-acceptance" ||
      d.id === "post-conference-proceedings" ||
      d.id === "proceedings-publication"
  ).map((d) => ({
    date: d.date,
    title: d.event,
    description: d.description,
    isPassed: d.isPassed,
  }));
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 max-w-6xl">
      {/* Intro Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <Badge variant="accent" className="px-3 py-1 text-sm font-semibold">
          Call for Abstracts &amp; Papers
        </Badge>
        <SectionHeading
          title="Call for Papers"
          subtitle="Submit your original research papers, case studies, and technological innovations to AMCWU 2026."
        />
        <p className="text-muted-foreground leading-relaxed">
          The 1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026) invites scholars, researchers, industry practitioners, and policymakers to submit high-quality abstracts for oral and poster presentations. Join us in shaping Africa&apos;s sustainable transition toward a vibrant green economy.
        </p>
      </div>

      {/* Sub-Themes Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-border pb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Conference Sub-Themes</h3>
            <p className="text-sm text-muted-foreground">
              Explore our 14 interdisciplinary sub-themes covering emerging technologies and green growth.
            </p>
          </div>
          <Badge variant="gold" className="text-xs">
            14 Sub-Themes
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subthemes.map((theme) => (
            <Card
              key={theme.id}
              className="p-6 space-y-4 border-border hover:border-accent/50 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-accent border-accent/40 font-semibold shrink-0">
                    Sub-Theme {theme.number}
                  </Badge>
                </div>
                <h4 className="text-base font-bold text-foreground leading-snug">
                  {theme.title}
                </h4>
                {theme.description && (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>
                )}
              </div>
              {theme.topics && theme.topics.length > 0 && (
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-semibold text-foreground mb-1.5">Key Focus Areas:</p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    {theme.topics.map((topic, idx) => (
                      <li key={idx} className="leading-tight">
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Abstract Submission Guidelines & Form Link */}
      <div id="submission-guidelines" className="scroll-mt-20 space-y-6">
        <SectionHeading
          title="Abstract Submission Guidelines"
          subtitle="Instructions for authors preparing and submitting research abstracts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 md:col-span-2 space-y-4 border-border">
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Submission Requirements
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Abstract Length:</strong> Maximum of 250–300 words written in English.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Content Structure:</strong> Must clearly articulate the research background, problem statement, methodology, preliminary results/findings, and conclusions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Keywords:</strong> Include 3 to 5 relevant keywords for indexing and sub-theme matching.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Author Info:</strong> Full names, institutional affiliations, and corresponding email addresses of all authors.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Submit your abstract directly via our secure Microsoft Form portal.
              </p>
              <a
                href="https://forms.office.com/r/g8BtqsZQwF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 h-12 px-6 text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm w-full sm:w-auto gap-2 shrink-0"
              >
                Submit Abstract Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Card>

          {/* Key Submission Dates Sidebar */}
          <Card className="p-6 space-y-4 border-l-4 border-l-gold border-border">
            <h4 className="text-base font-bold text-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gold" />
              Key Submission Dates
            </h4>
            <Timeline items={submissionDates} />
          </Card>
        </div>
      </div>
    </div>
  );
}
