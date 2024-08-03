/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/requirement/:path*',
          destination: 'https://e-requirement-backend-v2.vercel.app/api/v2/:path*',
        },
        {
          source: '/api/eshop/:path*',
          destination: 'https://eshop-backend-tau.vercel.app/api/v2/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  