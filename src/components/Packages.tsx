import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Container } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, motion } from "@/components/motion";
import { Zap } from "@/components/icons";

const PACKAGES = [
  {
    size: "6.6 kW",
    price: "$1,391",
    features: ["15 × 440W Tier 1 panels", "1 × 5kW WiFi inverter"],
    popular: false,
  },
  {
    size: "10.12 kW",
    price: "$3,591",
    features: ["23 × 440W Tier 1 panels", "1 × 8kW WiFi inverter"],
    popular: true,
  },
  {
    size: "13.2 kW",
    price: "$5,191",
    features: ["30 × 440W Tier 1 panels", "1 × 10kW WiFi inverter"],
    popular: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Exclusive solar
              <br />
              packages
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Power up, cost down. Complete systems supplied and installed by our
              CEC-accredited team — all prices include STC rebates.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <StaggerItem key={p.size} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  p.popular
                    ? "bg-volt-400 text-slate-900 shadow-xl"
                    : "bg-white text-slate-900 ring-1 ring-slate-200",
                )}
              >
                {p.popular && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, type: "spring", stiffness: 400, damping: 16 }}
                    className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-slate-900 px-4 py-1 text-xs font-bold text-volt-300"
                  >
                    <Zap className="h-3.5 w-3.5" /> Popular
                  </motion.span>
                )}

                <span className={cn("text-xs font-semibold uppercase tracking-[0.18em]", p.popular ? "text-slate-800/70" : "text-slate-400")}>
                  Exclusive package
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                  {p.size}
                </h3>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-5xl font-light tracking-tight">
                    {p.price}
                  </span>
                  <span className="mb-1.5 text-xs font-medium text-slate-600">AUD</span>
                </div>

                <ul className="mt-7 grow space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <span className={cn("mt-[7px] h-1 w-1 shrink-0 rounded-full", p.popular ? "bg-slate-700" : "bg-slate-400")} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact#quote"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5",
                    p.popular
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-900 text-white hover:bg-slate-800",
                  )}
                >
                  Get a quote
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Prices are indicative. Solar Victoria rebates may apply. Contact us for a
            free, no-obligation quote.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
