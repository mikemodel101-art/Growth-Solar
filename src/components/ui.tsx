import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Kicker({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-volt-700",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-volt-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && <Kicker className={light ? "text-volt-300" : undefined}>{kicker}</Kicker>}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.08]",
          light ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-slate-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

type Variant = "primary" | "sun" | "ghostLight" | "outline" | "dark";

export function buttonClass(variant: Variant = "primary", size: "md" | "lg" = "md") {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-volt-400/40",
    size === "lg" ? "px-7 py-3.5 text-base" : "px-6 py-3 text-sm",
    {
      primary:
        "bg-volt-400 text-slate-900 shadow-[0_12px_30px_-12px_rgba(143,186,18,0.7)] hover:-translate-y-0.5 hover:bg-volt-300",
      sun: "bg-volt-400 text-slate-900 shadow-[0_12px_30px_-12px_rgba(143,186,18,0.7)] hover:-translate-y-0.5 hover:bg-volt-300",
      dark: "bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-slate-800",
      ghostLight:
        "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
      outline:
        "border border-slate-900/15 bg-white text-slate-900 hover:border-slate-900/30 hover:bg-slate-50",
    }[variant],
  );
}
