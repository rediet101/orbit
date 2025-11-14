// "use client"; // if using Next.js app router

// import React, { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { CheckCircle, CreditCard, Shield, DollarSign } from "lucide-react";
// import parse from "html-react-parser";

// function PaymentAndInsurance() {
//   const [paymentInfo, setPaymentInfo] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const fetchPaymentInfo = async () => {
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_LINK}services`);
//       const data = await res.json();
//       setPaymentInfo(data.paymentInfo); // assuming API returns { paymentInfo: [...] }
//     } catch (err) {
//       console.error("Failed to fetch payment info:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchPaymentInfo();
// }, []);

//   if (loading) {
//     return (
//       <div className="py-20 text-center text-lg text-muted-foreground">
//         Loading payment information...
//       </div>
//     );
//   }

//   // Helper to pick icons based on title
//   const getIcon = (title) => {
//     switch (title.toLowerCase()) {
//       case "payment methods":
//         return <CreditCard className="h-12 w-12 text-primary mb-4" />;
//       case "insurance partners":
//         return <Shield className="h-12 w-12 text-primary mb-4" />;
//       case "flexible options":
//         return <DollarSign className="h-12 w-12 text-primary mb-4" />;
//       default:
//         return <CheckCircle className="h-12 w-12 text-primary mb-4" />;
//     }
//   };

//   return (
//     <section className="py-20 bg-card">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="font-heading font-thin text-3xl lg:text-5xl text-balance">
//             Payment & Insurance Information
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             We accept various payment methods and work with major insurance
//             providers.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {paymentInfo.map((item) => (
//             <Card
//               key={item.id}
//               className="hover:shadow-xl transition-all duration-300 border border-green-200 bg-gradient-to-br from-green-100 to-white"
//             >
//               <CardHeader>
//                 {getIcon(item.title)}
//                 <CardTitle className="font-heading">{item.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm">
//                   {item.services_list
//                     .replace(/<\/?p>/g, "") // remove <p> tags
//                     .split("<br>")
//                     .map((line, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <CheckCircle className="h-4 w-4 text-secondary" />
//                         {line.trim()}
//                       </li>
//                     ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PaymentAndInsurance;



import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Shield, DollarSign, CheckCircle2 } from "lucide-react";
import parse from "html-react-parser";

function PaymentAndInsurance() {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_LINK}services`);
        const data = await res.json();
        setPaymentInfo(data.paymentInfo || []);
      } catch (err) {
        console.error("Failed to fetch payment info:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentInfo();
  }, []);

  // Icon mapping
  const getIcon = (title) => {
    const iconClass = "h-14 w-14 text-primary";
    switch (title.toLowerCase()) {
      case "payment methods":
        return <CreditCard className={iconClass} />;
      case "insurance partners":
        return <Shield className={iconClass} />;
      case "flexible options":
        return <DollarSign className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };  

  if (loading) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="h-10 bg-muted rounded w-96 mx-auto animate-pulse"></div>
            <div className="h-5 bg-muted rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-muted/50 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!paymentInfo.length) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        <p>No payment information available.</p>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Payment & Insurance Made Easy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We accept a wide range of payment methods and partner with trusted insurance providers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {paymentInfo.map((item) => {
            // Safely parse and split list
            const rawList = item.services_list || "";
            const cleanHTML = rawList.replace(/<\/?p>/g, "").trim();
            const items = cleanHTML
              .split(/<br\s*\/?>/i)
              .map((s) => s.trim())
              .filter(Boolean);

            return (
              <Card
                key={item.id}
                className="group relative overflow-hidden border border-border/50 bg-card/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Icon Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-70"></div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 group-hover:bg-primary/15 transition-colors">
                      {getIcon(item.title)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  {items.length > 0 ? (
                    <ul className="space-y-2.5">
                      {items.map((line, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{parse(line)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center italic">
                      Details coming soon
                    </p>
                  )}
                </CardContent>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PaymentAndInsurance;