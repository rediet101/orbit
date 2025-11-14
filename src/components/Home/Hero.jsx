// import React, { useEffect, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Phone, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser"; 

// function Hero() {
//   const [heroData, setHeroData] = useState(null);

//   useEffect(() => {
//     const fetchHero = async () => {
//       try {
//         const res = await  fetch(import.meta.env.VITE_API_LINK + 'landing'); // 🔹 replace with your endpoint
//         const json = await res.json();
//         if (json.data && json.data.length > 0) {
//           setHeroData(json.data[0]); 
//         }
//       } catch (error) {
//         console.error("Error fetching hero data:", error);
//       }
//     };
//     fetchHero();
//   }, []);

//   if (!heroData) {
//     return (
//       <section className="py-20 text-center">
//         <p>Loading...</p>
//       </section>
//     );
//   }

//   return (
//     <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <Badge variant="secondary" className="w-fit">
//                 Established 2024
//               </Badge>
//               <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-tight">
//                 {heroData.title}
//               </h1>
//               <div className="text-lg text-muted-foreground max-w-lg">
//                 {parse(heroData.description)}
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" asChild>
//                 <Link to="/appointment">Book Appointment</Link>
//               </Button>
//               <Button variant="outline" size="lg" asChild>
//                 <Link to="/services">Our Services</Link>
//               </Button>
//             </div>

//             <div className="flex items-center gap-6 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 <span>+251 911 123 456</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4" />
//                 <span>Addis Ababa, Ethiopia</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             {heroData.gallery?.length > 0 && (
//               <img
//                 src={heroData.gallery[0]}
//                 alt={heroData.title}
//                 className="rounded-lg shadow-2xl"
//               />
//             )}
//             <div className="absolute inset-0 bg-black/15 z-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// ######################### new code #########################

// src/components/Home/Hero.jsx
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "landing");
        const json = await res.json();
        if (json.data?.length) setHeroData(json.data[0]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchHero();
  }, []);

  if (!heroData) {
    return (
      <section className="flex h-96 items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="animate-pulse text-lg font-medium text-primary">
          Loading...
        </div>
      </section>
    );
  }

  const bgImage = heroData.gallery?.[0] ?? null;

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[720px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: bgImage
          ? `url(${bgImage})`
          : "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 text-white">
            <div className="space-y-5">
              <Badge className="backdrop-blur-md bg-white/20 border border-white/30 px-4 py-1.5 text-sm font-semibold">
                Established 2024
              </Badge>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                {heroData.title}
              </h1>

              <div className="text-lg lg:text-xl max-w-xl leading-relaxed opacity-90">
                {parse(heroData.description)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="group bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link to="/appointment" className="flex items-center gap-2">
                  Book Appointment
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-white/50 text-[#1A73E8] hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+251 911 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Optional trust badge (desktop only) */}
          {/* <div className="hidden lg:flex justify-center">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-2xl">
              <p className="text-2xl font-bold text-white">
                Trusted by <span className="text-primary">500+</span> Clients
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}