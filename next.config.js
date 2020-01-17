const withCSS = require('@zeit/next-css');

module.exports = withCSS({});
module.exports = {
  head: {
    // this htmlAttrs you need
    htmlAttrs: {
      lang: 'en',
    },
  }
}
