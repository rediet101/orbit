import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TestimonialPreview() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "landing");
        const json = await res.json();
        if (json.Testimonials && Array.isArray(json.Testimonials)) {
          setTestimonials(json.Testimonials.slice(0, 3)); // Show only 3 testimonials
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-[#DFF3FF] text-center">
        <div className="animate-pulse text-gray-500">Loading testimonials...</div>
      </section>
    );
  }

  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-20 bg-[#DFF3FF] relative overflow-hidden">
      {/* Decorative squiggle with star */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="text-blue-600">
          <path 
            d="M10 40 Q 25 10, 40 25 Q 55 40, 70 15" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <polygon 
            points="72,8 78,18 68,18" 
            fill="#F59E0B"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Decorative line */}
            <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
            
            <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
              What Our<br />Customers Says
            </h2>
            
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Trusted by hundreds of patients across Addis Ababa for quality eye care. 
              Why sir end believe uncivil respect. Always get adieus nature day course for common.
            </p>
            
            <Link
              to="/testimonials"
              className="inline-block px-8 py-3 rounded-full  bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View More
            </Link>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="space-y-6">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-lg p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  marginLeft: index === 1 ? '40px' : index === 2 ? '20px' : '0'
                }}
              >
                {/* Profile Image */}
                <div className="flex-shrink-0 relative">
                  {t.image_url && t.image_url.length > 0 ? (
                    <img
                      src={t.image_url[0]}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-100">
                      <span className="text-white font-bold text-lg">{getInitials(t.name)}</span>
                    </div>
                  )}
                </div>

                {/* Blue Accent Bar */}
                <div className="w-1 h-16 bg-blue-600 rounded-full flex-shrink-0"></div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    {/* Quote Icon */}
                    <div className="text-blue-600 opacity-60">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {t.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialPreview;
