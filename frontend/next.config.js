const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
const nextConfig = {
  images: {
    unoptimized: !isProduction,
  },
};
module.exports = nextConfig;
