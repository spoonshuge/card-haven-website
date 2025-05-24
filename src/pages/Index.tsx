
import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import InventorySection from "@/components/InventorySection";
import BlogSection from "@/components/BlogSection";
import ConnectSection from "@/components/ConnectSection";
import { mockCards } from "@/data/mockData";
import { fetchBlogFromSheet, type SheetBlogPost } from "@/utils/googleSheets";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [blogPosts, setBlogPosts] = useState<SheetBlogPost[]>([]);
  const [isLoadingBlog, setIsLoadingBlog] = useState(false);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setIsLoadingBlog(true);
      try {
        const posts = await fetchBlogFromSheet();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setIsLoadingBlog(false);
      }
    };

    loadBlogPosts();
  }, []);

  const renderContent = () => {
    switch (currentSection) {
      case "inventory":
        return <InventorySection />;
      case "blog":
        return <BlogSection posts={blogPosts} isLoading={isLoadingBlog} />;
      case "connect":
        return <ConnectSection />;
      default:
        return (
          <div className="space-y-32">
            <Hero onBrowseClick={() => setCurrentSection("inventory")} />
            <FeaturedCards cards={mockCards} />
            <AboutSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
      <Footer onSectionChange={setCurrentSection} />
    </div>
  );
};

export default Index;
