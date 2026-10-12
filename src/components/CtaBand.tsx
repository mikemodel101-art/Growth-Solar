import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui";
import { Reveal, motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Phone } from "@/components/icons";

export function CtaBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.img
        style={{ y }}
        src={IMAGES.turbines}
        alt="Solar farm and wind turbines"
        loading="lazy"
        className="absolute inset-x-0 top-[-14%] h-[128%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <Container className="relative py-24 sm:py-32">
        <Reveal>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl">
              Start your solar
              <br />
              energy today!
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              Growth Solar operates transparently, providing free consultations and
              keeping all expenses up front. Being truthful advisors, we make a real
              difference for Victorian homes and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-volt-400 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-black/25 transition-colors hover:bg-volt-300"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
              <a
                href="tel:0403143093"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                0403 143 093
              </a>
            </div>

            <img
              src={IMAGES.familyHouse}
              alt="Family in front of a home with solar panels"
              loading="lazy"
              className="absolute -right-4 top-1/2 hidden h-48 w-64 -translate-y-1/2 rotate-3 rounded-2xl object-cover shadow-2xl ring-4 ring-white/40 lg:block xl:-right-24"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
