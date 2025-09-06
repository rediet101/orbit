import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

function TestimonialPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-thin text-3xl lg:text-5xl text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by hundreds of patients across Addis Ababa for quality eye
            care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Alemayehu",
              text: "Excellent service and professional staff. My vision has improved significantly after getting my new glasses here.",
              rating: 5,
            },
            {
              name: "Michael Tadesse",
              text: "The comprehensive eye exam was thorough and the doctor explained everything clearly. Highly recommended!",
              rating: 5,
            },
            {
              name: "Hanan Mohammed",
              text: "Great experience with my child's eye exam. The staff was patient and made my daughter feel comfortable.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className=" transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-white"
            >
              <CardContent className="">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialPreview;
