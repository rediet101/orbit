import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import MediaHero from "@/components/Media/MediaHero";
import { BookOpen, Video, FileText, GraduationCap, Brain, Users, Trophy, Clock, ChevronRight, PlayCircle, Download, Share2, Bookmark, Award, CheckCircle, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EducationPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const educationContent = [
    {
      title: "Eye Health Basics",
      description: "Learn the fundamentals of maintaining healthy vision and preventing common eye conditions.",
      icon: BookOpen,
      type: "Article",
      category: "beginner",
      duration: "15 min",
      lessons: 5,
      progress: 75,
      url: "https://www.nei.nih.gov/learn-about-eye-health",
    },
    {
      title: "Understanding Your Prescription",
      description: "A comprehensive guide to reading and understanding your eyeglass prescription.",
      icon: FileText,
      type: "Guide",
      category: "intermediate",
      duration: "25 min",
      lessons: 8,
      progress: 40,
      url: "https://www.aao.org/eye-health/glasses-contacts/eyeglass-prescription",
    },
    {
      title: "Children's Eye Care",
      description: "Essential information for parents about protecting their children's vision.",
      icon: GraduationCap,
      type: "Video Series",
      category: "beginner",
      duration: "45 min",
      lessons: 12,
      progress: 100,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Digital Eye Strain Prevention",
      description: "Tips and exercises to reduce eye strain from prolonged screen use.",
      icon: Video,
      type: "Interactive Tutorial",
      category: "advanced",
      duration: "30 min",
      lessons: 6,
      progress: 20,
      url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome",
    },
    {
      title: "Anatomy of the Human Eye",
      description: "Explore the complex structures and functions of the human visual system.",
      icon: Brain,
      type: "3D Model",
      category: "advanced",
      duration: "20 min",
      lessons: 4,
      progress: 0,
      url: "https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/how-eyes-work",
    },
    {
      title: "Eye Conditions & Treatments",
      description: "Comprehensive overview of common eye conditions and modern treatment options.",
      icon: Users,
      type: "Case Studies",
      category: "intermediate",
      duration: "60 min",
      lessons: 10,
      progress: 60,
      url: "https://www.mayoclinic.org/diseases-conditions/eye-diseases/symptoms-causes/syc-20351492",
    },
  ];

  const filters = [
    { id: "all", label: "All Courses", count: educationContent.length },
    { id: "beginner", label: "Beginner", count: educationContent.filter(c => c.category === "beginner").length },
    { id: "intermediate", label: "Intermediate", count: educationContent.filter(c => c.category === "intermediate").length },
    { id: "advanced", label: "Advanced", count: educationContent.filter(c => c.category === "advanced").length },
  ];

  const filteredContent = activeFilter === "all" 
    ? educationContent 
    : educationContent.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <MediaHero 
        badge="Education Center"
        title="Eye Care Education"
        description="Expand your knowledge about eye health with our comprehensive educational resources and interactive learning modules."
      />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
              <div className="w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <GraduationCap className="w-5 h-5" />
              Knowledge Center
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Eye Care Education
            </h1>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Expand your knowledge about eye health with our comprehensive educational resources and interactive learning modules
            </p>

            {/* Stats */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{educationContent.length}+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-2xl font-bold text-blue-500">45+</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-2xl font-bold text-blue-700">15+</div>
                <div className="text-sm text-gray-600">Experts</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-2xl font-bold text-blue-800">10k+</div>
                <div className="text-sm text-gray-600">Learners</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Interactive Filter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Difficulty</h2>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {filter.label}
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeFilter === filter.id 
                      ? "bg-white/20" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Educational Content Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="group relative"
              >
                {/* Blue Hover Effect */}
                <div className="absolute -inset-0.5 bg-blue-200 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  {/* Progress Bar */}
                  {item.progress > 0 && (
                    <div className="h-1.5 bg-blue-50">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className={`h-full bg-blue-600`}
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Icon and Type */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm border border-blue-200`}>
                        <item.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.category === "beginner" ? "bg-blue-50 text-blue-700 border border-blue-200" :
                        item.category === "intermediate" ? "bg-blue-100 text-blue-800 border border-blue-300" :
                        "bg-blue-200 text-blue-900 border border-blue-400"
                      }`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    
                    {/* Course Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <FileText className="w-4 h-4" />
                          <span>{item.lessons} lessons</span>
                        </div>
                      </div>
                      
                      {/* Progress Indicator */}
                      {item.progress > 0 ? (
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            Progress: {item.progress}%
                          </span>
                          {item.progress === 100 && (
                            <Trophy className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                      ) : (
                        <div className="text-sm font-medium text-blue-600">
                          New course available!
                        </div>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Bookmark className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                          item.progress === 100
                            ? "bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-200"
                            : "bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-200"
                        }`}
                      >
                        {item.type.includes("Video") ? (
                          <>
                            <PlayCircle className="w-5 h-5" />
                            Watch Now
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-5 h-5" />
                            {item.progress > 0 ? "Continue" : "Start Learning"}
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Path Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-16"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Structured Learning Path</h2>
              <p className="text-blue-100 mb-8">
                Follow our guided learning path from beginner to advanced topics. Earn certificates and track your progress as you become an eye health expert.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow duration-300">
                  View Learning Path
                </button>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
                  Download Syllabus
                </button>
              </div>
            </div>
          </motion.div> */}

          {/* Interactive Quiz Section */}
          {/* <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-16"
           >
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-200">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Test Your Knowledge</h2>
                  <p className="text-gray-600">Take our interactive quiz to reinforce what you've learned</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Quick Quiz</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100">
                      <div className="font-medium text-gray-800 mb-2">What is the recommended frequency for comprehensive eye exams?</div>
                      <div className="text-sm text-gray-600">Select the correct answer</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100">
                      <div className="font-medium text-gray-800 mb-2">Which nutrient is essential for maintaining good night vision?</div>
                      <div className="text-sm text-gray-600">Select the correct answer</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="font-bold text-gray-800 mb-4">Learning Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Courses Completed</span>
                      <span className="font-bold text-blue-600">3/6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Perfect Quiz Scores</span>
                      <span className="font-bold text-blue-700">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Learning Streak</span>
                      <span className="font-bold text-blue-800">7 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}

          {/* Certificate Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Earn Your Certificate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Complete all courses and pass the final assessment to earn your Eye Health Expert Certificate
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              View Certificate Requirements
            </button>
          </motion.div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}