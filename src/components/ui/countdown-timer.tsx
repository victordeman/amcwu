"use client";

import * as React from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function CountdownTimer({ targetDate = "2026-11-18T09:00:00" }: { targetDate?: string }) {
  const isClient = useIsClient();
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    if (!isClient) return;
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isClient]);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/80 shadow-sm max-w-xl mx-auto min-h-[90px]">
        <Clock className="h-5 w-5 text-gold animate-pulse" />
        <span className="text-xs text-muted-foreground font-medium">
          Loading Countdown to AMCWU 2026...
        </span>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-card/80 border border-border backdrop-blur-md shadow-md max-w-2xl mx-auto space-y-3">
      <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
        <Clock className="h-4 w-4 text-gold shrink-0" />
        <span>Countdown to Conference Launch (18th Nov 2026)</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-background/80 border border-border/60"
          >
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent leading-none">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
