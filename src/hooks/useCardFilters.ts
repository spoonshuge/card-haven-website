
import { useState, useMemo } from 'react';
import { SheetCard } from '@/utils/googleSheets';

export const useCardFilters = (cards: SheetCard[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("all");

  const { filteredCards, rarities } = useMemo(() => {
    const filtered = cards.filter(card => {
      const matchesSearch = 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.set.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.player.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRarity = selectedRarity === "all" || card.rarity === selectedRarity;
      return matchesSearch && matchesRarity;
    });

    const uniqueRarities = ["all", ...Array.from(new Set(cards.map(card => card.rarity).filter(Boolean)))];

    return { filteredCards: filtered, rarities: uniqueRarities };
  }, [cards, searchTerm, selectedRarity]);

  return {
    searchTerm,
    setSearchTerm,
    selectedRarity,
    setSelectedRarity,
    filteredCards,
    rarities,
  };
};
