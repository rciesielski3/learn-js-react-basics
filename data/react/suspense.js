export const suspenseExamples = [
  {
    id: "lazy-basic",
    name: "React.lazy() + Suspense",
    description:
      "React.lazy lets you load a component dynamically. Suspense wraps it with a fallback during loading.",
    code: `import React, { Suspense } from "react";
  
  // Lazy component
  const LazyHello = React.lazy(() => import("./Hello"));
  
  function App() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <LazyHello />
      </Suspense>
    );
  }`,
    usage: `const result = "Hello (after lazy load)";`,
    run: () => "Hello (after lazy load)",
  },
  {
    id: "custom-delay",
    name: "Simulated Suspense Delay",
    description:
      "This simulates delayed rendering with Suspense and a fallback component.",
    code: `import React, { Suspense } from "react";
  
  function slowImport(component) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ default: component }), 1000)
    );
  }
  
  const LazyMessage = React.lazy(() => slowImport(() => <p>Loaded!</p>));
  
  function App() {
    return (
      <Suspense fallback={<p>Loading fallback...</p>}>
        <LazyMessage />
      </Suspense>
    );
  }`,
    usage: `const result = "Loaded!";`,
    run: () => "Loaded!",
  },
  {
    id: "chunk-splitting",
    name: "Code Splitting with Lazy",
    description:
      "Code splitting separates a part of your app into a new chunk, only loaded when needed.",
    code: `import React, { Suspense, useState } from "react";
  
  const LazyChunk = React.lazy(() => import("./Chunky"));
  
  function App() {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Load Chunk</button>
        <Suspense fallback={<p>Loading...</p>}>
          {show && <LazyChunk />}
        </Suspense>
      </>
    );
  }`,
    usage: `const result = "Chunk component rendered";`,
    run: () => "Chunk component rendered",
  },
];
