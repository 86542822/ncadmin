// see http://vuejs-templa
// tes.github.io/webpack for documentation.
var path = require('path');
var os = require('os');
var networkInterfaces = os.networkInterfaces();
var ip;

for (var key in networkInterfaces) {
  networkInterfaces[key].forEach(item => {
    if (!item.internal && item.family === 'IPv4') {
      ip = item.address;
    }
  });
}

module.exports = {
  build: {
    env: require('./prod.env'),
    port: 8081,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: true,
  },
  dev: {
    env: require('./dev.env'),
    port: 8081,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
