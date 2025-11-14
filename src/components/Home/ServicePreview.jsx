// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import parse from "html-react-parser"; // 🔹 to render HTML safely

// function ServicePreview() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await  fetch(import.meta.env.VITE_API_LINK + 'landing'); // 🔹 replace with your real API
//         const json = await res.json();
//         if (json.Services && Array.isArray(json.Services)) {
//           setServices(json.Services);
//         }
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (services.length === 0) {
//     return (
//       <section id="services" className="py-20 bg-card text-center">
//         <p>Loading services...</p>
//       </section>
//     );
//   }

//   return (
//     <section id="services" className="py-20 bg-card">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="font-heading font-semibold text-3xl lg:text-5xl text-balance">
//             Comprehensive Eye Care Services
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             From routine eye exams to specialized treatments, we provide
//             complete vision care for all ages.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <Card
//               key={service.id}
//               className="hover:shadow-xl transition-all duration-300 border border-violet-200 bg-gradient-to-br from-violet-100 to-white hover:scale-[1.02]"
//             >
//               <CardHeader>
//                 {/* Show service image if available */}
//                 {service.image_url?.length > 0 && (
//                   <img
//                     src={service.image_url[0]}
//                     alt={service.title}
//                     className="h-40 w-full object-cover rounded-lg mb-4"
//                   />
//                 )}
//                 <CardTitle className="font-heading">{service.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-base">
//                   {parse(service.description)} {/* render HTML from backend */}
//                 </CardDescription>
//                 {/* {service.price && (
//                   <p className="mt-3 font-semibold text-primary">
//                     Price: {service.price} ETB
//                   </p>
//                 )} */}
//                 {/* {service.estimated_time && (
//                   <p className="text-sm text-muted-foreground">
//                     Estimated Time: {service.estimated_time}
//                   </p>
//                 )} */}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicePreview;





//################### new version ################  ///////////////////////


import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import parse from "html-react-parser";
import { Eye, Clock, DollarSign } from "lucide-react";

function ServicePreview() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "landing");
        const json = await res.json();
        if (json.Services && Array.isArray(json.Services)) {
          setServices(json.Services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  if (services.length === 0) {
    return (
      <section id="services" className="py-20 bg-[#DFF3FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Eye Care Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert care for every vision need — from exams to advanced treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Optional Image */}
              {service.image_url?.[0] ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image_url[0]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Eye className="h-16 w-16 text-primary/30" />
                </div>
              )}

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {parse(service.description)}
                </p>

                {/* Optional: Price & Time */}
                {/* <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  {service.price && (
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3.5 w-3.5 text-primary" />
                      <span>{service.price} ETB</span>
                    </div>
                  )}
                  {service.estimated_time && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>{service.estimated_time}</span>
                    </div>
                  )}
                </div> */}
              </CardContent>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-primary/20 transition-colors pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePreview;