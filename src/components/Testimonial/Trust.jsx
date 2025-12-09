import React from "react";
import { CheckCircle } from "lucide-react";

function Trust() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
      
      {/* Floating Bubbles */}
      <div className="absolute top-10 left-[5%] animate-float">
        <div className="w-4 h-4 rounded-full bg-primary/20"></div>
      </div>
      <div className="absolute top-20 left-[15%] animate-float-delayed">
        <div className="w-6 h-6 rounded-full bg-cyan-400/20"></div>
      </div>
      <div className="absolute top-32 left-[25%] animate-float-slow">
        <div className="w-3 h-3 rounded-full bg-blue-300/30"></div>
      </div>
      <div className="absolute top-16 right-[10%] animate-float">
        <div className="w-8 h-8 rounded-full bg-secondary/15"></div>
      </div>
      <div className="absolute top-40 right-[20%] animate-float-delayed">
        <div className="w-5 h-5 rounded-full bg-primary/25"></div>
      </div>
      <div className="absolute top-60 right-[5%] animate-float-slow">
        <div className="w-4 h-4 rounded-full bg-cyan-500/20"></div>
      </div>
      <div className="absolute bottom-20 left-[8%] animate-float-delayed">
        <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
      </div>
      <div className="absolute bottom-40 left-[18%] animate-float">
        <div className="w-3 h-3 rounded-full bg-primary/30"></div>
      </div>
      <div className="absolute bottom-32 left-[30%] animate-float-slow">
        <div className="w-5 h-5 rounded-full bg-secondary/20"></div>
      </div>
      <div className="absolute bottom-16 right-[12%] animate-float">
        <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
      </div>
      <div className="absolute bottom-48 right-[25%] animate-float-delayed">
        <div className="w-4 h-4 rounded-full bg-blue-500/20"></div>
      </div>
      <div className="absolute bottom-60 right-[8%] animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-primary/15"></div>
      </div>
      <div className="absolute top-1/2 left-[3%] animate-float">
        <div className="w-5 h-5 rounded-full bg-cyan-400/25"></div>
      </div>
      <div className="absolute top-1/3 right-[3%] animate-float-delayed">
        <div className="w-6 h-6 rounded-full bg-blue-300/20"></div>
      </div>
      <div className="absolute top-2/3 left-[12%] animate-float-slow">
        <div className="w-4 h-4 rounded-full bg-secondary/25"></div>
      </div>
      <div className="absolute top-3/4 right-[15%] animate-float">
        <div className="w-3 h-3 rounded-full bg-primary/35"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance text-foreground">
            Why Patients Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our commitment to excellence and patient care sets us apart in the
            eye care industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Medical Team",
              description:
                "Experienced ophthalmologists and optometrists with years of specialized training",
              icon: CheckCircle,
            },
            {
              title: "State-of-the-Art Technology",
              description:
                "Latest diagnostic and treatment equipment for accurate and effective care",
              icon: CheckCircle,
            },
            {
              title: "Personalized Care",
              description:
                "Individual treatment plans tailored to each patient's unique needs and lifestyle",
              icon: CheckCircle,
            },
            {
              title: "Comprehensive Services",
              description:
                "Complete range of eye care services from routine exams to specialized treatments",
              icon: CheckCircle,
            },
            {
              title: "Patient Education",
              description:
                "We take time to educate patients about their eye health and treatment options",
              icon: CheckCircle,
            },
            {
              title: "Convenient Location",
              description:
                "Easily accessible location in Addis Ababa with flexible scheduling options",
              icon: CheckCircle,
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
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
  );
}

export default Trust;
