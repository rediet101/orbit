// "use client";

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Calendar, ArrowRight } from "lucide-react";

// function BlogGrid({ tabs, selectedTab }) {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAll, setShowAll] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [lastPage, setLastPage] = useState(1);

//   const tabIdToCategory = {
//     all: null,
//     "eye-health": "Eye Health",
//     "digital-health": "Digital Health",
//     eyewear: "Eyewear",
//     "pediatric-care": "Pediatric Care",
//     "eye-diseases": "Eye Diseases",
//     "contact-lenses": "Contact Lenses",
//     "company-news": "Company News",
//   };

//   const fetchPosts = async (page = 1) => {
//     setLoading(true);
//     try {
//        const res = await fetch(`${import.meta.env.VITE_API_LINK}posts?page=${page}`);
//       const data = await res.json();
//       setPosts(data.data || []);
//       setCurrentPage(data.current_page || 1);
//       setLastPage(data.last_page || 1);
//       setShowAll(false); // reset showAll when page changes
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(currentPage);
//   }, [currentPage]);

//   const filteredPosts =
//     selectedTab === "all"
//       ? posts
//       : posts.filter((post) => post.category === tabIdToCategory[selectedTab]);

//   const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= lastPage) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Main Content */}
//           <div className="lg:w-2/3">
//             <h2 className="text-3xl font-bold text-primary mb-8 font-montserrat">
//               {selectedTab === "all"
//                 ? "Latest Articles"
//                 : `${tabs.find((t) => t.id === selectedTab)?.name || "Articles"}`}
//             </h2>

//             {loading ? (
//               <p className="text-center text-gray-400 py-12">Loading...</p>
//             ) : (
//               <div className="space-y-8">
//                 {visiblePosts.length === 0 ? (
//                   <div className="text-center text-gray-400 py-12">
//                     No articles found for this category.
//                   </div>
//                 ) : (
//                   visiblePosts.map((post) => (
//                     <article
//                       key={post.id}
//                       className="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 border-violet-200 bg-gradient-to-br from-violet-100 to-white"
//                     >
//                       <div className="md:flex">
//                         <div className="md:w-1/3">
//                           <img
//                             src={post.image_url?.[0] || "/placeholder.svg"}
//                             alt={post.title}
//                             className="w-full h-48 md:h-full object-cover"
//                             onError={(e) => {
//                               e.target.src = "/placeholder.svg";
//                             }}
//                           />
//                         </div>
//                         <div className="md:w-2/3 p-6 flex flex-col justify-between">
//                           <div>
//                             <div className="flex items-center mb-3">
//                               <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                                 <div className="flex items-center space-x-1">
//                                   <Calendar className="w-4 h-4" />
//                                   <span>
//                                     {new Date(post.published_at).toLocaleDateString()}
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>

//                             <h3 className="text-xl font-bold mb-3 font-montserrat text-primary">
//                               {post.title}
//                             </h3>
//                             <p className="mb-4 font-open-sans leading-relaxed text-muted-foreground line-clamp-3">
//                               {post.body}
//                             </p>
//                           </div>

//                           {/* Tags + Read More */}
//                           <div className="flex items-center justify-between mt-4">
//                             <div className="flex space-x-2 flex-wrap">
//                               {post.tags?.map((tag) => (
//                                 <span
//                                   key={tag.id}
//                                   className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
//                                 >
//                                   {tag.name}
//                                 </span>
//                               ))}
//                             </div>
//                             <Link
//                               to={`/blog/${post.id}`}
//                               className="text-muted-foreground border-1 border-muted-foreground transition-colors font-montserrat font-semibold flex items-center px-5 py-2 rounded-full bg-transparent hover:bg-muted-foreground/20 hover:text-primary"
//                             >
//                               Read More
//                               <ArrowRight className="w-4 h-4 ml-1" />
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   ))
//                 )}

//                 {/* Show More / Show Less */}
//                 {!showAll && filteredPosts.length > 3 && (
//                   <div className="text-center mt-8">
//                     <button
//                       className="px-6 py-2 bg-primary/10 text-primary/80 rounded-full font-semibold hover:bg-primary/20 transition-colors border border-primary/60"
//                       onClick={() => setShowAll(true)}
//                     >
//                       See More
//                     </button>
//                   </div>
//                 )}
//                 {showAll && filteredPosts.length > 3 && (
//                   <div className="text-center mt-8">
//                     <button
//                       className="px-6 py-2 bg-primary/10 text-primary/80 rounded-full font-semibold hover:bg-primary/20 transition-colors border border-primary/60"
//                       onClick={() => setShowAll(false)}
//                     >
//                       Show Less
//                     </button>
//                   </div>
//                 )}

