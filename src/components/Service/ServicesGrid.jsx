import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import parse from "html-react-parser"; // to render backend HTML

function ServicesGrid() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await  fetch(import.meta.env.VITE_API_LINK + 'services');  // 🔹 replace with real endpoint
        const json = await res.json();
        if (json.data && Array.isArray(json.data)) {
          setServices(json.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  if (services.length === 0) {
    return (
      <section className="py-20 text-center">
        <p>Loading services...</p>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.Id}
              className="hover:shadow-xl transition-all duration-300 border border-green-200 bg-gradient-to-br from-green-50 to-white"
            >
              <CardHeader>
                {/* Service Icon/Image */}
                {service.icon?.length > 0 && (
                  <img
                    src={service.icon[0]}
                    alt={service.Title}
                    className="h-20 w-20 object-cover rounded-md mb-4"
                  />
                )}
                <CardTitle className="font-heading text-xl">
                  {service.Title}
                </CardTitle>
                <CardDescription className="text-base">
                  {parse(service.Description)}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price & Duration */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">
                    {service.Price} ETB
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {service["estimated-Time"]}
                  </span>
                </div>

                {/* Features from Specifications */}
                {service.Specifications && (
                  <div className="space-y-2 text-sm">
                    {service.Specifications.split(/<br\s*\/?>/i) // split by <br> or <br/>
                      .map((line, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                          <div>{parse(line)}</div>
                        </div>
                      ))}
                  </div>
                )}

                <Button className="w-full" asChild>
                  <Link to="/appointment">Book This Service</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
