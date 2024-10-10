/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray": "rgba(102, 112, 133, 1)",
        "custom-dark": "#2F364B",
        "custom-darker": "#262B3D",
        "text-color": "rgba(255, 255, 255, 0.6)",
        "custom-text-color": "rgba(255, 255, 255, 0.8)",
        "custom-white": "rgba(255, 255, 255, 1)",
        "custom-border": "rgba(102, 112, 133, 1)",
        "custom-border-color": "rgba(102, 112, 133, 1)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
