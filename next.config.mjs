/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },

  images: {
    domains: ["fakestoreapi.com"], // Add this line to configure the image domain
  },
};

export default nextConfig;
