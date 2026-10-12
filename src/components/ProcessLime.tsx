import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, motion } from "@/components/motion";
import { ArrowDownRight } from "@/components/icons";

export type Step = {
  label?: string;
  title: string;
  duration: string;
  points: string[];
};

const OFFSETS = ["lg:translate-y-0", "lg:translate-y-8", "lg:translate-y-0", "lg:translate-y-10"];

/** Lime band with staggered numbered step cards. */
export function ProcessLime({
  steps,
  title,
  note,
  ctaLabel = "Get started",
  ctaTo = "/contact#quote",
  columns = 4,
}: {
  steps: Step[];
  title: ReactNode;
  note: string;
  ctaLabel?: string;
  ctaTo?: string;
  columns?: 3 | 4;
}) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <Container>
        <div className="rounded-[2rem] bg-volt-400 px-6 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center">
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-sm text-sm leading-relaxed text-slate-800/80">{note}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <Link
                to={ctaTo}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
              >
                {ctaLabel}
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Stagger
            className={`mt-14 grid gap-5 sm:grid-cols-2 ${
              columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              return (
                <StaggerItem key={step.title} className={OFFSETS[i % OFFSETS.length]}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`flex h-full flex-col rounded-3xl p-7 ${
                      last ? "bg-volt-600 text-white shadow-xl" : "bg-white text-slate-900 shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span
                          className={`font-display text-6xl font-light leading-none ${
                            last ? "text-white/50" : "text-slate-200"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.label && (
                          <span
                            className={`mt-2 block text-xs font-semibold uppercase tracking-widest ${
                              last ? "text-white/70" : "text-slate-400"
                            }`}
                          >
                            {step.label}
                          </span>
                        )}
                      </div>
                      <span className={`text-xs font-semibold ${last ? "text-white/80" : "text-slate-500"}`}>
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <ul className={`mt-4 space-y-1.5 text-sm ${last ? "text-white/90" : "text-slate-600"}`}>
                      {step.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span
                            className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                              last ? "bg-white/70" : "bg-slate-400"
                            }`}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
