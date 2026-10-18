import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Globe,
  FileText,
  UserCheck,
  Building2,
  Users,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/ui/Timeline";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import { conferenceDetails } from "@/data/conference";
import { subthemes } from "@/data/subthemes";
import { importantDates } from "@/data/dates";
import { speakers } from "@/data/speakers";
import { registrationFees } from "@/data/fees";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* 3.1 Full-width Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="gold" className="text-xs tracking-wider uppercase">
              {conferenceDetails.year} Academic Conference
            </Badge>
            <Badge variant="accent" className="text-xs tracking-wider uppercase flex items-center gap-1">
              <Globe className="h-3 w-3" /> Hybrid Event (In-Person & Virtual)
            </Badge>
          </div>

          {/* 3.7 Single h1 for Hero */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026)
          </h1>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-accent mb-6 max-w-3xl mx-auto border-l-4 border-gold pl-4 sm:pl-6 my-6 text-left sm:text-center sm:border-l-0 sm:pl-0">
            &ldquo;{conferenceDetails.theme}&rdquo;
          </blockquote>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {conferenceDetails.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium text-foreground mb-10">
            <div className="flex items-center gap-2 bg-muted/60 px-4 py-2 rounded-full border border-border">
              <Calendar className="h-4 w-4 text-accent" />
              <span>{conferenceDetails.dates}</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/60 px-4 py-2 rounded-full border border-border">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{conferenceDetails.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.office.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="lg" className="flex items-center gap-2 font-semibold">
                <FileText className="h-5 w-5" /> Submit Abstract
              </Button>
            </a>
            <Link href="/registration">
              <Button variant="primary" size="lg" className="flex items-center gap-2 font-semibold">
                Register Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3.2 Quick Highlight Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col justify-between p-6 border-l-4 border-l-accent hover:shadow-md transition-shadow">
            <div>
              <div className="p-3 bg-accent/10 rounded-lg w-fit text-accent mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Key Dates</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Abstract submission opens now. Early bird rates available until August 15, 2026.
              </p>
            </div>
            <Link
              href="/dates"
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
            >
              View full timeline <ArrowRight className="h-3 w-3" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between p-6 border-l-4 border-l-gold hover:shadow-md transition-shadow">
            <div>
              <div className="p-3 bg-gold/10 rounded-lg w-fit text-gold mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hybrid Format</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Participate on-campus at Wigwe University or present/attend virtually from anywhere across the globe.
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-gold hover:underline inline-flex items-center gap-1"
            >
              Learn about venue & virtual access <ArrowRight className="h-3 w-3" />
            </Link>
          </Card>

          <Card className="flex flex-col justify-between p-6 border-l-4 border-l-primary hover:shadow-md transition-shadow">
            <div>
              <div className="p-3 bg-primary/10 rounded-lg w-fit text-primary mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Organized by Wigwe University</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Hosted by Wigwe University, driving pioneering interdisciplinary research and academic excellence across Africa.
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              About the Host Institution <ArrowRight className="h-3 w-3" />
            </Link>
          </Card>
        </div>
      </section>

      {/* 3.3 Short "Organized by" / Leadership Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/40 rounded-2xl p-8 sm:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="accent" className="mb-4">
                Host Institution & Leadership
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                Organized by Wigwe University
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Wigwe University is dedicated to nurturing fearless leaders and trailblazing research.
                AMCWU 2026 unites academics, industry leaders, and policy experts across Africa and globally
                to foster interdisciplinary innovation, address grand societal challenges, and inspire sustainable solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Academic Excellence</h4>
                    <p className="text-xs text-muted-foreground">Pioneering research across disciplines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Global Collaboration</h4>
                    <p className="text-xs text-muted-foreground">Connecting international scholars</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-background">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-lg shrink-0">
                    WU
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Conference Steering Committee</h3>
                    <p className="text-xs text-muted-foreground">Office of the Vice-Chancellor & Research Directorate</p>
                    <p className="text-xs text-accent mt-1">Wigwe University, Isiokpo, Rivers State, Nigeria</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-background">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-lg shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Multidisciplinary Tracks</h3>
                    <p className="text-xs text-muted-foreground">STEM, Social Sciences, Humanities, Business, and Health Sciences</p>
                  </div>
                </div>
              </Card>
            </div>
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

      {/* 3.4 Keynote Speakers Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Keynote Speakers"
          subtitle="Inspiring addresses from leading scholars and world-class visionaries."
          centered
        />
        <div className="mt-8 max-w-4xl mx-auto">
          {speakers.map((speaker) => (
            <Card key={speaker.id} className="p-8 text-center flex flex-col items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-accent mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{speaker.name}</h3>
              <p className="text-sm font-semibold text-accent mb-2">{speaker.role} — {speaker.institution}</p>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
                {speaker.topic}
              </p>
              <Link href="/speakers">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  View Speakers Page <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* 3.5 Important Dates Timeline Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <Badge variant="gold" className="mb-3">Timeline Preview</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Important Dates</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Mark your calendar for upcoming submission and registration deadlines to ensure your participation in AMCWU 2026.
            </p>
            <Link href="/dates">
              <Button variant="gold" size="sm" className="flex items-center gap-1">
                Full Schedule <ArrowRight className="h-4 w-4" />
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
          subtitle="Flexible registration tiers for faculty, students, industry, and virtual attendees."
          centered
        />
        <div className="mt-8 max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Early Bird Rate</TableHead>
                <TableHead>Standard Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrationFees.map((fee, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium text-foreground">{fee.category}</TableCell>
                  <TableCell className="text-gold font-semibold">{fee.earlyBird}</TableCell>
                  <TableCell className="text-muted-foreground">{fee.regular}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 flex justify-between items-center flex-wrap gap-4 bg-muted/30 p-4 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">
              * Early bird rates end on August 15, 2026. All fees include conference materials and access.
            </p>
            <Link href="/registration">
              <Button variant="primary" size="sm" className="flex items-center gap-1">
                Register Now <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
