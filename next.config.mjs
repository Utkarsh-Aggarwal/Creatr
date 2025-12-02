/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add "images.clerk.dev" to the end of this list
    domains: [
      "images.unsplash.com", 
      "img.clerk.com", 
      "ik.imagekit.io", 
      "images.clerk.dev" 
    ],
  },
};

export default nextConfig;