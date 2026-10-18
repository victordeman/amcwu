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
  title: "AMCWU 2026 | Wigwe University Annual Multidisciplinary Conference",
  description:
    "Official Website for AMCWU 2026 - Annual Multidisciplinary Conference on World Universities hosted by Wigwe University.",
  openGraph: {
    title: "AMCWU 2026 | Wigwe University Annual Multidisciplinary Conference",
    description:
      "Advancing Global Higher Education through Interdisciplinary Innovation. Join us at Wigwe University in 2026.",
    url: "https://amcwu2026.wigweuniversity.edu.ng",
    siteName: "AMCWU 2026",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMCWU 2026 | Wigwe University",
    description:
      "Annual Multidisciplinary Conference on World Universities at Wigwe University.",
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
