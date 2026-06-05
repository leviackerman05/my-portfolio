/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ember: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          soft: 'rgba(249, 115, 22, 0.15)',
        },
        canvas: 'var(--bg)',
        surface: 'var(--surface)',
        stroke: 'var(--border)',
        foreground: 'var(--text)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        glow: '0 0 60px rgba(249, 115, 22, 0.15)',
      },
    },
  },
  plugins: [],
}
