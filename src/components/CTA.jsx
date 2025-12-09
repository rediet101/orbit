import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      id="appointment"
      className="py-20 text-primary-foreground relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(74, 159, 245, 0.9) 0%, rgba(45, 140, 240, 0.92) 40%, rgba(26, 115, 232, 0.95) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 text-white">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
          Ready to Improve Your Vision?
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-pretty text-white">
          Schedule your comprehensive eye examination today. Our experienced
          team is ready to help you see clearly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="text-[#1A73E8] bg-white hover:bg-[#1A73E8] hover:text-white transition-colors font-semibold"
          >
            <Link to="/appointment">Book Appointment</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#1A73E8] text-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors font-semibold"
          >
            Call +251 911 123 456
          </Button>
        </div>  
      </div>
    </section>
  );
}

export default CTA;
