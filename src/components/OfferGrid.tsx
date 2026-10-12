import { Link } from "react-router-dom";
import { Container, Kicker } from "@/components/ui";
import { Stagger, StaggerItem, Tilt, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { ArrowDownRight } from "@/components/icons";

const OFFERS = [
  {
    image: IMAGES.housesRow,
    title: "Residential Solar Systems",
    text: "Use Growth Solar's premium residential solar solutions to reduce your energy costs. We use trained professionals to install dependable panels, batteries, inverters, and heat pumps.",
  },
  {
    image: IMAGES.solutionCommercial,
    title: "Commercial Solar Systems",
    text: "Use our dependable commercial solar solutions to power your company. Our SAA-approved staff guarantees professional installation and long-lasting performance.",
  },
  {
    image: IMAGES.technician,
    title: "Solar Inverter With Battery Backup",
    text: "Customised hybrid solar inverter with battery backup solutions that help companies and homes achieve sustainability goals and lower energy costs.",
  },
];

export function OfferGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Kicker>What We Offer</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Smart solar solutions for homes and businesses across Victoria
            </h2>
          </motion.div>
        </div>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <StaggerItem key={o.title} className="h-full">
              <Tilt intensity={6} className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-volt-50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.title}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex grow flex-col p-7">
                    <h3 className="font-display text-xl font-medium tracking-tight text-slate-900">
                      {o.title}
                    </h3>
                    <p className="mt-3 grow text-sm leading-relaxed text-slate-600">{o.text}</p>
                    <Link
                      to="/solutions"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900"
                    >
                      Read more
                      <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                    </Link>
                  </div>
                </motion.article>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
