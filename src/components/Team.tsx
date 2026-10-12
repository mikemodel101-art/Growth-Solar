import { Container, SectionHeading } from "@/components/ui";
import { Stagger, StaggerItem, Tilt, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { Facebook, Twitter, Youtube } from "@/components/icons";

const TEAM = [
  { name: "Priya Kapoor", role: "Chief Operating Officer", image: IMAGES.team.priya },
  { name: "Sarah Hamilton", role: "Chief Marketing Officer", image: IMAGES.team.sarah },
  { name: "Robert Chen", role: "Chief Strategy Officer", image: IMAGES.team.robert },
];

const SOCIALS = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
];

export function Team() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Our Team"
          title="The People Powering Growth Solar"
          subtitle="Local experts dedicated to making solar simple, honest and accessible for every Victorian."
        />

        <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <StaggerItem key={m.name} className="h-full">
              <Tilt intensity={7} className="h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-3xl bg-slate-900 shadow-lg"
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-bold text-white">{m.name}</h3>
                    <p className="text-sm font-medium text-brand-400">{m.role}</p>
                    <motion.div
                      initial={false}
                      className="mt-0 flex h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:h-10 group-hover:opacity-100"
                    >
                      {SOCIALS.map(({ Icon, label }) => (
                        <motion.a
                          key={label}
                          href="#"
                          aria-label={label}
                          whileHover={{ y: -3 }}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand-500"
                        >
                          <Icon className="h-4 w-4" />
                        </motion.a>
                      ))}
                    </motion.div>
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
