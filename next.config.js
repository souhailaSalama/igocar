/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.motorparks.co.uk',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    }
}

module.exports = nextConfig
