// "use client";

// import React, { useEffect, useState } from "react";

// function OurStory() {
//   const [story, setStory] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStory = async () => {
//       try {
//         const res = await fetch(import.meta.env.VITE_API_LINK + 'about'); // 👈 replace with your endpoint
//         const data = await res.json();
//         setStory(data.data?.[0] || null);
//       } catch (error) {
//         console.error("Error fetching Our Story:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStory();
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {loading ? (
//           <p className="text-center text-muted-foreground">Loading...</p>
//         ) : story ? (
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Image */}
//             <div>
//               <img
//                 src={story.image?.[0] || "/placeholder.svg"}
//                 alt={story.title || "Our Story"}
//                 className="rounded-lg shadow-lg w-full object-cover h-115"
//               />
//             </div>

//             {/* Text Content */}
//             <div className="space-y-6">
//               <h2 className="font-heading font-semibold text-3xl lg:text-5xl text-balance text-primary">
//                 {story.title || "Our Story"}
//               </h2>
//               <div className="space-y-4 text-muted-foreground">
//                 {story.description
//                   ? story.description
//                       .split("\n")
//                       .filter((line) => line.trim() !== "")
//                       .map((line, idx) => <p key={idx}>{line}</p>)
//                   : "No description available."}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-muted-foreground">
//             No story data available.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default OurStory;

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

function OurStory() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "about");
        const data = await res.json();
        setStory(data.data?.[0] || null);
      } catch (error) {
        console.error("Error fetching Our Story:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, []);

  // Parse description into paragraphs
  const paragraphs = story?.description
    ? story.description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-muted/50 rounded-2xl animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-12 bg-muted rounded w-80 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-muted rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!story) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        <p>No story available.</p>
      </section>
    );
  }

  const imageUrl = story.image?.[0] || null;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={story.title}
                  className="w-full h-96 lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-96 lg:h-[520px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Eye className="h-20 w-20 text-primary/30" />
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/20 border border-white/30 px-4 py-2 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-white">
                  Founded in {story.year || "2024"}
                </p>
              </div>
            </div>

            {/* Decorative Orb */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {story.title || "Our Story"}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
              {paragraphs.length > 0 ? (
                paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p>No description available.</p>
              )}
            </div>

            {/* Optional CTA */}
            {story.cta && (
              <a
                href={story.cta_link}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Learn More
                <span className="text-xl">→</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default OurStory;
