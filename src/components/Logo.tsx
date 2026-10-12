import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";

/** Solara-style mark: volt disc with dark core dot + wordmark. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Growth Solar — home"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-volt-400 ring-1 ring-black/10 transition-transform duration-300 group-hover:rotate-90">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          tone === "light" ? "text-white" : "text-slate-900",
        )}
      >
        Growth Solar
      </span>
    </Link>
  );
}
