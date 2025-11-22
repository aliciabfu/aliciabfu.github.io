const basePath = `/`
const contentPath = `content/`
const showThemeLogo = false
const theme = `gh-inspired`

module.exports = {
  siteMetadata: {
    author: `Alicia Fu`,
    description: `Alicia Fu - Senior Paid Media Consultant`,
    keywords: 'Vancouver, paid media, consultant, freelance, marketing, advertising, google ads, facebook ads, instagram ads, linkedin ads, tiktok ads, digital marketing',
    locale: `en`,
    showThemeLogo,
    siteUrl: 'https://www.aliciafu.com',
    title: `Alicia Fu - Senior Paid Media Consultant`,
    formspreeEndpoint: `https://formspree.io/f/xeodabyj`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(require(`./tailwind.config`)(theme)),
          require(`postcss-input-range`),
          require(`autoprefixer`),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-0F1Q8V2FGN`,
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alicia Fu - Senior Software Engineer & Solutions Architect`,
        short_name: `Alicia Fu`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
