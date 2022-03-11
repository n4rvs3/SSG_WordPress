module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    domains: ['wp.n4rublog.dev']
  }
}