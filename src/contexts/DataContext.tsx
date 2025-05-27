
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchCardsFromSheet, fetchBlogFromSheet, SheetCard, SheetBlogPost } from '@/utils/googleSheets';

interface DataContextType {
  cards: SheetCard[];
  blogPosts: SheetBlogPost[];
  isLoadingCards: boolean;
  isLoadingBlog: boolean;
  error: string | null;
  refetchCards: () => Promise<void>;
  refetchBlog: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [cards, setCards] = useState<SheetCard[]>([]);
  const [blogPosts, setBlogPosts] = useState<SheetBlogPost[]>([]);
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetchCards = async () => {
    setIsLoadingCards(true);
    setError(null);
    try {
      const fetchedCards = await fetchCardsFromSheet();
      setCards(fetchedCards);
    } catch (error) {
      console.error('Failed to load cards:', error);
      setError('Failed to load cards. Please try again later.');
    } finally {
      setIsLoadingCards(false);
    }
  };

  const refetchBlog = async () => {
    setIsLoadingBlog(true);
    setError(null);
    try {
      const fetchedPosts = await fetchBlogFromSheet();
      setBlogPosts(fetchedPosts);
    } catch (error) {
      console.error('Failed to load blog posts:', error);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setIsLoadingBlog(false);
    }
  };

  useEffect(() => {
    refetchCards();
    refetchBlog();
  }, []);

  const value: DataContextType = {
    cards,
    blogPosts,
    isLoadingCards,
    isLoadingBlog,
    error,
    refetchCards,
    refetchBlog,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
