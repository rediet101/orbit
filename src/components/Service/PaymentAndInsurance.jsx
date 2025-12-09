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
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
      
      {/* Floating Bubbles */}
      <div className="absolute top-10 left-[5%] animate-float">
        <div className="w-4 h-4 rounded-full bg-primary/20"></div>
      </div>
      <div className="absolute top-20 left-[15%] animate-float-delayed">
        <div className="w-6 h-6 rounded-full bg-cyan-400/20"></div>
      </div>
      <div className="absolute top-32 left-[25%] animate-float-slow">
        <div className="w-3 h-3 rounded-full bg-blue-300/30"></div>
      </div>
      <div className="absolute top-16 right-[10%] animate-float">
        <div className="w-8 h-8 rounded-full bg-secondary/15"></div>
      </div>
      <div className="absolute top-40 right-[20%] animate-float-delayed">
        <div className="w-5 h-5 rounded-full bg-primary/25"></div>
      </div>
      <div className="absolute top-60 right-[5%] animate-float-slow">
        <div className="w-4 h-4 rounded-full bg-cyan-500/20"></div>
      </div>
      <div className="absolute bottom-20 left-[8%] animate-float-delayed">
        <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
      </div>
      <div className="absolute bottom-40 left-[18%] animate-float">
        <div className="w-3 h-3 rounded-full bg-primary/30"></div>
      </div>
      <div className="absolute bottom-32 left-[30%] animate-float-slow">
        <div className="w-5 h-5 rounded-full bg-secondary/20"></div>
      </div>
      <div className="absolute bottom-16 right-[12%] animate-float">
        <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
      </div>
      <div className="absolute bottom-48 right-[25%] animate-float-delayed">
        <div className="w-4 h-4 rounded-full bg-blue-500/20"></div>
      </div>
      <div className="absolute bottom-60 right-[8%] animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-primary/15"></div>
      </div>
      <div className="absolute top-1/2 left-[3%] animate-float">
        <div className="w-5 h-5 rounded-full bg-cyan-400/25"></div>
      </div>
      <div className="absolute top-1/3 right-[3%] animate-float-delayed">
        <div className="w-6 h-6 rounded-full bg-blue-300/20"></div>
      </div>
      <div className="absolute top-2/3 left-[12%] animate-float-slow">
        <div className="w-4 h-4 rounded-full bg-secondary/25"></div>
      </div>
      <div className="absolute top-3/4 right-[15%] animate-float">
        <div className="w-3 h-3 rounded-full bg-primary/35"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(8deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  );
}

export default PaymentAndInsurance;
