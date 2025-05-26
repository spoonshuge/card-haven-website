
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardDisplay from './CardDisplay';
import { fetchCardsFromSheet, SheetCard } from '@/utils/googleSheets';

const FeaturedCards = () => {
  const [cards, setCards] = useState<SheetCard[]>([]);
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

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl border border-green-200/50 shadow-xl">
            <div className="flex justify-center items-center py-8">
              <div className="text-lg text-gray-500">Loading featured goods...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl border border-green-200/50 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
            Featured Goods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
            {cards.slice(0, 3).map((card) => (
              <Card 
                key={card.id} 
                className="hover:shadow-xl transition-all duration-300 border-green-200/50 hover:border-green-400 bg-white/85 backdrop-blur-sm w-full max-w-sm"
              >
                <CardHeader className="p-4">
                  <CardDisplay card={card} />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
