import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
};

export default nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'manofmany.com',
      },
      {
        protocol: 'https',
        hostname: 'i.insider.com',
      },

      {
        protocol: "https",
        hostname: "sjc.microlink.io",
      },
     
    ],
  },
};
