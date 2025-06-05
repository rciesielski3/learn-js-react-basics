import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
