import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  isPassed?: boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative border-l-2 border-border/80 pl-6 space-y-8 my-6 ml-3", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div
            className={cn(
              "absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-background transition-transform duration-200 group-hover:scale-125",
              item.isPassed ? "bg-accent ring-4 ring-accent/20" : "bg-gold ring-4 ring-gold/20"
            )}
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1">
            <h3 className="font-display text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <span
              className={cn(
                "text-xs font-mono px-2.5 py-0.5 rounded-full font-medium w-fit border",
                item.isPassed
                  ? "bg-accent/10 border-accent/20 text-accent"
                  : "bg-gold/10 border-gold/20 text-gold"
              )}
            >
              {item.date}
            </span>
          </div>
          {item.description && (
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
