import type { Metadata } from 'next';

import './globals.css';
import '@fontsource/rubik/latin-400.css';
import '@fontsource/rubik/latin-500.css';
import '@fontsource/rubik/latin-700.css';
import '@fontsource/rubik/latin-400-italic.css';
import '@fontsource/rubik/latin-500-italic.css';
import '@fontsource/rubik/latin-700-italic.css';

const SITE_URL = 'https://fundamentals-lab.vercel.app';
const DESCRIPTION =
  'Interactive lab to learn JavaScript, React and Next.js fundamentals, with live examples, quizzes, flashcards and a glossary.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  description: DESCRIPTION,
  openGraph: {
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Fundamentals Lab',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
