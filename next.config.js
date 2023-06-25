/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  //assetPrefix: "https://assets.nauzome.com/about-site",
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
})