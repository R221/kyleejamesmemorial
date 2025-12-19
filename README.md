# Kylee Grimes James Memorial Website

A beautiful, gentle memorial website built with React, honoring the life of Kylee Grimes James with an adventure and travel theme.

## Features

- **Home Page**: Welcoming landing page with hero section and navigation cards
- **Photos**: Multi-view photo gallery with:
  - Grid layout with lightbox
  - Pinterest-style masonry gallery
  - Auto-playing slideshow
- **Obituary**: Clean, readable obituary with service information
- **Well-Loved**: Interactive tribute page featuring:
  - Word cloud showing frequently mentioned descriptive words
  - Scrolling testimonials from friends and family

## Tech Stack

- React 18
- Vite (build tool)
- React Router v6 (navigation)
- Tailwind CSS (styling)
- Framer Motion (animations)
- react-wordcloud (word cloud visualization)
- react-photo-gallery (photo grid)
- yet-another-react-lightbox (photo viewer)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

The dependencies are already installed. If you need to reinstall:

```bash
npm install --legacy-peer-deps --cache /tmp/npm-cache
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization Guide

### Adding Your Own Content

#### 1. Photos (`src/data/photos.js`)

1. Place your photos in the `/public/photos/` directory
2. Update the `photos` array in `src/data/photos.js`:
   ```javascript
   {
     id: 1,
     src: '/photos/your-image.jpg',
     width: 4,
     height: 3,
     alt: 'Description',
     caption: 'Your caption',
   }
   ```

#### 2. Obituary (`src/data/obituary.js`)

Update all fields in the `obituaryData` object:
- `fullName`, `birthDate`, `passedDate`, `age`
- `biography` (life story)
- `survived` and `predeceased` (family members)
- `service` (memorial service details)
- `memorialDonations` (charity information)
- `favoriteQuote`

#### 3. Comments & Testimonials (`src/data/comments.js`)

**Comments Array**: Replace with actual testimonials from friends and family

**Word Cloud Data**: Update based on word frequency in your comments. Higher `value` = larger in the cloud.

Tips for creating word cloud data:
- Read through all comments
- Count how often positive descriptive words appear
- List the most frequent 20-30 words with their counts
- Or use an online word frequency analyzer

### Styling & Theming

The color palette is defined in `tailwind.config.js`:

- **Earth tones**: Warm, comforting browns and tans
- **Sky**: Soft blues for adventure theme
- **Sage**: Gentle greens for nature theme

To adjust colors, edit the `colors` section in `tailwind.config.js`.

### Fonts

Current fonts:
- **Headings**: Merriweather (serif)
- **Body**: Inter (sans-serif)

These are loaded from Google Fonts in `src/index.css`.

## Deployment

### Static Hosting (Recommended)

This site can be deployed to:

1. **Netlify**
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**
   - Import your Git repository
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **GitHub Pages**
   - Add `base: '/repository-name/'` to `vite.config.js`
   - Run `npm run build`
   - Deploy the `dist` folder

## Project Structure

```
kylee/
├── public/              # Static assets
│   └── photos/         # Add your photos here
├── src/
│   ├── components/     # Reusable components
│   │   ├── Comments/
│   │   ├── Layout/
│   │   ├── PhotoGallery/
│   │   └── WordCloud/
│   ├── data/           # Content data files
│   │   ├── comments.js
│   │   ├── obituary.js
│   │   └── photos.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Photos.jsx
│   │   ├── Obituary.jsx
│   │   └── WellLoved.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Design Philosophy

This memorial website embodies:

- **Kindness & Warmth**: Soft color palette, gentle animations
- **Adventure & Travel**: Mountain silhouettes, compass iconography, travel-themed quotes
- **Remembrance**: Thoughtful typography, meaningful white space
- **Accessibility**: Keyboard navigation, semantic HTML, readable fonts

## Troubleshooting

### Dependencies Installation Issues

If you encounter permission errors with npm:

```bash
npm install --legacy-peer-deps --cache /tmp/npm-cache
```

### Port Already in Use

Vite will automatically try another port if 5173 is occupied.

### Word Cloud Not Displaying

Ensure `react-wordcloud` is installed with `--legacy-peer-deps` flag.

## Support

For questions or issues with the website, please consult the [Vite documentation](https://vitejs.dev/) or [React documentation](https://react.dev/).

---

*Created with love and care to honor the memory of Kylee Grimes James*
