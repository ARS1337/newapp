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
        Ratinghero: "url('/public/assets/RatingPage/rating-bg.jpg')",
      },
      animation: {
        "rotate-clock": "wiggleclock 0.2s ease-in-out 1 forwards",
        "rotate-anticlock": "wiggleanticlock 0.2s ease-in-out 1 forwards",
        // "hplus": "hplus 0.3s ease-in-out 1 forwards",
        // "hminus": "hminus 0.3s ease-in-out 1 forwards",
      },
      keyframes: {
        wiggleclock: {
          "0%": { transform: "rotate(180deg) " },
          "100%": { transform: "rotate(0deg) " },
        },
        wiggleanticlock: {
          "0%": { transform: "rotate(0deg)," },
          "100%": { transform: "rotate(180deg)" },
        },
        // hplus: {
        //  '0%':{height:"0px"},
        //  '100%':{height:"60px"},
        // },
        // hminus: {
        //   '0%':{height:"60px"},
        //   '100%':{height:"0px"},
        //  },
      },
      transitionProperty: {
        height: 'height'
    }
    },
  },
  plugins: [],
};
