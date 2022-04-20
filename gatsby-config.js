module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          url: `http://localhost:8000/graphql` // 👋
        }
      },
      `gatsby-plugin-gatsby-cloud`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
    ]
  };