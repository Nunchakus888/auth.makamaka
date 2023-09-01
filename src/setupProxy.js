const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'https://auth.makamaka.io/',
      target: 'http://test.authmiaohua.sensetime.com/',
      changeOrigin: true
    })
  );
};
