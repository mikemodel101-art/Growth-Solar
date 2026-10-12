import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "@/components/motion";
import { Container } from "@/components/ui";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Check, Zap } from "@/components/icons";

function scrollToCalculator() {
  document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
}

const TRUST = [
  "Free consultations",
  "Solar Victoria paperwork handled",
  "CEC accredited installers",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <motion.img
        style={{ y: imgY }}
        src={IMAGES.hero}
        alt="Solar farm across the Victorian countryside"
        fetchPriority="high"
        className="absolute inset-x-0 top-[-6%] -z-20 h-[114%] w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/15 to-black/80" />

      <Container className="relative z-10 flex flex-1 flex-col pb-12 pt-28 sm:pt-32">
        {/* brand words sitting in the open sky */}
        <motion.div
          style={{ y: wordY }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
          className="select-none text-center"
        >
          <span className="bg-gradient-to-b from-volt-200 via-volt-300 to-volt-500/70 bg-clip-text font-display text-[clamp(2.75rem,10.5vw,9rem)] font-light leading-[0.95] tracking-[-0.03em] text-transparent">
            Growth Solar
          </span>
        </motion.div>

        <motion.div style={{ opacity: fade }} className="mt-auto pt-14 sm:pt-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* left */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-volt-300 ring-1 ring-white/20 backdrop-blur"
              >
                <Zap className="h-3.5 w-3.5" />
                Victoria&apos;s trusted solar partner
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-display text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-6xl"
              >
                Go green with the force of{" "}
                <span className="font-medium text-volt-300">renewable energy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base"
              >
                Leading the solar energy revolution in Victoria. Cut the rising cost of
                your power bills with reliable, cost-effective solar for homes,
                businesses and industry.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
              >
                {TRUST.map((t) => (
                  <li key={t} className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 sm:text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-volt-400 text-slate-900">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact#quote"
                    className="group inline-flex items-center gap-2 rounded-full bg-volt-400 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-black/25 transition-colors hover:bg-volt-300"
                  >
                    Get a free quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
                <motion.button
                  type="button"
                  onClick={scrollToCalculator}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  Estimate my savings
                </motion.button>
                <a
                  href="tel:0403143093"
                  className="text-sm font-semibold text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Or call us on 0403 143 093
                </a>
              </motion.div>
            </div>

            {/* right: size chips */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid w-full max-w-sm grid-cols-2 gap-4 lg:justify-self-end"
            >
              {[
                { v: "6.6kW", l: "Smallest home system we customise" },
                { v: "20kW+", l: "Residential plants, or even more" },
              ].map((s) => (
                <motion.div key={s.v} whileHover={{ y: -4 }} className="glass-dark rounded-2xl p-5">
                  <div className="font-display text-3xl font-light text-white sm:text-4xl">{s.v}</div>
                  <p className="mt-5 text-xs leading-snug text-white/75 sm:text-sm">{s.l}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.span>
      </motion.div>
    </section>
  );
}
