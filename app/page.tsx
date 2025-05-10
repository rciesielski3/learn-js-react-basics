import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-900 text-white">
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 p-6 rounded-lg shadow mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">🚀 JavaScript & React Fundamentals Lab</h1>
          <p className="text-sm text-gray-200">
            A curated interactive space to explore, learn, and master the fundamentals of JavaScript
            and React.
          </p>
        </div>
        <Sidebar />
      </div>
      <footer className="bg-gray-800 border-t border-gray-700 text-center text-sm text-gray-400 py-4 mt-auto">
        <p>
          Built with 💡 by{' '}
          <a href="https://github.com/rciesielski3" className="underline">
            Rafal Ciesielski
          </a>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </main>
  );
}
