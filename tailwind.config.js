/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const pgDaisyUI = require('daisyui');
const pgRotate = plugin(({ addUtilities, theme, variants }) => {
  addUtilities({
    '.rotate-x': {
      transform: 'rotateX(180deg)',
    },
    '.rotate-y': {
      transform: 'rotateY(180deg)',
    },
  });
});

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [pgDaisyUI, pgRotate],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4f4330',
          'primary-focus': '#403625',
          'primary-content': '#f5f3ef',

          secondary: '#c5b69b',
          'secondary-focus': '#b0a488',
          'secondary-content': '#f5f3ef',

          accent: '#887149',
          'accent-focus': '#755f3e',
          'accent-content': '#f5f3ef',

          neutral: '#3b424e',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#f5f3ef',

          'base-100': '#f5f3ef',
          'base-200': '#ebe9e4',
          'base-300': '#e0ddd8',
          'base-content': '#12100d',

          info: '#66c7ff',
          success: '#87cf3a',
          warning: '#e1d460',
          error: '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
      {
        dark: {
          primary: '#cfc3b0',
          'primary-focus': '#b8ad9e',
          'primary-content': '#100e0a',

          secondary: '#64553a',
          'secondary-focus': '#57492f',
          'secondary-content': '#100e0a',

          accent: '#b69f77',
          'accent-focus': '#9f8964',
          'accent-content': '#100e0a',

          neutral: '#2a2e37',
          'neutral-focus': '#16181d',
          'neutral-content': '#f2f0ed',

          'base-100': '#100e0a',
          'base-200': '#1a1814',
          'base-300': '#24211d',
          'base-content': '#f2f0ed',

          info: '#66c7ff',
          success: '#87cf3a',
          warning: '#e1d460',
          error: '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
    darkTheme: 'dark',
    styled: true,
    utils: true,
  },
};
