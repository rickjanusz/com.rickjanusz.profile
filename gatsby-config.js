/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Rick Janusz`,
    siteUrl: `https://www.rickjanusz.com`,
    description: `Web Developer Training`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {},
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'kk9pk2m1',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#ea6d07`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about/`,
          `/contact/`,
          `/work/`,
          `/`,
          `/projects/`,
          `/project/*`,
          `/tag/*`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['WEATHER_APP_KEY', 'UNSPLASH_KEY', 'UNSPLASH_SECRET'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rickjanusz.com`,
        short_name: `rickjanusz`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ea6d07`,
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
  ],
}
