/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // www.dongjinghan.cn → dongjinghan.cn 重定向
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dongjinghan.cn" }],
        destination: "https://dongjinghan.cn/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;