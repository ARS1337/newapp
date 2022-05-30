const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-custom": "#64DDAC",
        "blue-custom": "#2E5984",
        "black-custom": "#121212",
        "gray-custom": "#2A2A2A",
        "light-gray-custom": "#f8f9fb",
        "dark-blue-custom": "#0E76A8",
        "custom-white": "#EFF0F2",
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
        "edu-heading": "url('/public/assets/education-heading.png')",
        ad3: "url('/public/assets/pexels-energepiccom-288477.png')",
        ad4: "url('/public/assets/pexels-fauxels-3184465.png')",
        adedu: "url('/public/assets/JobsPage/Clip.png')",
        eduhero: "url('/public/assets/JobsPage/hero.png')",
        linkedinhero: "url('/public/assets/LinkedinPage/banner bg.png')",
      },
    },
  },
  plugins: [],
};
