import { Inter, Unbounded } from 'next/font/google';

import JourneyHome from '@/components/home/JourneyHome';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap'
});

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-unbounded',
  display: 'swap'
});

export default function HomePage() {
  return (
    <div className={`${inter.variable} ${unbounded.variable}`}>
      <JourneyHome />
    </div>
  );
}
