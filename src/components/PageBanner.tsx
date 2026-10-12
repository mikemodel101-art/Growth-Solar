import { useRef, type ReactNode } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Container, Kicker } from "@/components/ui";
import { motion } from "@/components/motion";
import { IMAGES } from "@/lib/images";

/** Rounded image banner for inner pages — consistent with the Solara hero frame. */
export function PageBanner({
  kicker,
  title,
  subtitle,
  image = IMAGES.hero,
  children,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} className="bg-white pt-24 sm:pt-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <motion.img
            style={{ y }}
            src={image}
            alt=""
            loading="eager"
            className="absolute inset-x-0 top-[-10%] h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75" />

          <div className="relative px-7 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-44">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <Kicker className="text-volt-300">{kicker}</Kicker>
              <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
                  {subtitle}
                </p>
              )}
              {children}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
