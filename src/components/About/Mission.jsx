import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

function Mission({ data }) {
  // Use data from props (passed from page-level fetch)
  const missionVision = data || [];

  // Optional: Fallback icons based on title
  const getFallbackIcon = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes("mission")) return <Target className="h-10 w-10" />;
    if (lower.includes("vision")) return <Eye className="h-10 w-10" />;
    if (lower.includes("value")) return <Heart className="h-10 w-10" />;
    return null;
  };

  // If no data provided, show empty state with sparkle icon
  if (!missionVision.length) {
    return (
      <section className="py-20 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]">
        <EmptyState message="No mission, vision, or values available yet. Our story is being written!" />
      </section>
    );
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF] overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Mission, Vision & Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The foundation of everything we do at Orbit Optical.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {missionVision.map((item) => {
            const hasImage = item.media?.[0]?.original_url;

            return (
              <div
                key={item.id}
                className="group relative h-[400px] perspective-1000"
              >
                {/* Flip Container */}
                <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
                  
                  {/* Front Face */}
                  <Card className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 text-center rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg overflow-hidden">
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60"></div>
                    
                    <CardHeader className="relative z-10 w-full">
                       {/* Icon / Image */}
                      <div className="flex justify-center mb-6">
                        {hasImage ? (
                          <div className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-md border border-white/30">
                            <img
                              src={item.media[0].original_url}
                              alt={item.title}
                              className="h-20 w-20 object-contain"
                            />
                          </div>
                        ) : (
                          <div className="p-6 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                            {getFallbackIcon(item.title) || (
                              <div className="h-12 w-12 bg-primary/20 rounded-full"></div>
                            )}
                          </div>
                        )}
                      </div>

                      <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                        {item.title}
                      </CardTitle>
                      
                      <div className="mt-4 flex justify-center">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Hover to Discover</span>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Back Face */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-center rounded-3xl bg-gradient-to-br from-primary/10 via-white to-secondary/10 border border-primary/20 shadow-xl overflow-hidden">
                     {/* Decorative background elements */}
                     <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
                     <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-secondary/10 blur-xl"></div>

                    <CardContent className="relative z-10">
                      <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>

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

        /* 3D Flip Utilities */
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

export default Mission;