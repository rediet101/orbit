import React from "react";
import { Badge } from "@/components/ui/badge";
import back from "../../assets/Orbit.jpg";

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Optional: Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Badge */}
        <div className="inline-block animate-fade-in">
          <Badge
            variant="secondary"
            className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-5 py-1.5 text-sm font-semibold shadow-lg"
          >
           Frequently Asked Questions
          </Badge>
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white drop-shadow-lg animate-slide-up">
          Frequently Asked Questions
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow animate-fade-in-delay">
          Find answers to common questions about our services, appointments, and
          eye care. Can't find what you're looking for? Contact us directly.
        </p>
      </div>

      {/* Optional Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>
    </section>
  );
}

export default Hero;
