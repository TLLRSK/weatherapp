/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(248, 247, 244)",
        "secondary": "rgb(10, 10, 10)",
        "gray-0": "rgb(113, 113, 113)",
        "gray-100": "rgb(141, 141, 141)",
        "gray-200": "rgb(57, 57, 57)",
        "sunny": "rgb(230, 235, 0, 0.75)",
        "misty": "rgb(174, 174, 174, 0.3)",
        "cloudy": "rgb(174, 174, 174, 0.75)",
        "rainy": "rgb(77, 141, 200, 0.75)",
        "snowy": "rgb(202, 223, 255, 0.75)",
      },
      fontSize: {
        "s": "clamp(1rem, 3vw, 1.2rem)",
        "m": "clamp(1.4rem, 3vw, 1.6rem)",
        "ml": "clamp(1.8rem, 3vw, 2rem)",
        "l": "clamp(2rem, 3vw, 2.4rem)",
        "xl": "clamp(6rem, 6vw, 6.4rem)",
        "xxl": "clamp(12rem, 8vw, 16rem)",
      },
      lineHeight: {
        "s": "clamp(1rem, 3vw, 1.2rem)",
        "m": "clamp(1.4rem, 3vw, 1.6rem)",
        "ml": "clamp(1.8rem, 3vw, 2rem)",
        "l": "clamp(2rem, 3vw, 2.4rem)",
        "xl": "clamp(6rem, 6vw, 6.4rem)",
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
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 1},
          '50%': { opacity: 0 },
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 1s ease-in-out infinite',
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
