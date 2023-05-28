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
        'my-bg-image' : "url('./images/test3.jpg')",
      },
      transitionTimingFunction: {
        DEFAULT: 'easy-in-out',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      zIndex: {
        1: '1',
        2: '2',
      },
    },
  },
  plugins: [],
}
