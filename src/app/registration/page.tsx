import { SectionHeading } from "@/components/ui/SectionHeading";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { registrationFees, feeNotes, certificateOptions } from "@/data/fees";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 max-w-4xl">
      <SectionHeading
        title="Registration & Fees"
        subtitle="Review conference registration tiers and pricing options."
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Early Bird Rate</TableHead>
            <TableHead>Standard Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrationFees.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-semibold">{item.category}</TableCell>
              <TableCell className="text-gold font-medium">
                {item.earlyBird.naira} / {item.earlyBird.usd}
              </TableCell>
              <TableCell>
                {item.standard.naira} / {item.standard.usd}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-bold text-foreground">Certificate Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificateOptions.map((opt, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border bg-card">
              <h4 className="font-semibold text-foreground">{opt.title}</h4>
              <p className="text-xs text-muted-foreground my-1">{opt.description}</p>
              <p className="text-sm font-semibold text-accent">
                {opt.price.naira} / {opt.price.usd}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-4">
        <h3 className="text-lg font-bold text-foreground">Important Fee Notes</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {feeNotes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
