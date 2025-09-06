import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import CTA from "@/components/CTA";
import Stat from "@/components/Testimonial/Stat";
import Hero from "@/components/Testimonial/Hero";
import Trust from "@/components/Testimonial/Trust";
import TestimonialGrid from "@/components/Testimonial/TestimonialGrid";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TestimonialGrid />
      <Stat />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}
