/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paleBlue': 'hsl(225, 100%, 94%)',
        'brightBlue': 'hsl(245, 75%, 52%)',
        'veryPaleBlue': 'hsl(225, 100%, 98%)',
        'desatBlue': 'hsl(224, 23%, 55%)',
        'darkBlue': 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
      backgroundImage: {
        'backgroundPattern': "url('/images/pattern-background-desktop.svg')",
      }
    },
  },
  plugins: [],
}

