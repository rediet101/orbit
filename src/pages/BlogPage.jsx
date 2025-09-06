import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import BlogSection from "@/components/Blog/BlogSection";
import Newsletter from "@/components/Blog/Newsletter";
import Hero from "@/components/Blog/Hero";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
