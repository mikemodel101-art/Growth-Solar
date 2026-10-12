import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { WhyChoose } from "@/components/WhyChoose";
import { BrandMarquee } from "@/components/BrandMarquee";
import { SolutionsCarousel } from "@/components/SolutionsCarousel";
import { OfferGrid } from "@/components/OfferGrid";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessLime, type Step } from "@/components/ProcessLime";
import { Packages } from "@/components/Packages";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { QuoteSection } from "@/components/QuoteSection";

const STEPS: Step[] = [
  {
    label: "Step 1",
    title: "Initial Inquiry & Consultation",
    duration: "1–2 days",
    points: [
      "Get in touch to discuss your solar possibilities",
      "We analyse your electricity consumption",
      "Ideal panels and inverters suggested",
    ],
  },
  {
    label: "Step 2",
    title: "System Design",
    duration: "2–3 days",
    points: [
      "Ideal size and configuration determined",
      "Location evaluated for best results",
    ],
  },
  {
    label: "Step 3",
    title: "Site Inspection & Recommendations",
    duration: "1–2 days",
    points: [
      "Property and roof examined for eligibility",
      "Best system selected and steps outlined",
    ],
  },
  {
    label: "Step 4",
    title: "Quotation & Approval",
    duration: "3–5 days",
    points: [
      "Thorough, open quote provided",
      "Paperwork and Solar Victoria application handled",
    ],
  },
  {
    label: "Step 5",
    title: "Installation",
    duration: "1–2 days",
    points: [
      "Certified technicians install promptly",
      "Stringent guidelines for a secure finish",
    ],
  },
  {
    label: "Step 6",
    title: "Inspection & Grid Connection",
    duration: "1–2 weeks",
    points: [
      "Certificate of Electrical Safety obtained",
      "System securely connected to the grid",
    ],
  },
  {
    label: "Step 7",
    title: "Lifetime Support",
    duration: "Ongoing",
    points: [
      "Continuous assistance and maintenance",
      "Guidance whenever you need it",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhyChoose />
      <BrandMarquee />
      <SolutionsCarousel />
      <OfferGrid />
      <SavingsCalculator />
      <ServicesGrid />
      <ProcessLime
        steps={STEPS}
        title={
          <>
            How we install
            <br />
            solar systems
          </>
        }
        note="From consultation to a live system in 7 steps. We handle every detail so going solar is effortless for you."
        ctaLabel="Start your project"
      />
      <Packages />
      <AboutTeaser />
      <Testimonials />
      <Faq />
      <CtaBand />
      <QuoteSection />
    </>
  );
}
