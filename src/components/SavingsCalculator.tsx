import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Kicker } from "@/components/ui";
import { Counter, Reveal, motion } from "@/components/motion";
import { ArrowDownRight, Battery, Leaf, Phone, TrendingDown, Zap } from "@/components/icons";

const MIN = 150;
const MAX = 1500;

export function SavingsCalculator() {
  const [bill, setBill] = useState(600);
  const pct = ((bill - MIN) / (MAX - MIN)) * 100;

  const r = useMemo(() => {
    const annual = bill * 4; // quarterly → yearly
    const kWh = annual / 0.28;
    const kw = Math.min(30, Math.max(3, Math.round((kWh / 1300) * 10) / 10));
    const low = Math.round((annual * 0.7) / 10) * 10;
    const high = Math.round((annual * 0.9) / 10) * 10;
    const co2 = Math.round(kw * 1.03 * 10) / 10;
    return { kw, low, high, co2 };
  }, [bill]);

  return (
    <section id="calculator" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>Savings calculator</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              See how much solar
              <br />
              could save you
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Move the slider to match your latest quarterly electricity bill.
              We&apos;ll estimate the system size and yearly savings for your home.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* slider */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-[2rem] bg-volt-50 p-8">
              <label htmlFor="bill" className="text-sm font-semibold text-slate-700">
                Your quarterly electricity bill
              </label>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl font-light text-slate-900">
                  $<Counter to={bill} duration={0.25} />
                </span>
              </div>
              <input
                id="bill"
                type="range"
                min={MIN}
                max={MAX}
                step={50}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="gs-range mt-6 w-full"
                style={{ ["--range-fill" as string]: `${pct}%` }}
              />
              <p className="mt-3 text-xs text-slate-400">Between $150 and $1500</p>

              <div className="mt-auto pt-10">
                <Link
                  to="/contact#quote"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Get my exact quote
                  <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </Link>
                <a
                  href="tel:0403143093"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-900"
                >
                  <Phone className="h-4 w-4" />
                  Call 0403 143 093
                </a>
                <p className="mt-5 text-xs leading-relaxed text-slate-400">
                  Indicative estimate only. Final system size, savings and rebates are
                  confirmed in your free quote.
                </p>
              </div>
            </div>
          </Reveal>

          {/* results */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            <Result icon={Zap} label="Recommended system" delay={0}>
              <Counter key={r.kw} to={r.kw} decimals={1} suffix=" kW" duration={0.5} />
            </Result>
            <Result icon={TrendingDown} label="Savings per year" accent delay={0.06}
              note="Roughly 70% to 90% off your bill">
              $
              <Counter key={r.low} to={r.low} duration={0.5} /> – $
              <Counter key={r.high} to={r.high} duration={0.5} />
            </Result>
            <Result icon={Leaf} label="CO₂ avoided per year" delay={0.12}>
              <Counter key={r.co2} to={r.co2} decimals={1} suffix=" t" duration={0.5} />
            </Result>
            <Result icon={Battery} label="Typical payback" delay={0.18}>
              3 to 5 years
            </Result>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Result({
  icon: Icon,
  label,
  note,
  children,
  accent = false,
  delay = 0,
}: {
  icon: typeof Zap;
  label: string;
  note?: string;
  children: React.ReactNode;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className={`flex h-full flex-col rounded-[2rem] p-7 ${
          accent ? "bg-volt-400 text-slate-900 shadow-lg" : "bg-white ring-1 ring-slate-200"
        }`}
      >
        <span
          className={`grid h-11 w-11 place-items-center rounded-full ${
            accent ? "bg-white/50" : "bg-volt-50 text-volt-700"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="mt-5 font-display text-3xl font-light tracking-tight sm:text-4xl">
          {children}
        </div>
        <div className={`mt-1 text-sm font-medium ${accent ? "text-slate-800/80" : "text-slate-500"}`}>
          {label}
        </div>
        {note && (
          <div className={`mt-1 text-xs ${accent ? "text-slate-800/70" : "text-slate-400"}`}>
            {note}
          </div>
        )}
      </motion.div>
    </Reveal>
  );
}
