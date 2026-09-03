/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 图片优化(项目里如果要用 next/image 的话)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;