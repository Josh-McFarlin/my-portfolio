/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Replace default breakpoints to match the SCSS design system
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    extend: {
      colors: {
        black: '#202123',
        accent: '#747fe0',
        accent2: '#c76a5d',
        link: '#0074d9',
        'primary-bg': '#f0efe9',
        'secondary-bg': '#8a8fa0',
        'light-bg': '#8c8d99',
        'dark-bg': '#303d51',
        'primary-text': '#2f2f2f',
        'secondary-text': '#4f4f4f',
        'light-text': '#e7e7e7',
        'dark-text': '#131313',
        warning: '#ffc107',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      // Font sizes use a base unit of 14px (rem values = px/14)
      fontSize: {
        micro: ['0.714rem', { lineHeight: '1.2' }],    // 10px
        small: ['1rem', { lineHeight: '1.5' }],        // 14px
        base: ['1.143rem', { lineHeight: '1.5' }],     // 16px
        large: ['1.286rem', { lineHeight: '1.5' }],    // 18px
        title4: ['1.286rem', { lineHeight: '1.5' }],   // 18px
        title3: ['1.5rem', { lineHeight: '1.429' }],   // 21px
        title2: ['1.714rem', { lineHeight: '1.375' }], // 24px
        title1: ['3.5rem', { lineHeight: '1.163' }],   // 49px
      },
      maxWidth: {
        narrow: '40em',   // $width-small
        wide: '60em',     // $width-medium
        content: '1400px',
      },
    },
  },
  plugins: [],
};
