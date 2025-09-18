"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Mission() {
  const [missionVision, setMissionVision] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissionVision = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_LINK + 'about');
        const data = await res.json();
        setMissionVision(data.MissionVision); // adjust based on your API format
      } catch (error) {
        console.error("Error fetching mission & vision:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionVision();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
            Our Mission, Vision & Values
          </h2>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {missionVision.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-xl transition-all duration-300 border border-green-200 bg-gradient-to-br from-green-100 to-white"
              >
                <CardHeader>
                  {item.media && item.media.length > 0 && (
                    <img
                      src={item.media[0].original_url}
                      alt={item.title}
                      className="h-12 w-12 mx-auto mb-4"
                    />
                  )}
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Mission;
