# Fynecta Landing

A Next.js application that converts Webflow HTML exports into a modern, performant web application. This project takes static HTML exports from Webflow and transforms them into a Next.js site with proper routing, asset optimization, and client-side navigation support.

## Overview

This project is built on the **Xentro** Webflow ecommerce template and converts it into a Next.js application. It preserves all Webflow animations, interactions, and styling while adding the benefits of Next.js routing, performance optimization, and modern development workflows.

## Features

- 🔄 **Webflow HTML Conversion**: Automatically loads and processes Webflow HTML exports
- 🎨 **Asset Normalization**: Converts CDN URLs to local asset paths for better performance
- 🚀 **Next.js App Router**: Uses Next.js 16 App Router for modern routing
- 🎭 **Animation Support**: Full support for Webflow interactions and Lottie animations
- 🔗 **Smart Link Rewriting**: Automatically converts Webflow HTML links to Next.js routes
- 📱 **Client-Side Navigation**: Re-initializes Webflow scripts on route changes
- 🎬 **Lottie Animation Fallback**: CDN fallback for missing local Lottie JSON files
- 📄 **Multi-Page Support**: Supports all pages from the Webflow export

## Project Structure

```
fynecta-landing/
├── app/                    # Next.js App Router pages
│   ├── (webflow)/         # Dynamic route group for Webflow pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── components/        # React components
│   │   ├── lottie-init.tsx      # Lottie animation initializer
│   │   └── webflow-reinit.tsx   # Webflow script re-initializer
│   └── ...
├── lib/                   # Utility functions
│   └── webflow.ts         # Webflow HTML processing utilities
├── original-html/         # Original Webflow HTML exports
├── public/                # Static assets
│   └── images/           # Localized images and assets
└── scripts/              # Utility scripts
    └── download-lottie-files.js  # Download missing Lottie files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fynecta-landing
```

2. Install dependencies:
```bash
npm install
```

3. Ensure Webflow HTML files are in `original-html/` directory:
   - The project expects HTML files like `about.html`, `blog.html`, etc.
   - These should be exported from your Webflow project

4. (Optional) Download missing Lottie animation files:
```bash
npm run download-lottie
```

This will download any missing Lottie JSON files to `public/images/`.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## How It Works

### 1. HTML Processing

The `lib/webflow.ts` module processes Webflow HTML exports:

- **Asset URL Rewriting**: Converts `https://cdn.prod.website-files.com/...` URLs to local `/images/` paths
- **Link Normalization**: Rewrites HTML links (e.g., `about.html` → `/about`)
- **Script Stripping**: Removes Webflow runtime scripts (loaded separately in layout)

### 2. Page Rendering

Each page:
1. Loads the original HTML file from `original-html/`
2. Extracts the body content
3. Normalizes asset URLs and links
4. Renders using `dangerouslySetInnerHTML` to preserve Webflow's HTML structure

### 3. Client-Side Navigation

The `WebflowReinit` component:
- Re-initializes Webflow JavaScript on route changes
- Restores animations and interactions
- Handles image lazy loading
- Manages Lottie animation initialization

### 4. Lottie Animations

The `LottieInit` component:
- Initializes Lottie animations that Webflow's handler might miss
- Falls back to CDN URLs if local files are missing
- Handles cleanup on route changes

## Supported Pages

- `/` - Home
- `/about` - About
- `/blog` - Blog
- `/career` - Career
- `/checkout` - Checkout
- `/coming-soon` - Coming Soon
- `/contact` - Contact
- `/features` - Features
- `/integration` - Integration
- `/pricing` - Pricing
- `/401` - Password Protected
- `/404` - Not Found

## Configuration

### Adding New Pages

1. Add the HTML file to `original-html/` (e.g., `new-page.html`)
2. Add the route mapping in `lib/webflow.ts`:
```typescript
const ROUTE_MAP: Record<string, string> = {
  // ... existing routes
  "new-page.html": "/new-page",
};
```
3. Add the slug to `WEBFLOW_ALLOWED_SLUGS` if using dynamic routing

### Asset Management

- Place images in `public/images/` with their original Webflow filenames
- The normalization process will automatically map CDN URLs to local paths
- Missing assets will fall back to CDN URLs (for Lottie animations)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run download-lottie` - Download missing Lottie JSON files

## Technologies

- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Webflow Runtime** - Original Webflow JavaScript for animations/interactions
- **Lottie Web** - Lottie animation library

## Notes

- This project preserves the original Webflow HTML structure to maintain compatibility with Webflow's CSS and JavaScript
- Asset URLs are normalized to use local files when available, with CDN fallback
- Client-side navigation requires re-initialization of Webflow scripts
- Lottie animations have a dual initialization system (Webflow + custom fallback)

## License

Private project - All rights reserved
