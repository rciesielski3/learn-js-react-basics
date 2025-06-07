import MainNav from '@/components/MainNav';
import FunLab from '@/components/FunLab';
import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between text-white bg-gradient-to-b from-gray-900 to-gray-500">
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 p-6 rounded-t-lg shadow text-center text-shadow-xl">
          <h1 className="text-3xl font-bold mb-2">
            🚀 JavaScript, React & Next.js Fundamentals Lab
          </h1>
          <p className="text-sm text-gray-200">
            A curated interactive space to explore, learn, and master the fundamentals of JavaScript
            React and Next.js.
          </p>
        </div>
        <MainNav />
        <FunLab />
        <div className="pt-5">
          <Sidebar />
        </div>
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
