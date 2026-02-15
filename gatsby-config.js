module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    author: "Alicia Fu",
    description:
      "Alicia Fu is a results-oriented Senior Digital Marketing Consultant specializing in paid media, demand generation, and performance marketing.",
    keywords:
      "digital marketing consultant, paid media, SEM, SEO, social media advertising, demand generation, CRO, branding, Vancouver, freelance, Google Ads, Facebook Ads, performance marketing",
    locale: "en",
    siteUrl: "https://www.aliciafu.com",
    title: "Alicia Fu | Digital Marketing Consultant",
    formspreeEndpoint: "https://formspree.io/f/xeodabyj",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/",
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-0F1Q8V2FGN"],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Alicia Fu - Digital Marketing Consultant",
        short_name: "Alicia Fu",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#2563eb",
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
