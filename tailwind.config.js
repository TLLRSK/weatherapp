/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(248, 247, 244)",
        "secondary": "rgb(84, 84, 84)",
        "gray-0": "rgba(174, 174, 174, 0.4)",
        "gray-100": "rgba(174, 174, 174, 0.75)",
        "gray-200": "rgba(174, 174, 174)",
        "sunny-0": "rgba(230, 235, 0, 0.75)",
        "sunny-100": "rgba(234, 210, 0, 0.6)",
        "misty": "rgba(174, 174, 174, 0.3)",
        "cloudy": "rgba(174, 174, 174, 0.75)",
        "rainy": "rgba(77, 141, 200, 0.75)",
        "hot": "rgba(255, 118, 74, 0.75)",
        "snowy": "rgba(202, 223, 255, 0.75)",
      },
      fontSize: {
        "s": "clamp(1rem, 3vw, 1.2rem)",
        "m": "clamp(1.4rem, 3vw, 1.6rem)",
        "ml": "clamp(1.8rem, 3vw, 2rem)",
        "l": "clamp(2rem, 3vw, 2.4rem)",
        "xl": "clamp(6rem, 4vw, 6.4rem)",
        "xxl": "clamp(10rem, 4vw, 12rem)",
      },
      lineHeight: {
        "s": "clamp(1rem, 3vw, 1.2rem)",
        "m": "clamp(1.4rem, 3vw, 1.6rem)",
        "ml": "clamp(1.8rem, 3vw, 2rem)",
        "l": "clamp(2rem, 3vw, 2.4rem)",
        "xl": "clamp(6rem, 4vw, 6.4rem)",
        "xxl": ".75",
      },
      spacing: {
        0: '.6rem',
        1: 'clamp(1rem, 3vw, 1.2rem)',
        2: 'clamp(1.4rem, 3vw, 1.6rem)',
        3: 'clamp(2rem, 3vw, 2.4rem)',
        4: 'clamp(6rem, 3vw, 6.4rem)',
        5: 'clamp(14rem, 3vw, 18rem)',
        6: 'clamp(24rem, 4vw, 28rem)',
      },
      screens: {
        's': '360px',
        'sm': '480px',
        'l': '720px',
        'xl': '1024px',
      },
    },
  },
  plugins: []
}
