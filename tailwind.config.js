/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { eid: { dark: '#0a0a0a', green: '#00ff88', gold: '#ffd700' } },
      fontFamily: { serif: ['var(--font-playfair)'], pixel: ['var(--font-pixel)'] },
      boxShadow: { neon: '0 0 24px rgba(0,255,136,.35)' }
    }
  },
  plugins: []
};
