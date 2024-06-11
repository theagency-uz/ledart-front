/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        // unoptimized: true,
        // domains: ["*.theagency.uz", "192.168.0.204"],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**192.168.0.250**',

            },
            {
                protocol: 'http',
                hostname: '**127.0.0.1**',

            }
        ],
    },
};

export default nextConfig;
