import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/mockData";

function BlogGrid({ tabs, selectedTab }) {
  const [showAll, setShowAll] = useState(false);

  // Map tab id to category name for filtering
  const tabIdToCategory = {
    all: null,
    "eye-health": "Eye Health",
    "digital-health": "Digital Health",
    eyewear: "Eyewear",
    "pediatric-care": "Pediatric Care",
    "eye-diseases": "Eye Diseases",
    "contact-lenses": "Contact Lenses",
    "company-news": "Company News",
  };

  const filteredPosts =
    selectedTab === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === tabIdToCategory[selectedTab]
        );

  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content / show content based on tab filter */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-8 font-montserrat">
              {selectedTab === "all"
                ? "Latest Articles"
                : `${
                    tabs.find((t) => t.id === selectedTab)?.name || "Articles"
                  }`}
            </h2>

            <div className="space-y-8">
              {visiblePosts.length === 0 ? (
                <div className="text-center text-gray-400 py-12">
                  No articles found for this category.
                </div>
              ) : (
                visiblePosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg border  overflow-hidden hover:shadow-xl  transition-all duration-300  border-violet-200 bg-gradient-to-br from-violet-100 to-white"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold font-montserrat mr-3">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold  mb-3 font-montserrat text-primary">
                          {post.title}
                        </h3>
                        <p className=" mb-4 font-open-sans leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-muted-foreground border-1 border-muted-foreground transition-colors font-montserrat font-semibold flex items-center px-5 py-2 rounded-full bg-transparent hover:bg-muted-foreground/20 hover:text-primary"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
              {!showAll && filteredPosts.length > 3 && (
                <div className="text-center mt-8">
                  <button
                    className="px-6 py-2 bg-primary/10 text-primary/80 rounded-full font-semibold hover:bg-primary/20 transition-colors border border-primary/60"
                    onClick={() => setShowAll(true)}
                  >
                    See More
                  </button>
                </div>
              )}
              {showAll && filteredPosts.length > 3 && (
                <div className="text-center mt-8">
                  <button
                    className="px-6 py-2 bg-primary/10 text-primary/80 rounded-full font-semibold hover:bg-primary/20 transition-colors border border-primary/60"
                    onClick={() => setShowAll(false)}
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: Recent Posts  */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-xl shadow-lg border  transition-all duration-300  border-violet-200 bg-gradient-to-br from-violet-50 to-white">
                <h3 className="text-xl font-bold text-primary mb-4 font-montserrat">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 5).map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3 items-center rounded-lg border border-primary/10 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary/5 hover:scale-[1.03]">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/placeholder.svg";
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors font-montserrat line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-1 text-xs text-primary/60 mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
