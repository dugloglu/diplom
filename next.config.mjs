import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    return config;
  },
  exportTrailingSlash: true,
  images: {
    unoptimized: true, // Отключает оптимизацию изображений, если это требуется
  },
  async redirects() {
    return [
      {
        source: '/feedBackForm',
        destination: '/#feedBackForm', // Обратите внимание на правописание в destination
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

