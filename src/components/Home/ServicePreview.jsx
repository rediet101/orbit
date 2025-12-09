import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";

// Service icons as SVG components with blue color
const PrescriptionGlassesIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="18"
      cy="32"
      r="10"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="46"
      cy="32"
      r="10"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <path d="M28 32 H36" stroke="#2563EB" strokeWidth="2" />
    <path d="M8 32 H8" stroke="#2563EB" strokeWidth="2" />
    <path d="M56 32 H56" stroke="#2563EB" strokeWidth="2" />
    <path
      d="M8 28 Q4 28 4 32 Q4 36 8 36"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M56 28 Q60 28 60 32 Q60 36 56 36"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const ContactLensIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="32"
      cy="32"
      rx="20"
      ry="12"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <ellipse
      cx="32"
      cy="32"
      rx="12"
      ry="7"
      stroke="#2563EB"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M20 28 Q32 20 44 28"
      stroke="#2563EB"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const EyeCareIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 16 C18 16 8 32 8 32 C8 32 18 48 32 48 C46 48 56 32 56 32 C56 32 46 16 32 16 Z"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="32"
      cy="32"
      r="8"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="32" cy="32" r="3" fill="#2563EB" />
    <path d="M32 8 L32 12" stroke="#2563EB" strokeWidth="2" />
    <path d="M32 52 L32 56" stroke="#2563EB" strokeWidth="2" />
  </svg>
);

const VisionCheckIcon = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="16"
      y="12"
      width="32"
      height="40"
      rx="2"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
    />
    <text x="24" y="28" fill="#2563EB" fontSize="10" fontWeight="bold">
      A O F
    </text>
    <text x="24" y="38" fill="#2563EB" fontSize="8">
      P E Z
    </text>
    <text x="24" y="46" fill="#2563EB" fontSize="6">
      L O C D
    </text>
  </svg>
);

const iconServices = [
  {
    icon: PrescriptionGlassesIcon,
    title: "Prescription Glasses",
    description:
      "High-quality prescription glasses tailored to your vision needs.",
  },
  {
    icon: ContactLensIcon,
    title: "Contact Lens",
    description: "Comfortable and precise contact lens fitting and supplies.",
  },
  {
    icon: EyeCareIcon,
    title: "Eye Care",
    description: "Comprehensive eye care services for optimal vision health.",
  },
  {
    icon: VisionCheckIcon,
    title: "Vision Check",
    description: "Professional vision examinations using advanced technology.",
  },
];

// Fallback placeholder image
const placeholderImage =
  "https://imgs.search.brave.com/gfVbzaPrvyeS-0Ch4Q6sLLVAUYw6_dAGeEJNo5h_BOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg2/MTk3Nzk5Ni9waG90/by9iZWF1dGlmdWwt/ZmVtYWxlLW9wdGlj/aWFuLWRvaW5nLWV5/ZS10ZXN0LXdpdGgt/ZXllLWNoYXJ0LW9u/LWhlci1wYXRpZW50/LWluLW9waHRoYWxt/b2xvZ3ktY2xpbmlj/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1z/RVZndm9JWmlYUEFK/elB4cEpWWE9WckFj/NWdrbkNrVlJWeU80/M1AxZ2JBPQ";

