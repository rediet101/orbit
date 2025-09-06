import { CheckCircle } from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
            Why Choose Orbit Optical?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "State-of-the-art diagnostic and treatment equipment",
            "Experienced team of eye care professionals",
            "Comprehensive range of services under one roof",
            "Personalized treatment plans for each patient",
            "Convenient location in the heart of Addis Ababa",
            "Flexible payment options and insurance acceptance",
            "Commitment to patient education and preventive care",
            "Ongoing professional development and training",
            "Community outreach and vision health programs",
          ].map((reason, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
