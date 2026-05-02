/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        // Cloudinary CDN — used for seminar recap photos (and any other
        // images we host there). Cloud name is `dohbigfue`; the path
        // restriction means only our account's URLs are allowed.
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dohbigfue/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
