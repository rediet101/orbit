import React from "react";

function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/src/assets/home2.jpg"
              alt="Professional Eye Examination"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/15 z-10"></div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
                Why Choose Orbit Optical?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We combine medical expertise with modern technology to provide
                exceptional eye care.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Experienced optometrists & ophthalmologists",
                "State-of-the-art diagnostic & treatment technology",
                "Wide selection of prescription glasses & eyewear",
                "Personalized care for each patient",
                "Commitment to preventive eye care & education",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-secondary/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
