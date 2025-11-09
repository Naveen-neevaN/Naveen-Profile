import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        light: '#ffffff',
        accent: '#7C3AED',
        'accent-light': '#9F67FF',
        'dark-content': '#a7a7a7',
        'light-content': '#666666',
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(20, 20, 20, 0.7)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
    },
  },
  plugins: [],
};

export default config;