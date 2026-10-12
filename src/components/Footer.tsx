import { Link } from "react-router-dom";
import { Container } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { ArrowRight, Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "@/components/icons";

const USEFUL = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Contact Us", to: "/contact" },
];

const SERVICES = [
  "Residential Solar",
  "Commercial and Industrial Solar",
  "EV Charging",
];

export function Footer() {
  return (
    <footer className="bg-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-6 font-display text-2xl font-light leading-snug tracking-tight text-slate-900">
              Clean power for Victoria,
              <br />
              built to last.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              At Growth Solar, we believe in the transformative power of renewable
              energy to reshape how we live and work.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* useful links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Useful Links</h3>
            <ul className="mt-5 space-y-3">
              {USEFUL.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-volt-600 transition-transform group-hover:translate-x-0.5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Our Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/solutions"
                    className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-volt-600 transition-transform group-hover:translate-x-0.5" />
                    {s}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact#quote"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-volt-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-volt-300"
                >
                  Get a free quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt-600" />
                92 Silverwattle Dr, Lyndhurst, VIC 3975
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-volt-600" />
                <a href="tel:0403143093" className="transition-colors hover:text-slate-900">
                  0403 143 093
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-volt-600" />
                <a
                  href="mailto:info@growthsolar.com.au"
                  className="transition-colors hover:text-slate-900"
                >
                  info@growthsolar.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="pb-24 lg:pb-8">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-slate-100 px-6 py-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Growth Solar. All Rights Reserved. Website
            Designed &amp; Managed by Ozy Digital Pty Ltd, Glenfield.
          </p>
          <Link to="/contact" className="text-xs text-slate-500 transition-colors hover:text-slate-900">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
