import React from "react";
import { Mail, Linkedin } from "lucide-react";
import male from "../../assets/ceo2.jpg";
import female from "../../assets/female2.png";
function LeadershipSection() {
  const leadership = [
    {
      name: "Ahmed Hassan",
      position: "Chief Executive Officer",
      image: male,
      bio: "Ahmed brings over 15 years of experience in international trade and agricultural exports. He founded Al-Anhar Trading with a vision to connect Ethiopian agriculture with global markets.",
      email: "ahmed.hassan@alanhar.com",
      linkedin: "#",
    },
    {
      name: "Fatima Mohammed",
      position: "Chief Operating Officer",
      image: female,
      bio: "Fatima oversees daily operations and supply chain management. Her expertise in logistics and quality control ensures our products meet international standards.",
      email: "fatima.mohammed@alanhar.com",
      linkedin: "#",
    },
    {
      name: "Dr. Yohannes Tadesse",
      position: "Head of Import Division",
      image: male,
      bio: "Dr. Yohannes leads our pharmaceutical and medical equipment imports. His medical background ensures we source the highest quality healthcare products.",
      email: "yohannes.tadesse@alanhar.com",
      linkedin: "#",
    },
    {
      name: "Sarah Alemayehu",
      position: "Export Manager",
      image: female,
      bio: "Sarah manages our agricultural export operations with expertise in quality assurance and international market development across Europe, Middle East, and Asia.",
      email: "sarah.alemayehu@alanhar.com",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-thin text-primary mb-4 ">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
            Our experienced professionals are dedicated to providing you with
            the highest quality eye care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow-xl border border-violet-100 overflow-hidden bg-gradient-to-br from-violet-100 to-white"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-32 h-32 rounded-xl object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2 font-montserrat">
                      {leader.name}
                    </h3>
                    <p className="text-lg text-yellow-600 font-semibold mb-4 font-montserrat">
                      {leader.position}
                    </p>
                    <p className="text-green-600 font-open-sans leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href={`mailto:${leader.email}`}
                        className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-green-600" />
                      </a>
                      <a
                        href={leader.linkedin}
                        className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-green-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
