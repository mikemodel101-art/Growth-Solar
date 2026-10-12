import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Phone, Zap } from "@/components/icons";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Contact from "@/pages/Contact";

/** Desktop floating quote pill. */
function FloatingCta() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      to="/contact#quote"
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-volt-400 px-5 py-3.5 text-sm font-bold text-slate-900 shadow-xl shadow-volt-600/40 transition-all duration-300 hover:scale-105 lg:inline-flex",
        show ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Zap className="h-4 w-4" />
      Get a Quote
    </Link>
  );
}

/** Mobile conversion bar — always-visible call + quote actions. */
function MobileCta() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href="tel:0403143093"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors active:bg-slate-100"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <Link
          to="/contact#quote"
          className="flex flex-[1.6] items-center justify-center gap-2 rounded-full bg-volt-400 px-5 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-volt-600/30 transition-colors active:bg-volt-300"
        >
          <Zap className="h-4 w-4" />
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingCta />
      <MobileCta />
    </HashRouter>
  );
}
