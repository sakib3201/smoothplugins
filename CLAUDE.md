# Smooth Plugins - Project Context

## Project Overview

**Purpose**: Marketing and showcase website for Smooth Plugins - a WordPress plugin company specializing in performance-first solutions powered by modern web technologies.

**Primary Product**: Smooth Search - a WebAssembly-powered WooCommerce search engine built with Rust that runs entirely in the browser.

**Tech Stack**: Astro 5 + React 19 + TypeScript

**Repository**: https://github.com/sakib3201/smoothplugins.git

## Key Value Propositions

- **Performance**: 200ms average response time, zero server database load for searches
- **Scale**: Handles 10,000+ products effortlessly using Rust-compiled WASM
- **Developer Experience**: Drop-in replacement for WooCommerce search with native compatibility
- **Innovation**: First WooCommerce search powered by WebAssembly

## Architecture

### Technology Choices

- **Framework**: Astro 5.17+ (static site generation with islands architecture)
- **UI Library**: React 19 for interactive components
- **Animation**: Framer Motion for smooth transitions
- **3D Graphics**: Three.js for background canvas effects
- **Styling**: Vanilla CSS with custom properties (CSS variables)
- **Type Safety**: TypeScript with strict mode enabled

### Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── BackgroundCanvas.tsx      # Three.js animated background
│   ├── Card.astro                # Grid layout card component
│   ├── Footer.astro              # Site footer
│   ├── Navigation.astro          # Site navigation
│   ├── SmoothSearchDemo.tsx      # Interactive search demo
│   └── ThemeToggle.tsx           # Light/dark mode toggle
├── content/
│   └── blog/          # Markdown blog posts with frontmatter
├── layouts/
│   └── Layout.astro   # Base layout with theme support
├── pages/             # File-based routing
│   ├── index.astro    # Homepage
│   ├── blog/
│   │   ├── index.astro        # Blog listing
│   │   └── [slug].astro       # Dynamic blog post pages
│   └── products/
│       ├── index.astro        # Products overview
│       └── smooth-search.astro # Product details
└── styles/
    └── global.css     # Global styles and CSS variables
```

## Design System

### Color Variants

The site uses a card-based layout with color variants:

- **white**: Light cards with dark text
- **black**: Dark cards with light text
- **lavender**: Purple accent (#C9AFF0)
- **blue**: Bright blue accent (#48CAE4)
- **peach**: Warm orange accent (#FFC062, #E76F51)

### Theme Support

Dark mode implementation via CSS custom properties:
- Light mode: Clean whites and grays
- Dark mode: Deep blacks with reduced contrast
- ThemeScript.astro prevents flash of unstyled content (FOUC)
- Persists preference to localStorage

### Grid System

12-column responsive grid using CSS Grid:
- Cards span 1-12 columns via `span` prop
- Mobile: Stacks to single column
- Tablet: 8-column layout
- Desktop: Full 12-column layout

## Blog System

### Content Collections

Uses Astro's content collections (`src/content/blog/`) with Zod schema validation:

```typescript
{
  title: string,           // Post title
  description: string,     // Meta description (SEO)
  date: string,           // Display date (e.g., "Jan 15, 2026")
  variant: 'white' | 'black' | 'lavender' | 'blue' | 'peach',
  span: number            // Grid columns (1-12)
}
```

### Blog Topics

Technical content focused on:
- WebAssembly in WordPress
- WooCommerce performance optimization
- Modern web technologies (Rust, WASM)
- Developer experience improvements
- Scaling e-commerce sites

### File Naming

Blog posts use kebab-case slugs: `wasm-wordpress-search.md`, `performance-first.md`

## Component Patterns

### Interactive Components (React)

**BackgroundCanvas**: Three.js particle system with mouse interaction
- Client-only rendering (`client:only="react"`)
- Respects reduced motion preferences
- Responsive to viewport size

**SmoothSearchDemo**: Interactive product search demonstration
- Visible on scroll (`client:visible`)
- Showcases WASM performance

**ThemeToggle**: Dark/light mode switcher
- Animated icon transitions
- Persists to localStorage

### Static Components (Astro)

**Card**: Flexible card component with variants and spanning
- Props: title, kicker, description, variant, span, class
- Supports slot content for custom layouts

**Navigation**: Responsive nav with active state
- Mobile hamburger menu
- Theme toggle integration

## Development Workflow

### Commands

- `npm run dev` - Start dev server (localhost:4321)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npx astro check` - Type check TypeScript

### Code Quality Standards

- **TypeScript**: Strict mode, explicit types for props
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Lazy loading, optimized images, minimal JS
- **Responsive**: Mobile-first design, fluid typography
- **Theme-aware**: All components support dark mode

### Commit Message Style

Recent commits show concise, descriptive messages:
- "Added blogging system with example blogs"
- "Fixed blog page links"
- "Improved overall styling"
- "Added some tooltips and minor improvements"

Use imperative mood, focus on "what" and "why".

## Brand Voice

### Tone

- **Technical but approachable**: Explains complex concepts (WASM, Rust) clearly
- **Performance-focused**: Emphasizes speed, efficiency, scale
- **Developer-first**: Respects technical audience, includes code samples
- **Confident**: "The first", "Performance without friction"

### Key Messaging

- WordPress doesn't have to be slow
- Modern web technologies belong in WordPress ecosystem
- Performance is a feature, not a luxury
- Developer experience matters

## Common Tasks

### Adding a New Blog Post

1. Create `src/content/blog/your-slug.md`
2. Add required frontmatter (title, description, date, variant, span)
3. Write content in markdown
4. Post automatically appears on blog index

### Creating a New Component

1. Decide: Astro (.astro) or React (.tsx)
2. Place in `src/components/`
3. Follow existing patterns (TypeScript props, theme support)
4. Import and use in pages

### Adding a New Product Page

1. Create `src/pages/products/product-name.astro`
2. Use Layout wrapper
3. Include Navigation component
4. Showcase features with Card components
5. Add Footer

## Performance Considerations

- **Astro Islands**: Only hydrate React components when needed
- **CSS-first**: Animations use CSS when possible, JS for complex interactions
- **Asset optimization**: Use Astro's built-in image optimization
- **Minimal dependencies**: Keep bundle size small
- **Static generation**: Pre-render all pages at build time

## Future Enhancements

- Product documentation pages
- Customer testimonials section
- Performance comparison charts
- Live WASM demo with real search index
- WordPress plugin download/installation guide
