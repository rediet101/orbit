import React, { useEffect, useState } from "react";
import { Mail, Linkedin, Eye } from "lucide-react";

function LeadershipSection() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "about");
        const data = await res.json();
        setTeam(data.OurTeam || []);
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) {
    return (
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-14 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full w-96 mx-auto animate-pulse mb-4"></div>
            <div className="h-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-white/50 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!team.length) {
    return (
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        <div className="relative text-center text-muted-foreground">
          <p>No team members available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background - Same as OurStory */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-cyan-600">
              Meet Our
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Expert Team
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated professionals bring years of experience and passion to deliver the highest standard of eye care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {team.map((leader, index) => {
            const imageUrl =
              leader.image_url?.[0] ||
              leader.media?.[0]?.original_url ||
              null;

            return (
              <div
                key={leader.id}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="relative z-10 p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={leader.name}
                            className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover shadow-lg ring-4 ring-white/50 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <Eye className="h-14 w-14 text-primary/40" />
                          </div>
                        )}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {leader.name}
                        </h3>
                        <p className="text-lg font-medium text-primary mt-1">
                          {leader.Job_title}
                        </p>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {leader.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center gap-3 pt-2">
                        {leader.email && (
                          <a
                            href={`mailto:${leader.email}`}
                            className="p-2.5 bg-gradient-to-br from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-xl hover:from-primary/20 hover:to-cyan-500/20 transition-all duration-300 group/icon"
                            title="Email"
                          >
                            <Mail className="h-5 w-5 text-primary group-hover/icon:scale-110 transition-transform" />
                          </a>
                        )}
                        {leader.social_links?.map((link, idx) =>
                          link.platform === "LinkedIn" ? (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-gradient-to-br from-primary/10 to-cyan-500/10 backdrop-blur-sm rounded-xl hover:from-primary/20 hover:to-cyan-500/20 transition-all duration-300 group/icon"
                              title="LinkedIn"
                            >
                              <Linkedin className="h-5 w-5 text-primary group-hover/icon:scale-110 transition-transform" />
                            </a>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
              </div>
            );
          })}
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

export default LeadershipSection;