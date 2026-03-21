import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KRTC Brand Colors - Light Theme
        primary: {
          DEFAULT: '#E31837',
          50: '#FEF2F4',
          100: '#FDE6E9',
          200: '#FABFC7',
          300: '#F699A5',
          400: '#EF4D62',
          500: '#E31837',
          600: '#CC1632',
          700: '#AA122A',
          800: '#880E21',
          900: '#700C1B',
        },
        secondary: {
          DEFAULT: '#1a1a2e',
          50: '#f5f5f7',
          100: '#e5e5ea',
          200: '#c5c5d0',
          300: '#a5a5b5',
          400: '#65657a',
          500: '#1a1a2e',
          600: '#171729',
          700: '#131322',
          800: '#0f0f1b',
          900: '#0c0c16',
        },
        accent: {
          DEFAULT: '#C41E3A',
          light: '#FF6B6B',
          dark: '#8B0000',
        },
        // Light theme grays
        light: {
          DEFAULT: '#f8f9fa',
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#f1f3f5',
          300: '#e9ecef',
          400: '#dee2e6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(358,82%,49%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(358,82%,49%,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(358,82%,49%,0.05) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(227, 24, 55, 0.2)',
        'glow-lg': '0 0 60px rgba(227, 24, 55, 0.3)',
        'inner-glow': 'inset 0 0 40px rgba(227, 24, 55, 0.05)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
