import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

function TestimonialPreview() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await  fetch(import.meta.env.VITE_API_LINK + 'landing'); // 🔹 replace with real endpoint
        const json = await res.json();
        if (json.Testimonials && Array.isArray(json.Testimonials)) {
          setTestimonials(json.Testimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-card text-center">
        <p>Loading testimonials...</p>
      </section>
    );
  }

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
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="transition-all duration-300 border border-violet-200 bg-gradient-to-br from-violet-100 to-white"
            >
              <CardContent>
                <div className="space-y-4">
                  {/* Stars (always 5 for now) */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground italic whitespace-break-spaces">
                    "{t.testimonial}"
                  </p>

                  {/* Person Info */}
                  <div className="flex items-center gap-3">
                    {/* {t.image_url?.length > 0 && (
                      <img
                        src={t.image_url[0]}
                        alt={t.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    )} */}
                    <p className="font-semibold">
                      — {t.name}{" "}
                      {t.age && (
                        <span className="text-sm text-muted-foreground">
                          ({t.age})
                        </span>
                      )}
                    </p>
                  </div>
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
