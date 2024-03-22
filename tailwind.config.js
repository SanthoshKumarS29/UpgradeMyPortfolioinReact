/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes:{
        up:{
          "0%":{opacity:0,
                top:100},
          "100%":{opacity:1,
                  top:0}
        }
      }
    },
  },
  plugins: [],
}

