/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
            colors: {
              transparent: 'transparent',
              current: 'currentColor',
              'white': '#fff',
              'black': '#000',
              'maxblue': 'rgb(0, 0, 255)',
              'blue': {
                100: 'rgb(207, 236, 254)',
                200: 'rgb(149, 214, 255)',
                300: 'rgb(111, 199, 255)',
                400: 'rgb(1, 153, 249)',
                500: 'rgb(0, 156, 255)',
                600: 'rgb(0, 135, 255)',
                700: 'rgb(1, 115, 217)',
                800: 'rgb(1, 109, 206)',
                900: 'rgb(0, 92, 174)',
              },
              'zinc': {
                100: 'rgb(208, 208, 208)',
                200: 'rgb(179, 179, 179)',
                300: 'rgb(157, 157, 157)',
                400: 'rgb(121, 120, 120)',
                500: 'rgb(102, 102, 102)',
                600: 'rgb(100, 100, 100)',
                700: 'rgb(88, 88, 89)',
                800: 'rgb(90, 90, 90)',
                900: 'rgb(94, 94, 94)',
              },
              'gray': {
                100: 'rgb(156, 185, 223)',
                200: 'rgb(142, 169, 204)',
                300: 'rgb(134, 159, 193)',
                400: 'rgb(103, 123, 151)',
                500: 'rgb(84, 101, 125)',
                600: 'rgb(66, 80, 100)',
                700: 'rgb(46, 56, 70)',
                800: 'rgb(37, 45, 57)',
                900: 'rgb(26, 32, 40)',
              },
      },
    },
  },
  plugins: [],
}
