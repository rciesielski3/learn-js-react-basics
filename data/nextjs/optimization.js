export const optimizationExamples = [
  {
    id: 'image-optimization',
    name: 'Image Optimization',
    description:
      'Use `next/image` to automatically optimize images with lazy loading, resizing, and modern formats.',
    code: `import Image from "next/image";

<Image
  src="/banner.jpg"
  alt="Hero"
  width={800}
  height={400}
  priority
/>`,
    usage: 'Smaller, faster, responsive images',
    result: 'Lazy loads & resizes images on demand'
  },
  {
    id: 'font-optimization',
    name: 'Font Optimization',
    description: '`next/font` loads fonts inline with zero layout shift and no FOUT.',
    code: `import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return <p className={inter.className}>Text with optimized font</p>;
}`,
    usage: 'No layout shift or FOUT',
    result: 'Fast and consistent typography'
  },
  {
    id: 'script-strategy',
    name: 'Custom Script Loading',
    description:
      'Control how scripts load with `next/script` (beforeInteractive, afterInteractive, lazyOnload).',
    code: `import Script from "next/script";

<Script
  src="https://analytics.example.com/script.js"
  strategy="lazyOnload"
/>`,
    usage: 'Defer analytics or third-party scripts',
    result: 'Reduced main thread blocking'
  },
  {
    id: 'streaming',
    name: 'Streaming with Server Components',
    description: 'App Router supports streaming parts of the UI as data loads (no blocking).',
    code: `<Suspense fallback={<p>Loading...</p>}>
  <AsyncComponent />
</Suspense>`,
    usage: 'Page loads while chunks stream in',
    result: 'Improved time-to-first-byte'
  },
  {
    id: 'tree-shaking',
    name: 'Tree-Shaking & Code Splitting',
    description: 'Next.js automatically removes unused code and splits bundles for each page.',
    code: `// Import only what you need
import debounce from "lodash/debounce";`,
    usage: 'Keeps bundles lean',
    result: 'Removes unused imports'
  }
];
