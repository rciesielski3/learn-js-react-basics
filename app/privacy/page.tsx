import type { Metadata } from 'next';
import Link from 'next/link';

import { PageShell } from '@/components/shared/PageShell';
import { ui } from '@/components/shared/theme';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What data this site stores and why. Short version: no accounts, no ads, no analytics cookies.'
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className={`${ui.card} mx-auto max-w-3xl space-y-6`}>
        <header className="space-y-2">
          <p className={ui.eyebrow}>Privacy</p>
          <h1 className={ui.title}>Privacy notice</h1>
          <p className={ui.muted}>Last updated: 9 November 2026</p>
        </header>

        <section className="space-y-2">
          <h2 className={ui.h2}>Short version</h2>
          <p className={ui.body}>
            This is a learning project. There are no accounts, no forms that collect personal data, no
            ads and no analytics cookies. We set no cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={ui.h2}>What is stored</h2>
          <ul className={`${ui.body} list-disc space-y-2 pl-5`}>
            <li>
              <strong className="text-jt-ink">Visitor counter.</strong> Your browser stores one flag,{' '}
              <code className={ui.inlineCode}>hasVisited</code>, in local storage, so each browser is counted
              once. The site then reads and increments a single number in Google Firebase (Firestore). No IP
              address or identifier is saved in that counter.
            </li>
            <li>
              <strong className="text-jt-ink">Hosting.</strong> The site is served by Vercel, which keeps
              standard server logs (for example IP address and browser type) under its own privacy policy.
            </li>
            <li>
              <strong className="text-jt-ink">Firebase.</strong> Requests to Firebase reach Google servers,
              which may process connection data such as your IP address to deliver the service.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={ui.h2}>What is not used</h2>
          <p className={ui.body}>
            Fonts are self-hosted, so the site makes no requests to Google Fonts. There is no third-party
            analytics or advertising script.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={ui.h2}>External links</h2>
          <p className={ui.body}>
            The Buy Me a Coffee and GitHub links open other websites, which have their own privacy policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={ui.h2}>Your choices</h2>
          <p className={ui.body}>
            Clear the local storage for this site to reset the visitor flag. You can also block requests to
            Firebase in your browser; the rest of the site keeps working.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={ui.h2}>Contact</h2>
          <p className={ui.body}>
            Questions can be sent through{' '}
            <a className={ui.link} href="https://github.com/rciesielski3" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            . Back to the <Link className={ui.link} href="/">home page</Link>.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