function ServicePreview() {
  const [apiServices, setApiServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "landing");
        const json = await res.json();
        if (json.Services && Array.isArray(json.Services)) {
          setApiServices(json.Services.slice(0, 3)); // Get first 3 services
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Helper function to strip HTML tags for description preview
  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <section id="services" className="py-16 lg:py-20 bg-[#DFF3FF]">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Icons Row */}

        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative z-10">
              <img
                src="https://imgs.search.brave.com/gfVbzaPrvyeS-0Ch4Q6sLLVAUYw6_dAGeEJNo5h_BOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg2/MTk3Nzk5Ni9waG90/by9iZWF1dGlmdWwt/ZmVtYWxlLW9wdGlj/aWFuLWRvaW5nLWV5/ZS10ZXN0LXdpdGgt/ZXllLWNoYXJ0LW9u/LWhlci1wYXRpZW50/LWluLW9waHRoYWxt/b2xvZ3ktY2xpbmlj/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1z/RVZndm9JWmlYUEFK/elB4cEpWWE9WckFj/NWdrbkNrVlJWeU80/M1AxZ2JBPQ"
                alt="Optometrist in optical store"
                className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Second overlapping image */}
            <div className="absolute bottom-0 right-0 lg:right-10 transform translate-y-8 z-20">
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=200&fit=crop"
                alt="Collection of eyeglasses"
                className="w-64 h-44 object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8 mt-10">
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-6">
              Style Yourself With The Best Lens
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Orbit Eye, we combine cutting-edge technology with personalized
              care to deliver exceptional vision solutions. Our team of
              experienced optometrists is dedicated to helping you see the world
              more clearly, whether through prescription glasses, contact
              lenses, or comprehensive eye care services. We believe everyone
              deserves access to quality eye care in a comfortable and welcoming
              environment.
            </p>
            <Link to="/about">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 mt-10">
          {iconServices.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <service.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Service Section */}
      <div className=" py-16 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wide">
              Our Service
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
              What Can We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive eye care services using the latest
              technology and techniques to ensure the best possible outcomes for
              your vision health.
            </p>
          </div>

          {/* Service Cards - Dynamic from API */}
          {/* 3D Flip Card Styles */}
          <style>{`
            .flip-card {
              perspective: 1000px;
              height: 380px;
            }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.6s;
              transform-style: preserve-3d;
            }
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-front,
            .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              border-radius: 1rem;
              overflow: hidden;
            }
            .flip-card-back {
              transform: rotateY(180deg);
            }
          `}</style>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-56 mb-6"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          ) : apiServices.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <div 
                  key={service.id || index} 
                  className="flip-card"
                >
                  <div className="flip-card-inner shadow-lg hover:shadow-xl">
                    {/* Front Side */}
                    <div className="flip-card-front relative">
                      <img
                        src={service.image_url?.[0] || placeholderImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-xl font-bold text-white text-center">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    {/* Back Side */}
                    <div className="flip-card-back bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col justify-center items-center p-8 text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed mb-6">
                        {stripHtml(service.description)}
                      </p>
                      <Link
                        to="/services"
                        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                      >
                        Read More
                        <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Fallback static content if API fails
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="flip-card">
                <div className="flip-card-inner shadow-lg hover:shadow-xl">
                  <div className="flip-card-front relative">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=280&fit=crop"
                      alt="Visual Acuity Test"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white text-center">
                        Visual Acuity Test
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col justify-center items-center p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Visual Acuity Test
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Comprehensive visual acuity testing to measure the sharpness and clarity of your vision. We use state-of-the-art equipment to ensure accurate results.
                    </p>
                    <Link
                      to="/services"
                      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flip-card">
                <div className="flip-card-inner shadow-lg hover:shadow-xl">
                  <div className="flip-card-front relative">
                    <img
                      src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&h=280&fit=crop"
                      alt="Eye Check Up"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white text-center">
                        Eye Check Up
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col justify-center items-center p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Eye Check Up
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Complete eye health examination including assessment of eye pressure and retina health. Early detection is key to preventing vision problems.
                    </p>
                    <Link
                      to="/services"
                      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flip-card">
                <div className="flip-card-inner shadow-lg hover:shadow-xl">
                  <div className="flip-card-front relative">
                    <img
                      src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=280&fit=crop"
                      alt="Lasik Eye Surgery"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white text-center">
                        Lasik Eye Surgery
                      </h3>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col justify-center items-center p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Lasik Eye Surgery
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Advanced laser vision correction surgery performed by experienced surgeons. Say goodbye to glasses and contacts with our cutting-edge LASIK procedures.
                    </p>
                    <Link
                      to="/services"
                      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicePreview;
