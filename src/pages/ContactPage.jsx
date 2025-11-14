import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Contact/Hero";
import Form from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Map from "@/components/map/map";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Form />
            <ContactInfo />
          </div>
            <Map />
        </div>
      </section>
      <Footer />
    </div>
  );
}
