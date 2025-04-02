"use client";
import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-xl">React State Example</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}
