import { PageBanner } from "@/components/PageBanner";
import { AboutStats } from "@/components/AboutStats";
import { WhyChoose } from "@/components/WhyChoose";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { IMAGES } from "@/lib/images";

export default function About() {
  return (
    <>
      <PageBanner
        kicker="About"
        title="Our journey to a sustainable future"
        subtitle="Growth Solar is a locally run Victorian company on a mission to make clean energy affordable for everyone. For over a decade we've helped thousands of homes and businesses cut their power bills with reliable, CEC-accredited solar — and we're just getting started."
        image={IMAGES.rooftops}
      />
      <AboutStats />
      <WhyChoose />
      <Team />
      <Testimonials />
      <CtaBand />
    </>
  );
}
