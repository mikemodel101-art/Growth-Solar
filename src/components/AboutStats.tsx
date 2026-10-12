import { Link } from "react-router-dom";
import { Container } from "@/components/ui";
import { Counter, Reveal } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { ArrowDownRight } from "@/components/icons";

const STATS: { to: number; suffix?: string; decimals?: number; label: string }[] = [
  { to: 10, suffix: "+ years", label: "in the Victorian market" },
  { to: 1000, suffix: "+", label: "systems installed" },
  { to: 98, suffix: "%", label: "of customers satisfied" },
  { to: 4.9, decimals: 1, suffix: "★", label: "average Google rating" },
];

export function AboutStats() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* image with inset + pill */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={IMAGES.aboutStats}
                  alt="Solar farm at golden hour"
                  loading="lazy"
                  className="h-[480px] w-full object-cover sm:h-[560px]"
                />
              </div>
              <img
                src={IMAGES.aboutInset}
                alt=""
                loading="lazy"
                className="absolute left-6 top-6 h-24 w-24 rounded-2xl object-cover shadow-xl ring-4 ring-volt-200"
              />
              <Link
                to="/about"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Learn more
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* copy + hairline stats */}
          <div>
            <Reveal>
              <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
                10+ years of
                <br />
                solar energy
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-500">
                Since day one we&apos;ve helped Victorian homes and businesses swap
                expensive power bills for clean, cheaper energy. Our goal is simple:
                make solar fit every roof and every budget.
              </p>
            </Reveal>

            <div className="mt-8">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 py-5">
                    <span className="font-display text-2xl font-light text-slate-900 sm:text-3xl">
                      <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                    </span>
                    <span className="text-sm text-slate-500">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
