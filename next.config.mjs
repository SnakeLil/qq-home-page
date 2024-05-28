/** @type {import('next').NextConfig} */

import withVideos from 'next-videos'
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static-res.qq.com',
            port: '',
            pathname: '',
          },
        ],
      },
      ...withVideos()
};

export default nextConfig;
