import { Link } from "react-router-dom";
import { Container, Kicker } from "@/components/ui";
import { Reveal, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { ArrowDownRight, Check } from "@/components/icons";

const POINTS = [
  "Locally run, headquartered in Victoria",
  "Licensed & CEC-accredited installers",
  "Residential systems from 6.6kW to 20kW+",
  "Megawatt-scale commercial installations",
  "Free consultations, all expenses up front",
];

export function AboutTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* image with inset + read more */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={IMAGES.aboutStats}
                  alt="Solar farm at sunrise"
                  loading="lazy"
                  className="h-[460px] w-full object-cover sm:h-[540px]"
                />
              </div>
              <img
                src={IMAGES.handsSoil}
                alt="Hands tending soil"
                loading="lazy"
                className="absolute left-6 top-6 h-24 w-24 rounded-2xl object-cover shadow-xl ring-4 ring-volt-200"
              />
              <Link
                to="/about"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Read more
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <Reveal>
              <Kicker>About Growth Solar</Kicker>
              <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                Committed to renewable energy
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                At Growth Solar, we believe in the transformative power of renewable
                energy to reshape how we live and work. We specialise in delivering
                solar power solutions that are efficient, reliable and precisely
                tailored to each customer&apos;s unique needs.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-7 space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-slate-700 sm:text-base">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-volt-400 text-slate-900">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* vision strip */}
        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            className="mt-16 rounded-[2rem] bg-volt-50 px-8 py-10 text-center sm:px-16"
          >
            <Kicker className="justify-center">Our vision</Kicker>
            <h3 className="mt-3 font-display text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Our solar mission for tomorrow
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              To empower Victorian homes and businesses with clean, sustainable energy
              solutions that drive a greener future,{" "}
              <em className="font-serif italic">one solar panel at a time.</em>
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
