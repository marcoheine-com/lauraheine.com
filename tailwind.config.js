module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'pinkHeader': "url('/pink-header.png')",
        'peach-background': "url('/peach-background.svg')",
        'confetti': "url('/confetti.svg')",
        'peach-about': "url('/peach-about.svg')",
      },
      boxShadow: {
        'lg': '10px 10px #FFE6E3',
        'xl': '10px 10px #FFB7B7',
      }
    },
    colors: {
      body: '#292929',
      peach: '#FFE6E3',
      darkPeach: '#FFB7B7',
      activeLink: '#6E53B7',
    },
    fontSize: {
      sm: ['1rem', '1.375rem'],
      base: ['1.125rem', '1.6875rem'],
      md: ['1.5rem', '1.875rem'],
      lg: ['2rem', '2.875rem'],
      xl: ['2.5rem', '3rem'],
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
