// import React from "react";

// function WhyChooseUs() {
//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <img
//               src="/src/assets/home2.jpg"
//               alt="Professional Eye Examination"
//               className="rounded-lg shadow-lg"
//             />
//             <div className="absolute inset-0 bg-black/15 z-10"></div>
//           </div>
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
//                 Why Choose Orbit Optical?
//               </h2>
//               <p className="text-lg text-muted-foreground text-pretty">
//                 We combine medical expertise with modern technology to provide
//                 exceptional eye care.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {[
//                 "Experienced optometrists & ophthalmologists",
//                 "State-of-the-art diagnostic & treatment technology",
//                 "Wide selection of prescription glasses & eyewear",
//                 "Personalized care for each patient",
//                 "Commitment to preventive eye care & education",
//               ].map((point, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="bg-secondary/20 rounded-full p-1 mt-1">
//                     <div className="w-2 h-2 bg-secondary rounded-full" />
//                   </div>
//                   <span className="text-foreground">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;


import React from "react";
import { CheckCircle2 } from "lucide-react";
import HomeImg from "../../assets/home2.jpg";

function WhyChooseUs() {
  const reasons = [
    "Experienced optometrists & ophthalmologists",
    "State-of-the-art diagnostic & treatment technology",
    "Wide selection of prescription glasses & eyewear",
    "Personalized care for each patient",
    "Commitment to preventive eye care & education",
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
          {/* Image Side */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src={HomeImg}
              alt="Professional Eye Examination"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full inline-block">
                20+ Years of Excellence
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Why Choose Orbit Optical?
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                We blend medical expertise with cutting-edge technology to deliver
                exceptional, personalized eye care.
              </p>
            </div>

            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2
                    className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 transition-colors group-hover:text-primary/80"
                  />
                  <span className="text-foreground leading-relaxed">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;