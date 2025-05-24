
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Featured Cards
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((card) => (
            <Card key={card.id} className="group hover:shadow-2xl transition-all duration-500 border-green-200 hover:border-green-400 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                  {card.name}
                </CardTitle>
                <CardDescription className="mb-4 text-gray-600">{card.description}</CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    {card.price}
                  </span>
                  <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 transition-all">
                    {card.rarity}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
