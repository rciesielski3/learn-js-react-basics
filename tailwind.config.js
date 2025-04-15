/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-orange-600",
    "bg-gray-600",
    "bg-yellow-600",
    "bg-purple-600",
    "text-orange-600",
    "text-yellow-600",
    "text-purple-600",
    "gap-6",
    "mt-2",
    "my-5",
    "py-2",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
