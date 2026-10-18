import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

export function Card({ className, bordered = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card text-card-foreground p-6 shadow-sm transition-all hover:shadow-md",
        bordered && "border border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
