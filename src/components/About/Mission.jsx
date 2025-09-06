import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Award, Heart, Target, Lightbulb } from "lucide-react";

function Mission() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and personalized attention to their unique needs.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "We maintain the highest standards of professional care using cutting-edge technology and techniques.",
    },
    {
      icon: Target,
      title: "Patient-Centered Approach",
      description:
        "Your vision goals and comfort are our top priority in every interaction and treatment plan.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description:
        "We stay current with the latest advances in eye care to provide you with the best possible outcomes.",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
            Our Mission, Vision & Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 border  border-green-200 bg-gradient-to-br from-green-100 to-white">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="font-heading">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide comprehensive, compassionate, and cutting-edge eye
                care services that enhance the vision and quality of life for
                our patients and community.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border  border-green-200 bg-gradient-to-br from-green-100 to-white ">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="font-heading">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading eye care provider in Ethiopia, recognized for
                excellence in patient care, innovation, and community health
                impact.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border  border-green-200 bg-gradient-to-br from-green-100 to-white ">
            <CardHeader>
              <Heart className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="font-heading">Our Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every patient receives personalized care with the highest
                professional standards, latest technology, and genuine
                commitment to their vision health.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-white"
            >
              <CardHeader>
                <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading text-lg">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
