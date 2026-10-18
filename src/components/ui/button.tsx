import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
          {
            // Primary variant uses teal accent
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm":
              variant === "primary",
            // Secondary variant
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            // Secondary outline
            "border border-border bg-transparent hover:bg-muted text-foreground":
              variant === "outline",
            // Ghost
            "hover:bg-muted text-foreground": variant === "ghost",
            // Gold warm accent
            "bg-gold text-gold-foreground hover:bg-gold/90 shadow-sm font-semibold":
              variant === "gold",
          },
          {
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-4 py-2 text-sm": size === "md",
            "h-12 px-6 text-base font-semibold": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
