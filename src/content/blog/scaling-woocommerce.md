---
title: "Scaling WooCommerce to 1M+ Products"
description: "Lessons learned building Smooth Search for high-traffic enterprise stores."
date: "Jan 05, 2026"
dateISO: "2026-01-05T00:00:00Z"
author: "Sakib Ahamed Shahon"
variant: "blue"
span: 6
tags: ["woocommerce", "scaling", "enterprise", "search"]
---

Most WooCommerce search solutions break down around 10,000 products. We built Smooth Search to handle 1,000,000+.

## The Scaling Challenge

Traditional approaches use SQL's `LIKE` queries:
```sql
SELECT * FROM wp_posts
WHERE post_title LIKE '%search term%'
LIMIT 10;
```

This scans entire tables. At 100K+ products, it's unusable.

## Our Solution: Inverted Index

We build an inverted index - the same data structure powering Elasticsearch, but optimized for WooCommerce:

1. **Incremental indexing** - Only reindex changed products
2. **Compressed storage** - 1M products in ~50MB
3. **Client-side search** - Index loads once, searches run in-browser
4. **Smart ranking** - TF-IDF scoring with product-specific boosts

## Real Results

A fashion retailer with 500,000 SKUs saw:
- Search queries: **3.2 seconds → 12ms**
- Server load: **-95%** (searches now client-side)
- Conversion rate: **+18%** (users find products faster)

The key insight: you don't need a separate search service. You need a better architecture that leverages the client's CPU.
