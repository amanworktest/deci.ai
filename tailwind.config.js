/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2253f5',
        secondary: "#0055FF",
        accent: "#2253f5",
        lightGray: '#edf3fe',
        borderColor: '#dadfea',
        outlineColor: "#d8daed",
        grayFont: "#7d7f8e",
        blackBackground: "#0e0f13",
        blackBackgroundText: "#c2c4d2",
        subtitleText: "#7c7f8f",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
