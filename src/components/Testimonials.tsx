import type { CSSProperties } from "react";
import { Container, Kicker } from "@/components/ui";
import { Reveal, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { Star } from "@/components/icons";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C41 36.4 44 30.8 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

type Review = { name: string; meta: string; text: string; avatar: string };

const ROW_1: Review[] = [
  {
    name: "Michael Thompson",
    meta: "Clyde North, VIC · 6.6kW System",
    avatar: IMAGES.avatars.michael,
    text: "Growth Solar made the entire process seamless. Our 6.6kW system was installed in a single day and our power bills have dropped dramatically.",
  },
  {
    name: "Sarah Mitchell",
    meta: "Cranbourne, VIC · 10.12kW + Battery",
    avatar: IMAGES.avatars.sarah,
    text: "Professional, honest and reliable. They guided us through every step, including the Solar Victoria rebate. Our battery backup is fantastic!",
  },
  {
    name: "David Chen",
    meta: "Dandenong, VIC · Commercial",
    avatar: IMAGES.avatars.david,
    text: "We installed a commercial system for our warehouse. Our energy costs are down by over 60%. A great investment.",
  },
  {
    name: "Emma Wilson",
    meta: "Berwick, VIC · EV Charger",
    avatar: IMAGES.avatars.emma,
    text: "The EV charging station installation was quick and tidy. We now charge our car at home using our own solar power.",
  },
];

const ROW_2: Review[] = [
  {
    name: "James Patterson",
    meta: "Pakenham, VIC · 6.6kW System",
    avatar: IMAGES.avatars.james,
    text: "From consultation to grid connection, everything was handled professionally. The monitoring app makes tracking our energy easy.",
  },
  {
    name: "Lisa Nguyen",
    meta: "Lyndhurst, VIC · 13.2kW System",
    avatar: IMAGES.avatars.lisa,
    text: "A fantastic local company. They handled all the Solar Victoria paperwork and the 13.2kW system has been performing brilliantly.",
  },
  {
    name: "Robert Kim",
    meta: "Narre Warren, VIC · 10.12kW System",
    avatar: IMAGES.avatars.robert,
    text: "Quarterly bills went from over $800 to almost nothing. Punctual, clean and knowledgeable team. Five stars!",
  },
  {
    name: "Amanda Foster",
    meta: "Clyde, VIC · Battery Storage",
    avatar: IMAGES.avatars.amanda,
    text: "The battery storage has been a game changer during blackouts. Their after-sales support is exceptional.",
  },
];

function Card({ r }: { r: Review }) {
  return (
    <figure className="mr-6 flex w-[330px] shrink-0 flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:w-[370px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-sun-400">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="h-4 w-4" />
          ))}
        </div>
        <GoogleG className="h-5 w-5 opacity-70" />
      </div>
      <blockquote className="mt-4 grow text-sm leading-relaxed text-slate-600">
        &ldquo;{r.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <img
          src={r.avatar}
          alt={r.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-volt-200"
        />
        <span>
          <span className="block text-sm font-bold text-slate-800">{r.name}</span>
          <span className="block text-xs text-slate-400">{r.meta}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-volt-50/60 py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>Testimonials</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Top rated company in Victoria
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-sm">
              <GoogleG className="h-9 w-9" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-medium text-slate-900">5.0</span>
                  <div className="flex gap-0.5 text-sun-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500">Google reviews</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="rail-mask mt-12 overflow-hidden"
      >
        <div className="rail-pause flex flex-col gap-6">
          <div className="rail-track" data-dir="left" style={{ "--rail-duration": "58s" } as CSSProperties}>
            {[...ROW_1, ...ROW_1].map((r, i) => (
              <Card key={`r1-${i}`} r={r} />
            ))}
          </div>
          <div className="rail-track" data-dir="right" style={{ "--rail-duration": "66s" } as CSSProperties}>
            {[...ROW_2, ...ROW_2].map((r, i) => (
              <Card key={`r2-${i}`} r={r} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
