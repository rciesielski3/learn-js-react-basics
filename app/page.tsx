import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">JS & React Fundamentals Lab</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link className="text-blue-600 hover:underline" href="/js/this">
            Understanding <code>this</code> in JS
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/js/classes">
            JS Classes & Inheritance
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/js/algorithms">
            Common JS Algorithms
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/react/state">
            React State Example
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:underline"
            href="/react/lifecycle"
          >
            React Lifecycle Demo
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:underline"
            href="/react/virtual-dom"
          >
            Virtual DOM Visualizer
          </Link>
        </li>
      </ul>
    </main>
  );
}
