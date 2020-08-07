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
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      height: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
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
      },
      maxWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("screens"),
      }),
      screens: {
        "2xl": "1530px",
        "3xl": "1800px",
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
  plugins: [
    require("tailwindcss-filters"),
    require("tailwindcss-gradients"),
    require("tailwindcss-blend-mode")(),
  ],
}
