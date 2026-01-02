import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import LeadershipSection from "@/components/About/LeadershipSection";
import CTA from "@/components/CTA";
import Hero from "@/components/About/Hero";
import OurStory from "@/components/About/OurStory";
import Mission from "@/components/About/Mission";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "about");
        const data = await res.json();
        setAboutData(data);
      } catch (err) {
        console.error("Error fetching about data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  // Show ONE loading state for the entire page
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]">
          <LoadingState message="Loading about us..." size="large" />
        </section>
        <Footer />
      </div>
    );
  }

  // Show ONE error state for the entire page
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]">
          <EmptyState message="Unable to load page content. Please try again later." />
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <OurStory data={aboutData?.data?.[0]} />
      <Mission data={aboutData?.MissionVision} />
      <LeadershipSection data={aboutData?.OurTeam} />
      <CTA />
      <Footer />
    </div>
  );
}
