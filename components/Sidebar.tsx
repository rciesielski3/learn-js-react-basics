'use client';

import React from 'react';
import Link from 'next/link';

import { sidebarLinks } from '@/data/navigation';

export default function Sidebar() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);
  const [showIntroAnimation, setShowIntroAnimation] = React.useState<boolean>(true);

  const toggleSection = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setShowIntroAnimation(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="p-4 w-full bg-gray-900 text-white space-y-6 rounded-lg">
      {sidebarLinks.map((section, index) => {
        const isOpen = openIndex === index;
        const arrow = isOpen ? '⬇️' : '➡️';
        const animate =
          showIntroAnimation && index !== 0
            ? 'animate-bounce inline-block'
            : 'inline-block transition-transform duration-100';

        return (
          <div key={index} className="flex items-start border-b border-gray-700 pb-4 gap-6">
            <div className="min-w-[180px]">
              <button
                onClick={() => toggleSection(index)}
                className="w-full text-left font-bold text-lg hover:text-blue-400 transition-colors flex justify-between items-center"
              >
                <span>{section.title}</span>
                <span className={`ml-2 ${animate}`}>{arrow}</span>
              </button>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out flex-1 overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="flex items-center gap-2 hover:text-blue-400 hover:scale-105 transition-colors"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
