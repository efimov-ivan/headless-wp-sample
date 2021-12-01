const { withFaust } = require('@faustjs/next');

const imageConfig = {
  images: {
    domains: ['localhost']
  }
}
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(imageConfig);
