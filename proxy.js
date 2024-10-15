// pages/api/proxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
    api: {
        bodyParser: false, // Disable body parsing to handle the proxy request correctly
    },
};

// Proxy middleware to redirect the request to the original API
export default createProxyMiddleware({
    target: 'https://ophim17.cc', // API đích của bạn
    changeOrigin: true, // Cho phép thay đổi Origin của request
    pathRewrite: {
        '^/api/proxy': '/_next', // Thay thế /api/proxy bằng đường dẫn thực tế
    },
});
