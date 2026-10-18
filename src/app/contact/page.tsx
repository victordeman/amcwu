"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contacts";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  UserCheck,
  Send,
  CheckCircle2,
  Building2,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's mailto client so inquiry details are dispatched directly to the official email
    const mailtoSubject = encodeURIComponent(`[AMCWU 2026 Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactInfo.officialEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 max-w-6xl">
      {/* Intro Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <Badge variant="gold" className="px-3 py-1 text-xs">
          Conference Secretariat
        </Badge>
        <SectionHeading
          title="Contact Us & Secretariat"
          subtitle="Get in touch with the Local Organizing Committee for abstract submissions, registration inquiries, and event details."
        />
      </div>

      {/* LOC Leadership Contact Cards */}
      <section className="space-y-6">
        <div className="border-b border-border pb-3">
          <h3 className="text-xl font-bold text-foreground">Local Organizing Committee (LOC) Officers</h3>
          <p className="text-xs text-muted-foreground">Direct contact points for conference leadership.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conference Chairman Card */}
          <Card className="p-6 space-y-4 border-l-4 border-l-gold border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <Badge variant="gold" className="text-xs">
                {contactInfo.conferenceChairman.role}
              </Badge>
              <UserCheck className="h-5 w-5 text-gold shrink-0" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">{contactInfo.conferenceChairman.name}</h4>
              <p className="text-xs text-accent font-medium mt-0.5">{contactInfo.conferenceChairman.role}</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-border/60 text-xs sm:text-sm min-w-0">
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`mailto:${contactInfo.officialEmail}`}
                  className="hover:text-accent font-medium transition-colors break-all min-w-0"
                >
                  {contactInfo.officialEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`tel:${contactInfo.conferenceChairman.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-accent font-medium transition-colors break-all min-w-0"
                >
                  {contactInfo.conferenceChairman.phone}
                </a>
              </div>
            </div>
          </Card>

          {/* Chairman LOC Card */}
          <Card className="p-6 space-y-4 border-l-4 border-l-gold border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <Badge variant="gold" className="text-xs">
                {contactInfo.locChairman.role}
              </Badge>
              <UserCheck className="h-5 w-5 text-gold shrink-0" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">{contactInfo.locChairman.name}</h4>
              <p className="text-xs text-accent font-medium mt-0.5">{contactInfo.locChairman.role}</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-border/60 text-xs sm:text-sm min-w-0">
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`mailto:${contactInfo.locChairman.email || contactInfo.officialEmail}`}
                  className="hover:text-accent font-medium transition-colors break-all min-w-0"
                >
                  {contactInfo.locChairman.email || contactInfo.officialEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`tel:${contactInfo.locChairman.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-accent font-medium transition-colors break-all min-w-0"
                >
                  {contactInfo.locChairman.phone}
                </a>
              </div>
            </div>
          </Card>

          {/* Secretary LOC Card */}
          <Card className="p-6 space-y-4 border-l-4 border-l-accent border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <Badge variant="accent" className="text-xs">
                {contactInfo.locSecretary.role}
              </Badge>
              <UserCheck className="h-5 w-5 text-accent shrink-0" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">{contactInfo.locSecretary.name}</h4>
              <p className="text-xs text-accent font-medium mt-0.5">{contactInfo.locSecretary.role}</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-border/60 text-xs sm:text-sm min-w-0">
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`mailto:${contactInfo.officialEmail}`}
                  className="hover:text-accent font-medium transition-colors break-all min-w-0"
                >
                  {contactInfo.officialEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`tel:${contactInfo.locSecretary.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-accent font-medium transition-colors break-all min-w-0"
                >
                  {contactInfo.locSecretary.phone}
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Secretariat Info & Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & University Links Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 space-y-6 border-border">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-3">
              Secretariat Details
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Official Email</h4>
                  <a
                    href={`mailto:${contactInfo.officialEmail}`}
                    className="text-muted-foreground hover:text-accent transition-colors block"
                  >
                    {contactInfo.officialEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone Lines</h4>
                  <p className="text-muted-foreground">
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                      className="hover:text-accent transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Secretariat Address</h4>
                  <p className="text-muted-foreground">{contactInfo.secretariat}</p>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider">
                University Portal &amp; Events
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href={contactInfo.eventsPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors font-medium border border-border/50"
                >
                  <Globe className="h-4 w-4 text-accent shrink-0" />
                  <span className="flex-1 truncate">Wigwe University Events</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                </a>

                <a
                  href={contactInfo.universityWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/60 hover:bg-muted text-foreground transition-colors font-medium border border-border/50"
                >
                  <Building2 className="h-4 w-4 text-gold shrink-0" />
                  <span className="flex-1 truncate">Wigwe University Main Website</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Lightweight Client Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 space-y-6 border-border">
            <div>
              <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Have a question regarding submissions, registration, or logistics? Submit your inquiry directly below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-accent/10 border border-accent/30 space-y-3 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
                <h4 className="text-lg font-bold text-foreground">Message Sent Successfully!</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. The AMCWU 2026 Secretariat will review your inquiry and get back to you shortly at <strong className="text-foreground">{formData.email}</strong>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                  }}
                  className="mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Doe"
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.edu"
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                    Inquiry Category
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Abstract Submission">Abstract Submission &amp; Call for Papers</option>
                    <option value="Registration & Fees">Registration &amp; Fee Payment</option>
                    <option value="Sponsorship & Partnership">Sponsorship &amp; Partnership</option>
                    <option value="Accommodation & Travel">Accommodation &amp; Travel</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please type your message or inquiry here..."
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center gap-2 font-bold py-2.5">
                  <Send className="h-4 w-4" />
                  Submit Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
