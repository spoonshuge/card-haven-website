
# Elite Card Collectibles - Static Website

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
│   ├── CardInventory.tsx     # Card catalog with search/filter
│   ├── BlogSection.tsx       # Blog posts display
│   └── ContactLinks.tsx      # Social links and contact info
├── utils/
│   └── googleSheets.ts       # Google Sheets integration
├── pages/
│   ├── Index.tsx            # Main landing page
│   └── NotFound.tsx         # 404 page
└── App.tsx                  # Main app component
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

### 2. Customize Content

1. **Update contact information** in `src/pages/Index.tsx`:
   ```typescript
   // Update social media handles, email, etc.
   email: "your-email@example.com"
   instagram: "your_instagram_handle"
   ```

2. **Replace placeholder content**:
   - Business name and description
   - About section content
   - Contact details and business hours

3. **Add your branding**:
   - Update colors in `tailwind.config.ts` if desired
   - Replace placeholder images with your own

### 3. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 4. Deploy to GitHub Pages

#### Option A: GitHub Actions (Recommended)

1. **Create workflow file** `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3
         
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
           
       - name: Install dependencies
         run: npm ci
         
       - name: Build
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

#### Option B: Manual Build

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload dist folder** to GitHub Pages or your hosting provider

## 📱 Example Google Sheets Format

### Cards Sheet
| id | name | set | rarity | price | quantity | image | description | condition |
|----|------|-----|--------|-------|----------|-------|-------------|-----------|
| 1 | Charizard | Base Set | Holo Rare | $350.00 | 2 | https://... | Original Charizard | Near Mint |
| 2 | Pikachu | Base Set | Common | $15.00 | 5 | https://... | Classic Pikachu | Excellent |

### Blog Sheet
| id | title | excerpt | date | slug | image | content |
|----|-------|---------|------|------|-------|---------|
| 1 | Card Values 2024 | Market trends... | 2024-01-15 | card-values-2024 | https://... | Full article content... |

## 🎨 Customization

### Colors & Styling
- Edit `tailwind.config.ts` for custom colors
- Modify `src/index.css` for global styles
- Update component styles in individual files

### Adding Features
- **Newsletter**: Add email collection form
- **Search**: Enhance search with fuzzy matching
- **Categories**: Add card categories/types
- **Wishlist**: Let users save favorite cards

## 🔧 Troubleshooting

### Google Sheets Not Loading
1. Verify sheet is public
2. Check Sheet ID and GIDs are correct
3. Ensure CSV export URLs work in browser

### Images Not Displaying
1. Use full URLs (https://) for images
2. Ensure images are publicly accessible
3. Add fallback images for broken links

### Build Errors
1. Check all imports are correct
2. Verify TypeScript types match data
3. Ensure all dependencies are installed

## 📈 SEO & Performance

- **Meta tags**: Configured for search engines
- **Semantic HTML**: Proper heading structure
- **Image optimization**: Responsive images with fallbacks
- **Fast loading**: Minimal dependencies, optimized builds

## 🚀 Going Live

1. **Domain setup**: Point custom domain to GitHub Pages
2. **Analytics**: Add Google Analytics if desired
3. **Social media**: Update OpenGraph tags
4. **Monitoring**: Set up error tracking

## 📞 Support

For questions about this template or customization help:
- Create an issue in the repository
- Check the documentation
- Review example implementations

---

Built with React, TypeScript, Tailwind CSS, and ❤️ for the collecting community.
