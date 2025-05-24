import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ExternalLink, Instagram, Twitter, Mail, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface CollectibleCard {
  id: string;
  name: string;
  set: string;
  rarity: string;
  price: string;
  quantity: number;
  image: string;
  description: string;
  condition: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}

// Mock data for demonstration - replace with Google Sheets API
const mockCards: CollectibleCard[] = [
  {
    id: "1",
    name: "Charizard Base Set",
    set: "Base Set",
    rarity: "Holo Rare",
    price: "$350.00",
    quantity: 2,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Near Mint condition Charizard from the original Base Set",
    condition: "Near Mint"
  },
  {
    id: "2",
    name: "Blue-Eyes White Dragon",
    set: "Legend of Blue Eyes",
    rarity: "Ultra Rare",
    price: "$125.00",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "First edition Blue-Eyes White Dragon in excellent condition",
    condition: "Excellent"
  },
  {
    id: "3",
    name: "Black Lotus",
    set: "Alpha",
    rarity: "Rare",
    price: "$8,500.00",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Alpha Black Lotus - the holy grail of Magic cards",
    condition: "Light Play"
  }
];

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Rise of Pokemon Card Values in 2024",
    excerpt: "Exploring why certain Pokemon cards have skyrocketed in value and what to look for when collecting.",
    date: "2024-01-15",
    slug: "pokemon-card-values-2024",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
  },
  {
    id: "2",
    title: "Grading Your Cards: When Is It Worth It?",
    excerpt: "A comprehensive guide to professional card grading services and when you should consider using them.",
    date: "2024-01-10",
    slug: "card-grading-guide",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600"
  },
  {
    id: "3",
    title: "Building Your First Collection on a Budget",
    excerpt: "Tips and strategies for new collectors who want to start building without breaking the bank.",
    date: "2024-01-05",
    slug: "budget-collecting-tips",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [currentSection, setCurrentSection] = useState("home");

  const filteredCards = mockCards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.set.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === "all" || card.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  const rarities = ["all", ...Array.from(new Set(mockCards.map(card => card.rarity)))];

  const renderHome = () => (
    <div className="space-y-16">
      <Hero onBrowseClick={() => setCurrentSection("inventory")} />
      <FeaturedCards cards={mockCards} />
      <AboutSection />
    </div>
  );

  const renderInventory = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Card Inventory</h1>
        <p className="text-xl text-gray-600">Browse our complete collection of trading cards</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-green-200 focus:border-green-400"
          />
        </div>
        <select
          value={selectedRarity}
          onChange={(e) => setSelectedRarity(e.target.value)}
          className="px-4 py-2 border border-green-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {rarities.map(rarity => (
            <option key={rarity} value={rarity}>
              {rarity === "all" ? "All Rarities" : rarity}
            </option>
          ))}
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <Card key={card.id} className="hover:shadow-xl transition-all duration-300 border-green-200 hover:border-green-400">
            <CardHeader className="p-0">
              <img 
                src={card.image} 
                alt={card.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">{card.rarity}</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{card.set}</p>
              <CardDescription className="mb-4">{card.description}</CardDescription>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">{card.price}</span>
                <Badge variant={card.quantity > 0 ? "default" : "destructive"} className={card.quantity > 0 ? "bg-green-100 text-green-800" : ""}>
                  {card.quantity > 0 ? `${card.quantity} available` : "Sold Out"}
                </Badge>
              </div>
              <div className="text-sm text-gray-500">
                Condition: {card.condition}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No cards found matching your criteria.</p>
        </div>
      )}
    </div>
  );

  const renderBlog = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Collecting Blog</h1>
        <p className="text-xl text-gray-600">Tips, news, and insights from the trading card world</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-xl transition-all duration-300 border-green-200 hover:border-green-400">
            <CardHeader className="p-0">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <CardDescription className="mb-4">{post.excerpt}</CardDescription>
              <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderConnect = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Connect With Me</h1>
        <p className="text-xl text-gray-600">Get in touch to discuss your collecting needs</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="p-8 border-green-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to add to your collection?</h2>
            <p className="text-gray-600 mb-6">
              Contact me directly to inquire about specific cards, discuss pricing, or learn more about upcoming inventory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:cards@example.com"
              className="flex items-center p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <Mail className="w-8 h-8 text-green-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">cards@example.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/elitecardcollectibles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <Instagram className="w-8 h-8 text-pink-600 mr-4" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-gray-600">@elitecardcollectibles</p>
              </div>
            </a>

            <a
              href="https://twitter.com/elitecards"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <Twitter className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="font-semibold">Twitter</h3>
                <p className="text-gray-600">@elitecards</p>
              </div>
            </a>

            <a
              href="https://github.com/elitecards"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
            >
              <Github className="w-8 h-8 text-gray-700 mr-4" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-600">@elitecards</p>
              </div>
            </a>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Business Hours</h3>
            <p className="text-green-800">Monday - Friday: 9am - 6pm EST</p>
            <p className="text-green-800">Saturday: 10am - 4pm EST</p>
            <p className="text-green-800">Sunday: Closed</p>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentSection) {
      case "inventory":
        return renderInventory();
      case "blog":
        return renderBlog();
      case "connect":
        return renderConnect();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
      <Footer onSectionChange={setCurrentSection} />
    </div>
  );
};

export default Index;
