/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.scripturegracefoundation.org",
        pathname: "/image/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;