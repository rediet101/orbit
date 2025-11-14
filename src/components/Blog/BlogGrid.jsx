"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

function BlogGrid({ tabs, selectedTab }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

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

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    try {
       const res = await fetch(`${import.meta.env.VITE_API_LINK}posts?page=${page}`);
      const data = await res.json();
      setPosts(data.data || []);
      setCurrentPage(data.current_page || 1);
      setLastPage(data.last_page || 1);
      setShowAll(false); // reset showAll when page changes
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const filteredPosts =
    selectedTab === "all"
      ? posts
      : posts.filter((post) => post.category === tabIdToCategory[selectedTab]);

  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-8 font-montserrat">
              {selectedTab === "all"
                ? "Latest Articles"
                : `${tabs.find((t) => t.id === selectedTab)?.name || "Articles"}`}
            </h2>

            {loading ? (
              <p className="text-center text-gray-400 py-12">Loading...</p>
            ) : (
              <div className="space-y-8">
                {visiblePosts.length === 0 ? (
                  <div className="text-center text-gray-400 py-12">
                    No articles found for this category.
                  </div>
                ) : (
                  visiblePosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 border-violet-200 bg-gradient-to-br from-violet-100 to-white"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image_url?.[0] || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                            onError={(e) => {
                              e.target.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <div className="md:w-2/3 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-3">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>
                                    {new Date(post.published_at).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 font-montserrat text-primary">
                              {post.title}
                            </h3>
                            <p className="mb-4 font-open-sans leading-relaxed text-muted-foreground line-clamp-3">
                              {post.body}
                            </p>
                          </div>

                          {/* Tags + Read More */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex space-x-2 flex-wrap">
                              {post.tags?.map((tag) => (
                                <span
                                  key={tag.id}
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                                >
                                  {tag.name}
                                </span>
                              ))}
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

                {/* Show More / Show Less */}
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

                {/* Pagination */}
                {!showAll && lastPage > 1 && (
                  <div className="flex justify-center space-x-2 mt-8">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary/80 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: lastPage }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 rounded-full border ${
                          currentPage === i + 1
                            ? "bg-primary text-white border-primary"
                            : "bg-primary/10 text-primary/80 border-primary/40"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === lastPage}
                      className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary/80 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar: Recent Posts */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border transition-all duration-300 border-violet-200 bg-gradient-to-br from-violet-50 to-white">
                <h3 className="text-xl font-bold text-primary mb-4 font-montserrat">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                      <div className="flex space-x-3 items-center rounded-lg border border-primary/10 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary/5 hover:scale-[1.03] p-2">
                        <img
                          src={post.image_url?.[0] || "/placeholder.svg"}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = "/placeholder.svg";
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors font-montserrat line-clamp-2">
                            {post.slug}
                          </h4>
                          <div className="flex items-center space-x-1 text-xs text-primary/60 mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.published_at).toLocaleDateString()}</span>
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
