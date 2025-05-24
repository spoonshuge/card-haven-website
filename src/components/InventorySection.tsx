
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { fetchCardsFromSheet, SheetCard } from '@/utils/googleSheets';

const InventorySection = () => {
  const [cards, setCards] = useState<SheetCard[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const fetchedCards = await fetchCardsFromSheet();
        setCards(fetchedCards);
      } catch (error) {
        console.error('Failed to load cards:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, []);

  const { filteredCards, rarities } = useMemo(() => {
    const filtered = cards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           card.set.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRarity = selectedRarity === "all" || card.rarity === selectedRarity;
      return matchesSearch && matchesRarity;
    });

    const uniqueRarities = ["all", ...Array.from(new Set(cards.map(card => card.rarity)))];

    return { filteredCards: filtered, rarities: uniqueRarities };
  }, [cards, searchTerm, selectedRarity]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-center items-center py-8">
          <div className="text-lg text-gray-500">Loading inventory...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Floating search and filter controls */}
      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-green-200/50 shadow-lg sticky top-20 z-40">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-green-200 focus:border-green-400 bg-white/80"
            />
          </div>
          <div className="flex items-center gap-4">
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="px-4 py-2 border border-green-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80"
            >
              {rarities.map(rarity => (
                <option key={rarity} value={rarity}>
                  {rarity === "all" ? "All Rarities" : rarity}
                </option>
              ))}
            </select>
            <div className="text-sm text-gray-600 whitespace-nowrap">
              {filteredCards.length} of {cards.length} cards
            </div>
          </div>
        </div>
      </div>

      {filteredCards.length === 0 ? (
        <div className="text-center py-8 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50">
          <p className="text-lg text-gray-700">No cards found matching your criteria.</p>
          <p className="text-gray-500 mt-1">Try adjusting your search or filter settings.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <Card 
              key={card.id} 
              className="hover:shadow-xl transition-all duration-300 border-green-200/50 hover:border-green-400 bg-white/85 backdrop-blur-sm transform hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400';
                  }}
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {card.rarity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{card.set}</p>
                <CardDescription className="mb-3">{card.description}</CardDescription>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-green-600">{card.price}</span>
                  <Badge 
                    variant={card.quantity > 0 ? "default" : "destructive"} 
                    className={card.quantity > 0 ? "bg-green-100 text-green-800" : ""}
                  >
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
      )}
    </div>
  );
};

export default InventorySection;
