"use client";

import React from "react";

import { hookData } from "@/data/hooks";
import { ExampleBlock } from "../shared";

const CountContext = React.createContext<number>(42);

function ContextChild() {
  const value = React.useContext(CountContext);
  return (
    <p className="text-sm text-yellow-300">Accessed from context: {value}</p>
  );
}

export function ContextDemo() {
  const { sampleSnippet, visualReprezentation } = hookData.useContext;

  return (
    <>
      <ExampleBlock
        id="context"
        name="useContext"
        description="Access context values deep in the component tree."
        code={`const CountContext = createContext(42);
const value = useContext(CountContext);`}
        usage={`Wrap a component tree in a Provider
Access values from any child using useContext()`}
        result={`Context value: 42`}
        sampleSnippet={sampleSnippet}
        visualReprezentation={visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <CountContext.Provider value={42}>
          <ContextChild />
        </CountContext.Provider>
      </div>
    </>
  );
}
