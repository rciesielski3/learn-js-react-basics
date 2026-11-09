import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

const ACCENTS = {
  js: '#d7ff4a',
  react: '#38e1d0',
  next: '#ff9a4d',
  neutral: '#eef3ef'
} as const;

export type Accent = keyof typeof ACCENTS;

/* Dark frame shared by every subpage: top bar with home link and section nav. */
export function PageShell({ accent = 'neutral', children }: { accent?: Accent; children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-jt-bg text-jt-ink font-sans antialiased"
      style={{ '--accent': ACCENTS[accent] } as CSSProperties}
    >
      <header className="sticky top-0 z-40 border-b border-white/10 bg-jt-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-jt-ink transition hover:text-accent"
          >
            ← Fundamentals Lab
          </Link>
          <nav aria-label="Learning tools" className="flex flex-wrap gap-4 text-sm text-jt-muted">
            <Link href="/glossary" className="hover:text-jt-ink">Glossary</Link>
            <Link href="/flashcards" className="hover:text-jt-ink">Flashcards</Link>
            <Link href="/quiz" className="hover:text-jt-ink">Quiz</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
    </div>
  );
}
