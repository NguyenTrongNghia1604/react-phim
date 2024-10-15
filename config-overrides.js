// const { override, useBabelRc } = require('customize-cra');

// module.exports = override(useBabelRc());
const { override, useBabelRc } = require('customize-cra');

module.exports = override(useBabelRc(), (config, env) => {
    if (env === 'development') {
        config.devServer = {
            ...config.devServer,
            hot: true, // Bật HMR
        };
    }
    return config;
});
