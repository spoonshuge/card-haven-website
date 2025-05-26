
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardDisplay from './CardDisplay';
import { fetchCardsFromSheet, SheetCard } from '@/utils/googleSheets';
import { Search, Filter, ExternalLink } from "lucide-react";

const FeaturedCards = () => {
  const [cards, setCards] = useState<SheetCard[]>([]);
  const [loading, setLoading] = useState(true);

  const features = [{
    icon: Search,
    title: "Crazy Ideas",
    description: "",
    color: "green"
  }, {
    icon: Filter,
    title: "Rare Finds",
    description: "",
    color: "blue"
  }, {
    icon: ExternalLink,
    title: "Arrow Box",
    description: "",
    color: "orange"
  }];

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
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-xl border border-green-200/50 shadow-lg relative overflow-hidden">
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
        <div className="bg-white/80 backdrop-blur-sm p-12 rounded-xl border border-green-200/50 shadow-lg relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-orange-500 to-blue-600 bg-clip-text text-transparent relative z-10">
            Featured Goods
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center mb-8 relative z-10">
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

          <div className="grid md:grid-cols-3 gap-6 mt-8 relative z-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color === 'green' ? 'from-green-400 to-green-600' : feature.color === 'blue' ? 'from-blue-400 to-blue-600' : 'from-orange-400 to-orange-600'} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
