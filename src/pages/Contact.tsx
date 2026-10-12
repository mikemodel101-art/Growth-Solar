import { Container, Kicker, SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, motion } from "@/components/motion";
import { PageBanner } from "@/components/PageBanner";
import { QuoteForm } from "@/components/QuoteForm";
import { IMAGES } from "@/lib/images";
import {
  ArrowDownRight,
  Check,
  Clock,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Twitter,
  Youtube,
} from "@/components/icons";

const INFO = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "92 Silverwattle Dr, Lyndhurst, VIC 3975",
    href: "https://maps.google.com/?q=92+Silverwattle+Dr,+Lyndhurst,+VIC+3975",
  },
  { icon: Phone, label: "Call us", value: "0403 143 093", href: "tel:0403143093" },
  {
    icon: Mail,
    label: "Email us",
    value: "info@growthsolar.com.au",
    href: "mailto:info@growthsolar.com.au",
  },
];

const SOCIALS = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
];

const POINTS = [
  { icon: Sparkles, text: "Free, no-obligation consultation" },
  { icon: Clock, text: "We reply within one business day" },
  { icon: Check, text: "Transparent, upfront pricing" },
];

const HOURS = [
  { d: "Monday – Friday", h: "8:00am – 6:00pm" },
  { d: "Saturday", h: "9:00am – 2:00pm" },
  { d: "Sunday", h: "Closed" },
];

export default function Contact() {
  return (
    <>
      <PageBanner
        kicker="Contact Us"
        title="Get in touch"
        subtitle="Questions about solar, batteries or EV charging? Our friendly Victorian team is ready to help with honest advice and a free quote."
        image={IMAGES.rooftops}
      />

      {/* contact methods */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Contact Us"
            title="Start a new project"
            subtitle="Reach us however suits you — we'd love to hear about your solar project."
          />

          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {INFO.map((c) => (
              <StaggerItem key={c.label} className="h-full">
                <motion.a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col items-start rounded-3xl bg-volt-50 p-7 transition-colors hover:bg-volt-100"
                >
                  <span className="grid h-13 w-13 place-items-center rounded-full bg-white p-3.5 shadow-sm">
                    <c.icon className="h-6 w-6 text-slate-900" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium text-slate-900">
                    {c.label}
                  </h3>
                  <p className="mt-2 break-words text-sm leading-relaxed text-slate-600">
                    {c.value}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                    Open
                    <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </span>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm font-semibold text-slate-500">Follow us</span>
              <div className="flex gap-2">
                {SOCIALS.map(({ Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* enquiry form */}
      <section id="quote" className="scroll-mt-28 bg-mint py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* left: copy + reassurance + hours */}
            <div>
              <Reveal>
                <Kicker>Enquiry</Kicker>
                <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                  Fill the below
                  <br />
                  details
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us a little about your property and what you need. One of our
                  solar consultants will get back to you with honest advice and a
                  free, tailored quote.
                </p>
              </Reveal>

              <Stagger className="mt-8 space-y-4">
                {POINTS.map((p) => (
                  <StaggerItem key={p.text}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-volt-700 shadow-sm">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-slate-700 sm:text-base">
                        {p.text}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.15}>
                <div className="mt-10 rounded-3xl bg-white p-7 shadow-sm">
                  <h3 className="flex items-center gap-2 font-display text-lg font-medium text-slate-900">
                    <Clock className="h-5 w-5 text-volt-700" />
                    Business hours
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {HOURS.map((row) => (
                      <li
                        key={row.d}
                        className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-slate-500">{row.d}</span>
                        <span className="font-semibold text-slate-800">{row.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* right: form card */}
            <Reveal delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] bg-white p-7 shadow-xl sm:p-9"
              >
                <h3 className="font-display text-2xl font-medium text-slate-900">
                  Request a free quote
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  It takes less than a minute — we handle the rest.
                </p>
                <div className="mt-7">
                  <QuoteForm />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
