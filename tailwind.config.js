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
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      rotate: {
        '5': '5deg',
        '-5': '-5deg',
        '10': '10deg',
        '-10': '-10deg',
        '15': '15deg',
        '-15': '-15deg',
        '20': '20deg',
        '-20': '-20deg',
      },
      height: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      colors: {
        yellow: {
          "polaroid": '#e8e1cf'
        },
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
      inset: {
        '1/2': "50%",
        '3/4': "75%",
        '1/3': "33.33333%",
        '2/3': "66.66666%",
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
        "132": "36rem",
        "140": "40rem",
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