//                 {/* Pagination */}
//                 {!showAll && lastPage > 1 && (
//                   <div className="flex justify-center space-x-2 mt-8">
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary/80 disabled:opacity-50"
//                     >
//                       Previous
//                     </button>
//                     {Array.from({ length: lastPage }, (_, i) => (
//                       <button
//                         key={i + 1}
//                         onClick={() => handlePageChange(i + 1)}
//                         className={`px-4 py-2 rounded-full border ${
//                           currentPage === i + 1
//                             ? "bg-primary text-white border-primary"
//                             : "bg-primary/10 text-primary/80 border-primary/40"
//                         }`}
//                       >
//                         {i + 1}
//                       </button>
//                     ))}
//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === lastPage}
//                       className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary/80 disabled:opacity-50"
//                     >
//                       Next
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Sidebar: Recent Posts */}
//           <div className="lg:w-1/3">
//             <div className="space-y-8">
//               <div className="bg-white p-6 rounded-xl shadow-lg border transition-all duration-300 border-violet-200 bg-gradient-to-br from-violet-50 to-white">
//                 <h3 className="text-xl font-bold text-primary mb-4 font-montserrat">
//                   Recent Posts
//                 </h3>
//                 <div className="space-y-4">
//                   {posts.slice(0, 5).map((post) => (
//                     <Link key={post.id} to={`/blog/${post.id}`} className="block group">
//                       <div className="flex space-x-3 items-center rounded-lg border border-primary/10 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary/5 hover:scale-[1.03] p-2">
//                         <img
//                           src={post.image_url?.[0] || "/placeholder.svg"}
//                           alt={post.title}
//                           className="w-16 h-16 object-cover rounded-lg"
//                           onError={(e) => {
//                             e.target.src = "/placeholder.svg";
//                           }}
//                         />
//                         <div className="flex-1">
//                           <h4 className="text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors font-montserrat line-clamp-2">
//                             {post.slug}
//                           </h4>
//                           <div className="flex items-center space-x-1 text-xs text-primary/60 mt-1">
//                             <Calendar className="w-3 h-3" />
//                             <span>{new Date(post.published_at).toLocaleDateString()}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BlogGrid;



"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";

function BlogGrid({ tabs, selectedTab }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_LINK}posts?page=${page}`);
      const data = await res.json();
      setPosts(data.data || []);
      setCurrentPage(data.current_page || 1);
      setLastPage(data.last_page || 1);
      setShowAll(false);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(err);
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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {selectedTab === "all"
                  ? "Latest Articles"
                  : tabs.find((t) => t.id === selectedTab)?.name || "Articles"}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Stay informed with expert insights on eye care and vision health.
              </p>
            </div>

            {/* Loading State */}
            {loading ? (
              <LoadingState message="Loading articles..." />
            ) : error ? (
              <EmptyState message="Unable to load articles. Please try again later." />
            ) : (
              <div className="space-y-10">
                {visiblePosts.length === 0 ? (
                  <EmptyState message="No articles found for this category. Check back soon!" />
                ) : (
                  visiblePosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="group relative overflow-hidden rounded-3xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/3 relative overflow-hidden">
                          <img
                            src={post.image_url?.[0] || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => (e.target.src = "/placeholder.svg")}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-between relative z-10">
                          <div>
                            {/* Meta */}
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{new Date(post.published_at).toLocaleDateString()}</span>
                              </div>
                              {post.read_time && (
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-primary" />
                                  <span>{post.read_time} min read</span>
                                </div>
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                              {post.body}
                            </p>
                          </div>

                          {/* Tags + CTA */}
                          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                            <div className="flex flex-wrap gap-2">
                              {post.tags?.slice(0, 3).map((tag) => (
                                <span
                                  key={tag.id}
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full flex items-center gap-1"
                                >
                                  <Tag className="h-3 w-3" />
                                  {tag.name}
                                </span>
                              ))}
                              {post.tags?.length > 3 && (
                                <span className="text-xs text-muted-foreground">
                                  +{post.tags.length - 3} more
                                </span>
                              )}
                            </div>

                            <Link
                              to={`/blog/${post.id}`}
                              className="group/btn inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                            >
                              Read More
                              <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>

                      {/* Decorative Orb */}
                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                    </article>
                  ))
                )}

                {/* Show More / Pagination */}
                <div className="flex flex-col items-center gap-6 mt-12">
                  {!showAll && filteredPosts.length > 3 && (
                    <button
                      onClick={() => setShowAll(true)}
                      className="px-8 py-3 bg-primary/10 text-primary font-semibold rounded-full hover:bg-primary/20 transition-all border border-primary/40"
                    >
                      Load More Articles
                    </button>
                  )}

                  {showAll && filteredPosts.length > 3 && (
                    <button
                      onClick={() => setShowAll(false)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ← Show Less
                    </button>
                  )}

                  {/* Pagination */}
                  {!showAll && lastPage > 1 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-full bg-primary/10 text-primary disabled:opacity-50 hover:bg-primary/20 transition-colors"
                      >
                        ←
                      </button>
                      {Array.from({ length: Math.min(lastPage, 5) }, (_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-10 h-10 rounded-full font-medium transition-all ${
                              currentPage === pageNum
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      {lastPage > 5 && (
                        <span className="px-2 text-muted-foreground">...</span>
                      )}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === lastPage}
                        className="p-2 rounded-full bg-primary/10 text-primary disabled:opacity-50 hover:bg-primary/20 transition-colors"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Recent Posts */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="group relative overflow-hidden rounded-3xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl p-6 lg:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <h3 className="relative z-10 text-2xl font-bold text-foreground mb-6">
                  Recent Posts
                </h3>

                <div className="relative z-10 space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group/item"
                    >
                      <div className="flex gap-3 items-start p-3 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <img
                            src={post.image_url?.[0] || "/placeholder.svg"}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-xl ring-2 ring-white/50 shadow-md"
                            onError={(e) => (e.target.src = "/placeholder.svg")}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground line-clamp-2 group-hover/item:text-primary transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.published_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;