
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedRarity: string;
  onRarityChange: (value: string) => void;
  rarities: string[];
  totalCards: number;
  filteredCount: number;
}

const FilterControls = ({
  searchTerm,
  onSearchChange,
  selectedRarity,
  onRarityChange,
  rarities,
  totalCards,
  filteredCount,
}: FilterControlsProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-green-200/50 shadow-lg sticky top-20 z-40">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-green-200 focus:border-green-400 bg-white/80"
          />
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedRarity}
            onChange={(e) => onRarityChange(e.target.value)}
            className="px-4 py-2 border border-green-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80"
          >
            {rarities.map(rarity => (
              <option key={rarity} value={rarity}>
                {rarity === "all" ? "All Rarities" : rarity}
              </option>
            ))}
          </select>
          <div className="text-sm text-gray-600 whitespace-nowrap">
            {filteredCount} of {totalCards} cards
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
