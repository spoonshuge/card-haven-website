
# spoonLabs - Static Website

A modern, responsive static website for a collectible card business, optimized for GitHub Pages deployment.

## 🚀 Features

- **Live Inventory**: Pulls card data from Google Sheets for real-time updates
- **Blog System**: Markdown-based blog posts with dynamic loading
- **Contact Integration**: Social media links and contact information
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and minimal dependencies
- **Search & Filter**: Easy card discovery with advanced filtering

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx                # Main hero section
│   ├── Navigation.tsx          # Top navigation bar
│   ├── FeaturedCards.tsx       # Featured cards display
│   ├── AboutSection.tsx        # About section content
│   ├── InventorySection.tsx    # Full inventory view
│   ├── BlogSection.tsx         # Blog posts display
│   ├── ConnectSection.tsx      # Contact and social links
│   └── Footer.tsx              # Site footer
├── data/
│   └── mockData.ts             # Sample data structure
├── utils/
│   └── googleSheets.ts         # Google Sheets integration
├── pages/
│   ├── Index.tsx              # Main app component
│   └── NotFound.tsx           # 404 page
└── App.tsx                    # Root app component
```

## 🛠 Setup Instructions

### 1. Google Sheets Integration

1. **Create a Google Sheet** with two tabs:
   
   **Tab 1 - "Cards" (Inventory)**
   ```
   Headers: id, name, set, rarity, price, quantity, image, description, condition
   ```
   
   **Tab 2 - "Blog" (Blog Posts)**
   ```
   Headers: id, title, excerpt, date, slug, image, content
   ```

2. **Make your sheet public**:
   - Click "Share" → "Change to anyone with the link can view"
   - Copy the Sheet ID from the URL (between `/d/` and `/edit`)

3. **Get GID for each tab**:
   - Click on each tab and note the `gid=XXXXXX` in the URL

4. **Update configuration** in `src/utils/googleSheets.ts`:
   ```typescript
   const SHEETS_CONFIG = {
     SHEET_ID: 'YOUR_GOOGLE_SHEET_ID_HERE',
     CARDS_GID: '0',           // Your cards tab GID
     BLOG_GID: '123456789',    // Your blog tab GID
   };
   ```

### 2. Sample Data for Google Sheets

#### Cards Tab Data:
```csv
1,Charizard VMAX,Champion's Path,Secret Rare,$85.00,3,https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400,Rainbow rare Charizard VMAX,Near Mint
2,Pikachu VMAX,Vivid Voltage,Ultra Rare,$45.00,5,https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400,Fat Pikachu VMAX,Mint
3,Umbreon VMAX Alt Art,Evolving Skies,Alternate Art,$120.00,2,https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400,Alternate art Umbreon VMAX,Near Mint
```

#### Blog Tab Data:
```csv
1,Pokemon Market Trends 2024,Analysis of the hottest Pokemon cards and their market performance,2024-01-20,pokemon-trends-2024,https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600,The Pokemon TCG market has seen incredible growth...
2,Grading Your Cards Guide,Complete guide to PSA and BGS grading services,2024-01-15,card-grading-guide,https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600,Card grading can significantly increase value...
```

### 3. Customize Content

1. **Update branding** throughout the codebase:
   - Business name is set to "spoonLabs"
   - Update contact information in components
   - Modify color schemes and styling as needed

2. **Replace placeholder content**:
   - Business description and about section
   - Contact details and business hours
   - Social media links

### 4. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 5. Deploy to GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the main branch.

#### Setup GitHub Pages:
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)

## 🎨 Current Design Features

- **Dark Navigation**: Modern dark-colored navigation bar
- **Bright Hero**: Enhanced hero section with improved brightness
- **Responsive Grid**: Cards and blog posts display in responsive grids
- **Hover Effects**: Smooth transitions and hover animations
- **Modern UI**: Clean design with shadcn/ui components

## 📱 Component Architecture

The project is built with a modular component structure:

- **Navigation**: Handles section switching and branding
- **Hero**: Main landing section with call-to-action
- **FeaturedCards**: Showcase selected inventory items
- **InventorySection**: Full catalog with search and filters
- **BlogSection**: Article listings and previews
- **ConnectSection**: Contact information and social links

## 🔧 Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Vite** for build tooling
- **GitHub Pages** for hosting

## 🚀 Going Live

1. **Connect to GitHub**: Use Lovable's GitHub integration
2. **Configure domain**: Set up custom domain in GitHub Pages settings
3. **Update Google Sheets**: Replace sample data with real inventory
4. **SEO optimization**: Update meta tags and descriptions

---

Built with React, TypeScript, Tailwind CSS, and ❤️ for the collecting community.
