import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <>
      {/* Doctor Quote Section - Blue Hero */}
      <section className="bg-[#EBEBEB] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Quote */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Large Quotation Mark */}
              <motion.div 
                className="text-[#75B4DA] mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
                  <path d="M0 40c0-10 3-18 9-24s13-9 23-9v8c-5 0-9 2-12 5s-5 7-5 12h17v28H0V40zm36 0c0-10 3-18 9-24s13-9 23-9v8c-5 0-9 2-12 5s-5 7-5 12h17v28H36V40z"/>
                </svg>
              </motion.div>

              <blockquote className="space-y-6">
                <motion.p 
                  className="text-gray-500 text-2xl lg:text-3xl font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Just like we carefully maintain our cars to keep them running smoothly, our health—especially our oral health—deserves the same care. Orbit Dental Clinic is here to keep your smile strong, healthy, and {" "}
                  <span className="text-[#75B4DA] font-semibold">lasting</span>.
                </motion.p>
                
                <motion.footer 
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-[#75B4DA] text-lg font-medium">CEO, Orbit Dental Clinic</p>
                </motion.footer>
              </blockquote>
            </motion.div>

            {/* Right Side - Doctor Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Doctor image */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/src/assets/ceo23.png"
                    alt="Dr. Akeza Teame"
                    className="w-96 h-[450px] lg:w-[450px] lg:h-[450px] object-cover object-top rounded-lg shadow-2xl"
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#75B4DA] opacity-20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-4 -left-4 w-40 h-40 border-4 border-[#75B4DA] rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section - Light Blue */}
      <section className="py-20 bg-[#EBEBEB] relative overflow-hidden">
        {/* Decorative squiggle with star */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="text-[#75B4DA]">
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
                className="inline-block px-8 py-3 rounded-full  bg-[#75B4DA] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                      className="w-16 h-16 rounded-full object-cover border-4 border-[#75B4DA]"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#75B4DA] to-[#75B4DA] flex items-center justify-center border-4 border-blue-100">
                      <span className="text-white font-bold text-lg">{getInitials(t.name)}</span>
                    </div>
                  )}
                </div>

                {/* Blue Accent Bar */}
                <div className="w-1 h-16 bg-[#75B4DA] rounded-full flex-shrink-0"></div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    {/* Quote Icon */}
                    <div className="text-[#75B4DA] opacity-60">
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
    </>
  );
}

export default TestimonialPreview;
