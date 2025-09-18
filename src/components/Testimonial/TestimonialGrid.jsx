import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

function TestimonialGrid() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + 'testimonials'); // replace with your API endpoint
        const data = await res.json();
        // Backend wraps in "Testimonials" array
        setTestimonials(data.Testimonials || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-muted-foreground">Loading testimonials...</p>
      </div>
    );
  }

  if (!testimonials.length) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-muted-foreground">No testimonials found.</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="hover:shadow-xl transition-all duration-300 border-violet-200 bg-gradient-to-br from-violet-100 to-white"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <img
                    src={t.image_url?.[0] || "/placeholder.svg"}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{t.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        ({t.age})
                      </span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-muted-foreground" />
                  <p className="text-muted-foreground italic">
                    "{t.testimonial}"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(t.created_at).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialGrid;
