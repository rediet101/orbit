// import React from "react";
// import { faqCategories } from "@/data/mockData";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// function FAQContent() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-8 bg-white">
//           {faqCategories.map((category, categoryIndex) => (
//             <Card
//               key={categoryIndex}
//               className="transition-all duration-300 border  border-white bg-white bg-gradient-to-br from-white-100 to-white"
//             >
//               <CardHeader>
//                 <CardTitle className="font-heading text-xl">
//                   {category.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Accordion type="single" collapsible className="w-full">
//                   {category.faqs.map((faq, faqIndex) => (
//                     <AccordionItem
//                       key={faqIndex}
//                       value={`item-${categoryIndex}-${faqIndex}`}
//                     >
//                       <AccordionTrigger className="text-left">
//                         {faq.question}
//                       </AccordionTrigger>
//                       <AccordionContent className="text-muted-foreground">
//                         {faq.answer}
//                       </AccordionContent>
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FAQContent;

//####################### new code ##########################

import React from "react";
import { faqCategories } from "@/data/mockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function FAQContent() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">FAQs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services,
            appointments, and more.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="group relative overflow-hidden rounded-3xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 group-hover:bg-primary/15 transition-colors">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-2">
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border-b border-border/30 last:border-0"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 group/item">
                        <div className="flex items-center gap-3">
                          <ChevronDown className="h-5 w-5 text-primary transition-transform duration-300 group-data-[state=open]/item:rotate-180" />
                          <span className="font-medium text-base lg:text-lg">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-8 pr-4 pb-5 text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>

              {/* Hover Glow Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>

              {/* Decorative Orb */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-16 text-center">
        </div>
      </div>
    </section>
  );
}

export default FAQContent;
