import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import parse from "html-react-parser"; // 🔹 to render HTML safely

function ServicePreview() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await  fetch(import.meta.env.VITE_API_LINK + 'landing'); // 🔹 replace with your real API
        const json = await res.json();
        if (json.Services && Array.isArray(json.Services)) {
          setServices(json.Services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  if (services.length === 0) {
    return (
      <section id="services" className="py-20 bg-card text-center">
        <p>Loading services...</p>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-semibold text-3xl lg:text-5xl text-balance">
            Comprehensive Eye Care Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From routine eye exams to specialized treatments, we provide
            complete vision care for all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-xl transition-all duration-300 border border-violet-200 bg-gradient-to-br from-violet-100 to-white hover:scale-[1.02]"
            >
              <CardHeader>
                {/* Show service image if available */}
                {service.image_url?.length > 0 && (
                  <img
                    src={service.image_url[0]}
                    alt={service.title}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                )}
                <CardTitle className="font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {parse(service.description)} {/* render HTML from backend */}
                </CardDescription>
                {/* {service.price && (
                  <p className="mt-3 font-semibold text-primary">
                    Price: {service.price} ETB
                  </p>
                )} */}
                {/* {service.estimated_time && (
                  <p className="text-sm text-muted-foreground">
                    Estimated Time: {service.estimated_time}
                  </p>
                )} */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePreview;
