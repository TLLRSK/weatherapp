/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(248, 247, 244)",
        "secondary": "rgb(84, 84, 84)",
        "gray-0": "rgba(174, 174, 174, 0.4)",
        "gray-100": "rgba(174, 174, 174, 0.5)",
        "gray-200": "rgba(174, 174, 174)",
        "sunny-0": "rgba(230, 235, 0, 0.5)",
        "sunny-100": "rgba(234, 210, 0, 0.5)",
        "cloudy": "rgba(174, 174, 174, 0.5)",
        "rainy": "rgba(77, 141, 200, 0.5)",
        "hot": "rgba(255, 118, 74, 0.5)",
      },
      fontSize: {
        "s": "1.2rem",
        "m": "1.6rem",
        "ml": "2rem",
        "l": "2.4rem",
        "xl": "6.4rem",
        "xxl": "8rem",
      },
      lineHeight: {
        "s": "1.2rem",
        "m": "1.6rem",
        "ml": "2rem",
        "l": "2.4rem",
        "xl": "6.4rem",
        "xxl": ".75",
      },
      spacing: {
        0: '.6rem',
        1: '1.2rem',
        2: '1.6rem',
        3: '2.4rem',
        4: '6.4rem',
        5: '24rem',
      },
    },
  },
  plugins: []
}
