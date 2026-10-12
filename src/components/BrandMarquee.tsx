import { Container, Kicker } from "@/components/ui";
import { Reveal } from "@/components/motion";

const BRANDS = ["LONGi", "Sungrow", "AlphaESS"];

function Chip({ name }: { name: string }) {
  return (
    <div className="mx-3 flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm">
      <span className="font-display text-xl font-semibold tracking-tight text-slate-400">
        {name}
      </span>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="border-y border-slate-100 bg-volt-50/60 py-16">
      <Container className="text-center">
        <Reveal>
          <Kicker className="justify-center">Brands (Solar Panels &amp; Batteries)</Kicker>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
            Our Component Partners
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            Premium panels, inverters and batteries from trusted manufacturers.
          </p>
        </Reveal>
      </Container>

      <div
        className="relative mt-10 flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {Array.from({ length: 6 }).flatMap((_, r) =>
                BRANDS.map((b) => <Chip key={`${copy}-${r}-${b}`} name={b} />),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
