// app/page.tsx
import Link from "next/link";
import {
  BookOpen,
  Code,
  Zap,
  Repeat,
  Cpu,
  TerminalSquare,
  Search,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-900 text-white">
      <div className="p-8 max-w-4xl mx-auto">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 p-6 rounded-lg shadow mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">
            🚀 JS & React Fundamentals Lab
          </h1>
          <p className="text-sm text-gray-200">
            A curated interactive space to explore, learn, and master the
            fundamentals of JavaScript and React.
          </p>
        </div>

        {/* JavaScript Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            📘 JavaScript Fundamentals
          </h2>
          <ul className="space-y-3 pl-10">
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/js/this"
              >
                <BookOpen size={18} /> Understanding <code>this</code> in JS
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/js/classes"
              >
                <Code size={18} /> JS Classes & Inheritance
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/js/algorithms"
              >
                <Zap size={18} /> Common JS Algorithms
              </Link>
            </li>
          </ul>
        </section>

        {/* React Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            ⚛️ React Core Concepts
          </h2>
          <ul className="space-y-3 pl-10">
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/react/hooks"
              >
                <Repeat size={18} />
                Hook Demos
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/react/comparision"
              >
                <Search size={18} />
                Comparing Similar Hooks
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/react/lifecycle"
              >
                <Cpu size={18} /> Lifecycle Demo
              </Link>
            </li>
            <li className="hover:translate-x-1 transition-transform">
              <Link
                className="flex items-center gap-2 text-blue-300 hover:underline"
                href="/react/virtual-dom"
              >
                <TerminalSquare size={18} /> Virtual DOM Visualizer
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <footer className="bg-gray-800 border-t border-gray-700 text-center text-sm text-gray-400 py-4 mt-auto">
        <p>
          Built with 💡 by{" "}
          <a href="https://github.com/rafalciesielski" className="underline">
            Rafal Ciesielski
          </a>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </main>
  );
}
