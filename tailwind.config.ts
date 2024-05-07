import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '540px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      sky: '#7dd3fc',
      blue: { light: '#2563eb', DEFAULT: '#172554' },
      red: { DEFAULT: '#b91c1c' },
      zinc: '#09090b',
      white: { light: '#fefefe', DEFAULT: '#f8fafc' },
      slate: '#020617',
      gray: {
        light: '#f1f5f9',
        DEFAULT: '#d1d5db',
        dark: '#737373'
      }
    }
  },
  plugins: []
}
export default config
