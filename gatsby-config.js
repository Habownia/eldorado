module.exports = {
  siteMetadata: {
    title: `Trzycierzblog`,
    author: `Joe Mama`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.trzycierzblog.ml`,
  },

  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // Tailwind
    "gatsby-plugin-postcss",
    // manifest.json
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TrzycierzBlog`,
        short_name: `TBlog`,
        start_url: `/`,
        background_color: `#2A303C`,
        theme_color: `#2A303C`,
        display: `standalone`,
        icon: "src/icons/icon.svg",
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    // netlify
    "gatsby-plugin-netlify",
  ],
}
