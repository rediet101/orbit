import React, { useState } from "react";
import { Eye, Sparkles, Quote } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

function OurStory({ data }) {
  const [hoveredParagraph, setHoveredParagraph] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Use data from props (passed from page-level fetch)
  const story = data || null;

  // Parse description into paragraphs
  const paragraphs = story?.description
    ? story.description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

  // If no data provided, show empty state with sparkle icon
  if (!story) {
    return (
      <section className="py-20 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]">
        <EmptyState message="No story available yet. Our journey begins soon!" />
      </section>
    );
  }

  const imageUrl = story.image?.[0] || null;

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
      
      {/* Many Floating Bubbles */}
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side - Clean without decorative frames */}
          <div className="relative order-2 lg:order-1 group">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 transform transition-all duration-500 group-hover:shadow-3xl group-hover:shadow-primary/30">
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt={story.title}
                      className={`w-full h-[400px] lg:h-[520px] object-cover transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                      onLoad={() => setImageLoaded(true)}
                      loading="lazy"
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse"></div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-[400px] lg:h-[520px] bg-gradient-to-br from-primary/10 via-blue-50 to-secondary/10 flex flex-col items-center justify-center p-8">
                    <div className="relative mb-6">
                      <Eye className="h-24 w-24 text-primary/30 animate-pulse" />
                      <div className="absolute inset-0 bg-primary/10 blur-xl"></div>
                    </div>
                    <p className="text-primary/50 font-medium text-center">Visualizing our journey</p>
                  </div>
                )}
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Info Card */}
                <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <p className="text-white font-bold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Founded in {story.year || "2024"}
                  </p>
                  <p className="text-white/80 text-sm mt-1">Still writing our legacy</p>
                </div>

                {/* Floating Quote */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <Quote className="h-5 w-5 text-primary mb-2" />
                  <p className="text-sm font-medium">"Every great achievement begins with a story worth telling"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 order-1 lg:order-2 relative">
            {/* Title */}
            <div className="space-y-6">
              <div className="relative inline-block">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {story.title || "Our Story"}
                </h3>
                <div className="h-2 w-full bg-gradient-to-r from-primary/20 to-cyan-200/20 rounded-full mt-4"></div>
                <div className="h-2 w-3/4 bg-gradient-to-r from-primary to-cyan-500 rounded-full absolute bottom-0 left-0 animate-slide-right"></div>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 relative">
              {paragraphs.length > 0 ? (
                paragraphs.map((para, idx) => (
                  <div
                    key={idx}
                    className="relative group/para"
                    onMouseEnter={() => setHoveredParagraph(idx)}
                    onMouseLeave={() => setHoveredParagraph(null)}
                  >
                    <div className={`absolute -left-6 top-0 h-full w-1 bg-gradient-to-b ${hoveredParagraph === idx ? 'from-primary to-cyan-500' : 'from-primary/20 to-cyan-500/20'} rounded-full transition-all duration-300`}></div>
                    <p
                      className={`text-lg lg:text-xl leading-relaxed pl-4 transition-all duration-300 ${
                        hoveredParagraph === idx
                          ? 'text-gray-900 translate-x-2'
                          : 'text-gray-600'
                      }`}
                      style={{
                        animationDelay: `${idx * 150}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      {para}
                      {hoveredParagraph === idx && (
                        <span className="inline-block ml-2 animate-pulse">✨</span>
                      )}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-primary/50" />
                  </div>
                  <p className="text-gray-500">Our story is still being written...</p>
                </div>
              )}
            </div>

            {/* CTA */}
            {story.cta && (
              <div className="pt-6">
                <a
                  href={story.cta_link}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-cyan-600 text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:gap-4 hover:scale-105"
                >
                  <span className="relative z-10">{story.cta}</span>
                  <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-cyan-600/20 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        @keyframes slideRight {
          from {
            width: 0%;
          }
          to {
            width: 75%;
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
        
        .animate-slide-right {
          animation: slideRight 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default OurStory;