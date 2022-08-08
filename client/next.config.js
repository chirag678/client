/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    API: process.env.API,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: `${process.env.API}/:path*`,
      },
    ];
  },
}
