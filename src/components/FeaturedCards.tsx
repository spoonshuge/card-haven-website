
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

interface FeaturedCardsProps {
  cards: CollectibleCard[];
}

const FeaturedCards = ({ cards }: FeaturedCardsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-2xl border border-green-200/50 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Featured Cards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.slice(0, 3).map((card) => (
              <Card 
                key={card.id} 
                className="hover:shadow-xl transition-all duration-300 border-green-200/50 hover:border-green-400 bg-white/85 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  <div className="w-full" style={{ aspectRatio: '2/3' }}>
                    <img 
                      src={card.image} 
                      alt={card.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400';
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{card.name}</h3>
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-green-600">{card.price}</div>
                    <div className="text-sm text-gray-600">Condition: {card.condition}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
