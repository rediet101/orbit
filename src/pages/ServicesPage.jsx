import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Service/Hero";
import ServicesGrid from "@/components/Service/ServicesGrid";
import PaymentAndInsurance from "@/components/Service/PaymentAndInsurance";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesGrid />
      <PaymentAndInsurance />
      <CTA />
      <Footer />
    </div>
  );
}
