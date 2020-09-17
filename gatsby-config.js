module.exports = {
    pathPrefix: "/blog",


    plugins: [
        `gatsby-plugin-material-ui`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/contents/`,
            },
        },
    ],
}