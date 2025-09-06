import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      id="appointment"
      className="py-20 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
          Ready to Improve Your Vision?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          Schedule your comprehensive eye examination today. Our experienced
          team is ready to help you see clearly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/appointment">Book Appointment</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Call +251 911 123 456
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
