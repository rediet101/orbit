import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import LeadershipSection from "@/components/About/LeadershipSection";
import CTA from "@/components/CTA";
import Hero from "@/components/About/Hero";
import OurStory from "@/components/About/OurStory";
import Mission from "@/components/About/Mission";
// import WhyChooseUs from "@/components/About/WhyChooseUs";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <OurStory />
      <Mission />
      <LeadershipSection />
      {/* <WhyChooseUs /> */}
      <CTA />
      <Footer />
    </div>
  );
}
