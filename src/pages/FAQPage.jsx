import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/FAQ/Hero";
import FAQContent from "@/components/FAQ/FAQContent";
import ReachoutSection from "@/components/FAQ/ReachoutSection";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FAQContent />
      <ReachoutSection />
      <Footer />
    </div>
  );
}
