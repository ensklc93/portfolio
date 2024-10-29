/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {},
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [
    fluid({
      checkSC144: false
    })
  ],
}

