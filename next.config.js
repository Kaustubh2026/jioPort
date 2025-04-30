const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Enhanced cache and build configuration
  experimental: {
    // Disable webpack build worker to prevent caching issues
    webpackBuildWorker: false,
    // Optimize chunk loading
    optimizeCss: true,
    // Improve hydration performance
    optimizePackageImports: ['@/components']
  },
  // Disable source maps in production to reduce chunk size
  productionBrowserSourceMaps: false,
  // Configure webpack to better handle large chunks
  webpack: (config) => {
    // Optimize chunk loading and caching
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            reuseExistingChunk: true,
            priority: -10
          }
        }
      },
      runtimeChunk: 'single'
    };
    
    // Add cache configuration with absolute path
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache')
    };

    return config;
  }
};

module.exports = nextConfig;