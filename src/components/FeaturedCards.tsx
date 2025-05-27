
import { Card, CardHeader } from "@/components/ui/card";
import CardDisplay from './CardDisplay';
import LoadingSkeleton from './LoadingSkeleton';
import { useData } from '@/contexts/DataContext';

const FeaturedCards = () => {
  const { cards, isLoadingCards, error } = useData();

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-xl border border-red-200/50 shadow-lg">
            <div className="text-center py-8">
              <p className="text-lg text-red-700">Error loading featured cards</p>
              <p className="text-red-500 mt-1">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isLoadingCards) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-xl border border-green-200/50 shadow-lg relative overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
              Featured Goods
            </h2>
            <LoadingSkeleton type="featured" />
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center relative z-10">
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
