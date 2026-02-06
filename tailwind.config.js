/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          brown:         '#7B5B3A',
          'brown-light': '#A07855',
          'brown-dark':  '#5C3D2E',
          creme:         '#FDF5E6',
          'creme-dark':  '#F5E6C8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script:  ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
