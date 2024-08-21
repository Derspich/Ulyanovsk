/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'tablet': '628px',
      },

      fontFamily: {
        sans: ["'Montserrat Variable'",'sans-serif'],
        serif: ["'Druk Wide Cy Web Bold Regular'"],
      },
      fontSize: {
        'sm1':['1.2vw',
          {lineHeight:'140%',}],
        '6.5xl': ['3vw',
          {
            lineHeight:'100%',}
        ],
        '2.5xl': ['1.2vw',
          {
            lineHeight:'122%',}
        ],
        '3.5': ['3.5vw',
          {
            lineHeight:'122%',}
        ],
        '3vw': ['3vw',
          {
            lineHeight:'122%',}
        ],
        '2.9vw': ['2.9vw',
          {
            lineHeight:'113%',}
        ],
        '4.5vw': ['4.5vw',
          {
            lineHeight:'120%',}
        ],

      },
      width: {
        '0.92': '92vw',
        '60vw':'60vw',
        '52vw':'52vw',
        '34vw':'34vw',
        '36vw':'36vw',
        '23vw':'23vw',
        '67vw':'67vw',
        '65vw':'65vw',
        '39vw':'39vw',
        '48vw':'48vw',
        '21vw':'21vw',
        '75vw':'70vw',
        
      },
      height: {
        '4.1w':'4.1vw',
        '12vw':'12vw',
        '0,32':'32vw',
        'fullVH':'687vw',
        'fullMobile':'700vw',
        '256VH':'256vw',
        '256Mobile':'400vw',
        '171VH':'171vw',
        '171Mobile':'271vw',
        '75VH':'75vw',
        '75Mobile':'250vw',
        '27VH':'27vw',
        '44VH':'44vw',
        '101VH':'101vw',


      },
      padding: {
        '1.5vw':'1.5vw',
        '2.9vh':'2.9vh',
        '12vw':'12vw',
        '5.5vh':'5.5vh',
        '18vh':'20vh',
        '0.18vw':'18vw',
        '4vw':'4vw',
      },
      margin: {
        '14vh':'14vh',
        '5.2vh':'5.2vh',
        '5vh':'5vh',
        '18vh':'18vh',
        '6vh':'7vh',
        '9vh':'9vh',
        '0.1vw':'10vw',

      },
    },
  },
  plugins: [],
}

