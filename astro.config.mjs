// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://smoothplugins.com',
  integrations: [
    react(),
    sitemap({
      // Customize sitemap URLs with priority and change frequency
      customPages: [
        // High priority pages
        'https://smoothplugins.com/',
        'https://smoothplugins.com/products/smooth-search/',
        'https://smoothplugins.com/products/',
        'https://smoothplugins.com/blog/',
        'https://smoothplugins.com/llms.txt',
      ],
      // Filter out certain pages if needed
      filter: (page) => {
        // Include all pages by default
        return true;
      },
      // Add lastmod, changefreq, and priority
      serialize(item) {
        // Determine priority based on URL
        let priority = 0.5; // Default priority
        let changefreq = 'monthly'; // Default change frequency

        // Homepage - highest priority
        if (item.url === 'https://smoothplugins.com/') {
          priority = 1.0;
          changefreq = 'weekly';
        }
        // Product pages - very high priority
        else if (item.url.includes('/products/smooth-search')) {
          priority = 0.9;
          changefreq = 'weekly';
        }
        else if (item.url.includes('/products')) {
          priority = 0.8;
          changefreq = 'weekly';
        }
        // Blog pages - high priority, frequent updates
        else if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          priority = 0.7;
          changefreq = 'monthly';
        }
        else if (item.url.endsWith('/blog/')) {
          priority = 0.8;
          changefreq = 'weekly';
        }
        // Documentation and support - important
        else if (item.url.includes('/documentation') || item.url.includes('/support')) {
          priority = 0.7;
          changefreq = 'weekly';
        }
        // About and contact - medium priority
        else if (item.url.includes('/about') || item.url.includes('/contact')) {
          priority = 0.6;
          changefreq = 'monthly';
        }
        // LLMs.txt - important for AI discoverability
        else if (item.url.includes('/llms.txt')) {
          priority = 0.8;
          changefreq = 'weekly';
        }
        // Legal pages - low priority, rare updates
        else if (item.url.includes('/privacy') || item.url.includes('/terms')) {
          priority = 0.3;
          changefreq = 'yearly';
        }

        return {
          ...item,
          // Add lastmod (last modification date)
          lastmod: new Date().toISOString(),
          // Add change frequency hint
          changefreq: changefreq,
          // Add priority
          priority: priority,
        };
      },
    })
  ]
});