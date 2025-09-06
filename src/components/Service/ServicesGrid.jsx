import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Users, Award, Clock, CheckCircle } from "lucide-react";

function ServicesGrid() {
  const services = [
    {
      title: "Comprehensive Eye Examinations",
      description:
        "Complete vision and eye health assessment using state-of-the-art diagnostic equipment",
      price: "ETB 800",
      duration: "45-60 minutes",
      features: [
        "Visual acuity testing",
        "Refraction assessment",
        "Eye pressure measurement",
        "Retinal examination",
        "Peripheral vision testing",
        "Color vision assessment",
      ],
      icon: Eye,
    },
    {
      title: "Prescription Glasses & Eyewear",
      description:
        "Wide selection of frames and lenses from leading international brands",
      price: "Starting from ETB 1,200",
      duration: "30 minutes consultation",
      features: [
        "Designer frames collection",
        "Anti-reflective coatings",
        "Blue light filtering",
        "Progressive lenses",
        "Photochromic lenses",
        "Sports eyewear",
      ],
      icon: Award,
    },
    {
      title: "Contact Lens Fitting & Care",
      description:
        "Professional contact lens fitting and comprehensive care instructions",
      price: "ETB 600 (fitting)",
      duration: "30-45 minutes",
      features: [
        "Initial fitting consultation",
        "Trial lens evaluation",
        "Proper insertion training",
        "Care instruction guidance",
        "Follow-up appointments",
        "Emergency support",
      ],
      icon: Users,
    },
    {
      title: "Pediatric Eye Care",
      description:
        "Specialized eye care services designed specifically for children and adolescents",
      price: "ETB 700",
      duration: "30-45 minutes",
      features: [
        "Child-friendly examination",
        "Vision development assessment",
        "Amblyopia screening",
        "Strabismus evaluation",
        "Learning-related vision problems",
        "Myopia management",
      ],
      icon: Users,
    },
    {
      title: "Glaucoma & Cataract Screening",
      description: "Early detection and monitoring of serious eye conditions",
      price: "ETB 900",
      duration: "60 minutes",
      features: [
        "Intraocular pressure testing",
        "Optic nerve evaluation",
        "Visual field testing",
        "Lens clarity assessment",
        "Risk factor evaluation",
        "Treatment recommendations",
      ],
      icon: Eye,
    },
    {
      title: "Computer Vision Syndrome Treatment",
      description:
        "Specialized care for digital eye strain and related symptoms",
      price: "ETB 650",
      duration: "45 minutes",
      features: [
        "Digital eye strain assessment",
        "Dry eye evaluation",
        "Blue light exposure analysis",
        "Ergonomic recommendations",
        "Specialized computer glasses",
        "Eye exercise programs",
      ],
      icon: Clock,
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className=" hover:shadow-xl transition-all duration-300 border  border-green-200 bg-gradient-to-br from-green-50 to-white "
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">
                    {service.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {service.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/appointment">Book This Service</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
