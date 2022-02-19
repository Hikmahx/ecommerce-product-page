module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'inherit': 'inherit'
      }
    },
    colors : {
      'orange': 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      'very-dark-blue': 'hsl(220, 13%, 13%)',
      'dark-grayish-blue': 'hsl(222, 4%, 48%)',
      'grayish-blue': 'hsl(230, 4%, 72%)',
      'light-grayish-blue': 'hsl(223, 64%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)'
    },
    fontFamily : {
      'kumbh-sans': ['"Kumbh Sans"', 'sans-serif']
    }
  },
  plugins: [],
}
