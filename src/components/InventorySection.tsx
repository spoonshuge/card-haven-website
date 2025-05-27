
import { Card, CardHeader } from "@/components/ui/card";
import CardDisplay from './CardDisplay';
import FilterControls from './FilterControls';
import LoadingSkeleton from './LoadingSkeleton';
import { useData } from '@/contexts/DataContext';
import { useCardFilters } from '@/hooks/useCardFilters';

const InventorySection = () => {
  const { cards, isLoadingCards, error } = useData();
  const {
    searchTerm,
    setSearchTerm,
    selectedRarity,
    setSelectedRarity,
    filteredCards,
    rarities,
  } = useCardFilters(cards);

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8 bg-red-50/90 backdrop-blur-sm rounded-xl border border-red-200/50">
          <p className="text-lg text-red-700">Error loading inventory</p>
          <p className="text-red-500 mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoadingCards) {
    return (
      <div className="space-y-6">
        <div className="flex justify-center items-center py-8">
          <div className="text-lg text-gray-500">Loading inventory...</div>
        </div>
        <LoadingSkeleton count={12} type="card" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <FilterControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedRarity={selectedRarity}
        onRarityChange={setSelectedRarity}
        rarities={rarities}
        totalCards={cards.length}
        filteredCount={filteredCards.length}
      />

      {/* Direct message box */}
      <div className="bg-green-50/90 backdrop-blur-sm p-3 rounded-lg border border-green-200/50 shadow-sm">
        <p className="text-green-800 text-sm text-center font-medium">
          Direct is always cheapest, DM me.
        </p>
        <p className="text-green-700 text-xs text-center mt-1">
          Use the Instagram button to copy card details and make an offer!
        </p>
      </div>

      {filteredCards.length === 0 ? (
        <div className="text-center py-8 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50">
          <p className="text-lg text-gray-700">No cards found matching your criteria.</p>
          <p className="text-gray-500 mt-1">Try adjusting your search or filter settings.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredCards.map((card) => (
            <Card 
              key={card.id} 
              className="hover:shadow-xl transition-all duration-300 border-green-200/50 hover:border-green-400 bg-white/85 backdrop-blur-sm transform hover:-translate-y-2"
            >
              <CardHeader className="p-2">
                <CardDisplay card={card} />
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default InventorySection;
