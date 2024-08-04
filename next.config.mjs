/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['highlight.js'],
    reactStrictMode: false,
    swcMinify: true,
    redirects: () => {
        return [{
        source: '/',
        destination: '/1',
        permanent: true,
        }]
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };

        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'resources.premierleague.com',
            port: '',
            pathname: '/premierleague/photos/**',
          },
        ],
    },
};

export default nextConfig;
