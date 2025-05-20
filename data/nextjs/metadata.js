export const metadataExamples = [
  {
    id: 'static-metadata',
    name: 'Static Metadata Export',
    description: 'Define static metadata with a `metadata` export in a layout or page file.',
    code: `export const metadata = {
  title: "About Page",
  description: "Learn more about us",
};`,
    usage: 'Used in page.tsx or layout.tsx',
    result: '<title>About Page</title>'
  },
  {
    id: 'dynamic-metadata',
    name: 'Dynamic Metadata (generateMetadata)',
    description:
      'Use `generateMetadata()` to dynamically return metadata based on params, props, or async data.',
    code: `export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);
  return {
    title: product.name,
    description: product.description,
  };
}`,
    usage: 'Used for dynamic routes like `/product/[id]`',
    result: 'Title reflects product name'
  },
  {
    id: 'open-graph',
    name: 'Open Graph & Social Meta',
    description: 'Include Open Graph and Twitter card info to improve social sharing previews.',
    code: `export const metadata = {
  title: "Blog Post",
  openGraph: {
    title: "My Blog Post",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "My Blog Post",
    images: ["/og-image.png"]
  }
};`,
    usage: 'Customizes previews on Facebook, Twitter, etc.',
    result: 'Rich social embeds'
  },
  {
    id: 'robots-meta',
    name: 'Robots & Canonical Meta',
    description: 'Control indexing behavior and canonical URLs for SEO via metadata.',
    code: `export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/en/about"
  }
};`,
    usage: 'SEO-friendly meta setup',
    result: 'Disallow indexing or set canonical link'
  },
  {
    id: 'layout-vs-page',
    name: 'Layout vs Page Metadata',
    description:
      '`layout.tsx` metadata applies to all nested pages. Use page-level overrides where needed.',
    code: `// layout.tsx
export const metadata = {
  title: "Dashboard"
};

// page.tsx
export const metadata = {
  title: "Settings"
};`,
    usage: 'Settings page overrides layout title',
    result: '<title>Settings</title>'
  }
];
