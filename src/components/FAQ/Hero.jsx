import React from "react";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="secondary" className="w-fit mx-auto">
          Frequently Asked Questions
        </Badge>
        <h1 className="font-heading font-bold text-4xl lg:text-5xl text-balance">
          How Can We Help You?
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Find answers to common questions about our services, appointments, and
          eye care. Can't find what you're looking for? Contact us directly.
        </p>
      </div>
    </section>
  );
}

export default Hero;
