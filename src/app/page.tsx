import Link from "next/link";
import {
  Calendar,
  MapPin,
  Globe,
  Building2,
  ArrowRight,
  FileText,
  UserCheck,
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Timeline } from "@/components/ui/timeline";

import { conferenceDetails } from "@/data/conference";
import { importantDates } from "@/data/dates";
import { registrationFees, feeNotes } from "@/data/fees";
import { keynoteSpeakers } from "@/data/speakers";
import { contactInfo } from "@/data/contacts";

export default function Home() {
  const abstractSubmissionFormUrl = "https://forms.office.com/r/AMCWU2026";

  return (
    <div className="flex flex-col gap-16 lg:gap-20 pb-16">
      {/* 3.1 Full-width Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-primary/15 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge variant="gold" className="text-xs tracking-wider uppercase font-mono px-3 py-1">
              {conferenceDetails.shortTitle}
            </Badge>
            <Badge variant="accent" className="text-xs tracking-wider uppercase font-mono px-3 py-1">
              Format: {conferenceDetails.keyFacts.format}
            </Badge>
          </div>

          {/* Single H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.15]">
            {conferenceDetails.title}
          </h1>

          {/* Theme Quote */}
          <div className="max-w-3xl mx-auto mb-8 p-4 rounded-xl bg-card/60 border border-border/80 backdrop-blur-sm shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">
              Conference Theme
            </p>
            <blockquote className="text-lg sm:text-xl font-medium text-foreground italic leading-relaxed">
              &ldquo;{conferenceDetails.theme}&rdquo;
            </blockquote>
          </div>

          {/* Key Badges: Date + Venue */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-foreground mb-10">
            <div className="flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full border border-border">
              <Calendar className="h-4 w-4 text-accent shrink-0" />
              <span className="font-semibold">{conferenceDetails.keyFacts.dates}</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full border border-border">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              <span className="font-semibold">{conferenceDetails.keyFacts.venue}</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-full border border-border">
              <Globe className="h-4 w-4 text-accent shrink-0" />
              <span className="font-semibold">Hybrid (In-Person &amp; Virtual)</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={abstractSubmissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit Abstract via Microsoft Form"
            >
              <Button variant="gold" size="lg" className="font-bold flex items-center gap-2 shadow-md">
                <FileText className="h-5 w-5" />
                Submit Abstract
                <ExternalLink className="h-4 w-4 opacity-80" />
              </Button>
            </a>
            <Link href="/registration">
              <Button variant="primary" size="lg" className="font-bold flex items-center gap-2 shadow-md">
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3.2 Quick Highlight Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="flex flex-col justify-between p-6 border-l-4 border-l-gold hover:shadow-md transition-shadow">
            <div>
              <div className="p-3 bg-gold/10 rounded-lg w-fit text-gold mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Important Dates</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conference Dates: <span className="font-semibold text-foreground">{conferenceDetails.keyFacts.dates}</span>. Abstract submission deadline: <span className="font-semibold text-foreground">31st August 2026</span>.
              </p>
            </div>
            <Link
              href="/dates"
              className="text-xs font-semibold text-gold hover:underline inline-flex items-center gap-1 mt-2"
            >
              View Full Date Timeline <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between p-6 border-l-4 border-l-accent hover:shadow-md transition-shadow">
            <div>
              <div className="p-3 bg-accent/10 rounded-lg w-fit text-accent mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hybrid Format</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Attend in person at Wigwe University Main Auditorium, Isiokpo, Nigeria, or participate virtually online from anywhere in the world.
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 mt-2"
            >
              Learn About Hybrid Access <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between p-6 border-l-4 border-l-primary hover:shadow-md transition-shadow">
            <div>
              <div className="p-3 bg-primary/10 rounded-lg w-fit text-primary mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Organized by Wigwe University</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pioneering academic excellence, innovation, and leadership for sustainable development across Africa and the global community.
              </p>
            </div>
            <a
              href={contactInfo.eventsPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-2"
            >
              Wigwe University Events <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Card>
        </div>
      </section>

      {/* 3.3 Short "Organized by" / Leadership Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/40 rounded-2xl p-8 sm:p-12 border border-border max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="accent" className="mb-2">
                Host Institution & Leadership
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Organized by Wigwe University
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Wigwe University, located in Isiokpo, Rivers State, Nigeria, is dedicated to nurturing fearless leaders, promoting world-class multidisciplinary research, and building sustainable solutions for Africa and beyond.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border/60">
                  <Award className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-foreground">Chairman LOC</h4>
                    <p className="text-sm font-semibold text-accent">{contactInfo.locChairman.name}</p>
                    <p className="text-xs text-muted-foreground">{contactInfo.locChairman.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border/60">
                  <UserCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-foreground">Secretary LOC</h4>
                    <p className="text-sm font-semibold text-accent">{contactInfo.locSecretary.name}</p>
                    <p className="text-xs text-muted-foreground">{contactInfo.locSecretary.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <Card className="p-5 bg-background border-border shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 text-gold font-bold flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">14 Multidisciplinary Tracks</h3>
                    <p className="text-xs text-muted-foreground">Ranging from AI and Renewable Energy to Green Finance & STEM Education.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-background border-border shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">Local Organizing Committee</h3>
                    <p className="text-xs text-muted-foreground">{contactInfo.officialEmail}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 Keynote Speakers Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Keynote Speakers"
          subtitle="Distinguished African scholars and policy leaders addressing sustainable green transition."
          centered
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {keynoteSpeakers.map((speaker) => (
            <Card key={speaker.id} className="p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow border-border">
              <div className="space-y-3">
                <Badge variant="gold" className="w-fit text-[11px]">
                  {speaker.role}
                </Badge>
                <h3 className="text-xl font-bold text-foreground leading-snug">{speaker.title}</h3>
                <p className="text-xs font-semibold text-accent">{speaker.institution}</p>
                {speaker.topic && (
                  <p className="text-xs font-medium text-foreground bg-muted/60 p-2.5 rounded-md border border-border/40">
                    <span className="font-semibold text-gold">Topic: </span>
                    {speaker.topic}
                  </p>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{speaker.bio}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/speakers">
            <Button variant="outline" size="sm" className="inline-flex items-center gap-1.5 font-semibold">
              View Keynotes & Committee <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 3.5 Important Dates Timeline Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <Badge variant="gold">Timeline Preview</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Important Dates
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mark your calendar for abstract submission, early bird registration, and proceedings deadlines.
            </p>
            <Link href="/dates">
              <Button variant="gold" size="sm" className="inline-flex items-center gap-1.5 font-semibold">
                Full Dates Schedule <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="lg:col-span-8 bg-card rounded-xl p-6 border border-border shadow-sm">
            <Timeline
              items={importantDates.map((item) => ({
                date: item.date,
                title: item.event,
                description: item.description,
                isPassed: item.isPassed,
              }))}
            />
          </div>
        </div>
      </section>

      {/* 3.6 Registration Fee Summary Table */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Registration Fees"
          subtitle="Clear and accessible fee tiers for local and international presenters, participants, and students."
          centered
        />
        <div className="mt-8 max-w-5xl mx-auto space-y-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Early Bird Rate (Ends 30th Sept)</TableHead>
                <TableHead>Standard Rate (From 1st Oct)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrationFees.map((fee, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-semibold text-foreground">{fee.category}</TableCell>
                  <TableCell className="text-gold font-bold">
                    {fee.earlyBirdPrice.naira} / {fee.earlyBirdPrice.usd}
                  </TableCell>
                  <TableCell className="text-muted-foreground font-medium">
                    {fee.standardPrice.naira} / {fee.standardPrice.usd}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Notes summary */}
          <div className="bg-muted/30 p-5 rounded-xl border border-border space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Registration Notes & Instructions
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc list-inside">
              {feeNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
            <div className="pt-2 flex justify-end">
              <Link href="/registration">
                <Button variant="primary" size="sm" className="inline-flex items-center gap-1.5 font-semibold">
                  Register Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
