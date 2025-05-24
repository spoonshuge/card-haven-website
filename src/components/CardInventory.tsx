
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { fetchCardsFromSheet, SheetCard } from '@/utils/googleSheets';

interface CardInventoryProps {
  cards?: SheetCard[];
}

const CardInventory = ({ cards: propCards }: CardInventoryProps) => {
  const [cards, setCards] = useState<SheetCard[]>(propCards || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [loading, setLoading] = useState(!propCards);

  useEffect(() => {
    if (!propCards) {
      const loadCards = async () => {
        setLoading(true);
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
    }
  }, [propCards]);

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.set.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === "all" || card.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  const rarities = ["all", ...Array.from(new Set(cards.map(card => card.rarity)))];

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-xl text-gray-500">Loading inventory...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedRarity}
          onChange={(e) => setSelectedRarity(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {rarities.map(rarity => (
            <option key={rarity} value={rarity}>
              {rarity === "all" ? "All Rarities" : rarity}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-600">
        Showing {filteredCards.length} of {cards.length} cards
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <Card key={card.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <img 
                src={card.image} 
                alt={card.name}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => {
                  // Fallback image if card image fails to load
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400';
                }}
              />
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <Badge variant="secondary">{card.rarity}</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{card.set}</p>
              <CardDescription className="mb-4">{card.description}</CardDescription>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">{card.price}</span>
                <Badge variant={card.quantity > 0 ? "default" : "destructive"}>
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
          <p className="text-gray-400 mt-2">Try adjusting your search or filter settings.</p>
        </div>
      )}
    </div>
  );
};

export default CardInventory;
