/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vpnscore.nl' }],
        destination: 'https://vpnscore.nl/:path*',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
