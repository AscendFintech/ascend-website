/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // warm charcoal, not blue-tinted
        ink: {
          950: '#14110d',
          900: '#1b1712',
          800: '#231e17',
          700: '#2e2820',
          600: '#3d3527',
        },
        // single confident accent - muted amber/gold, no rainbow gradients
        gold: {
          200: '#f0dcb2',
          300: '#e8c078',
          400: '#d4a04c',
          500: '#b8853a',
          600: '#96692c',
          700: '#7a5423',
        },
      },
      boxShadow: {
        'glow-gold': '0 0 40px -10px rgba(212, 160, 76, 0.5)',
        'glow-sm': '0 0 18px -4px rgba(212, 160, 76, 0.45)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'aurora-slow': 'aurora-drift 26s ease-in-out infinite',
        'aurora-slower': 'aurora-drift 38s ease-in-out infinite reverse',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.05)' },
          '66%': { transform: 'translate(-4%, 3%) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
};
