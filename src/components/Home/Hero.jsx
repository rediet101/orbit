import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

// Counter hook for animating numbers
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
};

// Stats Counter Component
const StatCard = ({ value, label, suffix = "" }) => {
  const count = useCounter(value, 2500);
  
  return (
    <div className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm lg:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "landing");
        const json = await res.json();
        if (json.data?.length) setHeroData(json.data[0]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchHero();
  }, []);

  if (!heroData) {
    return (
      <section className="flex h-96 items-center justify-center">
        <div className="animate-pulse text-lg font-medium text-blue-600">
          Loading...
        </div>
      </section>
    );
  }

  const bgImage = heroData.gallery?.[0];

  return (
    <>
      <style>{`
        @keyframes moveBackAndForth {
          0%, 100% {
            background-position: right center;
          }
          50% {
            background-position: left center;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-bg-move {
          animation: moveBackAndForth 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>

      <section
        className="relative min-h-[500px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center overflow-visible animate-bg-move"
        style={{
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <div className="space-y-4">
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight uppercase animate-slide-in-left text-blue-600">
                  {heroData.title}
                </h1>

                <div className="text-lg lg:text-xl max-w-xl leading-relaxed animate-fade-in-up delay-200">
                  {parse(heroData.description)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/screen">Screen Yourself</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Feedback Button */}
            <div className="relative hidden lg:flex justify-end items-center">
              {/* Feedback Button */}
              
            </div>
          </div>
        </div>

        {/* Floating Stats Card - Positioned at the bottom, overlaying the next section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-2xl p-6 lg:p-10 shadow-2xl max-w-3xl mx-auto animate-fade-in-up delay-600 hover:shadow-3xl transition-all duration-300">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-center">
    <div className="text-center">
      <StatCard value={5000} label="Happy Patients" suffix="+" />
    </div>
    <div className="text-center">
      <StatCard value={50} label="Expert Doctors" suffix="+" />
    </div>
    <div className="text-center">
      <StatCard value={98} label="Success Rate" suffix="%" />
    </div>
    <div className="text-center">
      <StatCard value={2} label="Years of Experience" suffix="+" />
    </div>
  </div>
</div>
        </div>
      </section>
    </>
  );
}