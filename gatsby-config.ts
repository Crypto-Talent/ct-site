import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Crypto Talent`,
    siteUrl: `https://cryptotalent.tech`,
    author: "ct"
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-L500JXV3YH"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }
  ]
};

export default config;
