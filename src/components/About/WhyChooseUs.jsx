"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

function WhyChooseUs() {
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + 'about'); // 👈 replace with your API endpoint
        const data = await res.json();
        setWhyChooseUs(data.WhyChooseUs || []);
      } catch (error) {
        console.error("Error fetching Why Choose Us:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWhyChooseUs();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
            {whyChooseUs[0]?.title || "Why Choose Us"}
          </h2>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.length > 0 &&
              (whyChooseUs[0].descrtiption || "")
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WhyChooseUs;
