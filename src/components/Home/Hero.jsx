import React from "react";
import { Badge } from "@/components/ui/badge";
import { Eye, Users, Award, Clock, Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Established 2024
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight">
                Clear Vision, <span className="text-primary">Better Life</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Professional eye care services in Addis Ababa, Ethiopia.
                Comprehensive examinations, prescription glasses, and
                specialized treatments with state-of-the-art technology.
              </p>
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
            <img
              src="/src/assets/home1.webp"
              alt="Orbit Optical Clinic Interior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/15 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
