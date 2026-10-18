import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMCWU 2026 | Wigwe University Multidisciplinary Conference",
  description:
    "Official Website for AMCWU 2026 - 1st African Multidisciplinary Conference of Wigwe University on Harnessing Emerging Technologies for Green Economy Transition.",
  openGraph: {
    title: "AMCWU 2026 | Wigwe University Multidisciplinary Conference",
    description:
      "Harnessing Emerging Technologies for Green Economy Transition and Sustainable Development in Africa. Join us at Wigwe University on 18-19 November 2026.",
    url: "https://amcwu2026.wigweuniversity.edu.ng",
    siteName: "AMCWU 2026",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMCWU 2026 | Wigwe University",
    description:
      "1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026).",
  },
};

const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  "name": "1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026)",
  "description":
    "Harnessing Emerging Technologies for Green Economy Transition and Sustainable Development in Africa.",
  "startDate": "2026-11-18T09:00:00+01:00",
  "endDate": "2026-11-19T17:00:00+01:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "location": [
    {
      "@type": "Place",
      "name": "Main Auditorium, Wigwe University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Isiokpo",
        "addressRegion": "Rivers State",
        "addressCountry": "NG",
      },
    },
    {
      "@type": "VirtualLocation",
      "url": "https://amcwu2026.wigweuniversity.edu.ng",
    },
  ],
  "organizer": {
    "@type": "EducationalOrganization",
    "name": "Wigwe University",
    "url": "https://wigweuniversity.edu.ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
