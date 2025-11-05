/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode via class strategy
  darkMode: 'class',
  
  // Scan for classes in these files
  content: [
    './src/**/*.{ts,tsx,js,jsx,twig}',
    './public/**/*.{html,js}'
  ],
  
  theme: {
    extend: {
      colors: {
        // Light mode
        'surface': {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc'
        },
        'content': {
          DEFAULT: '#1a1a1a',
          secondary: '#374151'
        },
        
        // Dark mode colors - used with dark: prefix
        'dark-surface': {
          DEFAULT: '#1a1a1a',
          secondary: '#27272a' 
        },
        'dark-content': {
          DEFAULT: '#fafafa',
          secondary: '#d1d5db'
        },

        // Brand/accent colors
        'accent': {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          light: '#60a5fa'
        }
      },

      // Typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },

      // Border radius
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'lg': '0.5rem',
      },

      // Spacing/sizing
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
      }
    }
  },
  
  // Core plugins
  plugins: []
}