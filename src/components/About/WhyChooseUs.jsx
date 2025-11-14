// "use client";

// import React, { useEffect, useState } from "react";
// import { CheckCircle } from "lucide-react";

// function WhyChooseUs() {
//   const [whyChooseUs, setWhyChooseUs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchWhyChooseUs = async () => {
//       try {
//         const res = await fetch(import.meta.env.VITE_API_LINK + 'about'); // 👈 replace with your API endpoint
//         const data = await res.json();
//         setWhyChooseUs(data.WhyChooseUs || []);
//       } catch (error) {
//         console.error("Error fetching Why Choose Us:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWhyChooseUs();
//   }, []);

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
//             {whyChooseUs[0]?.title || "Why Choose Us"}
//           </h2>
//         </div>

//         {loading ? (
//           <p className="text-center text-muted-foreground">Loading...</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChooseUs.length > 0 &&
//               (whyChooseUs[0].descrtiption || "")
//                 .split("\n")
//                 .filter((line) => line.trim() !== "")
//                 .map((reason, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
//                     <span className="text-foreground">{reason}</span>
//                   </div>
//                 ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;


// ##################################### new code
import React, { useEffect, useState } from "react";
import { CheckCircle2, Star, Shield, Clock } from "lucide-react";

function WhyChooseUs() {
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "about");
        const data = await res.json();
        setWhyChooseUs(data.WhyChooseUs || []);
      } catch (error) {
        console.error("Error fetching Why Choose Us:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWhyChooseUs();
  }, []);

  // Extract title and split reasons
  const title = whyChooseUs[0]?.title || "Why Choose Us";
  const rawReasons = whyChooseUs[0]?.descrtiption || "";
  const reasons = rawReasons
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  // Optional: Fallback icons
  const icons = [Star, Shield, Clock, CheckCircle2];

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded w-80 mx-auto animate-pulse mb-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-24 bg-muted/50 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!reasons.length) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        <p>No reasons available.</p>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand out for all the right reasons.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group relative p-6 bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-3 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed text-sm lg:text-base">
                    {reason}
                  </p>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
