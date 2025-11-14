// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Phone, Mail, MessageCircle } from "lucide-react";
// import { Link } from "react-router-dom";

// function ReachoutSection() {
//   return (
//     <section className="py-20 bg-card">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
//         <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
//           Still Have Questions?
//         </h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//           Our friendly team is here to help. Get in touch with us through any of
//           these convenient methods.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-50">
//             <CardHeader>
//               <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
//               <CardTitle className="font-heading">Call Us</CardTitle>
//               <CardDescription>Speak directly with our team</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="font-semibold mb-2">+251 911 123 456</p>
//               <p className="text-sm text-muted-foreground mb-4">
//                 Mon-Fri: 8AM-6PM, Sat: 9AM-4PM
//               </p>
//               <Button className="w-full hover:bg-muted-foreground cursor-pointer">
//                 Call Now
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-50">
//             <CardHeader>
//               <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
//               <CardTitle className="font-heading">Email Us</CardTitle>
//               <CardDescription>Send us a detailed message</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="font-semibold mb-2">info@orbitoptical.com</p>
//               <p className="text-sm text-muted-foreground mb-4">
//                 We respond within 24 hours
//               </p>
//               <Button
//                 className="w-full bg-transparent hover:bg-primary"
//                 variant="outline"
//                 asChild
//               >
//                 <Link to="/contact">Send Email</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-50">
//             <CardHeader>
//               <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
//               <CardTitle className="font-heading">Visit Us</CardTitle>
//               <CardDescription>Come see us in person</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="font-semibold mb-2">Nifas Silk Lafto</p>
//               <p className="text-sm text-muted-foreground mb-4">
//                 Addis Ababa, Ethiopia
//               </p>
//               <Button
//                 className="w-full bg-transparent hover:bg-primary"
//                 variant="outline"
//                 asChild
//               >
//                 <Link to="/contact">Get Directions</Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ReachoutSection;


//########################## new code ##########################

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function ReachoutSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      desc: "Speak directly with our team",
      detail: "+251 911 123 456",
      sub: "Mon–Fri: 8AM–6PM, Sat: 9AM–4PM",
      btnText: "Call Now",
      href: "tel:+251911123456",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      desc: "Send us a detailed message",
      detail: "info@orbitoptical.com",
      sub: "We respond within 24 hours",
      btnText: "Send Email",
      href: "/contact",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      desc: "Come see us in person",
      detail: "Nifas Silk Lafto",
      sub: "Addis Ababa, Ethiopia",
      btnText: "Get Directions",
      href: "/contact",
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our friendly team is ready to help. Reach out through your preferred method.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                    {method.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {method.desc}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4 text-center">
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {method.detail}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {method.sub}
                    </p>
                  </div>

                  <Button
                    asChild
                    className={`w-full h-12 text-white font-semibold shadow-lg bg-gradient-to-r ${method.gradient} hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    <Link to={method.href} className="flex items-center justify-center gap-2">
                      {method.btnText}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </CardContent>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>

                {/* Decorative Orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ReachoutSection;