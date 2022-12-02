/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: true,
    optimizeCss: true
  },
  experimental: {
    outputStandalone: true,
    esmExternals: true
  },
  images: {
    deviceSizes: [375, 768, 1024, 1920],
    domains: [],
  },
}

module.exports = withAntdLess({
  // modifyVars: { '@primary-color': '#04f' }, // optional
  lessVarsFilePath: './src/styles/variables.less', // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: "local",
    localIdentName: "[hash:base64:8]", //but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },
  ...nextConfig,
  // Other Config Here...

  webpack(config, { isServer }) {
    // if (isServer) {
    //   require("./scripts/sitemap-generator");
    // }
    return config;
  },
  async redirects() {
    return [
      {
          source: '/robots.txt',
          destination: '/',
          permanent: true,
      }
  ];
  },

  i18n: {
    locales: ['vn'],
    defaultLocale: 'vn',
  },
});

// module.exports = nextConfig
