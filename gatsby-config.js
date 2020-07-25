module.exports = {
  siteMetadata: {
    title: "Zellement.com",
    titleTemplate: "%s · Web Developer Nottingham",
    author: `@Zellement`,
    description:
      "Online presence of Dan Farrow - Web Designer & Web Developer",
    url: "https://www.zellement.com", // No trailing slash allowed!
    twitterUsername: "@Zellement",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#141210`,
        theme_color: `#b5aba2`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
}
