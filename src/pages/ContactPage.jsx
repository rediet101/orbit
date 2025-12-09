import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Contact/Hero";
import Form from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Map from "@/components/map/map";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-10 left-[5%] animate-float">
          <div className="w-4 h-4 rounded-full bg-blue-400/20"></div>
        </div>
        <div className="absolute top-20 left-[15%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-cyan-400/20"></div>
        </div>
        <div className="absolute top-32 left-[25%] animate-float-slow">
          <div className="w-3 h-3 rounded-full bg-blue-300/30"></div>
        </div>
        <div className="absolute top-16 right-[10%] animate-float">
          <div className="w-8 h-8 rounded-full bg-blue-400/15"></div>
        </div>
        <div className="absolute top-40 right-[20%] animate-float-delayed">
          <div className="w-5 h-5 rounded-full bg-blue-500/25"></div>
        </div>
        <div className="absolute top-60 right-[5%] animate-float-slow">
          <div className="w-4 h-4 rounded-full bg-cyan-500/20"></div>
        </div>
        <div className="absolute bottom-20 left-[8%] animate-float-delayed">
          <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
        </div>
        <div className="absolute bottom-40 left-[18%] animate-float">
          <div className="w-3 h-3 rounded-full bg-blue-500/30"></div>
        </div>
        <div className="absolute bottom-32 left-[30%] animate-float-slow">
          <div className="w-5 h-5 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute bottom-16 right-[12%] animate-float">
          <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
        </div>
        <div className="absolute bottom-48 right-[25%] animate-float-delayed">
          <div className="w-4 h-4 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute bottom-60 right-[8%] animate-float-slow">
          <div className="w-8 h-8 rounded-full bg-blue-400/15"></div>
        </div>
        <div className="absolute top-1/2 left-[3%] animate-float">
          <div className="w-5 h-5 rounded-full bg-cyan-400/25"></div>
        </div>
        <div className="absolute top-1/3 right-[3%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-blue-300/20"></div>
        </div>
        <div className="absolute top-2/3 left-[12%] animate-float-slow">
          <div className="w-4 h-4 rounded-full bg-blue-400/25"></div>
        </div>
        <div className="absolute top-3/4 right-[15%] animate-float">
          <div className="w-3 h-3 rounded-full bg-blue-500/35"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Form />
            <ContactInfo />
          </div>
          <div className="mt-12">
            <Map />
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          
          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-5deg);
            }
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(8deg);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite 1s;
          }
          
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite 0.5s;
          }
        `}</style>
      </section>
      
      <Footer />
    </div>
  );
}
