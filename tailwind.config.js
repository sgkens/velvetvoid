/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
            "./src/**/*.{html,js,njk}"
        ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik Scribble', 'system-ui'],
        'share-tech-mono': ['Share Tech Mono', 'monospace'],
        'tektur': ['Tektur', 'sans-serif']
      },
      // backgroundImage: {
      //   'magic-pattern-1': "url('/src/imgs/magicpattern-1.png')"
      // },
      colors:{
        'russian_violet': {
          DEFAULT: '#250836',
          100: '#07020b',
          200: '#0f0315',
          300: '#160520',
          400: '#1d062b',
          500: '#250836',
          600: '#5a1483',
          700: '#901fd1',
          800: '#b763e8',
          900: '#dbb1f3'
        },
        'dark_purple': {
          DEFAULT: '#1d132b',
          100: '#060409',
          200: '#0b0711',
          300: '#110b1a',
          400: '#170f22',
          500: '#1d132b',
          600: '#472e69',
          700: '#7149a7',
          800: '#9f82c8',
          900: '#cfc1e4'
        },
        'night': {
          DEFAULT: '#141612',
          100: '#040404',
          200: '#080907',
          300: '#0c0d0b',
          400: '#10120f',
          500: '#141612',
          600: '#434a3d',
          700: '#727e67',
          800: '#a1ab98',
          900: '#d0d5cb'
        },
        'celadon': {
          DEFAULT: '#b4e4b4',
          100: '#163c16',
          200: '#2b782b',
          300: '#41b441',
          400: '#78ce78',
          500: '#b4e4b4',
          600: '#c3e9c3',
          700: '#d2efd2',
          800: '#e1f4e1',
          900: '#f0faf0'
        },
        'red_cmyk': {
          DEFAULT: '#e22b28',
          100: '#2f0706',
          200: '#5d0e0d',
          300: '#8c1513',
          400: '#bb1c19',
          500: '#e22b28',
          600: '#e75553',
          700: '#ed807e',
          800: '#f3aaa9',
          900: '#f9d5d4'
        }
      },
    'cobalt_blue': {
        DEFAULT: '#1349af',
        100: '#040f23',
        200: '#081d46',
        300: '#0c2c69',
        400: '#103b8c',
        500: '#1349af',
        600: '#1b62e6',
        700: '#5489ec',
        800: '#8db1f2',
        900: '#c6d8f9'
      },
      'red_ncs': {
        DEFAULT: '#bf1a2f',
        100: '#27050a',
        200: '#4d0b13',
        300: '#74101d',
        400: '#9a1527',
        500: '#bf1a2f',
        600: '#e3324a',
        700: '#ea6677',
        800: '#f199a4',
        900: '#f8ccd2'
      },
      'tiffany_blue': {
        DEFAULT: '#60e1e0',
        100: '#0a3636',
        200: '#156c6c',
        300: '#1fa2a2',
        400: '#2bd7d7',
        500: '#60e1e0',
        600: '#80e7e7',
        700: '#a0eded',
        800: '#c0f3f3',
        900: '#dff9f9'
      },
      'pale_dogwood': {
        DEFAULT: '#ddc8c4',
        100: '#35221f',
        200: '#6a453d',
        300: '#9f675c',
        400: '#bf9790',
        500: '#ddc8c4',
        600: '#e4d4d0',
        700: '#ebdfdc',
        800: '#f2e9e8',
        900: '#f8f4f3'
      },
      'licorice': {
        DEFAULT: '#13070c',
        100: '#040102',
        200: '#070305',
        300: '#0b0407',
        400: '#0f0609',
        500: '#13070c',
        600: '#592139',
        700: '#a03b65',
        800: '#cb7297',
        900: '#e5b8cb'
      },
      'electric_blue': {
        DEFAULT: '#00ffff',
        100: '#003333',
        200: '#006666',
        300: '#009999',
        400: '#00cccc',
        500: '#00ffff',
        600: '#33ffff',
        700: '#66ffff',
        800: '#99ffff',
        900: '#ccffff'
      },
      'neon_green': {
        DEFAULT: '#39ff14',
        100: '#083700',
        200: '#116e00',
        300: '#19a500',
        400: '#21dc00',
        500: '#39ff14',
        600: '#5fff43',
        700: '#87ff72',
        800: '#afffa1',
        900: '#d7ffd0'
      },
      'hot_pink': {
        DEFAULT: '#ff69b4',
        100: '#480024',
        200: '#910048',
        300: '#d9006d',
        400: '#ff2391',
        500: '#ff69b4',
        600: '#ff89c4',
        700: '#ffa6d3',
        800: '#ffc4e1',
        900: '#ffe1f0'
      },
      'icterine': {
        DEFAULT: '#ffff66',
        100: '#474700',
        200: '#8f8f00',
        300: '#d6d600',
        400: '#ffff1f',
        500: '#ffff66',
        600: '#ffff85',
        700: '#ffffa3',
        800: '#ffffc2',
        900: '#ffffe0'
      },
      'dark_violet': {
        DEFAULT: '#9400d3',
        100: '#1d002a',
        200: '#3b0054',
        300: '#58007d',
        400: '#7500a7',
        500: '#9400d3',
        600: '#b70eff',
        700: '#c94aff',
        800: '#db87ff',
        900: '#edc3ff'
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require("daisyui")],
  ],
  // daisyUI config (optional - here are the default values)
  // daisyui: {
  //   themes: ["synthwave","light","dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  //   darkTheme: "dark", // name of one of the included themes for dark mode
  //   base: true, // applies background color and foreground color for root element by default
  //   styled: true, // include daisyUI colors and design decisions for all components
  //   utils: true, // adds responsive and modifier utility classes
  //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  //   themeRoot: ":root", // The element that receives theme color CSS variables
  // },
}