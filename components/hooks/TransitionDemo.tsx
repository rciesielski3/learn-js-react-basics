'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { ExampleBlock } from '@/components/shared';
import { hookData } from '@/data/react/hooks';

export function TransitionDemo() {
  const [input, setInput] = React.useState('');
  const [list, setList] = React.useState<string[]>([]);
  const [isPending, startTransition] = React.useTransition();

  const { sampleSnippet, visualReprezentation } = hookData.useTransition;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    startTransition(() => {
      const newList = Array.from({ length: 50 }, (_, i) => `${value} ${i}`);
      setList(newList);
    });
  };

  return (
    <>
      <ExampleBlock
        id="transition"
        name="useTransition"
        description="Allows marking updates as non-urgent to keep the UI responsive."
        code={`const [isPending, startTransition] = useTransition();`}
        usage={`Use startTransition for expensive updates that shouldn't block typing\nor fast feedback`}
        result={`Input length: ${input.length} | List size: ${list.length}`}
        sampleSnippet={sampleSnippet}
        visualReprezentation={visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-sm text-jt-muted mb-2">
          ⌛ Type in the input and see non-blocking updates:
        </p>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Start typing..."
          className={`${ui.input} mb-2`}
        />
        {isPending && <p className="text-yellow-300 text-sm mb-2">Rendering large list...</p>}
        <div className="h-32 overflow-auto bg-black/40 text-xs p-2 rounded border border-white/10">
          {list.slice(0, 20).map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}
