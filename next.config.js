module.exports = {
    distDir: 'build',
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] },
            },
            {
                test: /\.md$/,
                use: 'raw-loader',
            }
        )
        return config
    },
}
