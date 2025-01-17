// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths as per your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2F3F8',
        secondary: '#050521',
        yellow: '#FFD700',
        footer: '#050521',
        navbar: '#0F0E0E', // Add #252627 as the primary color
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'], // Set Futura as a custom font
      },
    },
  },
  plugins: [],
};
