
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import InventorySection from "@/components/InventorySection";
import BlogSection from "@/components/BlogSection";
import ConnectSection from "@/components/ConnectSection";
import { mockCards, mockBlogPosts } from "@/data/mockData";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const renderHome = () => (
    <div className="space-y-32">
      <Hero onBrowseClick={() => setCurrentSection("inventory")} />
      <FeaturedCards cards={mockCards} />
      <AboutSection />
    </div>
  );

  const renderContent = () => {
    switch (currentSection) {
      case "inventory":
        return <InventorySection cards={mockCards} />;
      case "blog":
        return <BlogSection posts={mockBlogPosts} />;
      case "connect":
        return <ConnectSection />;
      default:
        return renderHome();
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
