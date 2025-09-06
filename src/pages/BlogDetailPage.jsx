import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/mockData";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto pb-20 px-4 text-center">
          <div className="flex justify-center">
            <img
              src="/src/assets/noPost.png"
              alt="not found"
              className="w-fit h-90 object-cover rounded-xl mb-6"
            />
          </div>
          <h2 className="text-5xl font-thin text-red-600 mb-7">
            Post not found.
          </h2>
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-white transition-colors font-montserrat px-5 py-3 rounded-full bg-green-600 hover:bg-green-800 shadow-lg"
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
            src={post.image}
            alt={post.title}
            className="w-full h-120 object-cover rounded-xl mb-6"
          />
          <div className="flex items-center justify-between text-sm text-primary/60 mb-4">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-primary/80 mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-primary/70 font-open-sans leading-relaxed">
            {/* This can be real article content if available */}
            {post.excerpt} <br />
            <br />
            (This is a sample detail view. You can extend it with a `content`
            field in the post object.)
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-white transition-colors font-montserrat px-5 py-3 rounded-full bg-primary/60 hover:bg-primary/80 shadow-lg mt-7"
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
