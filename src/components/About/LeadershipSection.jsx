// "use client";

// import React, { useEffect, useState } from "react";
// import { Mail, Linkedin } from "lucide-react";

// function LeadershipSection() {
//   const [team, setTeam] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeam = async () => {
//       try {
//         const res = await fetch(import.meta.env.VITE_API_LINK + 'about');// 👈 replace with your endpoint
//         const data = await res.json();
//         setTeam(data.OurTeam); // based on the structure you shared
//       } catch (error) {
//         console.error("Error fetching team:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeam();
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-6xl font-thin text-primary mb-4 ">
//             Meet Our Expert Team
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
//             Our experienced professionals are dedicated to providing you with
//             the highest quality eye care.
//           </p>
//         </div>

//         {loading ? (
//           <p className="text-center text-muted-foreground">Loading...</p>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {team.map((leader) => (
//               <div
//                 key={leader.id}
//                 className="rounded-2xl shadow-xl border border-violet-100 overflow-hidden bg-gradient-to-br from-violet-100 to-white"
//               >
//                 <div className="p-8">
//                   <div className="flex items-start space-x-6">
//                     <img
//                       src={
//                         leader.image_url?.[0] ||
//                         leader.media?.[0]?.original_url ||
//                         "/placeholder.svg"
//                       }
//                       alt={leader.name}
//                       className="w-32 h-32 rounded-xl object-cover shadow-lg"
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-green-800 mb-2 font-montserrat">
//                         {leader.name}
//                       </h3>
//                       <p className="text-lg text-yellow-600 font-semibold mb-4 font-montserrat">
//                         {leader.Job_title}
//                       </p>
//                       <p className="text-green-600 font-open-sans leading-relaxed mb-4">
//                         {leader.description}
//                       </p>
//                       <div className="flex space-x-3">
//                         {leader.email && (
//                           <a
//                             href={`mailto:${leader.email}`}
//                             className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
//                           >
//                             <Mail className="w-5 h-5 text-green-600" />
//                           </a>
//                         )}
//                         {leader.social_links?.map((link, idx) =>
//                           link.platform === "LinkedIn" ? (
//                             <a
//                               key={idx}
//                               href={link.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
//                             >
//                               <Linkedin className="w-5 h-5 text-green-600" />
//                             </a>
//                           ) : null
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default LeadershipSection;




// ############## new code ###############

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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-14 bg-muted rounded w-96 mx-auto animate-pulse mb-4"></div>
            <div className="h-6 bg-muted rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-muted/50 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!team.length) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        <p>No team members available.</p>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated professionals bring years of experience and passion to deliver the highest standard of eye care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {team.map((leader) => {
            const imageUrl =
              leader.image_url?.[0] ||
              leader.media?.[0]?.original_url ||
              null;

            return (
              <div
                key={leader.id}
                className="group relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="relative z-10 p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={leader.name}
                            className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover shadow-lg ring-4 ring-white/50 group-hover:ring-primary/30 transition-all duration-300"
                          />
                        ) : (
                          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-lg">
                            <Eye className="h-14 w-14 text-primary/40" />
                          </div>
                        )}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {leader.name}
                        </h3>
                        <p className="text-lg font-medium text-primary mt-1">
                          {leader.Job_title}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {leader.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center gap-3 pt-2">
                        {leader.email && (
                          <a
                            href={`mailto:${leader.email}`}
                            className="p-2.5 bg-primary/10 backdrop-blur-sm rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                            title="Email"
                          >
                            <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                          </a>
                        )}
                        {leader.social_links?.map((link, idx) =>
                          link.platform === "LinkedIn" ? (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-primary/10 backdrop-blur-sm rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                              title="LinkedIn"
                            >
                              <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
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
    </section>
  );
}

export default LeadershipSection;