/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

module.exports = {
  siteMetadata: {
    title: `Rick Janusz`,
    siteUrl: `https://www.rickjanusz.com`,
    description: `Web Developer Training`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
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
        precachePages: [`/about/`, `/contact/`, `/work/`, `/`],
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
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
