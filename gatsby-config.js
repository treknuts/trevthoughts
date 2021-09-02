module.exports = {
  siteMetadata: {
    siteUrl: "https://www.treknuts.dev/blog",
    title: "Tech-nuts",
    description: "Treknuts dev blog built using Gatsby.",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    }
  ],
};
