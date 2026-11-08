/* Shared class tokens for subpages. Use these instead of ad-hoc gray-* colors.
   Accent colors come from PageShell (js = lime, react = teal, next = orange). */
export const ui = {
  card: 'rounded-[22px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 md:p-8',
  cardInner: 'rounded-2xl border border-white/10 bg-white/[0.03] p-4',
  title: 'text-2xl md:text-3xl font-semibold text-jt-ink',
  h2: 'text-lg font-semibold text-jt-ink',
  h3: 'text-base font-semibold text-jt-ink',
  body: 'text-jt-muted leading-relaxed',
  muted: 'text-sm text-jt-muted',
  eyebrow: 'text-xs font-semibold uppercase tracking-[0.14em] text-accent',
  code: 'rounded-xl border border-white/10 bg-black/50 p-4 text-sm text-jt-ink overflow-x-auto',
  inlineCode: 'rounded-md bg-white/10 px-1.5 py-0.5 text-[0.9em] text-jt-ink',
  btn: 'inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-jt-ink transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-accent',
  btnPrimary: 'inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-jt-bg transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-accent',
  link: 'text-accent underline-offset-4 hover:underline',
  input: 'w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-jt-ink placeholder:text-jt-muted focus:border-accent focus:outline-none',
  pill: 'inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-jt-muted'
} as const;
