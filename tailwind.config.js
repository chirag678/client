/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // teal and gray
        // 'primary': 'rgb(20 184 166)',
        // 'primary': '#088E8B',
        'primary': '#0ABAB5',
        'secondary': '#4169E1',
        'tertiary': '#FEC260',
        // 'secondary': '#20252D',
        // violet and black
        // 'primary': 'rgb(124 58 237)',
        'base': 'black',
        // 'base': '#20252D',
      },
      opacity: {
        '15': '0.15',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
