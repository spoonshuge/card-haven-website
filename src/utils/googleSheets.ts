
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

// Updated with your actual Google Sheet ID
const SHEETS_CONFIG = {
  SHEET_ID: '1UkLgO9E3jSlhXFQGW2xX_HxA6bcoZZc4EjYbPP2bwqQ',
  CARDS_GID: '0', // First sheet (Cards inventory)
  BLOG_GID: '1579373089', // Second sheet (Blog posts)
};

// Convert Google Sheets to CSV URL
const getSheetCSVUrl = (sheetId: string, gid: string) => {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
};

// Parse CSV data to JSON
const parseCSV = (csvText: string): any[] => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
  
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = line.split(',').map(value => value.trim().replace(/"/g, ''));
      const obj: any = {};
      headers.forEach((header, index) => {
        obj[header] = values[index] || '';
      });
      return obj;
    });
};

// Fetch cards from Google Sheets
export const fetchCardsFromSheet = async (): Promise<SheetCard[]> => {
  try {
    const url = getSheetCSVUrl(SHEETS_CONFIG.SHEET_ID, SHEETS_CONFIG.CARDS_GID);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch cards data');
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
    // Return fallback data in case of error
    return [];
  }
};

// Fetch blog posts from Google Sheets
export const fetchBlogFromSheet = async (): Promise<SheetBlogPost[]> => {
  try {
    const url = getSheetCSVUrl(SHEETS_CONFIG.SHEET_ID, SHEETS_CONFIG.BLOG_GID);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog data');
    }
    
    const csvText = await response.text();
    const rawData = parseCSV(csvText);
    
    return rawData.map((row, index) => ({
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
    // Return fallback data in case of error
    return [];
  }
};
