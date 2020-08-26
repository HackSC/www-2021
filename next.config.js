const withPlugins = require('next-compose-plugins');

// images
const optimizedImages = require('next-optimized-images');
const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');
 
module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImagesInDev: true,
    imageTrace: {
      skipTraceIfBase64: true
    }
  }],
], { unstable_runtimeJS: false });

