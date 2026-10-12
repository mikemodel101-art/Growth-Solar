import { Container, Kicker } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { IMAGES } from "@/lib/images";

const GALLERY = [
  { src: IMAGES.familyYard, alt: "Family at home with rooftop solar" },
  { src: IMAGES.aerialSuburbs, alt: "Aerial view of houses with solar panels" },
  { src: IMAGES.aerialFarm, alt: "Solar farm aerial view" },
];

export function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal>
            <Kicker>Who Are We?</Kicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl">
              Solar Energy System For Home by Growth Solar Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Growth Solar is a solar energy solutions supplier situated in
                Silverwattle. We are a Victoria-based company that specialises in
                offering the greatest solar energy available, designed to satisfy the
                particular requirements of businesses and homes.
              </p>
              <p>
                If you are looking for solar services near me, Growth Solar Solutions
                is the best solution for homeowners in Australia. Switch to solar to
                cut the rising power bills in Victoria.
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
          {GALLERY.map((g) => (
            <StaggerItem key={g.src}>
              <div className="group overflow-hidden rounded-3xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
