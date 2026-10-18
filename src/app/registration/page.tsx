import { SectionHeading } from "@/components/ui/section-heading";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { registrationFees, feeNotes, certificateOptions } from "@/data/fees";
import { CheckCircle2, Award, Globe, Video, Calendar, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 max-w-5xl">
      <SectionHeading
        title="Registration & Fees"
        subtitle="Review conference registration tiers, early bird vs standard rates, hybrid options, and certificate details."
      />

      {/* Hybrid Participation Note & CTA */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-gold/10 border border-primary/20 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge variant="accent" className="gap-1 text-[11px] px-2.5 py-0.5">
              <Globe className="h-3.5 w-3.5" />
              Hybrid Conference Format
            </Badge>
            <Badge variant="gold" className="gap-1 text-[11px] px-2.5 py-0.5">
              <Video className="h-3.5 w-3.5" />
              Physical & Virtual
            </Badge>
          </div>
          <h3 className="text-lg font-bold text-foreground">
            Flexible Participation Options
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            AMCWU 2026 offers both physical attendance at Wigwe University, Isiokpo, Rivers State, and online virtual participation options for international and distant presenters/participants.
          </p>
        </div>
        <Link href="/contact" className="shrink-0">
          <Button variant="primary" className="gap-2 font-semibold">
            Inquire / Support
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Full Fee Table */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-foreground">Registration Tiers & Rates</h3>
          <p className="text-xs text-gold font-medium flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 shrink-0" />
            Early bird rates valid through 30th September 2026
          </p>
        </div>

        <div className="border border-border rounded-xl overflow-hidden shadow-sm bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-bold text-foreground">Category</TableHead>
                <TableHead className="font-bold text-foreground">
                  Early Bird Rate <span className="block text-[10px] font-normal text-gold">(Until Sept 30)</span>
                </TableHead>
                <TableHead className="font-bold text-foreground">
                  Standard Rate <span className="block text-[10px] font-normal text-muted-foreground">(From Oct 1)</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrationFees.map((item, idx) => (
                <TableRow key={idx} className="hover:bg-muted/30">
                  <TableCell className="font-semibold text-foreground py-4">
                    <div className="text-sm">{item.category}</div>
                    {item.notes && <p className="text-xs text-muted-foreground font-normal mt-0.5">{item.notes}</p>}
                  </TableCell>
                  <TableCell className="text-gold font-bold text-sm">
                    <div>{item.earlyBirdPrice.naira}</div>
                    <div className="text-xs font-medium text-accent">{item.earlyBirdPrice.usd}</div>
                  </TableCell>
                  <TableCell className="text-foreground font-semibold text-sm">
                    <div>{item.standardPrice.naira}</div>
                    <div className="text-xs font-medium text-muted-foreground">{item.standardPrice.usd}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Certificate Options */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Certificate Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificateOptions.map((option, idx) => (
            <Card key={idx} className="p-6 space-y-3 border-border hover:border-accent/40 transition-all duration-200">
              <div className="flex items-center justify-between">
                <Badge variant={idx === 0 ? "gold" : "accent"} className="px-2.5 py-1 text-xs">
                  {option.price.naira} / {option.price.usd}
                </Badge>
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h4 className="font-bold text-base text-foreground mt-1">{option.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{option.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Fee Notes */}
      <section className="bg-muted/30 p-6 rounded-xl border border-border space-y-3">
        <h4 className="font-bold text-sm uppercase tracking-wider text-foreground flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-accent" />
          Important Registration Notes
        </h4>
        <ul className="text-xs sm:text-sm text-muted-foreground space-y-2 list-disc list-inside">
          {feeNotes.map((note, idx) => (
            <li key={idx} className="leading-relaxed">{note}</li>
          ))}
        </ul>
      </section>

      {/* Program / Schedule Placeholder */}
      <section className="border border-dashed border-border rounded-xl p-8 bg-card/50 text-center space-y-3">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-accent">
          <Calendar className="h-6 w-6" />
        </div>
        <div className="inline-block">
          <Badge variant="gold" className="text-xs px-3 py-0.5">
            Coming Soon
          </Badge>
        </div>
        <h3 className="text-lg font-bold text-foreground">Detailed Program & Session Schedule</h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The full conference schedule, including keynotes, parallel track presentation sessions, and workshop timetables, will be announced closer to the conference date.
        </p>
      </section>
    </div>
  );
}
