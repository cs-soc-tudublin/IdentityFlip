const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          primary: '#2a1191',
          secondary: '#5d6ecd',
          accent: '#f4c038',
        },
        dark: {
          ...themes.dark,
          primary: '#3f5af6',
          secondary: '#bfd7ea',
          accent: '#ffe61a',
        },
        synthwave: {
          ...themes.synthwave,
          primary: '#5151b8',
        },
      },
    ],
  },
}
