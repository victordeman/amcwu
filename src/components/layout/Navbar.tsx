"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Speakers", href: "/speakers" },
  { name: "Important Dates", href: "/dates" },
  { name: "Registration", href: "/registration" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <GraduationCap className="h-6 w-6 text-accent" />
          <span className="tracking-tight text-foreground font-extrabold">AMCWU <span className="text-accent">2026</span></span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-accent font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/registration">
            <Button variant="gold" size="sm">
              Register
            </Button>
          </Link>
        </nav>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-accent"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-b border-border bg-background px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block py-2 text-base font-medium transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-accent font-semibold"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/registration" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="gold" className="w-full">
                Register Now
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
