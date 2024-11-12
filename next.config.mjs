/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.designi.com.br",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
