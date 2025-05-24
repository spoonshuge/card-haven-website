
// Google Sheets API integration for GitHub Pages
// This utility handles fetching data from Google Sheets for static deployment

export interface SheetCard {
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

export interface SheetBlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  content?: string;
}

const SHEETS_CONFIG = {
  SHEET_ID: '1UkLgO9E3jSlhXFQGW2xX_HxA6bcoZZc4EjYbPP2bwqQ',
  CARDS_GID: '0',
  BLOG_GID: '596757522',
} as const;

const getSheetCSVUrl = (sheetId: string, gid: string): string => {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
};

const parseCSV = (csvText: string): Record<string, string>[] => {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length === 0) return [];
  
  const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
  
  return lines.slice(1).map(line => {
    const values = line.split(',').map(value => value.trim().replace(/"/g, ''));
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    return obj;
  });
};

export const fetchCardsFromSheet = async (): Promise<SheetCard[]> => {
  try {
    const url = getSheetCSVUrl(SHEETS_CONFIG.SHEET_ID, SHEETS_CONFIG.CARDS_GID);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch cards data`);
    }
    
    const csvText = await response.text();
    const rawData = parseCSV(csvText);
    
    return rawData.map((row, index) => ({
      id: row.id || `card-${index}`,
      name: row.name || '',
      set: row.set || '',
      rarity: row.rarity || '',
      price: row.price || '$0.00',
      quantity: parseInt(row.quantity) || 0,
      image: row.image || 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      description: row.description || '',
      condition: row.condition || 'Unknown'
    }));
  } catch (error) {
    console.error('Error fetching cards from Google Sheets:', error);
    return [];
  }
};

export const fetchBlogFromSheet = async (): Promise<SheetBlogPost[]> => {
  try {
    const url = getSheetCSVUrl(SHEETS_CONFIG.SHEET_ID, SHEETS_CONFIG.BLOG_GID);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch blog data`);
    }
    
    const csvText = await response.text();
    const rawData = parseCSV(csvText);
    
    const blogData = rawData.filter(row => row.title?.trim());
    
    return blogData.map((row, index) => ({
      id: row.id || `post-${index}`,
      title: row.title || '',
      excerpt: row.excerpt || '',
      date: row.date || new Date().toISOString().split('T')[0],
      slug: row.slug || `post-${index}`,
      image: row.image || 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
      content: row.content || ''
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Google Sheets:', error);
    return [{
      id: 'fallback-1',
      title: 'Welcome to spoonLabs Broll',
      excerpt: 'Check back soon for updates from the trading card world.',
      date: '2024-01-01',
      slug: 'welcome',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
      content: 'Blog posts will appear here once the Google Sheets connection is properly configured.'
    }];
  }
};
