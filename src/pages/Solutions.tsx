import { PageBanner } from "@/components/PageBanner";
import { SolutionsCarousel } from "@/components/SolutionsCarousel";
import { Packages } from "@/components/Packages";
import { ProcessLime, type Step } from "@/components/ProcessLime";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { QuoteSection } from "@/components/QuoteSection";
import { IMAGES } from "@/lib/images";

const STEPS: Step[] = [
  { label: "Step 1", title: "Initial Inquiry & Consultation", duration: "1–2 days", points: ["Discuss your goals", "Analyse consumption", "Panels & inverters suggested"] },
  { label: "Step 2", title: "System Design", duration: "2–3 days", points: ["Ideal size & layout", "Location evaluated"] },
  { label: "Step 3", title: "Site Inspection & Recommendations", duration: "1–2 days", points: ["Roof & eligibility check", "Best system selected"] },
  { label: "Step 4", title: "Quotation & Approval", duration: "3–5 days", points: ["Transparent quote", "Solar Victoria application"] },
  { label: "Step 5", title: "Installation", duration: "1–2 days", points: ["Certified technicians", "Secure, tidy finish"] },
  { label: "Step 6", title: "Inspection & Grid Connection", duration: "1–2 weeks", points: ["Safety certificate issued", "Connected to the grid"] },
  { label: "Step 7", title: "Lifetime Support", duration: "Ongoing", points: ["Maintenance & guidance", "Expert help whenever"] },
];

export default function Solutions() {
  return (
    <>
      <PageBanner
        kicker="Solutions"
        title="Reliable power source for all"
        subtitle="Solar, battery and EV charging solutions for every Victorian home and business — engineered for performance, built to last."
        image={IMAGES.ctaAerial}
      />
      <SolutionsCarousel />
      <Packages />
      <ProcessLime
        steps={STEPS}
        title={
          <>
            The complete
            <br />
            installation journey
          </>
        }
        note="From consultation to a live system in 7 steps. We handle every detail so going solar is effortless for you."
        ctaLabel="Start your project"
      />
      <WhyChoose />
      <Testimonials />
      <QuoteSection />
    </>
  );
}
