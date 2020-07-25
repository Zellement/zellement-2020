module.exports = {
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: ["is-active"],
    },
  },
  theme: {
    fontFamily: {
      heading: ["Arapey", "serif"],
      base: ["Roboto", "sans-serif"],
    },
    linearGradientColors: (theme) => theme("colors"),
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      colors: {
        empress: {
          100: "#F2F1F1",
          200: "#DFDCDC",
          300: "#CCC6C6",
          400: "#A59C9C",
          500: "#7F7171",
          600: "#726666",
          700: "#4C4444",
          800: "#393333",
          900: "#262222",
        },
        // tapa: {
        //   100: "#F2F2F1",
        //   200: "#DEDDDC",
        //   300: "#CBC9C7",
        //   400: "#A3A19E",
        //   500: "#7C7874",
        //   600: "#706C68",
        //   700: "#4A4846",
        //   800: "#383634",
        //   900: "#252423",
        // },
        // brown: {
        //   feint: "#b5aba2",
        //   light: "#635d57",
        //   default: "#1A1918",
        //   dark: "#141210",
        //   "default-50": "rgba(26, 25, 24, 0.5)",
        //   "default-80": "rgba(26, 25, 24, 0.8)",
        // },
        // grey: {
        //   light: "#eee",
        //   default: "#9F9F9F",
        // },
        // lightgrey: "#9F9F9F",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    fill: ["responsive", "hover", "focus"],
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("tailwindcss-filters"), require("tailwindcss-gradients")],
}
