"use client";

import React from "react";

import { InfoBox, LogBox, SectionHeader, useLogger } from "@/components/shared";

export default function HookComparisonsSection() {
  const [count, setCount] = React.useState(0);
  const [layoutCount, setLayoutCount] = React.useState(0);
  const [stateValue, setStateValue] = React.useState(0);
  const [logs, setLogs] = React.useState<string[]>([]);
  const renderCount = React.useRef(0);
  const refValue = React.useRef(0);

  const reducer = (state: number, action: { type: "inc" | "dec" }) => {
    return action.type === "inc" ? state + 1 : state - 1;
  };
  const [reducerValue, dispatch] = React.useReducer(reducer, 0);

  const log = useLogger(setLogs);

  React.useEffect(() => {
    renderCount.current++;
  });

  React.useEffect(() => {
    log(`[useEffect] Count updated to ${count}`);
  }, [count]);

  React.useLayoutEffect(() => {
    log(`[useLayoutEffect] Layout Count updated to ${layoutCount}`);
  }, [layoutCount]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🔍 Comparing Similar Hooks"
          description="Explore the behavioral differences between similar hooks with live
        examples and logs. Toggle test panels to interactively experiment."
        />
        <InfoBox
          title="useEffect vs useLayoutEffect"
          description="useEffect runs after paint, useLayoutEffect runs before paint. You can toggle between them below."
          code={`useEffect(() => { ... }, []);
useLayoutEffect(() => { ... }, []);`}
        >
          <span className="text-sm font-medium text-gray-400">Output:</span>
          <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
            <code className="block">Effect Count: {count}</code>
            <code>Layout Effect Count: {layoutCount}</code>
          </pre>
          <p className="text-base text-gray-400 py-2">
            🛠️ Change value using the buttons:
          </p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
            >
              Effect +1
            </button>
            <button
              onClick={() => setLayoutCount((l) => l + 1)}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:scale-105"
            >
              Layout +1
            </button>
          </div>
        </InfoBox>
        <InfoBox
          title="useState vs useReducer"
          description="Both manage state but useReducer is better for complex logic."
          code={`const [value, setValue] = useState(0);
const [value, dispatch] = useReducer(reducer, 0);`}
        >
          <span className="text-sm font-medium text-gray-400">Output:</span>
          <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
            <code className="block">useState: {stateValue}</code>
            <code>useReducer: {reducerValue}</code>
          </pre>
          <p className="text-base text-gray-400 py-2">
            🛠️ Change value using the buttons:
          </p>
          <div className="flex gap-2 flex-wrap mt-2">
            <button
              onClick={() => {
                setStateValue((v) => v - 1);
                log(`[useState] Decrement setStateValue: ${stateValue}`);
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105"
            >
              State -1
            </button>
            <button
              onClick={() => {
                setStateValue((v) => v + 1);
                log(`[useState] Increment setStateValue:  ${stateValue}`);
              }}
              className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
            >
              State +1
            </button>
            <button
              onClick={() => {
                dispatch({ type: "dec" });
                log(`[useReducer] Decrement dispatch: ${reducerValue}`);
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105"
            >
              Reducer -1
            </button>
            <button
              onClick={() => {
                dispatch({ type: "inc" });
                log(`[useReducer] Increment dispatch: ${reducerValue}`);
              }}
              className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
            >
              Reducer +1
            </button>
          </div>
        </InfoBox>
        <InfoBox
          title="useRef vs useState"
          description="useRef persists a mutable value without causing re-renders, unlike useState."
          code={`const ref = useRef(0);
ref.current++;

const [state, setState] = useState(0);`}
        >
          <span className="text-sm font-medium text-gray-400">Output:</span>
          <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
            <code className="block">
              useRef (no re-render): {refValue.current}
            </code>
            <code>useState: {stateValue}</code>
          </pre>
          <p className="text-base text-gray-400 py-2">
            🛠️ Change value using the buttons:
          </p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => {
                refValue.current += 1;
                log(`[useRef] Ref is now ${refValue.current}`);
              }}
              className="px-3 py-1 bg-orange-600 text-white rounded hover:scale-105"
            >
              Update Ref
            </button>
            <button
              onClick={() => {
                setStateValue((s) => s + 1);
                log(`[useState] State is now ${stateValue}`);
              }}
              className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
            >
              Update State
            </button>
          </div>
        </InfoBox>

        <div className="my-4 flex gap-4 flex-wrap">
          <button
            onClick={() => setLogs([])}
            className="px-3 py-1 bg-orange-500 text-white rounded hover:scale-105"
          >
            Clear Logs
          </button>
        </div>
        <LogBox logs={logs} />
      </div>
    </div>
  );
}
