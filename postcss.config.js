module.exports = {
  plugins: [
    require('autoprefixer')({browsers:'ios >= 8'})
  ],
proxyTable: {
      '/': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
}

