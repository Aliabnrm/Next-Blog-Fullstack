/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'next-fullstack.storage.c2.liara.space'
            }
        ]
    },
    output: 'standalone'
};

export default nextConfig;