module.exports = {
    publicPath: '/',
    css: {
        sourceMap: true,
        loaderOptions: {
            // pass options to sass-loader
            scss: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                prependData: `
            @import "~@/assets/scss/bootstrap/_variables.scss";
            @import "~@/assets/scss/_mixins.scss";
          `,
            },
        },
    },
    devServer: {
        publicPath: '/',
        port: 8082,
        http2: false,
    },
}
