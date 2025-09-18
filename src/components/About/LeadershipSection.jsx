"use client";

import React, { useEffect, useState } from "react";
import { Mail, Linkedin } from "lucide-react";

function LeadershipSection() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + 'about');// 👈 replace with your endpoint
        const data = await res.json();
        setTeam(data.OurTeam); // based on the structure you shared
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-thin text-primary mb-4 ">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
            Our experienced professionals are dedicated to providing you with
            the highest quality eye care.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((leader) => (
              <div
                key={leader.id}
                className="rounded-2xl shadow-xl border border-violet-100 overflow-hidden bg-gradient-to-br from-violet-100 to-white"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={
                        leader.image_url?.[0] ||
                        leader.media?.[0]?.original_url ||
                        "/placeholder.svg"
                      }
                      alt={leader.name}
                      className="w-32 h-32 rounded-xl object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-800 mb-2 font-montserrat">
                        {leader.name}
                      </h3>
                      <p className="text-lg text-yellow-600 font-semibold mb-4 font-montserrat">
                        {leader.Job_title}
                      </p>
                      <p className="text-green-600 font-open-sans leading-relaxed mb-4">
                        {leader.description}
                      </p>
                      <div className="flex space-x-3">
                        {leader.email && (
                          <a
                            href={`mailto:${leader.email}`}
                            className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                          >
                            <Mail className="w-5 h-5 text-green-600" />
                          </a>
                        )}
                        {leader.social_links?.map((link, idx) =>
                          link.platform === "LinkedIn" ? (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                            >
                              <Linkedin className="w-5 h-5 text-green-600" />
                            </a>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LeadershipSection;
