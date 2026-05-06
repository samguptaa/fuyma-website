/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black backgrounds
        'am-black':    '#09090A',
        'am-surface':  '#0F0F11',
        'am-surface2': '#161618',
        'am-surface3': '#1E1E21',
        // Champagne gold accent
        'am-gold':     '#B89355',
        'am-gold-lt':  '#D4B97A',
        'am-gold-dk':  '#8A6C3A',
        // Warm text
        'am-white':    '#F5F0E8',
        'am-silver':   '#C8BFB0',
        'am-muted':    '#7A7060',
        'am-subtle':   '#3A3830',
        // Borders
        'am-border':   'rgba(184,147,85,0.18)',
        'am-border2':  'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest2': '0.25em',
        'widest3': '0.35em',
      },
      animation: {
        'fade-up':    'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 0.7s ease forwards',
        'line-grow':  'lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        'float':      'float 7s ease-in-out infinite',
        'gold-pulse': 'goldPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        goldPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
