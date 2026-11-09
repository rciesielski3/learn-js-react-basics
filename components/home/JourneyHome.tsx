'use client';

import React from 'react';
import Link from 'next/link';

import './journey.css';

import FunLab from '@/components/FunLab';
import { useVisitorCount } from '@/components/hooks/useVisitorCount';
import { sidebarLinks } from '@/data/navigation';

/* Stage copy. Topics, icons and links come from data/navigation.js. */
const STAGES = [
  {
    key: 'js',
    color: '#d7ff4a',
    ghostSpeed: 0.06,
    tag: 'Stage 01 · Start here',
    tagline: 'Where every line begins.',
    desc: 'The language underneath it all: scope, closures, async flow, modules and the typing debates around them.',
    section: sidebarLinks[0]
  },
  {
    key: 'react',
    color: '#38e1d0',
    ghostSpeed: -0.06,
    tag: 'Stage 02 · Think in components',
    tagline: 'State in, UI out.',
    desc: 'Rendering, state architecture, hooks, context and the reconciliation rules that keep interfaces predictable.',
    section: sidebarLinks[1]
  },
  {
    key: 'next',
    color: '#ff9a4d',
    ghostSpeed: 0.06,
    tag: 'Stage 03 · Ship it',
    tagline: 'From components to production.',
    desc: 'Rendering strategies, routing, caching, server components and actions, plus deployment and monitoring.',
    section: sidebarLinks[2]
  }
] as const;

const TITLE_LINES = [
  { text: 'JavaScript,', cls: 'c-js', x: 0.04 },
  { text: 'React &', cls: 'c-react', x: -0.03 },
  { text: 'Next.js', cls: 'c-next', x: 0.06 },
  { text: 'Fundamentals Lab', cls: 'is-outline', x: -0.02 }
];

/* Each character gets a running index so the rise animation staggers across lines. */
const LINE_START_INDEX = TITLE_LINES.reduce<number[]>((acc, line, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + TITLE_LINES[i - 1].text.replace(/ /g, '').length);
  return acc;
}, []);

