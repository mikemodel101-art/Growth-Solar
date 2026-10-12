import { Container, Kicker } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, motion } from "@/components/motion";
import { Battery, Building, Home, Wrench } from "@/components/icons";

const SERVICES = [
  {
    icon: Building,
    title: "Business Solar",
    text: "Installing commercial solar can lower operating expenses and improve your company's ecological credentials. We deliver dependable, high-efficiency solar energy solutions in Victoria that save money over time.",
  },
  {
    icon: Battery,
    title: "Storage of Batteries",
    text: "Growth Solar is dedicated to being the best solution provider over the decades, accredited by government norms and compliance, and proud to support Victoria's shift to intelligent on-site solar.",
  },
  {
    icon: Home,
    title: "Solar Power for Homes",
    text: "We analyse your home before installation, considering energy consumption, roof configuration and your financial situation to find the optimal solar option for you.",
  },
  {
    icon: Wrench,
    title: "Solar Upkeep & Repair",
    text: "We provide solar repair and maintenance in Victoria, performance enhancements and inverter replacement, keeping your system healthy so your investment keeps paying back.",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>Our Services and Products for Solar</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Complete solar services
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Growth Solar provides a choice of services to suit your needs, whether
              you are beginning a solar power installation in Victoria or upgrading an
              existing system.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                className="group flex h-full gap-5 rounded-[2rem] bg-volt-50 p-7 transition-colors hover:bg-volt-100"
              >
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-white p-3.5 shadow-sm">
                  <s.icon className="h-6 w-6 text-slate-900" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
