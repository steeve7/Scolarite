/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
   function ({ addComponents }) {
    
      map = {}
      for(var i=0;i < 5000; i++){
        map[`.anidelay-${i}`] = {
          animationDelay: `${i}ms`,
        }
      }    
      for(var i=0;i < 5000; i++){
        map[`.anidue-${i}`] = {
          animationDuration: `${i}ms`,
        }
      }    //DESMOND 
    addComponents(map)
    },
  ], 
}
