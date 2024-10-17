import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {fontFamily: {
      biennale: ["Biennale", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cmyk"], 
    "font-family": "Open Sans, sans-serif",
  },
};
