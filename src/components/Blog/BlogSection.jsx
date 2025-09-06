import React, { useState } from "react";
import { blogPosts, tabs } from "@/data/mockData";
import HorizontalTabs from "./HorizontalTabs";
import BlogGrid from "./BlogGrid";

function BlogSection() {
  const [selectedTab, setSelectedTab] = useState("all");
  const filteredBlogPosts = blogPosts.filter((item) => {
    return selectedTab === "all" || item.category === selectedTab;
  });
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Horizontal Tabs */}
        <HorizontalTabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {/* Blog Grid */}
        <BlogGrid
          filteredItems={filteredBlogPosts}
          selectedTab={selectedTab}
          tabs={tabs}
        />
      </div>
    </section>
  );
}

export default BlogSection;
