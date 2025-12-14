// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-light': '#d4e9e2',
        'mint-medium': '#a8d5ba',
        'mint-dark': '#7ac29a',
        'teal-dark': '#0d5c4f',
        'teal-darker': '#0a4a3f',
        'orange-red': '#c8360e',
        'orange-main': '#f37021',
        'cream': '#f5f1e8',
        'beige': '#e8dcc8',
      },
    },
  },
  plugins: [],
}