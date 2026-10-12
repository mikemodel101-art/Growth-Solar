import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Kicker } from "@/components/ui";
import { AnimatePresence, Reveal, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import {
  ArrowRight,
  Award,
  Check,
  Home,
  Leaf,
  Sparkles,
  TrendingDown,
} from "@/components/icons";

type Item = {
  icon: typeof Award;
  title: string;
  sub: string;
  points: string[];
  image: string;
  imageAlt: string;
};

const ITEMS: Item[] = [
  {
    icon: Award,
    title: "Licensed & accredited",
    sub: "Licensed by the government and accredited",
    points: [
      "High-quality products for homes, commercial and industrial sites",
      "Meets Australian safety and Clean Energy Council (CEC) standards",
      "Fully insured, certified local installers",
    ],
    image: IMAGES.technician,
    imageAlt: "Certified solar technician inspecting panels",
  },
  {
    icon: Sparkles,
    title: "Customised solar products",
    sub: "Solutions customised to your needs",
    points: [
      "Every site carefully examined before we design",
      "Systems built around your property, not a template",
      "Panels, batteries and inverters matched to your usage",
    ],
    image: IMAGES.housePanels,
    imageAlt: "Home with solar panels",
  },
  {
    icon: Home,
    title: "End-to-end service",
    sub: "Right installation of every solar product",
    points: [
      "Monitoring and maintenance after installation",
      "One team from first call to lifetime support",
      "Paperwork, rebates and grid approval handled for you",
    ],
    image: IMAGES.installers2,
    imageAlt: "Installation team working on a rooftop",
  },
  {
    icon: TrendingDown,
    title: "Years of experience",
    sub: "Solar design, installation and maintenance in Melbourne",
    points: [
      "Backed by the trust of thousands of happy customers",
      "From suburban family homes to megawatt systems",
      "Deep knowledge of Victorian roofs and rebates",
    ],
    image: IMAGES.aboutStats,
    imageAlt: "Large solar farm at dawn",
  },
  {
    icon: Leaf,
    title: "Sustainable future",
    sub: "Cost-effective and environmentally friendly",
    points: [
      "Saves your pocket and the environment as well",
      "Clean, renewable power for Victoria's future",
      "Lower emissions with every installation",
    ],
    image: IMAGES.turbines,
    imageAlt: "Wind turbines in a sunlit green field",
  },
];

export function WhyChoose() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>Why choose us?</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Victoria&apos;s top solar
              <br />
              panel company
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              In Victoria, Growth Solar offers more than simply solar installation
              services. We are your solar energy partners, transforming your energy
              requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="px-5 font-display text-sm font-medium tracking-widest text-slate-400">
            {String(active + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="mt-6 space-y-4">
          {ITEMS.map((item, i) => {
            const isActive = active === i;
            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl px-6 py-7 transition-colors duration-300 sm:px-9 ${
                    isActive ? "bg-volt-400" : "bg-volt-50 hover:bg-volt-100"
                  }`}
                >
                  {/* hover photo — desktop, floats right like the reference */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.img
                        key="photo"
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.8, rotate: 10, y: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 6, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-[26%] top-1/2 z-10 hidden h-44 w-60 -translate-y-1/2 rounded-2xl object-cover shadow-2xl ring-4 ring-white/60 xl:block"
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    {/* left: icon + title */}
                    <div className="flex items-center gap-5">
                      <span className="relative inline-flex shrink-0">
                        <span className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm">
                          <item.icon className="h-6 w-6 text-slate-900" strokeWidth={1.8} />
                        </span>
                        <span
                          className={`absolute -right-4 top-1 grid h-10 w-10 place-items-center rounded-full transition-colors ${
                            isActive ? "bg-white/40" : "bg-volt-200/80"
                          }`}
                        >
                          <Check className="h-4 w-4 text-slate-900" strokeWidth={2.5} />
                        </span>
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-[1.7rem]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-700/80">{item.sub}</p>
                      </div>
                    </div>

                    {/* right: bullets */}
                    <ul className="grid gap-x-6 gap-y-2 text-sm text-slate-700 sm:grid-cols-1 xl:pr-[240px]">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* photo — mobile / tablet, expands under content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="photo-mobile"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden xl:hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          loading="lazy"
                          className="mt-6 h-52 w-full rounded-2xl object-cover shadow-lg"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA strip */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-900 px-8 py-8 text-center sm:flex-row sm:text-left">
            <p className="font-display text-xl font-light text-white sm:text-2xl">
              Ready for a free, no-obligation consultation?
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="shrink-0">
              <Link
                to="/contact#quote"
                className="group inline-flex items-center gap-2 rounded-full bg-volt-400 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-volt-300"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
