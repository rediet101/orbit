import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import MediaHero from "@/components/Media/MediaHero";
import { FileText, Download, ExternalLink, BookOpen } from "lucide-react";

export default function PublicationPage() {
  const publications = [
    {
      title: "Annual Eye Health Report 2024",
      type: "Research Report",
      description: "Comprehensive analysis of eye health trends and treatment advances in Ethiopia.",
      year: "2024",
      pages: 45,
      url: "https://www.who.int/publications/i/item/9789240050037",
    },
    {
      title: "Guide to Pediatric Eye Care",
      type: "Clinical Guide",
      description: "Best practices for diagnosing and treating eye conditions in children.",
      year: "2024",
      pages: 32,
      url: "https://www.aao.org/education/clinical-statement/pediatric-eye-care",
    },
    {
      title: "Digital Eye Strain: Prevention & Treatment",
      type: "White Paper",
      description: "Research-backed strategies for managing digital eye strain in the modern workplace.",
      year: "2023",
      pages: 18,
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6020759/",
    },
    {
      title: "Advances in Cataract Surgery",
      type: "Medical Journal",
      description: "Latest techniques and outcomes in modern cataract surgical procedures.",
      year: "2023",
      pages: 28,
      url: "https://www.aao.org/eyenet/article/advances-in-cataract-surgery",
    },
    {
      title: "Vision Care Standards in East Africa",
      type: "Industry Report",
      description: "Analysis of vision care standards and recommendations for improvement.",
      year: "2023",
      pages: 52,
      url: "https://www.iapb.org/learn/vision-atlas/",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MediaHero 
        badge="Research & Publications"
        title="Publications & Research"
        description="Access our research papers, clinical guides, and industry reports on eye care and vision health."
      />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Publications List */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {pub.type} • {pub.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">
                        {pub.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{pub.description}</p>
                      <span className="text-sm text-gray-500 mt-2 inline-block">
                        <BookOpen className="w-4 h-4 inline mr-1" />
                        {pub.pages} pages
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 ml-16 md:ml-0">
                    {/* <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button> */}
                    <a 
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
