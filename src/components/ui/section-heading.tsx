import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  badge,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn("mb-8 md:mb-12 space-y-3", centered && "text-center mx-auto max-w-3xl", className)}
      {...props}
    >
      {badge && (
        <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {badge}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
