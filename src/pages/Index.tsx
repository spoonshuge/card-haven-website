
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import InventorySection from "@/components/InventorySection";
import BlogSection from "@/components/BlogSection";
import ConnectSection from "@/components/ConnectSection";
import { DataProvider, useData } from "@/contexts/DataContext";

const IndexContent = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const { blogPosts, isLoadingBlog } = useData();

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
            <FeaturedCards />
            <AboutSection />
          </div>
        );
    }
  };

  // For connect section, we want a different layout structure
  if (currentSection === "connect") {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
        <main className="flex-1 container mx-auto px-6 py-8">
          <ConnectSection />
        </main>
        <Footer onSectionChange={setCurrentSection} />
      </div>
    );
  }

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

const Index = () => {
  return (
    <DataProvider>
      <IndexContent />
    </DataProvider>
  );
};

export default Index;
