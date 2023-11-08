import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/components/button/*.{html,js,ts}',
    './src/app/components/category-pills/*.{html,js,ts}',
    './src/app/components/data/*.{html,js,ts}',
    './src/app/components/large-sidebar-section/*.{html,js,ts}',
    './src/app/components/large-sidebar-section/large-sidebar-item/*.{html,js,ts}',
    './src/app/components/small-side-bar/*.{html,js,ts}',
    './src/app/components/small-side-bar/small-sidebar-item/*.{html,js,ts}',
    './src/app/components/video-grid-item/*.{html,js,ts}',
    './src/app/layouts/page-header/*.{html,js,ts}',
    './src/app/utils/*.{html,js,ts}',
    './src/app/*.{html,js,ts}',
    './src/index.html',
    './src/styles.css',
   
  ],
theme: {
  extend: {
    colors: {
    secondary: {
      DEFAULT: colors.neutral[200],
      hover: colors.neutral[300],
      border: colors.neutral[400],
      text: colors.neutral[500],
      dark: colors.neutral[800],
      ["dark-hover"]: colors.neutral[900]
    }
  }
},
},
plugins: [],
}




