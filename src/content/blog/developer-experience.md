---
title: "Developer Experience"
description: "Building a headless-friendly search engine with local indexing."
date: "Jan 01, 2026"
variant: "peach"
span: 6
---

WordPress plugins shouldn't force architectural decisions. Smooth Search works with traditional themes, headless setups, and everything in between.

## Headless-First Architecture

Our plugin exposes a simple REST API:

```javascript
// Get the search index
fetch('/wp-json/smooth-search/v1/index')
  .then(r => r.arrayBuffer())
  .then(initWasmSearch);

// Search happens client-side
const results = search("laptop");
```

## Local Development

No API keys. No external services. Clone the repo and run:

```bash
npm install
npm run dev
```

The entire search engine builds locally. Index your WordPress content, test searches, iterate quickly. When you deploy, it just works.

## Framework Agnostic

Use it with React, Vue, vanilla JS, or whatever's next:

```typescript
import { initSearch } from '@smooth-plugins/search-wasm';

const search = await initSearch(indexBuffer);
const results = search.query('shoes', { limit: 10 });
```

Great developer experience isn't about fancy dashboards. It's about predictable behavior, clear APIs, and tools that work the way developers think.
