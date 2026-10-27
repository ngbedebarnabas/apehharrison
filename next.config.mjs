/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
  // The ventures pages used to live at /legacy; keep old links working.
  async redirects() {
    return [
      { source: '/legacy', destination: '/ventures', permanent: true },
      { source: '/legacy/:slug', destination: '/ventures/:slug', permanent: true },
    ];
  },
};
export default nextConfig;
