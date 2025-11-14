// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Phone, Mail, MapPin, Clock } from "lucide-react";

// function ContactInfo() {
//   return (
//     <div className="space-y-6 ">
//       <Card className=" transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-white">
//         <CardHeader>
//           <CardTitle className="font-heading text-2xl">
//             Contact Information
//           </CardTitle>
//           <CardDescription>
//             Get in touch with us through any of these channels
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="flex items-start gap-4">
//             <Phone className="h-6 w-6 text-primary mt-1" />
//             <div>
//               <h3 className="font-semibold mb-1">Phone</h3>
//               <p className="text-muted-foreground">+251 911 123 456</p>
//               <p className="text-sm text-muted-foreground">
//                 Available during office hours
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <Mail className="h-6 w-6 text-primary mt-1" />
//             <div>
//               <h3 className="font-semibold mb-1">Email</h3>
//               <p className="text-muted-foreground">info@orbitoptical.com</p>
//               <p className="text-sm text-muted-foreground">
//                 We respond within 24 hours
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <MapPin className="h-6 w-6 text-primary mt-1" />
//             <div>
//               <h3 className="font-semibold mb-1">Location</h3>
//               <p className="text-muted-foreground">Nifas Silk Lafto Sub City</p>
//               <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
//               <p className="text-sm text-muted-foreground">
//                 Near Megenagna Bus Station
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className=" transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-white">
//         <CardHeader>
//           <CardTitle className="font-heading text-2xl">Office Hours</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="font-medium">Monday - Friday</span>
//             <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="font-medium">Saturday</span>
//             <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="font-medium">Sunday</span>
//             <span className="text-muted-foreground">Closed</span>
//           </div>
//           <div className="border-t pt-3 mt-4">
//             <div className="flex items-center gap-2">
//               <Clock className="h-4 w-4 text-primary" />
//               <span className="text-sm text-muted-foreground">
//                 Emergency services available 24/7 by appointment
//               </span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-white">
//         <CardHeader>
//           <CardTitle className="font-heading text-2xl">Find Us</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="h-70 rounded-lg flex items-center justify-center mb-6 bg-gray-100 overflow-hidden">
//             <iframe
//               src="https://maps.google.com/maps?q=Nifas Silk Lafto Sub-city, Addis Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Al-Anhar Trading PLC Location"
//             />
//           </div>

//           <div className="space-y-4 text-sm">
//             <div className="flex items-start space-x-3">
//               <MapPin className="w-5 h-5 text-primary/60 mt-0.5" />
//               <div>
//                 <p className="font-semibold text-primary/80 font-montserrat">
//                   Business Address:
//                 </p>
//                 <p className="text-primary/60 font-open-sans">
//                   Nifas Silk Lafto Sub-City, Woreda 04,
//                   <br />
//                   House Number 123/4,
//                   <br />
//                   Addis Ababa, Ethiopia
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default ContactInfo;

////////////////############################ new code ############################////////////////////

import React from "react";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

function ContactInfo() {
  return (
    <div className="space-y-8 ">
      {/* Contact Card */}
      <div className="group relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="relative z-10 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Contact Information
            </h3>
          </div>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Reach out anytime — we're here to help with your eye care needs.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-lg text-primary font-medium">
                  +251 911 123 456
                </p>
                <p className="text-sm text-muted-foreground">
                  Available during office hours
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-lg text-primary font-medium">
                  info@orbitoptical.com
                </p>
                <p className="text-sm text-muted-foreground">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 transition-colors">
                <MapPin className="h-5 w-5 text-primary transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-foreground">Nifas Silk Lafto Sub City</p>
                <p className="text-foreground">Addis Ababa, Ethiopia</p>
                <p className="text-sm text-muted-foreground">
                  Near Megenagna Bus Station
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
      </div>

      {/* Office Hours */}
      <div className="group relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Office Hours</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-foreground">
                Monday - Friday
              </span>
              <span className="text-primary font-semibold">
                8:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-foreground">Saturday</span>
              <span className="text-primary font-semibold">
                9:00 AM - 4:00 PM
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-foreground">Sunday</span>
              <span className="text-muted-foreground">Closed</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              Emergency services available{" "}
              <span className="font-medium text-primary">24/7</span> by
              appointment
            </p>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
      </div>

      {/* Full Width Map */}
      {/* <div className="group relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="relative z-10 p-0">
        </div>
      </div> */}
          
    </div>
  );
}

export default ContactInfo;
