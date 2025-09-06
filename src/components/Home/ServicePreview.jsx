import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Eye, Users, Award, Clock } from "lucide-react";

function ServicePreview() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-semibold text-3xl lg:text-5xl text-balance">
            Comprehensive Eye Care Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From routine eye exams to specialized treatments, we provide
            complete vision care for all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Eye Exams",
              description:
                "Thorough vision assessments using advanced diagnostic equipment",
              icon: Eye,
            },
            {
              title: "Prescription Glasses & Contacts",
              description:
                "Wide selection of frames and contact lenses for all prescriptions",
              icon: Award,
            },
            {
              title: "Pediatric Eye Care",
              description:
                "Specialized care for children's vision development and eye health",
              icon: Users,
            },
            {
              title: "Glaucoma & Cataract Screening",
              description:
                "Early detection and management of serious eye conditions",
              icon: Eye,
            },
            {
              title: "Computer Vision Syndrome",
              description:
                "Treatment for digital eye strain and dry eye conditions",
              icon: Clock,
            },
            {
              title: "Eye Health Education",
              description: "Patient education and preventive care programs",
              icon: Award,
            },
          ].map((service, index) => (
            <Card
              key={index}
              className=" hover:shadow-xl transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-white hover:scale-[1.02]"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePreview;
