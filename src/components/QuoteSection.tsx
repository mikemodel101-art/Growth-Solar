import { Container, Kicker } from "@/components/ui";
import { Reveal, motion } from "@/components/motion";
import { QuoteForm } from "@/components/QuoteForm";
import { Mail, MapPin, Phone } from "@/components/icons";

const CONTACT = [
  { icon: MapPin, value: "92 Silverwattle Dr, Lyndhurst, VIC 3975" },
  { icon: Phone, value: "0403 143 093", href: "tel:0403143093" },
  { icon: Mail, value: "info@growthsolar.com.au", href: "mailto:info@growthsolar.com.au" },
];

export function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-28 bg-volt-50/70 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* left */}
          <div>
            <Reveal>
              <Kicker>Get in touch</Kicker>
              <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
                Partner with us for a greener tomorrow
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Fill out the form and our team will get back to you within 24 hours
                with a free, no-obligation consultation.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {CONTACT.map((c) => (
                  <li key={c.value}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="group flex items-center gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 sm:text-base"
                      >
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-volt-700 shadow-sm transition-transform group-hover:scale-105">
                          <c.icon className="h-5 w-5" />
                        </span>
                        {c.value}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-sm font-semibold text-slate-700 sm:text-base">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-volt-700 shadow-sm">
                          <c.icon className="h-5 w-5" />
                        </span>
                        {c.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* right: form */}
          <Reveal delay={0.08}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] bg-white p-7 shadow-xl sm:p-9"
            >
              <QuoteForm />
              <p className="mt-5 text-center text-xs text-slate-400">
                Free consultations. All expenses up front. We never share your details.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
