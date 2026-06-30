/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Sign-in page removed: authentication now lives on the app.
      {
        source: "/sign-in",
        destination: "https://app.view4sight.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
