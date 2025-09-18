import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parse from "html-react-parser"; 

function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await  fetch(import.meta.env.VITE_API_LINK + 'landing'); // 🔹 replace with your endpoint
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setHeroData(json.data[0]); 
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchHero();
  }, []);

  if (!heroData) {
    return (
      <section className="py-20 text-center">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Established 2024
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-tight">
                {heroData.title}
              </h1>
              <div className="text-lg text-muted-foreground max-w-lg">
                {parse(heroData.description)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+251 911 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {heroData.gallery?.length > 0 && (
              <img
                src={heroData.gallery[0]}
                alt={heroData.title}
                className="rounded-lg shadow-2xl"
              />
            )}
            <div className="absolute inset-0 bg-black/15 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
