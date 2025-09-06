import React from "react";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="secondary" className="w-fit mx-auto">
          Professional Eye Care
        </Badge>
        <h1 className="font-heading font-semibold text-4xl lg:text-5xl text-balance">
          Comprehensive Eye Care Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          From routine eye exams to specialized treatments, we provide complete
          vision care using the latest technology and techniques.
        </p>
      </div>
    </section>
  );
}

export default Hero;
