'use client';

import { ui } from '@/components/shared/theme';
import { demos } from '../../../components/hooks/hook-demos-config';

export default function HooksSection() {
  return (
    <div className="space-y-6">
      <div className={ui.card}>
        <h1 className={ui.title}>❇️ React Hooks</h1>
        <p className="text-sm text-jt-muted mb-6">
          Explore core React hooks interactively. See how <code>useState</code>,
          <code>useContext</code>, <code>useMemo</code>, and others behave with live updates and
          examples.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 mb-6">
          <p className="text-sm mb-4">Click on the demo name to see the code and live example:</p>
          <nav className="flex gap-6 flex-wrap text-sm text-blue-200 mt-5">
            {demos.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="hover:scale-105 bg-white/[0.03] rounded px-2 py-1">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-sm text-jt-muted mb-2">Hook lists:</p>
        {demos.map(({ id, Component }) => (
          <section
            key={id}
            id={id}
            className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-2"
          >
            <Component />
          </section>
        ))}
      </div>
    </div>
  );
}
