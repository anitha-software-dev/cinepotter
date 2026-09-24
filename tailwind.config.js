/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020817",
        navy: "#061B33",
        purple: {
          500: "#DD19E0", // Updated to new theme color
        },
        pink: {
          500: "#0054D1", // Updated to new theme color
        },
        blue: {
          500: "#0054D1", // Updated to new theme color
        },
        card: {
          DEFAULT: "#071B2E",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
      boxShadow: {
        glow: "0 0 12px rgba(221,25,224,.35), 0 0 30px rgba(0,84,209,.25)",
        "glow-hover": "0 0 18px rgba(221,25,224,.45), 0 0 40px rgba(0,84,209,.35)",
        "glow-sm": "0 0 0 1px rgba(221,25,224,0.2), 0 0 15px rgba(221,25,224,0.15)",
        "card": "0 10px 30px -10px rgba(0,0,0,0.5)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
