/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [ "IBM Plex Sans Thai Looped", "Helvetica", "Arial", "sans-serif" ],
        serif: [ "IBM Plex Sans Thai", "Helvetica", "Arial", "serif" ]
      }
    }
  },
  plugins: []
}
