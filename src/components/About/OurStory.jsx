"use client";

import React, { useEffect, useState } from "react";

function OurStory() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + 'about'); // 👈 replace with your endpoint
        const data = await res.json();
        setStory(data.data?.[0] || null);
      } catch (error) {
        console.error("Error fetching Our Story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : story ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src={story.image?.[0] || "/placeholder.svg"}
                alt={story.title || "Our Story"}
                className="rounded-lg shadow-lg w-full object-cover h-115"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-heading font-semibold text-3xl lg:text-5xl text-balance text-primary">
                {story.title || "Our Story"}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {story.description
                  ? story.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((line, idx) => <p key={idx}>{line}</p>)
                  : "No description available."}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No story data available.
          </p>
        )}
      </div>
    </section>
  );
}

export default OurStory;
