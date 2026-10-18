import { SectionHeading } from "@/components/ui/section-heading";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { registrationFees, feeNotes, certificateOptions } from "@/data/fees";
import { CheckCircle2, Award } from "lucide-react";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 max-w-5xl">
      <SectionHeading
        title="Registration & Fees"
        subtitle="Review conference registration tiers, rates, and certificate options."
      />

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Registration Tiers</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Early Bird Rate (Ends 30th Sept)</TableHead>
              <TableHead>Standard Rate (From 1st Oct)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrationFees.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-semibold text-foreground">
                  <div>{item.category}</div>
                  {item.notes && <p className="text-xs text-muted-foreground font-normal mt-0.5">{item.notes}</p>}
                </TableCell>
                <TableCell className="text-gold font-bold">
                  {item.earlyBirdPrice.naira} / {item.earlyBirdPrice.usd}
                </TableCell>
                <TableCell className="text-muted-foreground font-medium">
                  {item.standardPrice.naira} / {item.standardPrice.usd}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Certificate Options */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">Certificate Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificateOptions.map((option, idx) => (
            <Card key={idx} className="p-6 space-y-2 border-border">
              <div className="flex items-center justify-between">
                <Badge variant={idx === 0 ? "gold" : "accent"}>{option.price.naira} / {option.price.usd}</Badge>
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h4 className="font-bold text-base text-foreground mt-2">{option.title}</h4>
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
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
