import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useScroll } from "framer-motion";
import { AnimatePresence, motion } from "@/components/motion";
import { cn } from "@/utils/cn";
import { Container } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { ArrowRight, Close, Menu } from "@/components/icons";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Contact", to: "/contact" },
];

const MotionLink = motion(Link);

/** Dark glass pill navigation floating over the page — Solara signature. */
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-volt-500 via-volt-400 to-brand-500"
      />

      <header className="fixed inset-x-0 top-5 z-50">
        <Container>
          <motion.nav
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-full bg-slate-900/70 py-2 pl-5 pr-2 shadow-xl shadow-black/10 ring-1 ring-white/10 backdrop-blur-xl"
          >
            <Logo tone="light" />

            <div className="mx-2 hidden items-center gap-1 lg:flex">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <MotionLink
              to="/contact#quote"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden items-center gap-1.5 rounded-full bg-volt-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-volt-300 lg:inline-flex"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </MotionLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </motion.nav>

          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0, y: -8 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mx-auto mt-2 w-fit min-w-[260px] rounded-3xl bg-white p-3 shadow-2xl ring-1 ring-black/5">
                  {NAV.map((item, i) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i }}
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-2xl px-4 py-3 text-base font-semibold",
                            isActive ? "bg-volt-50 text-slate-900" : "text-slate-700 hover:bg-slate-50",
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                  <MotionLink
                    to="/contact#quote"
                    onClick={() => setOpen(false)}
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-volt-400 px-5 py-3 text-base font-semibold text-slate-900"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </MotionLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </header>
    </>
  );
}
