import React from "react";

function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/src/assets/office3.jpg"
              alt="Orbit Optical Clinic Building"
              className="rounded-lg shadow-lg w-full object-cover h-115"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-heading font-semibold text-3xl lg:text-5xl text-balance text-primary">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2024, Orbit Optical Clinic was established with a
                simple yet powerful vision: to make quality eye care accessible
                to everyone in Addis Ababa and surrounding communities.
              </p>
              <p>
                Our founders, driven by their passion for vision health and
                community service, recognized the need for a modern,
                patient-centered eye care facility that combines international
                standards with local understanding and cultural sensitivity.
              </p>
              <p>
                Today, we proudly serve hundreds of patients, from routine eye
                exams to complex vision corrections, always maintaining our
                commitment to excellence, compassion, and innovation in eye
                care.
              </p>
              <p>
                Beyond clinical services, we also focus on community awareness
                and preventive care, helping reduce avoidable vision problems
                and ensuring brighter futures through better sight
              </p>
              <p>
                Beyond clinical services, we also focus on community awareness
                and preventive care, helping reduce avoidable vision problems
                and ensuring brighter futures through better sight
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
