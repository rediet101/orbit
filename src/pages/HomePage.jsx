import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import ServicePreview from "@/components/Home/ServicePreview";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import CTA from "@/components/CTA";
import TestimonialPreview from "@/components/Home/TestimonialPreview";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicePreview />
      <WhyChooseUs />
      <TestimonialPreview />
      <CTA />
      <Footer />
    </div>
  );
}
