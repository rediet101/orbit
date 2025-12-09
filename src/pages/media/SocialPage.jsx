import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import MediaHero from "@/components/Media/MediaHero";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ExternalLink, Play, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialPage() {
  // Sample social media posts/content
  const socialContent = [
    {
      platform: "Instagram",
      platformIcon: Instagram,
      platformColor: "from-purple-600 to-pink-500",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400",
      caption: "Regular eye exams can detect early signs of conditions like glaucoma and macular degeneration. Book your checkup today! 👁️ #EyeHealth #OrbitOptical",
      likes: "1.2K",
      comments: "48",
      date: "2 days ago",
    },
    {
      platform: "YouTube",
      platformIcon: Youtube,
      platformColor: "from-red-600 to-red-500",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
      caption: "Understanding Blue Light: How Screen Time Affects Your Eyes",
      views: "15K",
      duration: "8:24",
      date: "1 week ago",
    },
    {
      platform: "TikTok",
      platformIcon: Play,
      platformColor: "from-gray-900 to-gray-800",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400",
      caption: "5 Signs You Need Glasses 👓 #fyp #eyecare #glasses #orbiteye",
      likes: "5.4K",
      views: "50K",
      date: "3 days ago",
    },
    {
      platform: "Instagram",
      platformIcon: Instagram,
      platformColor: "from-purple-600 to-pink-500",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400",
      caption: "Meet our amazing team! Our specialists are here to help you see the world more clearly. ✨ #TeamOrbit #EyeCareExperts",
      likes: "892",
      comments: "35",
      date: "5 days ago",
    },
    {
      platform: "YouTube",
      platformIcon: Youtube,
      platformColor: "from-red-600 to-red-500",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
      caption: "LASIK Surgery Explained: What to Expect Before, During & After",
      views: "28K",
      duration: "12:15",
      date: "2 weeks ago",
    },
    {
      platform: "TikTok",
      platformIcon: Play,
      platformColor: "from-gray-900 to-gray-800",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400",
      caption: "POV: You just got your new glasses 🤩 #newglasses #vision #clearsight",
      likes: "12K",
      views: "120K",
      date: "1 week ago",
    },
    {
      platform: "LinkedIn",
      platformIcon: Linkedin,
      platformColor: "from-blue-700 to-blue-600",
      type: "article",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
      caption: "Excited to announce our new state-of-the-art eye care facility! We're committed to providing the best vision care for our community. #Healthcare #EyeCare #Innovation",
      likes: "342",
      comments: "28",
      date: "4 days ago",
    },
    {
      platform: "LinkedIn",
      platformIcon: Linkedin,
      platformColor: "from-blue-700 to-blue-600",
      type: "article",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400",
      caption: "Our ophthalmology team just completed advanced training in the latest LASIK techniques. Proud of our continuous commitment to excellence! #ProfessionalDevelopment",
      likes: "567",
      comments: "45",
      date: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <MediaHero 
        badge="Social Media"
        title="Connect With Us"
        description="Follow us on social media for the latest updates, eye care tips, and community engagement."
      />
      
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-10 left-[5%] animate-float"><div className="w-4 h-4 rounded-full bg-blue-400/20"></div></div>
        <div className="absolute top-20 left-[15%] animate-float-delayed"><div className="w-6 h-6 rounded-full bg-cyan-400/20"></div></div>
        <div className="absolute top-32 left-[25%] animate-float-slow"><div className="w-3 h-3 rounded-full bg-blue-300/30"></div></div>
        <div className="absolute top-16 right-[10%] animate-float"><div className="w-8 h-8 rounded-full bg-blue-400/15"></div></div>
        <div className="absolute top-40 right-[20%] animate-float-delayed"><div className="w-5 h-5 rounded-full bg-blue-500/25"></div></div>
        <div className="absolute top-60 right-[5%] animate-float-slow"><div className="w-4 h-4 rounded-full bg-cyan-500/20"></div></div>
        <div className="absolute bottom-20 left-[8%] animate-float-delayed"><div className="w-7 h-7 rounded-full bg-blue-400/20"></div></div>
        <div className="absolute bottom-40 left-[18%] animate-float"><div className="w-3 h-3 rounded-full bg-blue-500/30"></div></div>
        <div className="absolute bottom-32 left-[30%] animate-float-slow"><div className="w-5 h-5 rounded-full bg-blue-500/20"></div></div>
        <div className="absolute bottom-16 right-[12%] animate-float"><div className="w-6 h-6 rounded-full bg-cyan-300/25"></div></div>
        <div className="absolute bottom-48 right-[25%] animate-float-delayed"><div className="w-4 h-4 rounded-full bg-blue-500/20"></div></div>
        <div className="absolute bottom-60 right-[8%] animate-float-slow"><div className="w-8 h-8 rounded-full bg-blue-400/15"></div></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Feed Grid */}

          {/* Social Feed Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialContent.map((post, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                {/* Post Header */}
                <div className="p-4 flex items-center gap-3 border-b border-blue-50">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.platformColor} flex items-center justify-center`}>
                    <post.platformIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">{post.platform}</p>
                    <p className="text-xs text-blue-600/60">{post.date}</p>
                  </div>
                </div>

                {/* Post Media */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                      {post.duration && (
                        <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {post.duration}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <p className="text-blue-800 text-sm line-clamp-2 mb-3">
                    {post.caption}
                  </p>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center gap-4 text-blue-600/70 text-sm">
                    {post.likes && (
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    )}
                    {post.comments && (
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                    )}
                    {post.views && (
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {post.views} views
                      </span>
                    )}
                  </div>
                </div>

                {/* View on Platform */}
                <div className="px-4 pb-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    View on {post.platform}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-5deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(8deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
          .animate-float-slow { animation: float-slow 10s ease-in-out infinite 0.5s; }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
