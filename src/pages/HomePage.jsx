import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import ServicePreview from "@/components/Home/ServicePreview";
// import WhyChooseUs from "@/components/Home/WhyChooseUs";
import CTA from "@/components/CTA";
import TestimonialPreview from "@/components/Home/TestimonialPreview";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Partners from "@/components/Home/Partners";
import Doctorlist from "@/components/Home/Doctorlist";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialMediaLinks />
      <Hero />
      <ServicePreview />
       <Doctorlist/> 
      {/* <WhyChooseUs /> */}
      <Partners />
      <TestimonialPreview />
     
      <CTA />
      <Footer />
    </div>  
  );
}
