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
    <div className={cn("relative border-l border-border pl-6 space-y-8 my-4", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div
            className={cn(
              "absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-background",
              item.isPassed ? "bg-accent" : "bg-gold"
            )}
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground w-fit mt-1 sm:mt-0">
              {item.date}
            </span>
          </div>
          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
