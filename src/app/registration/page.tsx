import { SectionHeading } from "@/components/ui/section-heading";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { registrationFees } from "@/data/fees";

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
            <TableHead>Regular Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrationFees.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-semibold">{item.category}</TableCell>
              <TableCell className="text-gold font-medium">{item.earlyBird}</TableCell>
              <TableCell>{item.regular}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
