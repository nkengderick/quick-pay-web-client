import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#e5e555',  // Bright Yellow
        bgColor: '#2659b1',  // Deep Blue
        textColor: '#f7f9fd', // Off-white/Light Gray
        background: '#2659b1',  // Deep Blue (same as bgColor)
        foreground: '#f7f9fd', // Off-white/Light Gray (same as textColor)
        secondary: '#f7f9fd',  // Off-white/Light Gray (for secondary elements)
        border: '#e5e555',  // Bright Yellow (for borders)
        input: '#f7f9fd',  // Light Gray (for form inputs)
        ring: '#e5e555',  // Bright Yellow (for focus rings)

        muted: {
          DEFAULT: '#6b7280',  // Grayish (for muted text/elements)
          foreground: '#9ca3af',  // Lighter Gray (for foreground muted elements)
        },
        accent: {
          DEFAULT: '#7c3aed',  // Purple (for accent elements)
          foreground: '#d8b4fe',  // Light Purple (for foreground accent elements)
        },
        popover: {
          DEFAULT: '#ffffff',  // White (for popover backgrounds)
          foreground: '#2659b1',  // Deep Blue (for popover text/foreground)
        },
        card: {
          DEFAULT: '#f7f9fd',  // Off-white/Light Gray (for card backgrounds)
          foreground: '#2659b1',  // Deep Blue (for card text/foreground)
        },
      },
      fontFamily: {
        sans: ['DOSIS', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
