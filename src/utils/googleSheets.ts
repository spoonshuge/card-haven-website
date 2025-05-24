
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

// For GitHub Pages deployment, we'll use the Google Sheets CSV export
// This avoids API keys and authentication issues
const SHEETS_CONFIG = {
  // Replace with your Google Sheet ID
  SHEET_ID: 'YOUR_GOOGLE_SHEET_ID_HERE',
  // Replace with your sheet names/gids
  CARDS_GID: '0', // First sheet (Cards inventory)
  BLOG_GID: '123456789', // Second sheet (Blog posts)
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

// Setup instructions for Google Sheets integration
export const SETUP_INSTRUCTIONS = `
Setup Instructions for Google Sheets Integration:

1. Create a Google Sheet with two tabs:
   
   Tab 1 - "Cards" (for inventory):
   Headers: id, name, set, rarity, price, quantity, image, description, condition
   
   Tab 2 - "Blog" (for blog posts):
   Headers: id, title, excerpt, date, slug, image, content

2. Make your Google Sheet public:
   - Click "Share" in the top-right corner
   - Click "Change to anyone with the link can view"
   - Copy the sheet ID from the URL (between /d/ and /edit)

3. Get the GID for each tab:
   - Click on the tab at the bottom
   - Look at the URL for gid=XXXXXX
   - Copy the number after gid=

4. Update the SHEETS_CONFIG in googleSheets.ts:
   - Replace YOUR_GOOGLE_SHEET_ID_HERE with your sheet ID
   - Replace the GID values with your actual tab GIDs

5. Your sheet URLs should look like:
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0

Note: This method uses public Google Sheets without API keys, perfect for GitHub Pages!
`;
