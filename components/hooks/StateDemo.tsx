"use client";

import React from "react";

import { ExampleBlock } from "../shared";
import { exampleData } from "../shared/exampleData";

export function StateDemo() {
  const [value, setValue] = React.useState(0);
  const details = exampleData.useState;

  return (
    <>
      <ExampleBlock
        id="state"
        name="useState"
        description="Allows functional components to hold stateful values."
        code={`const [value, setValue] = React.useState(0);`}
        usage={`Click buttons below to update state
Each change triggers a re-render`}
        result={`Current value: ${value}`}
        sampleSnippet={details.sampleSnippet}
        visualReprezentation={details.visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-base text-gray-400 mb-2">
          🛠️ Change value using the buttons:
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setValue((v) => v - 1)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105"
          >
            Decrement
          </button>
          <button
            onClick={() => setValue((v) => v + 1)}
            className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}
