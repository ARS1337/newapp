const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  important:"#root",
  theme: {
    extend: {
      colors: {
        "green-custom": "#64DDAC",
        "blue-custom": "#2e5984",
        "black-custom": "#121212",
        'gray-custom':'#2A2A2A',
        'light-gray-custom':'#f8f9fb',
        'dark-blue-custom':'#0E76A8'
      },
      fontFamily: {
        "Poppins-Bold": ["Poppins-Bold", "sans-serif"],
        "Poppins-ExtraBold": ["Poppins-ExtraBold", "sans-serif"],
        "Poppins-ExtraLight": ["Poppins-ExtraLight", "sans-serif"],
        "Poppins-Light": ["Poppins-Light", "sans-serif"],
        "Poppins-Medium": ["Poppins-Medium", "sans-serif"],
        "Poppins-Regular": ["Poppins-Regular", "sans-serif"],
        "Poppins-SemiBold": ["Poppins-SemiBold", "sans-serif"],
        "Poppins-Thin": ["Poppins-Thin", "sans-serif"],
      },
      backgroundImage: {
        'edu-heading': "url('/public/assets/education-heading.png')",
        'ad3': "url('/public/assets/pexels-energepiccom-288477.png')",
        'ad4': "url('/public/assets/pexels-fauxels-3184465.png')",
      }
    },
  },
  plugins: [],
};
