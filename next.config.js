/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['db.rent-internet.com'],
    unoptimized: true,
  },
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/'},
      '/product-detail': { page: '/product-detail'},
      '/bank-transfer': { page: '/bank-transfer'},
      '/checkout': { page: '/checkout'},
      '/recharge-checkout': { page: '/recharge-checkout'},
      '/privacy-policy': { page: '/privacy-policy'},
      '/terms-conditions': { page: '/terms-conditions'},
      '/success': { page: '/success'},
      '/cancel': { page: '/cancel'},
      '/contact': { page: '/contact'},
    }
  },
}

module.exports = nextConfig
