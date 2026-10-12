import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Kicker } from "@/components/ui";
import { Reveal, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { ArrowDownRight, ArrowLeft, ArrowRight, Building, Car, Home } from "@/components/icons";

type Solution = {
  icon: typeof Home;
  title: string;
  text: string;
  points: string[];
  image: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: Home,
    title: "Solar Homes With Battery Backup",
    text: "We offer comprehensive residential solar solutions tailored to meet your energy needs. We can customise solar power plants from 6.6kW to 20kW (or even more!).",
    points: [
      "Systems from 6.6kW to 20kW+",
      "Battery backup for power in the dark",
      "Customised to your household",
    ],
    image: IMAGES.solutionHomes,
  },
  {
    icon: Building,
    title: "Commercial & Industrial Solar",
    text: "Tailored commercial and industrial solar designed to reduce energy costs, improve efficiency and meet sustainability goals. We manage the entire installation process.",
    points: [
      "Assessment of your energy needs",
      "Custom design and installation",
      "Megawatt-scale capability",
    ],
    image: IMAGES.solutionCommercial,
  },
  {
    icon: Car,
    title: "Electric Vehicle Charging Station",
    text: "Cutting-edge EV charging solutions for both home and commercial use, making the transition to electric vehicles more convenient and sustainable.",
    points: [
      "Home and commercial EV chargers",
      "Charge with your own solar",
      "Convenient and sustainable",
    ],
    image: IMAGES.solutionEv,
  },
];

export function SolutionsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(SOLUTIONS.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const mid = c.offsetLeft - track.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(mid - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>Our Solar Solutions</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Reliable power
              <br />
              source for all
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Comprehensive solar solutions for homes, commercial sites and electric
              vehicles across Victoria.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* slider */}
      <div className="relative mt-14">
        {/* side arrows */}
        <button
          type="button"
          aria-label="Previous solution"
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
          className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-800 shadow-lg ring-1 ring-black/5 transition-all hover:bg-slate-900 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-slate-800 sm:grid lg:left-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next solution"
          onClick={() => scrollTo(index + 1)}
          disabled={index === SOLUTIONS.length - 1}
          className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-800 shadow-lg ring-1 ring-black/5 transition-all hover:bg-slate-900 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-slate-800 sm:grid lg:right-8"
        >
          <ArrowRight className="h-4 w-4" />
        </button>

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 sm:px-8 lg:px-24"
        >
          {SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] bg-volt-50 sm:w-[460px] lg:w-[520px]"
            >
              <div className="relative">
                <img src={s.image} alt={s.title} loading="lazy" className="h-56 w-full object-cover sm:h-64" />
                <span className="absolute right-5 top-4 font-display text-5xl font-light text-white/90 drop-shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-900 shadow-lg">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
              </div>

              <div className="flex grow flex-col p-7">
                <h3 className="font-display text-2xl font-medium tracking-tight text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact#quote"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Get a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* controls: dots + learn more + mobile arrows */}
        <Container className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-md ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              Learn more
              <ArrowDownRight className="h-4 w-4" />
            </Link>

            <span className="font-display text-sm font-medium tracking-widest text-slate-400">
              {String(index + 1).padStart(2, "0")} / {String(SOLUTIONS.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">
              {SOLUTIONS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to solution ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* mobile arrows */}
            <div className="flex gap-3 sm:hidden">
              <button
                type="button"
                aria-label="Previous solution"
                onClick={() => scrollTo(index - 1)}
                disabled={index === 0}
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-900 hover:text-white disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next solution"
                onClick={() => scrollTo(index + 1)}
                disabled={index === SOLUTIONS.length - 1}
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-900 hover:text-white disabled:opacity-30"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
