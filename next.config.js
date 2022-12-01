const withSvgr = require('next-svgr');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withSvgr], {
  reactStrictMode: true,
  images: {
    deviceSizes: [375, 768, 1024, 1920],
    domains: [],
  },
  compiler: {
    styledComponents: true,
  },
});
