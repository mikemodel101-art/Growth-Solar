import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Kicker } from "@/components/ui";
import { AnimatePresence, Reveal, motion } from "@/components/motion";
import { ArrowDownRight, ChevronDown, Phone } from "@/components/icons";

const FAQS = [
  {
    q: "How much does a home solar system cost?",
    a: "Our exclusive packages start from $1,391 for a 6.6 kW system, with 10.12 kW and 13.2 kW options for larger households. Your final price depends on your roof, energy use and chosen equipment, and is confirmed in your free quote.",
  },
  {
    q: "Do you handle the Solar Victoria paperwork?",
    a: "Yes — once you approve your quote we prepare and submit every form to Solar Victoria and your distributor on your behalf, so you don't lift a finger.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential systems are installed in a single day. From quote to grid connection, the whole process typically takes 3–6 weeks.",
  },
  {
    q: "Can I add a battery later?",
    a: "Absolutely. We design every system battery-ready, so you can add storage whenever it suits your budget — often using the same inverter.",
  },
  {
    q: "Do you install commercial and industrial systems?",
    a: "Yes — from small business rooftops to megawatt-scale arrays, including design, financing advice and ongoing maintenance.",
  },
  {
    q: "Are the consultations really free?",
    a: "Completely free and no-obligation, with all costs up front. You'll never be pressured into anything.",
  },
  {
    q: "Which areas do you service?",
    a: "All of Victoria — from Melbourne's south-east suburbs to regional communities across the state.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <Kicker>Frequently asked</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Questions, answered
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:pb-1">
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Still wondering about something? Call us or send an enquiry and our team
              will reply within 24 hours.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:0403143093"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" />
                Call 0403 143 093
              </a>
              <Link
                to="/contact#quote"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-900"
              >
                Ask a question
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`overflow-hidden rounded-3xl border transition-colors ${
                  isOpen ? "border-volt-300 bg-volt-50" : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                >
                  <span className="font-display text-base font-medium text-slate-900 sm:text-lg">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      isOpen ? "bg-volt-400 text-slate-900" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:px-8">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
