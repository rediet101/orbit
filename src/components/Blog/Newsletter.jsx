import React from "react";
import { Button } from "@/components/ui/button";

function Newsletter() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
          Stay Updated
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Subscribe to our newsletter to receive the latest eye care tips,
          health insights, and clinic updates directly in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-input rounded-md bg-white"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
