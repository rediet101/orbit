import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Start from page 1
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
      const res = await fetch(`${import.meta.env.VITE_API_LINK}posts?page=${page}`);
        const data = await res.json();

        // data.data contains posts for this page
        const posts = Array.isArray(data.data) ? data.data : [];

        // Find post by id
        const foundPost = posts.find((p) => String(p.id) === String(id));

        if (foundPost) {
          setPost(foundPost);
        } else if (page < data.last_page) {
          // If not found and there are more pages, fetch next page
          setPage((prev) => prev + 1);
        } else {
          // Not found after checking all pages
          setPost(null);
        }

        setLastPage(data.last_page || 1);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchPosts();
  }, [id, page]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto pb-20 px-4 text-center">
          <img
            src="/src/assets/noPost.png"
            alt="not found"
            className="w-fit h-90 object-cover rounded-xl mb-6 mx-auto"
          />
          <h2 className="text-4xl font-thin text-red-600 mb-6">
            Post not found.
          </h2>
          <Link
            to="/blog"
            className="inline-flex items-center text-white px-5 py-3 rounded-full bg-green-600 hover:bg-green-800 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-screen bg-white py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <img
            src={post.image_url?.[0] || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-120 object-cover rounded-xl mb-6"
          />

          <div className="flex items-center justify-between text-sm text-primary/60 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString()
                  : "No date"}
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-primary/80 mb-3">
            {post.title}
          </h1>

          {post.slug && (
            <h2 className="text-xl text-primary/60 italic mb-6">{post.slug}</h2>
          )}

          <div className="text-lg text-primary/70 font-open-sans leading-relaxed space-y-4">
            {post.body
              ? post.body.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))
              : "No content available."}
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center text-white px-5 py-3 rounded-full bg-primary/60 hover:bg-primary/80 shadow-lg mt-7"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetailPage;
