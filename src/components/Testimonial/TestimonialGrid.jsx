import React, { useEffect, useState } from "react";
import { LoadingState } from "@/components/ui/LoadingState";
import { EmptyState } from "@/components/ui/EmptyState";

function TestimonialGrid() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + 'testimonials');
        const data = await res.json();
        setTestimonials(data.Testimonials || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <section className="bg-[#DFF3FF]">
        <LoadingState message="Loading testimonials..." />
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#DFF3FF]">
        <EmptyState message="Unable to load testimonials. Please try again later." />
      </section>
    );
  }

  if (!testimonials.length) {
    return (
      <section className="bg-[#DFF3FF]">
        <EmptyState message="No testimonials yet. Our happy clients' stories are coming soon!" />
      </section>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
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
        <div className="w-8 h-8 rounded-full bg-blue-200/15"></div>
      </div>
      <div className="absolute top-40 right-[20%] animate-float-delayed">
        <div className="w-5 h-5 rounded-full bg-blue-500/25"></div>
      </div>
      <div className="absolute bottom-20 left-[8%] animate-float-delayed">
        <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
      </div>
      <div className="absolute bottom-32 left-[30%] animate-float-slow">
        <div className="w-5 h-5 rounded-full bg-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-16 right-[12%] animate-float">
        <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card with blue border accent */}
              <div className="relative bg-white rounded-xl pt-12 pb-8 px-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border-l-4 border-t-4  border-blue-600 group">
                
                {/* Large Quote Icon - positioned higher above the card */}
                <div className="absolute -top-10 right-6 text-gray-400 text-8xl font-serif leading-none select-none transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110">
                  "
                </div>

                {/* Profile Image - overlapping the card */}
                <div className="absolute -top-10 left-6 transition-transform duration-300 group-hover:scale-110">
                  {t.image_url && t.image_url.length > 0 ? (
                    <img
                      src={t.image_url[0]}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white font-bold text-xl">{getInitials(t.name)}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Name and Title */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg transition-colors duration-300 group-hover:text-blue-800">{t.name}</h3>
                    {t.age && (
                      <p className="text-gray-500 text-sm">Age: {t.age}</p>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed">
                    "{t.testimonial}"
                  </p>
                </div>
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

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default TestimonialGrid;
