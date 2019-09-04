module.exports = {
  // All options defined here are passed down as options for `postcss-loader`.
  // Thus, this is where you add PostCSS plugins, a PostCSS parser, etc.
  postcss: {
    plugins: [
      require('postcss-cssnext')()
    ],
    parser: 'sugarss',
  },
};
