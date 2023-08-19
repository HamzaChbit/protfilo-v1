/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {




    extend: {
      


     fontFamily:{
      bodyFont: ['Montserrat','sans-serif'],
      titleFont : ['Inter','sans-serif']
     },
     boxShadow: {
      navbarShadow :'0 10px 30px -10px rgba(2,12,27,0.7)',
     },
     colors : {
      bodYColor : 'var(--color-bodYColor)',
      textGreen : 'var(--color-textGreen)',
      textLight : 'var(--color-textLight)',
      textDark : 'var(--color-textDark)',
      hoverColor : 'var(--color-hoverColor)',
      bgCard : 'var(--color-bg-card)',
      textDarkTw : 'var(--color-textDarkTw)',
      textDarkBt : 'var(--color-textDarkBt)'
     },
     screens: {
        xs:'320px',
        sm:'375px',
        sml:'500px',
        md:'667px',
        mdl : '786px',
        lg:'960px',
        lgl:'1024px',
        xl:'1280px',
     },
     maxWidth:{
      container : '1440px',
      contentContainer : '1140px',
      containerSmall : '1024px',
      containerxs : '768px',
     }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
