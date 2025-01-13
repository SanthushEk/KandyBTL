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
        footer: '#050521' // Add #252627 as the primary color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat as an additional font option
      },
    },
  },
  plugins: [],
};
