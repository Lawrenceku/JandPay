/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': "#007BCB",
        'neutral-100': "#fff",
        "neutral-200": "#eee",
        "neutral-300": "#ECFOF2",
        "neutral-400": "#f2f2f2",
        "neutral-500": "#333",
        "neutral-600": "#222"
      }
    },
  },
  plugins: [],
}
