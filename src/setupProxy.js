import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
    app.use(
        '/_next',
        createProxyMiddleware({
            target: 'https://ophim17.cc',
            changeOrigin: true,
        }),
    );
};
