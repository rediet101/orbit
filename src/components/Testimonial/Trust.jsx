import React from "react";
import { CheckCircle } from "lucide-react";

function Trust() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
            Why Patients Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our commitment to excellence and patient care sets us apart in the
            eye care industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Medical Team",
              description:
                "Experienced ophthalmologists and optometrists with years of specialized training",
              icon: CheckCircle,
            },
            {
              title: "State-of-the-Art Technology",
              description:
                "Latest diagnostic and treatment equipment for accurate and effective care",
              icon: CheckCircle,
            },
            {
              title: "Personalized Care",
              description:
                "Individual treatment plans tailored to each patient's unique needs and lifestyle",
              icon: CheckCircle,
            },
            {
              title: "Comprehensive Services",
              description:
                "Complete range of eye care services from routine exams to specialized treatments",
              icon: CheckCircle,
            },
            {
              title: "Patient Education",
              description:
                "We take time to educate patients about their eye health and treatment options",
              icon: CheckCircle,
            },
            {
              title: "Convenient Location",
              description:
                "Easily accessible location in Addis Ababa with flexible scheduling options",
              icon: CheckCircle,
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <feature.icon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
