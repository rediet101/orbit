import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import MediaHero from "@/components/Media/MediaHero";
import { Calendar, User, ArrowRight, Eye, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ArticlePage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const articles = [
    {
      id: 1,
      title: "The Importance of Regular Eye Exams",
      excerpt: "Regular eye exams are crucial for maintaining good vision and detecting potential problems early.",
      author: "Dr. Sara Bekele",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      readTime: "5 min read",
      views: "1.2k",
      category: "Preventive Care"
    },
    {
      id: 2,
      title: "Protecting Your Eyes in the Digital Age",
      excerpt: "Learn how to reduce digital eye strain and protect your vision in our technology-driven world.",
      author: "Dr. Michael Tadesse",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&h=250&fit=crop",
      readTime: "7 min read",
      views: "2.5k",
      category: "Digital Health"
    },
    {
      id: 3,
      title: "Understanding Cataracts: Causes and Treatment",
      excerpt: "Everything you need to know about cataracts, from early signs to modern treatment options.",
      author: "Dr. Lulit Abate",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      readTime: "8 min read",
      views: "3.1k",
      category: "Treatment"
    },
    {
      id: 4,
      title: "Children's Vision: What Parents Should Know",
      excerpt: "A comprehensive guide for parents on monitoring and protecting their children's eye health.",
      author: "Dr. Daniel Girma",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=250&fit=crop",
      readTime: "6 min read",
      views: "1.8k",
      category: "Pediatrics"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <div className="min-h-screen">
      <Navigation />
      <MediaHero 
        badge="Expert Insights"
        title="Articles & Insights"
        description="Discover expert articles and the latest insights from our medical team on eye health and vision care."
      />
      
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-10 left-[5%] animate-float">
          <div className="w-4 h-4 rounded-full bg-primary/20"></div>
        </div>
        <div className="absolute top-20 left-[15%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-cyan-400/20"></div>
        </div>
        <div className="absolute top-32 left-[25%] animate-float-slow">
          <div className="w-3 h-3 rounded-full bg-blue-300/30"></div>
        </div>
        <div className="absolute top-16 right-[10%] animate-float">
          <div className="w-8 h-8 rounded-full bg-blue-400/15"></div>
        </div>
        <div className="absolute top-40 right-[20%] animate-float-delayed">
          <div className="w-5 h-5 rounded-full bg-primary/25"></div>
        </div>
        <div className="absolute top-60 right-[5%] animate-float-slow">
          <div className="w-4 h-4 rounded-full bg-cyan-500/20"></div>
        </div>
        <div className="absolute bottom-20 left-[8%] animate-float-delayed">
          <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
        </div>
        <div className="absolute bottom-40 left-[18%] animate-float">
          <div className="w-3 h-3 rounded-full bg-primary/30"></div>
        </div>
        <div className="absolute bottom-32 left-[30%] animate-float-slow">
          <div className="w-5 h-5 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute bottom-16 right-[12%] animate-float">
          <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
        </div>
        <div className="absolute bottom-48 right-[25%] animate-float-delayed">
          <div className="w-4 h-4 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute bottom-60 right-[8%] animate-float-slow">
          <div className="w-8 h-8 rounded-full bg-primary/15"></div>
        </div>
        <div className="absolute top-1/2 left-[3%] animate-float">
          <div className="w-5 h-5 rounded-full bg-cyan-400/25"></div>
        </div>
        <div className="absolute top-1/3 right-[3%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-blue-300/20"></div>
        </div>
        <div className="absolute top-2/3 left-[12%] animate-float-slow">
          <div className="w-4 h-4 rounded-full bg-blue-400/25"></div>
        </div>
        <div className="absolute top-3/4 right-[15%] animate-float">
          <div className="w-3 h-3 rounded-full bg-primary/35"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Articles Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {articles.map((article, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="group relative"
              >
                {/* Blue Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl shadow-blue-100 overflow-hidden border border-blue-100">
                  {/* Image Container with Gradient Overlay */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{article.author}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {article.date}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {/* Stats and Read Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          {article.readTime}
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-blue-500" />
                          {article.views}
                        </span> */}
                      </div>
                      
                      <Link 
                        to={`/media/article/${article.id}`}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 group/btn"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* CTA Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-blue-100 shadow-xl shadow-blue-100"
           >
            <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated with Eye Health
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and get the latest articles, research updates, 
              and eye care tips delivered directly to your inbox.
            </p>
            <div className="flex max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div> */}
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          
          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-5deg);
            }
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(8deg);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite 1s;
          }
          
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite 0.5s;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}