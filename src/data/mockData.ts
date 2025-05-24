
export interface CollectibleCard {
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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}

export const mockCards: CollectibleCard[] = [
  {
    id: "1",
    name: "Charizard Base Set",
    set: "Base Set",
    rarity: "Holo Rare",
    price: "$350.00",
    quantity: 2,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Near Mint condition Charizard from the original Base Set",
    condition: "Near Mint"
  },
  {
    id: "2",
    name: "Blue-Eyes White Dragon",
    set: "Legend of Blue Eyes",
    rarity: "Ultra Rare",
    price: "$125.00",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "First edition Blue-Eyes White Dragon in excellent condition",
    condition: "Excellent"
  },
  {
    id: "3",
    name: "Black Lotus",
    set: "Alpha",
    rarity: "Rare",
    price: "$8,500.00",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Alpha Black Lotus - the holy grail of Magic cards",
    condition: "Light Play"
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Rise of Pokemon Card Values in 2024",
    excerpt: "Exploring why certain Pokemon cards have skyrocketed in value and what to look for when collecting.",
    date: "2024-01-15",
    slug: "pokemon-card-values-2024",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
  },
  {
    id: "2",
    title: "Grading Your Cards: When Is It Worth It?",
    excerpt: "A comprehensive guide to professional card grading services and when you should consider using them.",
    date: "2024-01-10",
    slug: "card-grading-guide",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600"
  },
  {
    id: "3",
    title: "Building Your First Collection on a Budget",
    excerpt: "Tips and strategies for new collectors who want to start building without breaking the bank.",
    date: "2024-01-05",
    slug: "budget-collecting-tips",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
  }
];
