// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths as per your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary : '#F0F7EE',
        secondary : '#002244',
        yellow : '#FFD700',
        oxfordBlue:'#002147',
        footer: '#050521',
        navbar: '#0F0E0E', // Add #252627 as the primary color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font 
        titlefonts : ["Varela Round", 'serif'],
        quoteFonts : ["Electrolize", 'serif']
      },
    },
  },
  plugins: [],
};
