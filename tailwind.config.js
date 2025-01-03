/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-start": "#282e41",
        "custom-end": "#3e4a6f",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #282e41 0%, #3e4a6f 100%)",
      },
      colors: {
        "custom-gray": "rgba(102, 112, 133, 1)",
        "custom-dark": "#2F364B",
        "custom-darker": "#262B3D",
        "hero-color": "rgba(255, 255, 255, 0.4)",
        "text-color": "rgba(255, 255, 255, 0.6)",
        "custom-text-color": "rgba(255, 255, 255, 0.8)",
        "custom-white": "rgba(255, 255, 255, 1)",
        "custom-border": "rgba(102, 112, 133, 1)",
        "custom-border-color": "rgba(102, 112, 133, 1)",
        "button-color": "rgba(211, 211, 211, 1)",
        hero_color: "rgba(255, 224, 0, 1)",
        "custom-blue": "rgba(39, 45, 62, 1)",
        "light-blue": "rgba(39, 45, 62, 0.8)",
        "plan-button": "rgba(39, 45, 62, 1)",
        "icon-color": "rgba(170, 170, 170, 1)",
        "plan-color": "rgba(0, 186, 199, 1)",
        "plan-custom": "rgba(198, 244, 248, 0.1)",
        "dark-blue": "rgba(40, 46, 65, 1)",
        "bg-blue": "rgba(237, 252, 253, 1)",
        "faq-text": "rgba(76, 76, 77, 1)",
        "faq-close": "rgba(170, 170, 170, 1)",
        "faq-color": "rgba(241, 241, 243, 1)",
        "analytic-color": "rgba(40, 46, 65, 1)",
        "anal-color": "rgba(39, 45, 62, 1)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
