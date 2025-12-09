import React, { useEffect, useState } from "react";
import { CheckCircle2, Clock, Eye, ArrowRight } from "lucide-react";
import parse from "html-react-parser";

function ServicesGrid() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "services");
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setServices(json.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  if (services.length === 0) {
    return (
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="h-10 bg-white/50 rounded w-64 mx-auto animate-pulse"></div>
            <div className="h-4 bg-white/50 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="mt-12 space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-white/30 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Gradient */}
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from expert eye care solutions tailored to your needs.
          </p>
        </div>

        {/* Services List - Vertical Stack of Wide Cards */}
        <div className="flex flex-col gap-10">
          {services.map((service, index) => {
            const specs = service.Specifications
              ? service.Specifications.split(/<br\s*\/?>|\n/i).filter(Boolean)
              : [];
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.Id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50"
              >
                {/* Wave Animation */}
                <div className="wave-container">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                </div>

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative z-10`}>
                  {/* Content Side */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
                        {service.category || "Service Catagory"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {service.Title}
                    </h3>

                    {/* Specifications */}
                    {specs.length > 0 && (
                      <div className="flex flex-col gap-2 mb-6">
                        {specs.slice(0, 6).map((line, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{parse(line.trim())}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Time & Recovery Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{service["estimated-Time"] || "1-3 hours"}</span>
                      </div>
                      <span className="text-gray-300">|</span>
                      {/* <div className="flex items-center gap-1.5">
                        <ArrowRight className="h-4 w-4" />
                        <span>Personalised recovery plan</span>
                      </div> */}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 relative min-h-[300px] lg:min-h-[400px]">
                    {service.icon?.[0] ? (
                      <img
                        src={service.icon[0]}
                        alt={service.Title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-50 to-secondary/10 flex items-center justify-center">
                        <Eye className="h-24 w-24 text-primary/20" />
                      </div>
                    )}
                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-white/50 via-transparent to-transparent lg:block hidden`}></div>
                  </div>
                </div>
              </div>
            );
          })}
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

        /* Wave Animation */
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          overflow: hidden;
          z-index: 0;
        }

        .wave {
          background: linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(14, 165, 233, 0.15), rgba(59, 130, 246, 0.15));
          border-radius: 1000% 1000% 0 0;
          position: absolute;
          width: 200%;
          height: 100%;
          animation: wave 10s -3s linear infinite;
          transform: translate3d(0, 0, 0);
          opacity: 0.6;
          bottom: -40%;
          left: 0;
        }

        .wave:nth-of-type(2) {
          bottom: -50%;
          animation: wave 18s linear reverse infinite;
          opacity: 0.5;
          background: linear-gradient(to right, rgba(14, 165, 233, 0.12), rgba(59, 130, 246, 0.12), rgba(14, 165, 233, 0.12));
        }

        .wave:nth-of-type(3) {
          bottom: -60%;
          animation: wave 20s -1s reverse infinite;
          opacity: 0.4;
          background: linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1), rgba(59, 130, 246, 0.1));
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-25%);
          }
          50% {
            transform: translateX(-50%);
          }
          75% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default ServicesGrid;