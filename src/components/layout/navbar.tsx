"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Speakers", href: "/speakers" },
  { name: "Dates", href: "/dates" },
  { name: "Registration", href: "/registration" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md transition-colors">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Wigwe University & AMCWU 2026 Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
          aria-label="Wigwe University AMCWU 2026 Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-gold group-hover:bg-primary/20 transition-colors">
            <Crown className="h-5 w-5 text-gold shrink-0" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
              Wigwe University
            </span>
            <span className="font-display font-bold text-base tracking-tight text-foreground group-hover:text-accent transition-colors">
              AMCWU <span className="text-accent font-sans font-extrabold">2026</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-150",
                  isActive
                    ? "bg-secondary text-secondary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/registration">
            <Button variant="primary" size="sm" className="font-semibold shadow-sm">
              Register Now
            </Button>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-1.5 shadow-lg">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground font-semibold"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-border/50">
            <Link
              href="/registration"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="primary" className="w-full justify-center">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
