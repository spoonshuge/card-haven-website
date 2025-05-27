
// Google Sheets API integration for GitHub Pages
// This utility handles fetching data from Google Sheets for static deployment

export interface SheetCard {
  id: string;
  title: string;
  frontImage: string;
  backImage: string;
  price: string;
  set: string;
  subset: string;
  rarity: string;
  quantity: number;
  description: string;
  condition: string;
  player: string;
  sport: string;
  manufacturer: string;
  season: string;
  features: string;
  grade: string;
  league: string;
  grader: string;
  team: string;
  auto: string;
  cardNumber: string;
  certNumber: string;
  type: string;
  printRun: string;
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

const DEFAULT_PLACEHOLDER = '/lovable-uploads/da796c7a-5329-4d08-ae52-f526dcbb271f.png';

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
      title: row.Title || row.title || '',
      frontImage: row['Front Image'] || row.frontImage || DEFAULT_PLACEHOLDER,
      backImage: row['Back Image'] || row.backImage || DEFAULT_PLACEHOLDER,
      price: row.Price || row.price || '$0.00',
      set: row.Set || row.set || '',
      subset: row.Subset || row.subset || '',
      rarity: row.rarity || row.Rarity || '',
      quantity: parseInt(row.quantity || row.Quantity) || 0,
      description: row.description || row.Description || '',
      condition: row.Condition || row.condition || 'Unknown',
      player: row.Player || row.player || '',
      sport: row.Sport || row.sport || '',
      manufacturer: row.Manufacturer || row.manufacturer || '',
      season: row.Season || row.season || '',
      features: row.Features || row.features || '',
      grade: row.Grade || row.grade || '',
      league: row.League || row.league || '',
      grader: row.Grader || row.grader || '',
      team: row.Team || row.team || '',
      auto: row.Auto || row.auto || '',
      cardNumber: row['Card Number'] || row.cardNumber || '',
      certNumber: row['Cert Number'] || row.certNumber || '',
      type: row.Type || row.type || '',
      printRun: row['Print Run'] || row.printRun || ''
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
      image: row.image || DEFAULT_PLACEHOLDER,
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
      image: DEFAULT_PLACEHOLDER,
      content: 'Blog posts will appear here once the Google Sheets connection is properly configured.'
    }];
  }
};
