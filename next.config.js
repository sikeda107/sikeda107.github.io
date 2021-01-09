module.exports = {
  images: {
    loader: 'imgix',
    domains: ['sikeda107.imgix.net'],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
