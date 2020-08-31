module.exports = {
     //    "/": "http://shop.projectsedu.com:8001"
     "/": "http://127.0.0.1:8000",
proxyTable: {
      '/': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
};
