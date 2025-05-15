export const serverComponentExamples = [
  {
    id: 'server-basic',
    name: 'Basic Server Component',
    description:
      'Server Components run on the server by default (in the /app directory), without `use client`.',
    code: `// app/profile/page.tsx
  import { getUser } from "@/lib/db"; // server-side code
  
  export default async function ProfilePage() {
    const user = await getUser();
    return <h1>Hello, {user.name}</h1>;
  }`,
    usage: 'No client-side JS for this page',
    result: 'Rendered on the server'
  },
  {
    id: 'client-component',
    name: 'Client Component',
    description:
      "To make a component interactive or use hooks, you must mark it with 'use client'.",
    code: `"use client";
  
  import { useState } from "react";
  
  export default function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  }`,
    usage: 'Runs in the browser and supports interactivity',
    result: 'Client-side rendered with JS'
  },
  {
    id: 'mixed-hierarchy',
    name: 'Mixing Server and Client',
    description:
      'You can nest client components inside server components, but not the other way around.',
    code: `// Server Component
  import Counter from "./Counter"; // client
  
  export default function Page() {
    return (
      <div>
        <h1>Server Component</h1>
        <Counter /> {/* Client */}
      </div>
    );
  }`,
    usage: 'Only Counter is hydrated on the client',
    result: 'Minimal JS sent to browser'
  },
  {
    id: 'no-hooks-server',
    name: 'No Hooks in Server Components',
    description: 'Hooks like useState, useEffect are not available in server components.',
    code: `// ❌ Not allowed
  export default async function Page() {
    const [count, setCount] = useState(0); // ❌
  }`,
    usage: 'useState throws error unless in client component',
    result: 'Hooks not allowed on the server'
  },
  {
    id: 'access-db-fs',
    name: 'Access DB or Filesystem',
    description: 'Because they run on the server, RSCs can access DBs or the file system directly.',
    code: `import fs from "fs/promises";
  
  export default async function Page() {
    const content = await fs.readFile("README.md", "utf-8");
    return <pre>{content.slice(0, 50)}...</pre>;
  }`,
    usage: 'Filesystem logic without API routes',
    result: 'Reads directly from disk on server'
  }
];
