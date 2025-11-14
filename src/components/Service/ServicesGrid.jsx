// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { CheckCircle } from "lucide-react";
// import parse from "html-react-parser"; // to render backend HTML

// function ServicesGrid() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await  fetch(import.meta.env.VITE_API_LINK + 'services');  // 🔹 replace with real endpoint
//         const json = await res.json();
//         if (json.data && Array.isArray(json.data)) {
//           setServices(json.data);
//         }
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (services.length === 0) {
//     return (
//       <section className="py-20 text-center">
//         <p>Loading services...</p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <Card
//               key={service.Id}
//               className="hover:shadow-xl transition-all duration-300 border border-green-200 bg-gradient-to-br from-green-50 to-white"
//             >
//               <CardHeader>
//                 {/* Service Icon/Image */}
//                 {service.icon?.length > 0 && (
//                   <img
//                     src={service.icon[0]}
//                     alt={service.Title}
//                     className="h-20 w-20 object-cover rounded-md mb-4"
//                   />
//                 )}
//                 <CardTitle className="font-heading text-xl">
//                   {service.Title}
//                 </CardTitle>
//                 <CardDescription className="text-base">
//                   {parse(service.Description)}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 {/* Price & Duration */}
//                 <div className="flex justify-between items-center">
//                   <span className="font-semibold text-primary">
//                     {service.Price} ETB
//                   </span>
//                   <span className="text-sm text-muted-foreground">
//                     {service["estimated-Time"]}
//                   </span>
//                 </div>

//                 {/* Features from Specifications */}
//                 {service.Specifications && (
//                   <div className="space-y-2 text-sm">
//                     {service.Specifications.split(/<br\s*\/?>/i) // split by <br> or <br/>
//                       .map((line, index) => (
//                         <div key={index} className="flex items-start space-x-2">
//                           <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
//                           <div>{parse(line)}</div>
//                         </div>
//                       ))}
//                   </div>
//                 )}

//                 <Button className="w-full" asChild>
//                   <Link to="/appointment">Book This Service</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicesGrid;


// ###################################3 now new code ##############################

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Eye } from "lucide-react";
import parse from "html-react-parser";

function ServicesGrid() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + "services");
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setServices(json.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  if (services.length === 0) {
    return (
      <section className="py-24 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="h-10 bg-muted rounded w-64 mx-auto animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-96 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from expert eye care solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const specs = service.Specifications
              ? service.Specifications.split(/<br\s*\/?>/i).filter(Boolean)
              : [];

            return (
              <Card
                key={service.Id}
                className="group relative overflow-hidden border border-border/50 bg-card/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image / Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
                  {service.icon?.[0] ? (
                    <img
                      src={service.icon[0]}
                      alt={service.Title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Eye className="h-16 w-16 text-primary/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground line-clamp-2">
                    {service.Title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {parse(service.Description)}
                  </p>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Price & Time Badges */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                      <span>{service.Price} ETB</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{service["estimated-Time"]}</span>
                    </div>
                  </div>

                  {/* Specifications */}
                  {specs.length > 0 && (
                    <div className="space-y-2">
                      {specs.slice(0, 3).map((line, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{parse(line.trim())}</span>
                        </div>
                      ))}
                      {specs.length > 3 && (
                        <p className="text-xs text-muted-foreground italic">
                          +{specs.length - 3} more features
                        </p>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    className="w-full group-hover:bg-primary/90 transition-all duration-300 font-medium"
                    asChild
                  >
                    <Link to="/appointment" className="flex items-center justify-center gap-2">
                      Book Now
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardContent>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;