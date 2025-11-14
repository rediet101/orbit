// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// function Mission() {
//   const [missionVision, setMissionVision] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMissionVision = async () => {
//       try {
//         const res = await fetch(import.meta.env.VITE_API_LINK + 'about');
//         const data = await res.json();
//         setMissionVision(data.MissionVision); // adjust based on your API format
//       } catch (error) {
//         console.error("Error fetching mission & vision:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMissionVision();
//   }, []);

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
//             Our Mission, Vision & Values
//           </h2>
//         </div>

//         {loading ? (
//           <p className="text-center text-muted-foreground">Loading...</p>
//         ) : (
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {missionVision.map((item) => (
//               <Card
//                 key={item.id}
//                 className="hover:shadow-xl transition-all duration-300 border border-green-200 bg-gradient-to-br from-green-100 to-white"
//               >
//                 <CardHeader>
//                   {item.media && item.media.length > 0 && (
//                     <img
//                       src={item.media[0].original_url}
//                       alt={item.title}
//                       className="h-12 w-12 mx-auto mb-4"
//                     />
//                   )}
//                   <CardTitle className="font-heading">{item.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{item.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Mission;




import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react"; // Optional: fallback icons

function Mission() {
  const [missionVision, setMissionVision] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissionVision = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "about");
        const data = await res.json();
        setMissionVision(data.MissionVision || []);
      } catch (error) {
        console.error("Error fetching mission & vision:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMissionVision();
  }, []);

  // Optional: Fallback icons based on title
  const getFallbackIcon = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes("mission")) return <Target className="h-10 w-10" />;
    if (lower.includes("vision")) return <Eye className="h-10 w-10" />;
    if (lower.includes("value")) return <Heart className="h-10 w-10" />;
    return null;
  };

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded w-80 mx-auto animate-pulse mb-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-56 bg-muted/50 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!missionVision.length) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        <p>No mission, vision, or values available.</p>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Card
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <CardHeader className="relative z-10 pb-4 text-center">
                  {/* Icon / Image */}
                  <div className="flex justify-center mb-5">
                    {hasImage ? (
                      <div className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-md border border-white/30">
                        <img
                          src={item.media[0].original_url}
                          alt={item.title}
                          className="h-14 w-14 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-5 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 group-hover:bg-primary/15 transition-colors">
                        {getFallbackIcon(item.title) || (
                          <div className="h-10 w-10 bg-primary/20 rounded-full"></div>
                        )}
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>
                </CardContent>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Mission;