function TitleLine({ text, cls, x, start }: (typeof TITLE_LINES)[number] & { start: number }) {
  let i = start;
  return (
    <span className={`ln ${cls}`} data-x={x}>
      {text.split(' ').map((word, wi) => (
        <React.Fragment key={wi}>
          {wi > 0 && ' '}
          <span className="word">
            {[...word].map((ch, ci) => (
              <span
                key={ci}
                className="char"
                aria-hidden="true"
                style={{ '--i': i++ } as React.CSSProperties}
              >
                {ch}
              </span>
            ))}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
}

export default function JourneyHome() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const journeyRef = React.useRef<HTMLElement>(null);
  const svgRef = React.useRef<SVGSVGElement>(null);
  const trailRef = React.useRef<SVGPathElement>(null);
  const glowRef = React.useRef<SVGPathElement>(null);
  const travelerRef = React.useRef<SVGCircleElement>(null);
  const ringRef = React.useRef<SVGCircleElement>(null);
  const labelRef = React.useRef<HTMLParagraphElement>(null);
  const funRef = React.useRef<HTMLElement>(null);

  const [openStages, setOpenStages] = React.useState<boolean[]>([true, true, true]);
  const [funOpen, setFunOpen] = React.useState(false);
  const { count: visitors, failed: visitorsFailed } = useVisitorCount();

  /* Scroll-drawn path, parallax, stage activation, reveal and magnetic dock. */
  React.useEffect(() => {
    const root = rootRef.current;
    const journey = journeyRef.current;
    const svg = svgRef.current;
    const trail = trailRef.current;
    const glow = glowRef.current;
    const traveler = travelerRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!root || !journey || !svg || !trail || !glow || !traveler || !ring || !label) return;

    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(pointer: fine)').matches;

    const stages = Array.from(journey.querySelectorAll<HTMLElement>('.stage'));
    const dots = stages.map((s) => s.querySelector<HTMLElement>('.dot')!);
    let pts: { x: number; y: number }[] = [];
    let H = 1;
    let L = 1;
    let activeIndex = -1;

    const layout = () => {
      const jr = journey.getBoundingClientRect();
      const W = journey.clientWidth;
      H = journey.offsetHeight;
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

      pts = dots.map((d) => {
        const r = d.getBoundingClientRect();
        return { x: r.left - jr.left + r.width / 2, y: r.top - jr.top + r.height / 2 };
      });
      const seq = [{ x: pts[0].x, y: 0 }, ...pts, { x: pts[pts.length - 1].x, y: H }];

      // Desktop dot column is 180px wide (±90px around the dot). Control points
      // sit at most 74px off the dot, leaving ~16px inside the column; the drawn
      // curve itself bulges about a third of that, so it never reaches the cards.
      const amp = W >= 860 ? 74 : 15;
      const wobble = [1, 0.15, 0.9, 0.45, 1, 0.1, 0.7]; // uneven, hand-drawn rhythm

      let d = `M${seq[0].x} ${seq[0].y}`;
      for (let i = 0; i < seq.length - 1; i++) {
        const a = seq[i];
        const b = seq[i + 1];
        const dy = b.y - a.y;
        const side = i % 2 === 0 ? 1 : -1;
        const k = wobble[i % wobble.length];
        const edge = i === 0 || i === seq.length - 2;
        const bulge = edge ? 0 : amp * side * k;
        const c1x = a.x + bulge;
        const c1y = a.y + dy * 0.5;
        const c2x = b.x - bulge * 0.6;
        const c2y = b.y - dy * 0.5;
        d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      }
      trail.setAttribute('d', d);
      glow.setAttribute('d', d);
      L = trail.getTotalLength();
      trail.style.strokeDasharray = `${L} ${L}`;
      glow.style.strokeDasharray = `${L} ${L}`;
      update();
    };

    // Path length at which the pen reaches a given y (binary search)
    const lengthAtY = (y: number) => {
      let lo = 0;
      let hi = L;
      for (let i = 0; i < 18; i++) {
        const mid = (lo + hi) / 2;
        if (trail.getPointAtLength(mid).y < y) lo = mid;
        else hi = mid;
      }
      return (lo + hi) / 2;
    };

    const update = () => {
      if (!pts.length) return;
      const jr = journey.getBoundingClientRect();
      const drawn = reduce ? H : clamp(innerHeight * 0.62 - jr.top, 0, H);
      const len = lengthAtY(drawn);
      const offset = `${L - len}`;
      trail.style.strokeDashoffset = offset;
      glow.style.strokeDashoffset = offset;

      const tip = trail.getPointAtLength(len);
      traveler.setAttribute('cx', String(tip.x));
      traveler.setAttribute('cy', String(tip.y));
      ring.setAttribute('cx', String(tip.x));
      ring.setAttribute('cy', String(tip.y));
      traveler.style.display = reduce ? 'none' : '';
      ring.style.display = reduce ? 'none' : '';

      let reached = -1;
      stages.forEach((s, i) => {
        const on = drawn >= pts[i].y - 40 || reduce;
        s.classList.toggle('is-on', on);
        if (on) reached = i;
      });
      if (reached !== activeIndex && reached >= 0) {
        activeIndex = reached;
        root.style.setProperty('--tint', STAGES[reached].color);
        label.textContent = `Stage 0${reached + 1} of 03`;
      }
    };

    // Parallax + kinetic lines, one rAF per scroll
    let ticking = false;
    let frameId = 0;
    let layoutId = 0;
    const frame = () => {
      ticking = false;
      const sy = scrollY;
      const vh = innerHeight;
      if (!reduce) {
        root.querySelectorAll<HTMLElement>('.ln[data-x]').forEach((el) => {
          el.style.transform = `translate3d(${(sy * parseFloat(el.dataset.x ?? '0')).toFixed(1)}px,0,0)`;
        });
        root.querySelectorAll<HTMLElement>('[data-speed]').forEach((el) => {
          const r = el.getBoundingClientRect();
          const c = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${(c * parseFloat(el.dataset.speed ?? '0')).toFixed(1)}px,0)`;
        });
      }
      update();
    };
    const requestFrame = () => {
      if (!ticking) {
        ticking = true;
        frameId = requestAnimationFrame(frame);
      }
    };
    addEventListener('scroll', requestFrame, { passive: true });
    addEventListener('resize', requestFrame);
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(layoutId);
      layoutId = requestAnimationFrame(layout);
    });
    ro.observe(journey);
    addEventListener('load', layout);

    // Reveal on enter
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    root.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // Dock: magnetic hover (fine pointers only)
    const dockBtns = Array.from(root.querySelectorAll<HTMLElement>('.dock-btn'));
    const onPointerMove = (e: PointerEvent) => {
      dockBtns.forEach((b) => {
        const r = b.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        const R = 120;
        if (dist < R) {
          const k = 1 - dist / R;
          b.style.transform = `translate(${(dx * 0.22 * k).toFixed(1)}px, ${(dy * 0.3 * k).toFixed(1)}px) scale(${(1 + 0.06 * k).toFixed(3)})`;
        } else if (b.style.transform) {
          b.style.transform = '';
        }
      });
    };
    if (fine && !reduce) document.addEventListener('pointermove', onPointerMove);

    requestFrame();
    layout();

    return () => {
      removeEventListener('scroll', requestFrame);
      removeEventListener('resize', requestFrame);
      removeEventListener('load', layout);
      cancelAnimationFrame(frameId);
      cancelAnimationFrame(layoutId);
      ro.disconnect();
      io.disconnect();
      if (fine && !reduce) document.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  /* Move focus into the FunLab panel on open so Tab starts inside it */
  React.useEffect(() => {
    if (funOpen) funRef.current?.focus();
  }, [funOpen]);

  /* Escape closes the FunLab panel */
  React.useEffect(() => {
    if (!funOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFunOpen(false);
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [funOpen]);

  const toggleStage = (i: number) =>
    setOpenStages((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div ref={rootRef} className="jh">
      <a className="skip" href="#journey">
        Skip to the learning path
      </a>
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <Link className="brand" href="/">
          <i aria-hidden="true" />
          Fundamentals Lab
        </Link>
        <p className="progress-label" ref={labelRef}>
          Stage 01 of 03
        </p>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="glow a" data-speed="-0.12" aria-hidden="true" />
          <div className="glow b" data-speed="0.08" aria-hidden="true" />

          <span className="pill reveal">
            <b>🚀</b> Interactive learning space · 41 topics
          </span>

          <h1 className="kinetic" id="hero-title" aria-label="JavaScript, React & Next.js Fundamentals Lab">
            {TITLE_LINES.map((line, i) => (
              <TitleLine key={line.text} {...line} start={LINE_START_INDEX[i]} />
            ))}
          </h1>

          <p className="lede reveal">
            A curated interactive space to explore, learn, and master the fundamentals of JavaScript,
            React and Next.js.
          </p>

          <div className="actions reveal">
            <a className="btn" href="#journey">
              Start the journey <span aria-hidden="true">↓</span>
            </a>
            <Link className="btn ghost-btn" href="/quiz">
              🧠 Take the quiz
            </Link>
          </div>

          <a className="scroll-cue" href="#journey" aria-label="Scroll to the learning path">
            <span aria-hidden="true" />
            Scroll
          </a>
        </section>

        {/* JOURNEY */}
        <div className="journey-head reveal">
          <p className="eyebrow">The learning path</p>
          <h2>Three stages. Forty-one topics. One scroll.</h2>
        </div>

        <section className="journey" id="journey" ref={journeyRef} aria-label="Learning path">
          <svg ref={svgRef} id="path-svg" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="jh-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#d7ff4a" />
                <stop offset="0.5" stopColor="#38e1d0" />
                <stop offset="1" stopColor="#ff9a4d" />
              </linearGradient>
              <filter id="jh-soft" x="-20%" y="-5%" width="140%" height="110%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            <path ref={glowRef} id="trail-glow" d="" />
            <path ref={trailRef} id="trail" d="" />
            <circle ref={ringRef} id="traveler-ring" r="16" cx="0" cy="0" />
            <circle ref={travelerRef} id="traveler" r="6" cx="0" cy="0" />
          </svg>

          {STAGES.map((stage, i) => {
            const section = stage.section;
            const isOpen = openStages[i];
            const panelId = `panel-${stage.key}`;
            const buttonId = `btn-${stage.key}`;
            return (
              <article
                key={stage.key}
                className={`stage${i % 2 === 1 ? ' flip' : ''}`}
                data-c={stage.key}
                aria-labelledby={`${stage.key}-title`}
              >
                <div className="info reveal">
                  <span className="ghost" data-speed={stage.ghostSpeed} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <p className="stage-tag">{stage.tag}</p>
                  <p className="tagline">{stage.tagline}</p>
                  <p className="desc">{stage.desc}</p>
                  <p className="meta">{section.items.length} topics</p>
                </div>
                <div className="dot" aria-hidden="true" />
                <div className="card reveal">
                  <h3 id={`${stage.key}-title`}>
                    <button
                      className="acc-btn"
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleStage(i)}
                    >
                      <span className="ttl">{section.title}</span>
                      <span className="count">{section.items.length}</span>
                      <span className="chev" aria-hidden="true">
                        ▾
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`panel${isOpen ? ' is-open' : ''}`}
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!isOpen}
                  >
                    <div className="inner">
                      <ul>
                        {section.items.map((item) => (
                          <li key={item.path}>
                            <Link href={item.path}>
                              <span className="ico" aria-hidden="true">
                                {item.icon}
                              </span>
                              {item.label}
                              <span className="arrow" aria-hidden="true">
                                →
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <div className="finish reveal">
          <p className="eyebrow">Journey complete</p>
          <p>Revisit anything with the Glossary, Flashcards or the Quiz.</p>
        </div>
      </main>

      {/* FunLab panel (toggled from the dock) */}
      {funOpen && (
        <section
          ref={funRef}
          tabIndex={-1}
          className="funlab"
          id="funlab-panel"
          aria-label="FunLab"
        >
          <FunLab />
        </section>
      )}

      {/* DOCK */}
      <nav className="dock" aria-label="Quick actions">
        <Link className="dock-btn" href="/glossary" aria-label="Glossary">
          <span className="ico" aria-hidden="true">📚</span>
          <span className="lbl">Glossary</span>
        </Link>
        <Link className="dock-btn" href="/flashcards" aria-label="Flashcards">
          <span className="ico" aria-hidden="true">🧾</span>
          <span className="lbl">Flashcards</span>
        </Link>
        <Link className="dock-btn" href="/quiz" aria-label="Quiz">
          <span className="ico" aria-hidden="true">🧠</span>
          <span className="lbl">Quiz</span>
        </Link>
        <button
          className="dock-btn"
          type="button"
          aria-expanded={funOpen}
          aria-controls="funlab-panel"
          aria-label="FunLab"
          onClick={() => setFunOpen((v) => !v)}
        >
          <span className="ico" aria-hidden="true">🎲</span>
          <span className="lbl">FunLab</span>
          <span className="caret" aria-hidden="true">{funOpen ? '▲' : '▼'}</span>
        </button>
        <a
          className="dock-btn primary"
          href="https://buycoffee.to/adateo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy Me a Coffee (opens in a new tab)"
        >
          <span className="ico" aria-hidden="true">☕</span>
          <span className="lbl">Buy Me a Coffee</span>
          <span className="lbl-s">Coffee</span>
        </a>
        <div className="dock-count" title="Visitors">
          <span aria-hidden="true">👁️</span>
          <span className="lbl">Visitors</span>
          <span id="visitors" aria-label="Visitors count">
            {visitors !== null ? visitors.toLocaleString('en-US') : visitorsFailed ? '—' : '…'}
          </span>
        </div>
      </nav>

      <footer>
        <p>
          Built with 💡 by{' '}
          <a href="https://github.com/rciesielski3">Adateo Rafal Ciesielski</a>
        </p>
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> All rights reserved.
        </p>
      </footer>
    </div>
  );
}
